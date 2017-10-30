  'use strict';

  function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }

  function Language(lang) {
    var __construct = function () {
      if (eval('typeof ' + lang) == 'undefined') {
        lang = "fi";
      }
      return;
    }()
    this.getStr = function (str, defaultStr) {
      var retStr = eval('eval(lang).' + str);
      if (typeof retStr != 'undefined') {
        return retStr;
      } else {
        if (typeof defaultStr != 'undefined') {
          return defaultStr;
        } else {
          return eval('fi.' + str);
        }
      }
    }
  }

  function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
  }

  function stability(data) {
    switch (data) {
      /*case 0:
              return "Koko vuorokausi";
              break;*/
    case 1:
      return translator.getStr("lang_stability_1");
      break;
    case 2:
      return translator.getStr("lang_stability_2");
      break;
    }
  }

  function time(data) {
    switch (data) {
    case 'K':
      return "Koko vuorokausi";
      break;
    case 1:
      return "06:00-09:00";
      break;
    case 2:
      return "09:00-12:00";
      break;
    case 3:
      return "12:00-15:00";
      break;
    case 4:
      return "15:00-18:00";
      break;
    case 5:
      return "18:00-21:00";
      break;
    case 6:
      return "21:00-00:00";
      break;
    case 7:
      return "00:00-03:00";
      break;
    case 8:
      return "03:00-06:00";
      break;
    }
  }

  function timeClauses(data) {
    switch (data) {
    case 1:
      return "'06.00-06.59', '07.00-07.59', '08.00-08.59'";
      break;
    case 2:
      return "'09.00-09.59', '10.00-10.59', '11.00-11.59'";
      break;
    case 3:
      return "'12.00-12.59', '13.00-13.59', '14.00-14.59'";
      break;
    case 4:
      return "'15.00-15.59', '16.00-16.59', '17.00-17.59'";
      break;
    case 5:
      return "'18.00-18.59', '19.00-19.59', '20.00-20.59'";
      break;
    case 6:
      return "'21.00-21.59', '22.00-22.59', '23.00-23.59'";
      break;
    case 7:
      return "'00.00-00.59', '01.00-01.59', '02.00-02.59'";
      break;
    case 8:
      return "'03.00-03.59', '04.00-04.59', '05.00-05.59'";
      break;
    }
  }

  function typeCodes(data) {
    var iType;
    for (iType = 0; iType < 10; iType++) {
      switch (data) {
        /*case 'K':
              return "Kaikki";
              break;*/
      case iType:
        return translator.getStr("lang_type_" + iType + "");
        break;
      }
    }
  }

  function accessoryCodes(data) {
    var iPart;
    for (iPart = 0; iPart < 10; iPart++) {
      switch (data) {
        /*case 'K':
            return "Kaikki";
            break;*/
      case iPart:
        return translator.getStr("lang_partakers_" + iPart + "");
        break;
      }
    }
  }

  function populateFormSelects() {
    var optionsType = [];
    var optionsPartakers = [];
    var iType, iPart;
    for (iType = 0; iType < 10; iType++) {
      optionsType.push(translator.getStr("lang_type_" + iType + ""));
    }
    for (iPart = 0; iPart < 7; iPart++) {
      optionsPartakers.push(translator.getStr("lang_partakers_" + iPart + ""));
    }
    var optionsStability = [translator.getStr("lang_stability_1"), translator.getStr("lang_stability_2")];
    $('#vakavuus').empty();
    $('#tyyppi').empty();
    $('#osalliset').empty();
    $.each(optionsStability, function (i, p) {
      $('#vakavuus').append($('<option value="' + i + 1 + '"></option>').val(i + 1).html(p));
    });
    $.each(optionsType, function (i, p) {
      $('#tyyppi').append($('<option value="' + i + '"></option>').val(i).html(p));
    });
    $.each(optionsPartakers, function (i, p) {
      $('#osalliset').append($('<option value="' + i + '"></option>').val(i).html(p));
    });
  }
  $(document).ready(function () {
    if (sessionStorage["PopupShown"] != 'yes') {
      $('#welcome').show();
      $('#welcomeHeader').show();
      $('#welcomeOverlay').show();
    }
    changeVectormapToggle();
    changeBasemapToggle();
    populateFormSelects();
    $("#imageReferences").attr('src', translator.getStr("lang_header_logo"));
    $("#imageReferences2").attr('src', translator.getStr("lang_header_logo"));
    $('meta[name="description"]').replaceWith('<meta name="description" content="' + translator.getStr("lang_welcome_innercontent") + '">');
    $("title").append(translator.getStr("index_header"));
    $("#closeWelcomeDiv").append(translator.getStr("lang_continue"));
    $("#welcomeHeader").append(translator.getStr("lang_welcome_header"));
    $("#welcomeInnerContent").append(translator.getStr("lang_welcome_innercontent"));
    $("#layerContentHeader").find('span').attr('title', translator.getStr("lang_navi_3"));
    $("#popupPanel-closerSideContentGraph").attr('title', translator.getStr("lang_navi_1"));
    $("#popupPanel-closerGraph").attr('title', translator.getStr("lang_navi_2"));
    $("#search_field").attr('placeholder', translator.getStr("lang_search_route1"));
    $("#analysisHeader").append(translator.getStr("index_header"));
    $("#analysisHeaderTextContent").append(translator.getStr("index_info_header"));
    $("#routeButton").append(translator.getStr("route_startbutton"));
    $("#lang_year").append(translator.getStr("lang_year"));
    $("#lang_month").append(translator.getStr("lang_month"));
    $("#lang_time_of_day").append(translator.getStr("lang_time_of_day"));
    $("#lang_stability").append(translator.getStr("lang_stability"));
    $("#lang_type").append(translator.getStr("lang_type"));
    $("#lang_partakers").append(translator.getStr("lang_partakers"));
    $("#reset").append(translator.getStr("lang_reset"));
    $("#submitButton").append(translator.getStr("lang_submit"));
    $("#hamburger_header1").append(translator.getStr("lang_hamburger_header1"));
    $("#hamburger_header2").append(translator.getStr("lang_hamburger_header2"));
    $("#layersHeader").append(translator.getStr("lang_layers_header"));
    $("#basemapsHeader").append(translator.getStr("lang_basemaps_header"));
    $("#informa1").append(translator.getStr("lang_menu_header_1"));
    $("#informa2").append(translator.getStr("lang_menu_header_2"));
    $("#informa3").append(translator.getStr("lang_menu_header_3"));
    $("#informa4").append(translator.getStr("lang_menu_header_4"));
    $("#information1").append(translator.getStr("lang_menu_content_1"));
    $("#information2").append(translator.getStr("lang_menu_content_2"));
    $("#information3").append(translator.getStr("lang_menu_content_3"));
    $("#information4").append(translator.getStr("lang_menu_content_4"));
    //$("#status-check").prop('data-on','Pisteet');
    //$("#status-check").prop('data-off','Heatmap');
    $('#closeWelcomeDiv').click(function (e) {
      //$('#sideContentAnalysis').hide('slide', {direction: 'up'}, 300);
      $('#welcome').hide();
      $('#welcomeHeader').hide();
      $('#welcomeOverlay').hide();
      sessionStorage["PopupShown"] = 'yes'; //Save in the sessionStorage if the modal has been shown
    });
    $('#layerContentHeader').click(function () {
      $('#layerContent').toggle();
      if ($("#layerContent").is(":hidden")) {
        if (searchToggle == 0) {
          if ($(window).innerWidth() <= 1366) {
            $('#layerContent').css('margin-top', '47px');
          } else {
            $('#layerContent').css('margin-top', '75px');
          }
        }
        if (searchToggle == 1) {
          $('#previousSearch').show();
        }
        if (chartToggle == 1) {
          $('#myChartDiv').show();
          $('#sideContentContentAnalysis').hide();
          $('#previousSearch').hide();
        }
        if (myChartBoolean == 1) {
          $('#myChartDiv').show();
          $('#sideContentContentAnalysis').hide();
          $('#previousSearch').hide();
        }
        if (sideContentAnalysisToggle == 1) {
          $('#sideContentContentAnalysis').show();
        }
        if (sideContentAnalysisToggle == 0) {
          $('#sideContentContentAnalysis').hide();
        }
        layerContentToggle = 0;
      } else {
        //console.log('päällä');
        if (searchToggle == 1) {
          if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
            $('#layerContent').css('margin-top', '90px');
          } else if ($(window).innerWidth() <= 640) {
            $('#layerContent').css('margin-top', '90px');
          } else {
            $('#layerContent').css('margin-top', '121px');
          }
          $('#myChartDiv').hide();
          sideContentAnalysisToggle = 0;
          chartToggle = 0;
          $('#previousSearch').hide();
        }
        if (chartToggle == 1) {
          $('#myChartDiv').hide();
          $('#previousSearch').hide();
        }
        layerContentToggle = 1;
        $('#sideContentContentAnalysis').hide();
      }
      //console.log("sidekontent "+ $('#sideContentContentAnalysis').is(":visible"));
      //console.log("chart "+ $('#myChartDiv').is(":visible"));
      //console.log("search " + $('#searchContent').is(":visible"));
      //console.log("layer " + $('#layerContent').is(":visible"));
      $('#about').hide();
      if ($(window).innerWidth() < 640) {}
    });
    $('#popupPanel-closerGraph, #forward').click(function () {
      //$('#sideContentAnalysis').hide('slide', {direction: 'up'}, 300);
      var features = vectorSource.getFeatures();
      if (features.length > 0) {
        $('#myChart').show();
        $('#myChartDiv').show();
        $('#sideContentContentAnalysis').hide();
        $('#layerContent').hide();
        if ($(window).innerWidth() <= 1366) {
          $('#layerContent').css('margin-top', '47px');
        } else {
          $('#layerContent').css('margin-top', '75px');
        }
        $('#searchContent').hide();
        myChartBoolean = 1;
        chartToggle = 1;
        searchToggle = 0;
        layerContentToggle = 0;
        sideContentAnalysisToggle = 0;
        $('#search_field').val("");
        $('#search_field_target').val("");
        $('#search_route_target').hide();
        $('#layerContent').css('padding-top', '80px');
        $('#previousSearch').hide();
        if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
          $('#sideContentAnalysisHeader').css('height', '116px');
        } else if ($(window).innerWidth() <= 640) {
          $('#sideContentAnalysisHeader').css('height', '111px');
        } else {
          $('#sideContentAnalysisHeader').css('height', '141px');
        }
        routeActive = false;
        vectorSourceRoute.clear();
        points = [];
      }
      $("#myChartDivFooter2").empty();
    });
    $('#previousSearch').click(function () {
      var features = vectorSource.getFeatures();
      if (features.length > 0) {
        $('#myChart').show();
        $('#myChartDiv').show();
        $('#sideContentContentAnalysis').hide();
        $('#layerContent').hide();
        if ($(window).innerWidth() <= 1366) {
          $('#layerContent').css('margin-top', '47px');
        } else {
          $('#layerContent').css('margin-top', '75px');
        }
        $('#searchContent').hide();
        myChartBoolean = 1;
        chartToggle = 1;
        searchToggle = 0;
        layerContentToggle = 0;
        sideContentAnalysisToggle = 0;
        $('#search_field').val("");
        $('#search_field_target').val("");
        $('#search_route_target').hide();
        $('#layerContent').css('padding-top', '80px');
        $('#previousSearch').hide();
        if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
          $('#sideContentAnalysisHeader').css('height', '116px');
        } else if ($(window).innerWidth() <= 640) {
          $('#sideContentAnalysisHeader').css('height', '111px');
        } else {
          $('#sideContentAnalysisHeader').css('height', '141px');
        }
        //routeActive = false;
        //vectorSourceRoute.clear();
        //points = []; 
      } else {
        $('#msg').hide();
        $('#myChart').hide();
        $('#myChartDiv').hide();
        $('#layerContent').hide();
        $('#searchContent').hide();
        $('#search_field').val("");
        $('#search_field_target').val("");
        $('#search_route_target').hide();
        if ($(window).innerWidth() <= 1366) {
          $('#layerContent').css('margin-top', '47px');
        } else {
          $('#layerContent').css('margin-top', '75px');
        }
        if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
          $('#sideContentAnalysisHeader').css('height', '116px');
        } else if ($(window).innerWidth() <= 640) {
          $('#sideContentAnalysisHeader').css('height', '111px');
        } else {
          $('#sideContentAnalysisHeader').css('height', '141px');
        }
        routeActive = false;
        console.log("route " + routeActive);
        vectorSourceRoute.clear();
        points = [];
        chartToggle = 0;
        searchToggle = 0;
        layerContentToggle = 0;
        sideContentAnalysisToggle = 1;
        myChartBoolean = 0;
        $('#sideContentContentAnalysis').show();
        $('#previousSearch').hide();
        $('#sideContentContentAnalysis').css('padding-top', '26px');
      }
    });
    $('#headerLangSelectionEN').click(function () {
      window.location.search = '?lang=en';
    });
    $('#headerLangSelectionFI').click(function () {
      window.location.search = '?lang=fi';
    });
    $('#headerLangSelectionSE').click(function () {
      window.location.search = '?lang=se';
    });
    $('#popupPanel-closerSideContentAnalysis').click(function () {
      //$('#sideContentAnalysis').hide('slide', {direction: 'up'}, 300);
      $('#sideContentAnalysis').hide();
    });
    $('#popupPanel-closerSideContentGraph, #previous').click(function () {
      //$('#sideContentAnalysis').hide('slide', {direction: 'up'}, 300);
      $('#msg').hide();
      $('#myChart').hide();
      $('#myChartDiv').hide();
      $('#layerContent').hide();
      $('#searchContent').hide();
      $('#search_field').val("");
      $('#search_field_target').val("");
      $('#search_route_target').hide();
      if ($(window).innerWidth() <= 1366) {
        $('#layerContent').css('margin-top', '47px');
      } else {
        $('#layerContent').css('margin-top', '85px');
      }
      if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
        $('#sideContentAnalysisHeader').css('height', '116px');
      } else if ($(window).innerWidth() <= 640) {
        $('#sideContentAnalysisHeader').css('height', '111px');
      } else {
        $('#sideContentAnalysisHeader').css('height', '141px');
      }
      routeActive = false;
      console.log("route " + routeActive);
      vectorSourceRoute.clear();
      points = [];
      chartToggle = 0;
      searchToggle = 0;
      layerContentToggle = 0;
      sideContentAnalysisToggle = 1;
      myChartBoolean = 0;
      /*$('#popupPanel-closerSideContentGraph').hide();*/
      var features = vectorSource.getFeatures();
      $('#sideContentContentAnalysis').show();
      if (features.length > 0) {
        $('#forward').show();
        $('#previousSearch').hide();
        $('#sideContentContentAnalysis').css('padding-top', '45px');
      } else {
        $('#forward').hide();
        $('#previousSearch').hide();
        $('#sideContentContentAnalysis').css('padding-top', '26px');
      }
      $("#myChartDivFooter2").empty();
      /*$("#source_1").show();*/
      /*$("#headerLang").show();*/
      /*$("#slider").hide();
          $("#slider").show();
          $("#slider").rangeSlider({
          bounds:{min: 1, max: 12},
          defaultValues:{min: 1, max: 12},
          step: 1
          });*/
    });
    //HIDE SIDECONTENT
    $('#arrow-closerSideContentGraphHide').click(function () {
      $('#sideContentAnalysis').hide('slide', {
        direction: 'left'
      }, 400);
      if ($('#myChartDiv').is(":visible")) {
        myChartBoolean = 1;
        chartToggle = 1;
      }
      if ($('#layerContentHeader').is(":visible")) {
        //$('#layerContentHeader').animate({"left": '-=18em'});
        //$('#layerContentHeader').hide();
      }
      if ($('#mapButtons').is(":visible")) {
        $('#mapButtons').animate({
          "left": '-=38em'
        });
      }
      $('#arrow-closerSideContentGraphShow').css("transform", "rotate(180deg)");
      $('#arrow-closerSideContentGraphShow').delay(400).show(0);
      $('#arrow-closerSideContentGraphHide').hide();
    });
    //SHOW SIDE CONTENT
    $('#arrow-closerSideContentGraphShow').click(function () {
      $('#myChart').show('slide', {
        direction: 'left'
      }, 400);
      $('#sideContentAnalysis').show('slide', {
        direction: 'left'
      }, 400);
      $('#layerContentHeader').show('slide', {
        direction: 'left'
      }, 400);
      if ($('#mapButtons').is(":visible")) {
        $('#mapButtons').animate({
          "left": '+=38em'
        });
      }
      if ($('#layerContentHeader').is(":visible")) {
        //$('#layerContentHeader').animate({"left": '+=18em'});
        //$('#layerContentHeader').hide();
      }
      $('#arrow-closerSideContentGraphShow').hide();
      $('#arrow-closerSideContentGraphHide').delay(400).show(0);
    }); //END SHOW SIDECONTENT
    $('#sideContentAnalysis').show();
    $('#sideContentAnalysisHeader').show();
    if ($(window).innerWidth() <= 1366) {
      $("#slider3").roundSlider({
        sliderType: "range",
        value: "1,12",
        min: 1,
        max: 12,
        width: 15,
        radius: 60
      });
    } else {
      $("#slider3").roundSlider({
        sliderType: "range",
        value: "1,12",
        min: 1,
        max: 12
      });
    }
    var monthTableFI = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
    var monthTableEN = ["January", "Fabruary", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthTableSE = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    $("#slider3").change(function () {
      var obj = $("#slider3").data("roundSlider");
      if (selectedLang == 'fi') {
        $("#rsStart").empty();
        $("#rsStart").append(monthTableFI[obj.getValue(1) - 1]);
        $("#rsEnd").empty();
        $("#rsEnd").append(monthTableFI[obj.getValue(2) - 1]);
      } else if (selectedLang == 'en') {
        $("#rsStart").empty();
        $("#rsStart").append(monthTableEN[obj.getValue(1) - 1]);
        $("#rsEnd").empty();
        $("#rsEnd").append(monthTableEN[obj.getValue(2) - 1]);
      } else if (selectedLang == 'se') {
        $("#rsStart").empty();
        $("#rsStart").append(monthTableSE[obj.getValue(1) - 1]);
        $("#rsEnd").empty();
        $("#rsEnd").append(monthTableSE[obj.getValue(2) - 1]);
      }
    });
    if (selectedLang == 'fi') {
      $("#rsEnd").empty();
      $("#rsStart").append(monthTableFI[0]);
      $("#rsEnd").append(monthTableFI[11]);
    } else if (selectedLang == 'en') {
      $("#rsEnd").empty();
      $("#rsStart").append(monthTableEN[0]);
      $("#rsEnd").append(monthTableEN[11]);
    } else if (selectedLang == 'se') {
      $("#rsEnd").empty();
      $("#rsStart").append(monthTableSE[0]);
      $("#rsEnd").append(monthTableSE[11]);
    }
    $("#search").on('submit', function (e) {
      $('#sideContentContentAnalysis').hide();
      /*$("#headerLang").hide();*/
      $("#popupPanel-closerSideContentGraph").show();
      $('#sideContentContentAnalysis').hide();
      $('#myChartDiv').hide();
      $('#searchContent').empty();
      $('#searchContent').show();
      $("#search_route_target").empty();
      console.log($('#search_field').val());
      layerContentToggle = 0;
      searchToggle = 1;
      myChartBoolean = 0;
      $("#previousSearch").show();
      $('#layerContent').hide();
      $('#searchContent').append("<div id='searchContentContainer' class='container'>");
      //$.getJSON('http://nominatim.openstreetmap.org/search/' + $('#search_field').val() + '/?format=json&point=1&addressdetails=1', function(json) {//parseJSON
      $.getJSON('https://api.mapbox.com/geocoding/v5/mapbox.places/' + $('#search_field').val() + '.json?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA&country=fi&limit=10', function (json) { //parseJSON
        $.each(json.features, function (key, data) {
          searchContent(data.place_name, data.center, 1);
        });
      });
      $('#searchContent').append("</div>");
      $("#search_route_target").show();
      $(".input-group").clone().appendTo("#search_route_target").find("input[type='text']").val("");
      $("#search_route_target").find('form').attr('id', 'search_target');
      $("#search_route_target").find('input').attr('placeholder', translator.getStr("lang_search_route2"));
      $("#search_route_target").find('input').attr('id', 'search_field_target');
      if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
        $('#sideContentAnalysisHeader').css('height', '156px');
      } else if ($(window).innerWidth() <= 640) {
        $('#sideContentAnalysisHeader').css('height', '150px');
      } else {
        $('#sideContentAnalysisHeader').css('height', '193px');
      }
      e.preventDefault();
    });
    $("#search_route_target").on('submit', '#search_target', function (e) {
      $('#sideContentContentAnalysis').hide();
      $('#searchContent').empty();
      console.log('joo' + $(this).val());
      searchToggle = 1;
      myChartBoolean = 0;
      $('#layerContent').hide();
      $('#searchContent').append("<div id='searchContentContainer' class='container'>");
      //$.getJSON('http://nominatim.openstreetmap.org/search/' + $('#search_field').val() + '/?format=json&point=1&addressdetails=1', function(json) {//parseJSON
      $.getJSON('https://api.mapbox.com/geocoding/v5/mapbox.places/' + $('#search_field_target').val() + '.json?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA&country=fi&limit=10', function (json) { //parseJSON
        $.each(json.features, function (key, data) {
          searchContent(data.place_name, data.center, 2);
        });
      });
      $('#searchContent').append("</div>");
      e.preventDefault();
    });
    //call routeUtils
    $("#searchContent").on('click', '#searchRow', function () {
      var array = [];
      var coord_street = $(this).attr('coordinates');
      array.push(coord_street);
      var numArray = JSON.parse("[" + array.join() + "]");
      //utils.createFeature(numArray);
      if ($(this).attr('source') == 1) {
        $('#search_field').val($(this).text());
      } else if ($(this).attr('source') == 2) {
        $('#search_field_target').val($(this).text());
      }
      if ($(this).attr('source') == 1) {
        vectorSourceRoute.clear();
        points = [];
      }
      initRoute(numArray, true, true);
      $('#searchContent').empty();
      $('#search_field_target').focus();
    });
    $("#target").on('submit', function (e) {
      chartToggle = 1;
      sideContentAnalysisToggle = 0;
      if ($('#year').val() == null) {
        $("#yearInfo").empty();
        $("#yearInfo").show();
        $("#yearInfo").append("<span style='font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span><br />" + translator.getStr("lang_select_years") + "");
        return false;
      }
      var obj = $("#slider3").data("roundSlider");
      $('#previous').show();
      $("#yearInfo").hide();
      changeParameter($('#year').val(), obj.getValue(1), obj.getValue(2), $("#vakavuus").val(), $("#tyyppi").val(), $("#aika").val(), $("#osalliset").val());
      //$("#mapButtons").show();         
      e.preventDefault();
    });
    $('#success').click(function () {
      map.getView().setResolution(499);
    });
    $('#msg').click(function () {
      $("#msg").hide();
    });
    $('#search_field').click(function () {
      $('#msg').css({
        opacity: 1
      });
      sumArray = [];
      $('#searchContent').empty();
      if ($(window).innerWidth() <= 1024 && $(window).innerWidth() >= 768) {
        if ($('#success').is(":visible")) {
          $('#msg').css('margin-top', '68px');
        } else {
          $('#msg').css('margin-top', '1px');
        }
      } else if ($(window).innerWidth() <= 640) {
        if ($('#success').is(":visible")) {
          $('#msg').css('bottom', '10px');
        } else {
          $('#msg').css('bottom', '-48px');
        }
      } else {
        if ($('#success').is(":visible")) {
          $('#msg').css('margin-top', '67px');
        } else {
          $('#msg').css('margin-top', '0px');
        }
      }
      $("#msg").show();
      $("#msg").html("");
      $("#msg").append(translator.getStr("route_startpoint"));
      vectorSourceRoute.clear();
      points = [];
      $("#routeButton").html("");
      $("#routeButton").append(translator.getStr("route_stopbutton"));
      routeActive = true;
    });
    $('#routeButton').click(function () {
      if (routeActive == true) {
        $("#routeButton").html("");
        $("#routeButton").append(translator.getStr("route_startbutton"));
        vectorSourceRoute.clear();
        points = [];
        routeActive = false;
        $("#msg").hide();
      } else {
        $("#msg").show();
        $("#msg").html("");
        $("#msg").append(translator.getStr("route_startpoint"));
        vectorSourceRoute.clear();
        points = [];
        $("#routeButton").html("");
        $("#routeButton").append(translator.getStr("route_stopbutton"));
        routeActive = true;
      }
    });
    $('#year').multiselect({
      includeSelectAllOption: true,
      buttonWidth: 424,
      numberDisplayed: 6,
      allSelectedText: false,
      nSelectedText: translator.getStr("nSelectedText"),
      selectAllText: translator.getStr("selectAllText"),
      nonSelectedText: translator.getStr("nonSelectedTextNotSelected")
    });
    $('#aika').multiselect({
      includeSelectAllOption: true,
      buttonWidth: 424,
      numberDisplayed: 3,
      allSelectedText: false,
      nSelectedText: translator.getStr("nSelectedText"),
      selectAllText: translator.getStr("selectAllText"),
      nonSelectedText: translator.getStr("nonSelectedTextAll")
    });
    $('#vakavuus').multiselect({
      includeSelectAllOption: true,
      buttonWidth: 424,
      numberDisplayed: 2,
      allSelectedText: false,
      nSelectedText: translator.getStr("nSelectedText"),
      selectAllText: translator.getStr("selectAllText"),
      nonSelectedText: translator.getStr("nonSelectedTextAll")
    });
    $('#tyyppi').multiselect({
      includeSelectAllOption: true,
      buttonWidth: 424,
      numberDisplayed: 2,
      allSelectedText: false,
      nSelectedText: translator.getStr("nSelectedText"),
      selectAllText: translator.getStr("selectAllText"),
      nonSelectedText: translator.getStr("nonSelectedTextAll")
    });
    $('#osalliset').multiselect({
      includeSelectAllOption: true,
      buttonWidth: 424,
      numberDisplayed: 2,
      allSelectedText: false,
      nSelectedText: translator.getStr("nSelectedText"),
      selectAllText: translator.getStr("selectAllText"),
      nonSelectedText: translator.getStr("nonSelectedTextAll")
    });
    $('#reset').click(function () {
      console.log(selectedLang);
      if (selectedLang == 'fi') {
        $('.multiselect-selected-text').attr('title', 'Ei valittuja').html('Ei valittuja');
      } else if (selectedLang == 'en') {
        $('.multiselect-selected-text').attr('title', 'Not selected').html('Not selected');
      }
      $('.multiselect-container li').removeClass('active');
      $("#yearInfo").hide();
      var obj = $("#slider3").data("roundSlider");
      obj.setValue('1,12');
      $("#rsStart").empty();
      $("#rsEnd").empty();
      if (selectedLang == 'fi') {
        $("#rsStart").append(monthTableFI[0]);
        $("#rsEnd").append(monthTableFI[11]);
      } else if (selectedLang == 'en') {
        $("#rsStart").append(monthTableEN[0]);
        $("#rsEnd").append(monthTableEN[11]);
      }
    });
    if (location.search == '?lang=fi' || location.search == '?lang=en' || location.search == '?lang=se') {} else {
      if (navigator.language == 'fi' || navigator.language == 'fi-FI' || navigator.language == 'fi-fi') {
        location.replace("?lang=fi");
      } else if (navigator.language == 'se') {
        location.replace("?lang=se");
      } else if (navigator.language == 'en') {
        location.replace("?lang=en");
      }
    }
  }); //end document ready
  var myChartBoolean = 0;
  var chartToggle = 0;
  var searchToggle = 0;
  var layerContentToggle = 0;
  var sideContentAnalysisToggle = 1;
  var query = getQueryParams(document.location.search);
  var selectedLang = query.lang;
  var translator = new Language(selectedLang);
  var format = new ol.format.GeoJSON();
  var cqlFilter = [];
  var years = [];
  var urlTemplate;
  var cleared = false;
  var url = '';
  var attribution_taustakartta = new ol.Attribution({
    html: 'Tieliikenneonnettomuudet © Tilastokeskus,'
  });
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 40],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'http://cdn.leafletjs.com/leaflet/v1.0.0-beta.2/images/marker-icon.png'
    }))
  });
  /*
  var styleFunction = function(feature) {
      //console.log(feature.get('vvonn'));

      return styles[feature.getGeometry().getType()];
  };
*/
  var circle_one = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(67, 107, 168, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });
  var circle1 = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(8,69,148, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });
  var circle2 = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(33,113,181, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });
  var circle3 = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(66,146,198, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });
  var circle4 = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(107,174,214, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });
  var circle5 = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 20,
      fill: new ol.style.Fill({
        color: 'rgba(158,202,225, 0.6)'
      })
    }),
    text: new ol.style.Text({
      font: '12px "Helvetica Neue", Arial, Helvetica, sans-serif',
      text: '',
      fill: new ol.style.Fill({
        color: '#000'
      })
    })
  });

  function createClusterIcon(feature) {
    // If unclustered, display as an icon
    if (!feature.get('cluster')) {
      var color_ramp = get_colors();
      var color = '';
      var vvonnDump = $('#year').val();
      var i;
      for (i = 0; i < vvonnDump.length; i++) {
        if (feature.get('vvonn') == vvonnDump[i]) {
          color = color_ramp[i];
        }
      }
      var image = new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({
          color: color
        }),
        // stroke: new ol.style.Stroke({color: 'green', width: 1})
      });
      var styles = {
        'Point': new ol.style.Style({
          image: image
        }),
        'MultiPoint': new ol.style.Style({
          image: image
        }),
        'Circle': new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'green',
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'rgba(0,255,0,0.2)'
          })
        })
      };
      return styles[feature.getGeometry().getType()];
    }
    // If clustered, display the number
    // of points within the cluster
    if (feature.get('point_count') > 1000) {
      circle1.getImage().setRadius(50);
      circle1.getText().setText('' + feature.get('point_count'));
      return circle1;
    }
    if (feature.get('point_count') >= 500 && feature.get('point_count') <= 999) {
      circle2.getImage().setRadius(40);
      circle2.getText().setText('' + feature.get('point_count'));
      return circle2;
    }
    if (feature.get('point_count') >= 100 && feature.get('point_count') <= 499) {
      circle3.getImage().setRadius(30);
      circle3.getText().setText('' + feature.get('point_count'));
      return circle3;
    }
    if (feature.get('point_count') >= 50 && feature.get('point_count') <= 99) {
      circle4.getImage().setRadius(20);
      circle4.getText().setText('' + feature.get('point_count'));
      return circle4;
    }
    if (feature.get('point_count') >= 2 && feature.get('point_count') <= 49) {
      circle5.getImage().setRadius(15);
      circle5.getText().setText('' + feature.get('point_count'));
      return circle5;
    }
  }
  var points = [],
    msg_el = document.getElementById('msg'),
    url_osrm_nearest = 'http://router.project-osrm.org/nearest/v1/driving/',
    url_osrm_route = 'http://router.project-osrm.org/route/v1/driving/',
    icon_url = 'https://www.webigu.fi/tlonnettomuudet/img/marker-green.png',
    url_mapbox_nearest = 'https://api.mapbox.com/geocoding/v5/mapbox/places/',
    url_mapbox_route = 'https://api.mapbox.com/directions/v5/mapbox/driving/',
    vectorSourceRoute = new ol.source.Vector(),
    vectorLayerRoute = new ol.layer.Vector({
      source: vectorSourceRoute,
      name: 'vectorLayerRoute',
      title: 'Route',
    }),
    styles = {
      route: new ol.style.Style({
        stroke: new ol.style.Stroke({
          width: 8,
          color: [0, 115, 176, 0.8]
        })
      }),
      icon: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.6],
          src: icon_url
        })
      })
    };
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      attributions: [attribution_taustakartta]
    }),
    title: translator.getStr("lang_cluster"),
    name: 'vectorLayer',
    style: createClusterIcon
  });
  var vectorHeatmap = new ol.layer.Heatmap({
    //source: vectorSource,
    source: new ol.source.Vector({
      attributions: [attribution_taustakartta]
    }),
    //blur: parseInt(blur.value, 10),
    //radius: parseInt(radius.value, 10)
    //blur: parseInt(30),
    //radius: parseInt(5),
    title: translator.getStr("lang_heatmap"),
    name: 'vectorHeatmap',
    maxResolution: 500,
    visible: false,
    gradient: get_gradient() //here
  });

  function changeParameter(year, start, end, vakav, onntyyppi, aika, osalliset) {
    var vakavParam = '';
    var onntyyppiParam = '';
    var osallisetParam = '';
    console.log(aika);
    if (year != 'K') {
      var yearParam = 'and vvonn=' + year;
    } else {
      var yearParam = '';
    }
    if (vakav != null) {
      vakavParam = 'and vakav in (' + vakav + ') ';
    } else {
      vakavParam = '';
    }
    if (onntyyppi != null) {
      onntyyppiParam = 'and onntyyppi in (' + onntyyppi + ') ';
    } else {
      onntyyppiParam = '';
    }
    if (osalliset != null) {
      if ($.inArray('0', osalliset) >= 0) {
        osallisetParam += 'and lkmhapa > 0 ';
      }
      if ($.inArray('1', osalliset) >= 0) {
        osallisetParam += 'and lkmlaka > 0 ';
      }
      if ($.inArray('2', osalliset) >= 0) {
        osallisetParam += 'and lkmjk > 0 ';
      }
      if ($.inArray('3', osalliset) >= 0) {
        osallisetParam += 'and lkmpp > 0 ';
      }
      if ($.inArray('4', osalliset) >= 0) {
        osallisetParam += 'and lkmmo > 0 ';
      }
      if ($.inArray('5', osalliset) >= 0) {
        osallisetParam += 'and lkmmp > 0 ';
      }
      if ($.inArray('6', osalliset) >= 0) {
        osallisetParam += 'and lkmmuukulk > 0 ';
      }
    } else {
      osallisetParam = '';
    }
    cqlFilter = [];
    years = [];
    var years2 = '';
    var i;
    var times = '';
    var timeContainer = '';
    if (aika != null) {
      for (i = 0; i < aika.length; i++) {
        var num = aika[i];
        timeContainer += timeClauses(parseInt(num)) + ",";
      }
      times = "and kello in (" + timeContainer.slice(0, -1) + ")";
    } else {
      times = '';
    }
    for (i = 0; i < year.length; i++) {
      //cqlFilter[i] = 'service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_' + year[i] + '&outputformat=application/json&srsName=EPSG:3857&cql_filter=kkonn >=' + start + ' and kkonn <=' + end + ' ' + vakavParam + ' ' + onntyyppiParam + ' ' + osallisetParam + ' ' + times;
      //cqlFilter[i] = 'service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_'+year[i]+'&outputformat=application/json&srsName=EPSG:3857&cql_filter=intersects(geom,polygon((392043.9342 6667559.8638,391134.2971 6668159.618,391124.2899 6670408.7133,391124.2847 6671458.2912,390674.4641 6671758.1683,387825.6228 6669189.1874,386466.1719 6668729.3655,384367.0169 6668569.4193,382247.8595 6670508.6288,381638.1018 6671108.3845,381118.3103 6671208.3417,380898.3985 6671258.3205,379820.9347 6671252.395,379983.85 6681677.614,390587.0831 6685274.0513,394363.3996 6682365.6303,393864.1892 6679994.3806,396776.2518 6679289.1432,398143.1172 6680542.1403,397248.7287 6682902.962,399936.3624 6684600.2442,404472.4116 6685860.1036,403253.4713 6683155.565,402737.6914 6680700.3088,402069.8368 6680534.6947,400326.7544 6678305.8591,399810.7726 6675086.8749,398941.126 6674357.1641,397431.7332 6674347.1606,395472.5184 6674936.9136,394872.7626 6674337.1519,395492.5312 6670738.6025,394892.7793 6669379.1463,393243.451 6667719.8055,392043.9342 6667559.8638))) and kkonn >='+start+' and kkonn <='+end+' '+vakavParam+' '+onntyyppiParam+' '+aikaParam;
      //cqlFilter[i] = 'service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_'+year[i]+'&outputformat=application/json&bbox=2738152,8422664,2824682,8469728,EPSG:3857&srsName=EPSG:3857';
      years2 += 'tieliikenne:tieliikenne_' + year[i] + ',';
      years.push(year[i]);
    }
    var yearsByLayerName = years2.slice(0, -1);
    var url = 'https://www.webigu.fi/geoserver/tieliikenne/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=' + yearsByLayerName + '&outputformat=text/javascript&format_options=callback:xhr&srsName=EPSG:4326&cql_filter=kkonn >=' + start + ' and kkonn <=' + end + ' ' + vakavParam + ' ' + onntyyppiParam + ' ' + osallisetParam + ' ' + times;
    //var url = 'http://www.ubigu.fi/geoserver/ubigu/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_2011,ubigu:tieliikenne_2012,ubigu:tieliikenne_2013,ubigu:tieliikenne_2014,ubigu:tieliikenne_2015&outputFormat=application%2Fjson&srsName=EPSG:4326';
    $(".loading").show();
    //var url = 'http://www.ubigu.fi/geoserver/ubigu/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_2011,ubigu:tieliikenne_2012,ubigu:tieliikenne_2013,ubigu:tieliikenne_2014,ubigu:tieliikenne_2015&outputFormat=application%2Fjson&srsName=EPSG:4326';
    loadWorkerParams(url, detectIE(), years);
  }
  var extent3067 = [-548576, 6291456, 1548576, 8388608];
   //var resolutions = [1600,800,400,200,100,50,25,10,5,2.5,1,0.5,0.25,0.125,0.0625];
  var projection = new ol.proj.Projection({
    code: 'EPSG:3067',
    extent: extent3067,
    units: 'm'
  });
  ol.proj.addProjection(projection);
  var projectionExtent = projection.getExtent();
  var size = ol.extent.getWidth(projectionExtent) / 256;
  var resolutions = new Array(16);
  var matrixIds = new Array(16);
  var matrixIdsMML = new Array(16);
  for (var z = 0; z < 16; ++z) {
    // generate resolutions and matrixIds arrays for this WMTS
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = 'EPSG:3067:' + z;
    matrixIdsMML[z] = z;
    console.log(matrixIdsMML[z]);
  }
  var osm_light = new ol.layer.Tile({
    source: new ol.source.OSM({
      attributions: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>', ],
      url: '//cartodb-basemaps-b.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
    }),
    title: translator.getStr("lang_light_bgmap"),
    visible: true,
    name: 'osm_light',
    type: 'base'
  });
  var osm_dark = new ol.layer.Tile({
    source: new ol.source.XYZ({
      /*url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFya29rYXVwcGkiLCJhIjoiY2ltaGpoZTY0MDAwOXZnbTI3OHlqNzJnNSJ9._Wumvn3BiwOA5fRjXJN-xw',*/
      url: 'https://api.mapbox.com/styles/v1/joukojar/ciwpd449y00a52pnvvbuytfn7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA',
      attributions: ['© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' + '© <a href="https://www.openstreetmap.org/copyright">' + 'OpenStreetMap contributors</a>', ]
    }),
    title: translator.getStr("lang_dark_bgmap"),
    visible: false,
    name: 'osm_dark',
    type: 'base',
  });
  var attribution_taustakartta = new ol.Attribution({
    html: 'Taustakartta (c) MML, 2017'
  });
  var taustakartta_ETRS_TM35FIN_wmts_layer = new ol.layer.Tile({
    title: 'Taustakartta (MML)',
    name: 'Taustakartta (MML)',
    opacity: 1.0,
    visible: true,
    type: 'base',
    //extent: projectionExtent,
    source: new ol.source.WMTS({
      attributions: [attribution_taustakartta],
      url: 'http://avoindata.maanmittauslaitos.fi/mapcache/wmts/',
      layer: 'taustakartta',
      matrixSet: 'ETRS-TM35FIN',
      format: 'image/png',
      transitionEffect: 'resize',
      gutter: 0,
      buffer: 0,
      projection: 'EPSG:3067',
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        resolutions: resolutions,
        matrixIds: matrixIdsMML
      }),
      style: 'default'
      //wrapX: true
    })
  });
  /**
   * Elements that make up the popup.
   */
  var container = document.getElementById('popup');
  var content = document.getElementById('popup-content');
  var closer = document.getElementById('popup-closer');
  /**
   * Create an overlay to anchor the popup to the map.
   */
  var overlay = new ol.Overlay( /** @type {olx.OverlayOptions} */ ({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  }));
  var scaleLineControl = new ol.control.ScaleLine();
  /**
   * Add a click handler to hide the popup.
   * @return {boolean} Don't follow the href.
   */
  closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };
  var centerX;
  var centerY;
  if ($(window).innerWidth() <= 1366) {
    centerX = 2503635;
    centerY = 9081277;
  } else {
    centerX = 2503635;
    centerY = 9551277;
  }
  var layers = [osm_light, osm_dark, vectorLayer, vectorHeatmap, vectorLayerRoute];
  var map = new ol.Map({
    //renderer: 'webgl',
    controls: ol.control.defaults().extend([
      new ol.control.ScaleLine({
        target: document.getElementById('scale-line')
      })
    ]),
    layers: layers,
    target: 'map',
    overlays: [overlay],
    view: new ol.View({
      center: [centerX, centerY],
      zoom: 6,
      minZoom: 6,
      maxZoom: 18
    })
    /*view: new ol.View({
          center: [350888,6928464],
          zoom: 4,
          minZoom: 3,
          maxZoom: 17,
          projection: 'EPSG:3067'
        })*/
  });
  var displayFeatureInfo = function (pixel) {
    var featureCollection = '';
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      //console.log(feature);        
      console.log("chart " + myChartBoolean);
      if (feature.get('vvonn') > 0) {
        featureCollection = '<div id="popup_header">' + translator.getStr("lang_gfi_header") + '</div><div id="popup_inner_content"><table><!--<tr><td>Id: </td><td>' + feature.get('id') + '</td></tr>-->' + '<tr><td>' + translator.getStr("lang_gfi_year") + ' </td><td>' + feature.get('vvonn') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_month") + ' </td><td>' + feature.get('kkonn') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_td") + ' </td><td>' + feature.get('kello') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_stability") + ' </td><td>' + stability(parseInt(feature.get('vakav'))) + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_toa") + ' </td><td>' + typeCodes(parseInt(feature.get('onntyyppi'))) + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party1") + ' </td><td>' + feature.get('lkmhapa') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party2") + ' </td><td>' + feature.get('lkmlaka') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party3") + ' </td><td>' + feature.get('lkmjk') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party4") + ' </td><td>' + feature.get('lkmpp') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party5") + ' </td><td>' + feature.get('lkmmo') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party6") + ' </td><td>' + feature.get('lkmmp') + '</td></tr>' + '<tr><td>' + translator.getStr("lang_gfi_party7") + ' </td><td>' + feature.get('lkmmuukulk') + '</td></tr></table></div>';
      }
    });
    return featureCollection;
  };
  map.on('singleclick', function (evt) {
    var coordinate = evt.coordinate;
    var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
    console.log(displayFeatureInfo(evt.pixel));
    // if gfi empty then not showing popup
    if (displayFeatureInfo(evt.pixel).length > 0) {
      content.innerHTML = displayFeatureInfo(evt.pixel);
      overlay.setPosition(coordinate);
    }
  });
  var routeActive = 'false';
   //json?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA&overview=full&geometries=geojson
  map.on('click', function (evt) {
    console.log("route = " + routeActive);
    layerContentToggle = 0;
    //if(chartToggle==0){     
    //myChartBoolean = 0;
    //}   
    /*$('#layerContent').hide();*/
    initRoute(evt, false, routeActive);
  });
  /*Route part start*/
  function initRoute(evt, coordOK, routeActive) {
    if (routeActive == true) {
      //utils.getNearest(evt.coordinate).then(function(coord_street){
      if (coordOK == false) {
        var coord_street = utils.to4326(evt.coordinate);
        utils.createFeature(coord_street);
      }
      if (coordOK == true) {
        var coord_street = evt;
        utils.createFeature(coord_street);
        map.getView().setZoom(14);
        console.log(utils.to3857(evt));
        map.getView().setCenter(utils.to3857(evt));
      }
      var last_point = points[points.length - 1];
      var points_length = points.push(coord_street);
      var turf_point = turf.truncate(turf.point(coord_street));
      //console.log(points_length + ' ' + last_point);
      if (points_length == 1) {
        if (coordOK == false) {
          $('#search_field').val(turf_point.geometry.coordinates);
        }
        /*$("#headerLang").hide();*/
        searchToggle = 1;
        $("#popupPanel-closerSideContentGraph").show();
        $('#myChartDiv').hide();
        $('#layerContent').hide();
        $("#search_route_target").empty();
        $('#searchContent').show();
        $('#searchContent').append("<div id='searchContentContainer' class='container'>");
        $('#searchContent').append("</div>");
        $("#search_route_target").show();
        $(".input-group").clone().appendTo("#search_route_target").find("input[type='text']").val("");
        $("#search_route_target").find('form').attr('id', 'search_target');
        $("#search_route_target").find('input').attr('placeholder', translator.getStr("lang_search_route2"));
        $("#search_route_target").find('input').attr('id', 'search_field_target');
        $('#search_field_target').focus();
        if ($(window).innerWidth() <= 1366 && $(window).innerWidth() > 640) {
          $('#sideContentAnalysisHeader').css('height', '156px');
        } else if ($(window).innerWidth() <= 640) {
          $('#sideContentAnalysisHeader').css('height', '150px');
        } else {
          $('#sideContentAnalysisHeader').css('height', '193px');
        }
        $('#sideContentContentAnalysis').hide();
      } else if (points_length > 1) {
        if (coordOK == false) {
          $('#search_field_target').val(turf_point.geometry.coordinates);
        }
      }
      if (points_length < 2) {
        msg_el.innerHTML = translator.getStr("route_endpoint");
        return;
      }
      //get the route
      var point1 = last_point.join();
      var point2 = coord_street.join();
      fetch(url_mapbox_route + point1 + ';' + point2 + '.json?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA&overview=full').then(function (r) {
        return r.json();
      }).then(function (json) {
        if (json.code !== 'Ok') {
          msg_el.innerHTML = 'Reittiä ei löytynyt.';
          return;
        }
        var features = vectorSource.getFeatures();
        //points.length = 0;
        setTimeout(function () {
          utils.createRoute(json.routes[0].geometry);
        }, 1000);
        if (features.length > 0) {
          $(".loading").show();
          msg_el.innerHTML = translator.getStr("route_count");
        } else {
          msg_el.innerHTML = translator.getStr("route_added");
          $('#msg').fadeTo(5000, 0);
        }
      });
      //});
    } else {
      routeActive = false;
    }
  } // end initRoute
  var utils = {
    getNearest: function (coord) {
      var coord4326 = utils.to4326(coord);
      return new Promise(function (resolve, reject) {
        //make sure the coord is on street
        fetch(url_mapbox_nearest + coord4326.join() + '.json?access_token=pk.eyJ1Ijoiam91a29qYXIiLCJhIjoiY2lvam1ubmVhMDA4Z3c0ajdleHl6ZjFtdSJ9.pbxTgzkFQJx-EMxxEJjSEA').then(function (response) {
          // Convert to JSON
          console.log(response.json());
          return response.json();
        }).then(function (json) {
          if (json.code === 'Ok') resolve(json.waypoints[0].location);
          else reject();
        });
      });
    },
    createFeature: function (coord) {
      var feature = new ol.Feature({
        type: 'place',
        geometry: new ol.geom.Point(ol.proj.fromLonLat(coord))
      });
      console.log(coord);
      feature.setStyle(styles.icon);
      vectorSourceRoute.addFeature(feature);
    },
    createRoute: function (polyline) {
      // route is ol.geom.LineString
      var route = new ol.format.Polyline({
        factor: 1e5
      }).readGeometry(polyline, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      });
      var feature = new ol.Feature({
        type: 'route',
        geometry: route
      });
      feature.setStyle(styles.route);
      vectorSourceRoute.addFeature(feature);
      var extent = vectorLayerRoute.getSource().getExtent();
      map.getView().fit(extent, map.getSize());
      //console.log(polyline.coordinates);
      lineBuffer(polyline);
    },
    to4326: function (coord) {
      return ol.proj.transform([
        parseFloat(coord[0]), parseFloat(coord[1])
      ], 'EPSG:3857', 'EPSG:4326');
    },
    to3857: function (coord) {
      return ol.proj.transform([
        parseFloat(coord[0]), parseFloat(coord[1])
      ], 'EPSG:4326', 'EPSG:3857');
    }
  };
  /*Route part end*/
  map.on('moveend', zoomForBlur);
   //var format = new ol.format.GeoJSON();
  var worker = new Worker('javascripts/worker.js');
  var clusterSource = vectorLayer.getSource();
  var vectorSource = vectorHeatmap.getSource();
  var ready = false;
  worker.onmessage = function (e) {
    if (e.data.ready) {
      ready = true;
      update();
      vectorSource.clear(true);
      var geojsonObjectPoint = {
        'type': 'FeatureCollection',
        'features': e.data.dataPoint
      };
      var featuresPoint = format.readFeatures(geojsonObjectPoint, {
        featureProjection: 'EPSG:3857'
      });
      yearArray = [];
      initChart(geojsonObjectPoint, e.data.years);
      vectorSource.addFeatures(featuresPoint);
      $(".loading").hide();
    } else {
      clusterSource.clear(true);
      var geojsonObject = {
        'type': 'FeatureCollection',
        'features': e.data.dataCluster
      };
      var features = format.readFeatures(geojsonObject, {
        featureProjection: 'EPSG:3857'
      });
      clusterSource.addFeatures(features);
    }
  };

  function loadWorkerParams(url, ie, years) {
    var extent = ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326');
    worker.postMessage({
      bbox: extent,
      zoom: Math.round(map.getView().getZoom()),
      url: url,
      ie: ie,
      years: years
    });
  }

  function update() {
    if (!ready) {
      return;
    }
    var extent = ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326');
    worker.postMessage({
      bbox: extent,
      zoom: Math.round(map.getView().getZoom())
    });
  }
   // Update cluster at each move by calling the worker
  map.on('moveend', update);
   //map.on('moveend', countFeatures);
  function countFeatures() {
    var ext = map.getView().calculateExtent();
    var featureCount = vectorSource.getFeaturesInExtent(ext);
    return featureCount.length;
  }
  var monthArray = [];
  var monthArray2 = [];
  var myChart = '';
  var yearArray = [];
  var sumTotal = [];
  var properties;

  function prepareCharts(yearArray) {
    $("#source_1").hide();
    monthArray2 = [];
    sumTotal = [];
    var resultsSum = [];
    //console.log(allMonthsArray);
    //console.log(monthArray2);
    //console.log(Object.values(yearArray).length);       
    for (var i = 0; i < Object.keys(yearArray).length; i++) {
      monthArray2.push({
        label: Object.keys(yearArray)[i],
        backgroundColor: colors_for_diagram[i],
        data: yearArray[Object.keys(yearArray)[i]]
      });
    }
    yearArray.map(function (a) {
      for (var i = 0; i < a.length; i++) {
        if (resultsSum.length === a.length) {
          resultsSum[i] = resultsSum[i] + a[i];
        } else {
          resultsSum.push(a[i]);
        }
      }
    });
    sumTotal = resultsSum.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (myChart == '') {
      //loadChartSingle(allMonthsSum);
      loadChartMulti(monthArray2);
      myChart.update();
    } else {
      var otsikko = '';
      myChart.data.datasets = monthArray2;
      myChart.update();
    }
    if ($("#year").val() == 'K') {
      var text = 'Kaikki';
    } else {
      var text = $("#year").val();
    }
    if ($("#aika").val() == 'K') {
      var text2 = 'Kaikki';
    } else {
      var text2 = time(parseInt($("#aika").val()));
    }
    //if ($("#vakavuus").val() =='K'){var text3 = 'Kaikki';} else {var text3 = stability(parseInt($("#vakavuus").val()));} 
    //if ($("#tyyppi").val() =='K'){var text4 = 'Kaikki';} else {var text4 = typeCodes(parseInt($("#tyyppi").val()));}
    var vakavTextContent = '';
    var tyyppiTextContent = '';
    var aikaTextContent = '';
    var osallisetTextContent = '';
    var vakavText = $("#vakavuus").val();
    var tyyppiText = $("#tyyppi").val();
    var aikaText = $("#aika").val();
    var osallisetText = $("#osalliset").val();
    if (vakavText == null) {
      for (var i = 1; i < 3; i++) {
        vakavTextContent += stability(parseInt(i)) + '<br />';
      }
    } else {
      for (var i = 0; i < vakavText.length; i++) {
        vakavTextContent += stability(parseInt(vakavText[i])) + '<br />';
      }
    }
    if (tyyppiText == null) {
      for (var i = 0; i < 10; i++) {
        tyyppiTextContent += typeCodes(parseInt(i)) + '<br />';
      }
    } else {
      for (var i = 0; i < tyyppiText.length; i++) {
        tyyppiTextContent += typeCodes(parseInt(tyyppiText[i])) + '<br />';
      }
    }
    if (aikaText == null) {
      for (var i = 1; i < 9; i++) {
        aikaTextContent += time(parseInt(i)) + '<br />';
      }
    } else {
      for (var i = 0; i < aikaText.length; i++) {
        aikaTextContent += time(parseInt(aikaText[i])) + '<br />';
      }
    }
    if (osallisetText == null) {
      /*for (var i = 0; i < 6; i++) {
              osallisetTextContent += accessoryCodes(parseInt(i)) + '<br />';
          }*/
      osallisetTextContent = translator.getStr("lang_partakers_no_selected");
    } else {
      for (var i = 0; i < osallisetText.length; i++) {
        osallisetTextContent += accessoryCodes(parseInt(osallisetText[i])) + '<br />';
      }
    }
    $('#sideContentContentAnalysis').hide();
    /*$("#headerLang").hide();*/
    $("#popupPanel-closerSideContentGraph").show();
    $("#myChartDiv").show();
    $("#myChart").show();
    $("#myChartDivTopHeader").empty();
    $("#myChartDivHeaderCol1").empty();
    $("#myChartDivHeaderCol2").empty();
    $("#myChartDivCenterHeader").empty();
    $("#myChartDivFooter1").empty();
    $("#myChartDivTopHeader").append(translator.getStr("lang_selected_filter_title"));
    $("#myChartDivHeaderCol1").append("<strong>" + translator.getStr("lang_year") + "</strong><hr />" + text + "<br /><br />");
    $("#myChartDivHeaderCol1").append("<strong>" + translator.getStr("lang_time_of_day") + "</strong><hr />" + aikaTextContent + "<br />");
    $("#myChartDivHeaderCol1").append("<strong>" + translator.getStr("lang_partakers") + "</strong><hr />" + osallisetTextContent + "<br />");
    $("#myChartDivHeaderCol2").append("<strong>" + translator.getStr("lang_stability") + "</strong><hr /> " + vakavTextContent + "<br />");
    $("#myChartDivHeaderCol2").append("<strong>" + translator.getStr("lang_type") + "</strong><hr />" + tyyppiTextContent + "<br />");
    $("#myChartDivCenterHeader").append(translator.getStr("lang_graph_title"));
    $("#myChartDivFooter1").append(translator.getStr("lang_sum_1") + sumTotal + translator.getStr("lang_sum_2"));
    //console.log(monthArray2);
  }

  function initChart(data, years) {
    //$.getJSON(url).done(function(data) {        
    for (var i = 0; i < years.length; i++) {
      prepareCharts(loadDataForChart(data, years[i]));
    }
    //});
  }

  function loadDataForChart(data, years) {
    var kkk = 0;
    monthArray = ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    $.each(data.features, function (key, val) {
      if (val.properties.vvonn == years) {
        for (var kk = 0; kk < 12; kk++) {
          if (val.properties.kkonn == kk + 1) {
            monthArray[kk]++;
          }
          if (kk > kkk) {
            yearArray[years] = monthArray;
            kkk = kk;
          }
        } //for                        
      } //if                       
    }); //each
    return yearArray;
  }

  function loadChartMulti(monthArray2) {
    var fontSize;
    var boxWidth;
    var ctx = document.getElementById("myChart").getContext("2d");
    if (selectedLang == 'fi') {
      var monthTableShort = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];
    } else if (selectedLang == 'en') {
      var monthTableShort = ["January", "Fabruary", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    } else if (selectedLang == 'se') {
      var monthTableShort = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    }
    if ($(window).innerWidth() <= 1366 && $(window).innerWidth() >= 641) {
      ctx.canvas.width = 345;
      ctx.canvas.height = 170;
      fontSize = 10;
      boxWidth = 30;
    } else if ($(window).innerWidth() <= 640) {
      ctx.canvas.width = 275;
      ctx.canvas.height = 150;
      fontSize = 8;
      boxWidth = 20;
    } else {
      ctx.canvas.width = 420;
      ctx.canvas.height = 290;
      fontSize = 12;
      boxWidth = 30;
    }
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: monthTableShort,
        datasets: monthArray2
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: fontSize
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: fontSize
            }
          }]
        },
        legend: {
          display: true,
          labels: {
            fontSize: fontSize,
            boxWidth: boxWidth,
            usePointStyle: true,
            padding: 10
          }
        }
      }
    });
  }
   //Layerswitcher
  function setImageUrl(title) {
    var cur = $(".notations");
    if (title === "") {
      cur.attr("src", "./");
    } else if (title === "") {}
  }

  function getVisibleLayerCount() {
    var res = 0;
    var layers = map.getLayers().getArray();
    for (var i = 0; i < layers.length; i++) {
      var temp = layers[i];
      if (temp.getVisible() == true && temp.getProperties().type != 'base') {
        res++;
      }
    }
    return res;
  }

  function getVisibleLayers() {
    var visibleLayers = [];
    var layers = map.getLayers().getArray();
    for (var i = 0; i < layers.length; i++) {
      var temp = layers[i];
      if (temp.getVisible() == true && temp.getProperties().type != 'base') {
        visibleLayers.push(temp);
      }
    }
    return visibleLayers;
  }

  function updeteDescriptionContent() {
    var layers = getVisibleLayers();
    var html = "";
    if (getVisibleLayerCount() > 0) {
      $('#descriptionLinks').html("<h2>Valitse selite tasolle</h2>");
      for (var i = 0; i < layers.length; i++) {
        var temp = layers[i];
        var title = temp.getProperties().title;
        var visible = temp.getProperties().visible;
        // päivitä image urli aina ekaan.                    
        if (visible) {
          setImageUrl(title.trim());
        }
        html = $('#descriptionLinks').html();
        html += '<a href="#" onclick="setImageUrl(\'' + title.trim() + '\')";return false;>' + title + '</a><br />';
        $('#descriptionLinks').html(html);
      }
      var after = $('#descriptionLinks').html();
      $('#descriptionLinks').html(after + '<hr>');
    } else {
      $('#sideDescription').hide();
    }
  }

  function changeLayerOpacity(layerId, newOpacity) {
    var cur = map.getLayers().getArray()[layerId];
    cur.setOpacity(newOpacity);
  }

  function changeLayerVisibility(layerId, visible) {
    var cur = map.getLayers().getArray()[layerId];
    if (cur.getProperties().type == "base") {
      cur.setVisible(visible);
      var layers = map.getLayers().getArray();
      for (var i = 0; i < layers.length; i++) {
        var temp = layers[i];
        if (temp.getProperties().type == "base" && temp != cur) {
          temp.setVisible(false);
        }
      }
    } else {
      cur.setVisible(visible);
    }
    updeteDescriptionContent();
  }

  function addLayersToSelect(aineistot) {
    for (var i = 0; i < aineistot.length; i++) {
      //$('#aineistoSelect').append($(document.createElement("option")).attr("value",i).text(aineistot[i]));
      var src = aineistot[i].split(";");
      var title = src[0];
      var name = src[1];
      //alert(name + " " + title);
      $('#aineistoSelect').append($(document.createElement("option")).attr("value", name).text(title));
    }
  }

  function createLayerControls() {
    var aineistot = ["Valitse aineisto"];
    var layers = map.getLayers().getArray();
    console.log("layer count: " + layers.length);
    var html = document.getElementById("contentMap").innerHTML;
    var htmlBase = document.getElementById("contentBaseMap").innerHTML;
    if (selectedLang == 'se') {}
    for (var i = 0; i < layers.length; i++) {
      var props = layers[i].getProperties();
      var opacity_id = props.name + "_opacity";
      var visible_id = props.name + "_visible";
      console.log(props.name);
      if (props.type === "base") {
        htmlBase += '<div class="baseMapRow ' + visible_id + '"><input name="basemap" class="baseM" checked="true" id="' + visible_id + '" onchange="changeLayerVisibility(' + i + ',this.checked)" type="checkbox" data-toggle="toggleTwo" data-on="' + translator.getStr("lang_toggle_on") + '" data-off="' + translator.getStr("lang_toggle_off") + '">';
        htmlBase += "" + props.title + '</div>';
        htmlBase += '<div class="mapRowOpacity"><input title="' + translator.getStr("lang_transparency") + '" id="' + opacity_id + '" class="opacitySlider" max="1" min="0" default="1" oninput="changeLayerOpacity(' + i + ',this.value)"  step="0.1" type="range"></div>';
      } else if (props.name !== "vectorLayerRoute") {
        if (props.name == "vectorHeatmap" || props.name !== "vectorLayer") {
          html += '<div class="mapRow"><input checked="true" class="status-check" id="' + visible_id + '"  onchange="changeLayerVisibility(' + i + ',this.checked)" type="checkbox" data-toggle="toggleTwo" data-on="' + translator.getStr("lang_toggle_on") + '" data-off="' + translator.getStr("lang_toggle_off") + '">';
          html += "" + props.title + '</div>';
          html += '<div class="mapRowOpacity"><input title="' + translator.getStr("lang_transparency") + '" id="' + opacity_id + '" class="opacitySlider" max="1" min="0" default="1" oninput="changeLayerOpacity(' + i + ',this.value)"  step="0.1" type="range"></div>';
        } else if (props.name == "vectorLayer") {
          html += '<div class="mapRow"><input checked="true" id="' + visible_id + '"  onchange="changeLayerVisibility(' + i + ',this.checked)" type="checkbox" data-toggle="toggleTwo" data-on="' + translator.getStr("lang_toggle_on") + '" data-off="' + translator.getStr("lang_toggle_off") + '">';
          html += "" + props.title + '</div>';
          html += '<div class="mapRowOpacity"><input title="' + translator.getStr("lang_transparency") + '" id="' + opacity_id + '" class="opacitySlider" max="1" min="0" default="1" oninput="changeLayerOpacity(' + i + ',this.value)"  step="0.1" type="range"></div>';
        }
        var t = "" + props.title + ";" + props.name;
        aineistot.push(t);
      }
    } // for          
    document.getElementById("contentMap").innerHTML = html;
    document.getElementById("contentBaseMap").innerHTML = htmlBase;
    addLayersToSelect(aineistot);
  }
   //data-onstyle="success"
  function setLayerControlValues() {
    var layers = map.getLayers().getArray();
    console.log("layer count: " + layers.length);
    for (var i = 0; i < layers.length; i++) {
      var props = layers[i].getProperties();
      var opacity_id = props.name + "_opacity";
      var visible_id = props.name + "_visible";
      // ignore feedback layer
      if (props.name !== "vectorLayerRoute") {
        document.getElementById(opacity_id).value = layers[i].getOpacity();
        document.getElementById(visible_id).checked = layers[i].getVisible();
      } else if (props.name == "vectorHeatmap" && layers[i].getVisible() == true) {
        document.getElementById(opacity_id).value = layers[i].getOpacity();
        document.getElementById(visible_id).checked = layers[i].getVisible();
      }
    };
  }
  createLayerControls();
  setLayerControlValues();

  function changeBasemapToggle() {
    $('#osm_dark_visible').change(function () {
      if ($(this).prop('checked') == true) {
        $('#osm_light_visible').bootstrapToggle('off');
        $('#osm_satellite_visible').bootstrapToggle('off');
        osm_dark.setVisible(true);
      } else {
        osm_dark.setVisible(false);
      }
    });
    $('#osm_light_visible').change(function () {
      if ($(this).prop('checked') == true) {
        $('#osm_dark_visible').bootstrapToggle('off');
        $('#osm_satellite_visible').bootstrapToggle('off');
      }
      osm_light.setVisible(true);
    });
    $('#osm_satellite_visible').change(function () {
      if ($(this).prop('checked') == true) {
        $('#osm_light_visible').bootstrapToggle('off');
        $('#osm_dark_visible').bootstrapToggle('off');
        osm_satellite.setVisible(true);
      } else {
        osm_satellite.setVisible(false);
      }
    });
  }

  function changeVectormapToggle() {
    $('#vectorHeatmap_visible').change(function () {
      if ($(this).prop('checked') == true) {
        $('#vectorLayer_visible').bootstrapToggle('off');
        vectorLayer.setVisible(false);
        vectorHeatmap.setVisible(true);
        zoomForBlur();
        //vectorHeatmap.setVisible(false);                                 
      } else {
        //vectorLayer.setVisible(true);
        vectorHeatmap.setVisible(false);
        zoomForBlur();
      }
    });
    $('#vectorLayer_visible').change(function () {
      if ($(this).prop('checked') == true) {
        $('#vectorHeatmap_visible').bootstrapToggle('off');
        vectorLayer.setVisible(true);
        vectorHeatmap.setVisible(false);
        zoomForBlur();
      } else {
        vectorLayer.setVisible(false);
        //vectorHeatmap.setVisible(true);  
        //zoomForBlur(); 
      }
    });
  }

  function searchContent(place_name, coordinates, source) {
    $('#searchContent').append("<div class='row'><div class='col-sm-3'><img id='rowImg' height='50' src='./img/marker-green_for_search.png' /></div><div class='col-sm-9' id='searchRow' coordinates='" + coordinates + "' source='" + source + "'>" + place_name + "</div></div></div>");
  }
   //lineBuffer();
  var sumArray = [];
  var routeOnline = 0;

  function lineBuffer(line) {
    if (myChartBoolean == 0 || searchToggle == 1) {
      $("#previousSearch").show();
    }
    var features = vectorSource.getFeatures();
    if (features.length > 0) {
      var decode = polyline.decode(line);
      //console.log(decode);
      var line = turf.lineString(decode, {
        "stroke": "#F00"
      });
      var offsetLine = turf.flip(turf.buffer(line, 0.05, 'kilometers'));
      // Go through this array and get coordinates of their geometry.
      var points_array = [];
      features.forEach(function (feature) {
        points_array.push(utils.to4326(feature.getGeometry().getCoordinates()));
      });
      var multipoints = turf.multiPoint(points_array);
      var intersection = turf.intersect(offsetLine, multipoints);
      if (intersection.geometry != null) {
        if (intersection.geometry.type == 'Point') {
          sumArray.push(1);
        } else if (intersection.geometry.type == 'MultiPoint') {
          sumArray.push(intersection.geometry.coordinates.length);
        }

        function getSum(total, num) {
          return total + num;
        }
        var sumRoute = sumArray.reduce(getSum);
        $("#myChartDivFooter2").empty();
        $("#searchContent").html("<div id='accidentsOnRoute'><span style='font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span><br />" + translator.getStr("lang_route_ok") + sumRoute + translator.getStr("lang_route_kpl") + "</div>");
        $("#myChartDivFooter2").append(translator.getStr("lang_route_ok") + sumRoute + translator.getStr("lang_route_kpl"));
      } else {
        //$("#searchContent").html("");
        $("#searchContent").html("<div id='accidentsOnRoute'><span style='font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span><br />" + translator.getStr("lang_route_nodata") + "</div>");
      }
      var multipoints = "";
      var intersection = "";
      routeOnline = 1;
      $(".loading").hide();
      msg_el.innerHTML = translator.getStr("route_added");
      $('#msg').fadeTo(5000, 0);
    } else {
      $("#searchContent").html("<div id='accidentsOnRoute' class='routelangNodata'><span style='font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span><br />" + translator.getStr("lang_route_nosearch") + "</div>");
    }
  }
 var en = {
    lang_header_logo: "https://stat.webigu.fi/img/TK_EN_white_198.png",
    lang_welcome_header:"Welcome to the<br />traffic accidents map service",
    lang_welcome_innercontent:"<p>Traffic accident statistics include a wealth of information about the severity of accidents and parties involved.<br /><br />"+
        "Via the map, you may visualize traffic accident data based on your own desired choice of variables.<br /><br />"+
        "The service allows you to create routings between locations and calculate traffic accident occurrences along the routes.</p>",
    lang_continue: "Continue",    
    index_header: "Traffic accidents map",
    index_info_header: "<p>Start by selecting a filter from the drop-down menus below.<br /> Then push the Submit button.</p>", 
    route_startpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Search for address, place or click on the map.",
    route_endpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Choose your destination point.",
    route_added: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Route added.",
    route_count: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-cog' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Calculate accidents along the route.",
    lang_resolution: "Go to the right scale",
    route_startbutton: "Routing",
    route_stopbutton: "Stop",
    layer_button_points:"Points",
    layer_button_heatmap:"Heatmap",
    lang_year: "Years:",
    lang_month: "Months:",
    lang_time_of_day: "Time of the day:",
    lang_stability:"Severity:",
    lang_type:"Type of accident",
    lang_partakers:"Parties involved:",
    lang_reset:"Reset",
    lang_submit:"Submit",
    lang_select_years:"Select years",
    nSelectedText:"selected",
    selectAllText:"Select all",
    nonSelectedTextAll:"All",
    nonSelectedTextNotSelected:"Not selected",
    lang_stability_1:"Fatal accident",
    lang_stability_2:"Accident leading to injury",
    lang_type_0:"Same driving directions (straight)",
    lang_type_1:"Same driving directions (turning)",
    lang_type_2:"Opposite driving directions (straight)",
    lang_type_3:"Opposite driving directions (turning)",
    lang_type_4:"Crossing driving directions (straight)",
    lang_type_5:"Crossing driving directions (turning)",
    lang_type_6:"Pedestrian accident (on crossing)",
    lang_type_7:"Pedestrian accident (elsewhere)",
    lang_type_8:"Off the road",
    lang_type_9:"Other accident",
    lang_partakers_0:"Sedan or van",
    lang_partakers_1:"Bus or truck",
    lang_partakers_2:"Pedestrian",
    lang_partakers_3:"Bicycle",
    lang_partakers_4:"Moped",
    lang_partakers_5:"Motorbike",
    lang_partakers_6:"Other vehicle",
    lang_partakers_no_selected:"All",
    lang_graph_title:"Number of accidents / month / year",
    lang_selected_filter_title:"Selected search criteria",
    lang_sum_1:"Total: ",
    lang_sum_2:" accidents<br />",
    lang_search_route1:"Search for addresses or places",
    lang_search_route2:"Choose destination",
    lang_hamburger_header1:"Map layers",
    lang_hamburger_header2:"Help",
    lang_layers_header:"Visualization styles  <b class='caret'></b>",
    lang_basemaps_header:"Basemaps  <b class='caret'></b>",
    lang_toggle_on:"On",
    lang_toggle_off:"Off",
    lang_cluster:" Point symbols",
    lang_heatmap:" Heatmap",
    lang_light_bgmap: " Light basemap",
    lang_dark_bgmap: " Dark basemap",
    lang_transparency: "Transparency",
    lang_navi_1:"Accident search",
    lang_navi_2:"Results",
    lang_navi_3:"Map layers, instructions and information about the service",
    lang_menu_header_1:"Search for traffic accidents <b class='caret'></b>",
    lang_menu_header_2:"Visualization styles and map features <b class='caret'></b>",
    lang_menu_header_3:"Address, place and route search <b class='caret'></b>",
    lang_menu_header_4:"Information about the service <b class='caret'></b>",
    lang_menu_content_1:"<p>You can search traffic accident statistics by year of event or filter data by a combination of criteria. Criteria include: accident year, month, time of day, severity, type of accident and parties involved. The search results are presented both as bar charts and a dynamic map view.<br />"+
            "<ul><li>Open <i class='material-icons'>settings</i> menu (opens by default).</li>"+
            "<li>Start by selecting the years. After that you can choose other filters.</li>"+
            "<li>The search rule is created by selecting a set of criteria from the drop-down menus.</li>"+
            "<li>The parties involved menu selects those who have been involved in the accident.</li>"+
            "<li>The Submit button will begin the search.</li>"+
            "</ul>"+
            "</p>",
    lang_menu_content_2:"<p>You may change the map presentation style from the Visualization styles menu above."+
            " On the map it is possible to visualize the search results in two ways:"+
            "<ul><li>A heatmap presentation that describes a spatial density of accident occurrences. In this case, locations more prone to having accidents are visually better distinguishable. The heatmap does not appear in higher zooms - a button will appear in the upper right corner of the window, clicking it will take you to the right zoom level.</li>"+
            "<li>Point symbol -visualization style, which presents accidents as cluster points in zoom-outs, while at detailed zoom-ins actual accident location points are shown. The user can get more detailed information about the individual accidents by clicking them on the map."+
            "</li></ul></p>",
    lang_menu_content_3:"<p>You can search for an address or a place name and create a routing, so that you can see the number of accidents along your chosen route. Routing works either by typing in the search field or by selecting a map:"+ 
            "<ul>"+
            "<li>Enter the start address or place name in the search box and select the correct location from the search results.</li>"+
            "<li>Enter the destination address or place name in the search box and select the correct location from the search results.</li>"+
            "OR"+
            "<li>Click on the start location on the map.</li>"+
            "<li>Click on the destination location on the map.</li></ul>"+
            "The service calculates the fastest route and number of accidents along the route using a 50m buffer. The number of accidents is displayed in the left pane. You can continue your route by adding new destination points - any additional accidents will be added to the previous sum.<br /><br />Note that if you haven't configured and submitted any accident search, statistics along the route cannot be calculated."+
            "</p>",
     lang_menu_content_4:" <h5>Data source</h5>"+
            "<p>The service uses the <a href='http://www.stat.fi/tup/rajapintapalvelut/tieliikenneonnettomuudet.html' target='_blank'>traffic accident interface</a> by Statistics Finland </p><br />"+
            "<h5>Data description</h5>"+
            "<p>A more detailed description of the data can be found at<a href='http://www.paikkatietohakemisto.fi/catalogue/ui/metadata.html?lang=fi&metadataresourceuuid=de71e0a1-4516-4d50-bd54-e384e5174546' target='_blank'> Paikkatietohakemisto.</a></p> <br />"+
            "<h5>Implementation of the service</h5>"+
            "<p>This service has been developed by <a href='http://www.ubigu.fi/' target='_blank'>Ubigu Oy</a>.</p>",
     lang_route_ok:"Accidents along the route<br />in total ",
     lang_route_kpl:" pcs.",
     lang_route_nodata:"There were no accidents on the selected route. You may continue the route - any accidents will be added to the previous calculation.",
     lang_route_nosearch:"First select the search criteria, so that accidents occurring on your route may be calculated!",
     lang_gfi_header:"Feature info",
     lang_gfi_year:"Year:",
     lang_gfi_month:"Month:",
     lang_gfi_td:"Time of day:",
     lang_gfi_stability:"Severity:",
     lang_gfi_toa:"Type of accident",
     lang_gfi_party1:"Parties involved (sedan/van):",
     lang_gfi_party2:"Parties involved (bus/truck):",
     lang_gfi_party3:"Parties involved (pedestrian):",
     lang_gfi_party4:"Parties involved (bicycle):",
     lang_gfi_party5:"Parties involved (moped):",
     lang_gfi_party6:"Parties involved (motorbike):",
     lang_gfi_party7:"Parties involved (other):"         
   
  };

   var se = {
    lang_header_logo: "https://stat.webigu.fi/img/TK_SE_white_203.png",
    lang_welcome_header:"Välkommen till<br />trafikolyckor på karta -webbtjänsten",
    lang_welcome_innercontent:"<p>Statistikcentralens statistiker över trafikolyckor innerhåller månsidiga information om olyckor som ledde till personskador och om parter i olyckan.<br /><br />"+
        "Visa olyckor i förhållande till olika kriterier. Kartan reagerar på dina inställningar.<br /><br />"+
        "Du kan också skapa dirigeringar, varvid olycksstatistiker kommer att visas för din rutt.</p>",
    lang_continue: "Fortsätta till tjänsten",
    index_header: "Trafikolyckor på karta",
    index_info_header: "<p>Börja med att välja sökkriterier från rullgardinsmenyerna nedan. Tryck sedan på 'Sök'-knappen.</p>", 
    route_startpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Sök efter adress, platsnamn eller välj en startpunkt på kartan.",
    route_endpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Om du vill dirigera, lägg till en destination.", 
    route_added: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Rutt tillsatt",
    route_count: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-cog' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Beräknar antalet av olyckor på rutten",
    lang_resolution: "Gå till rätt skala",
    route_startbutton: "Dirigera",
    route_stopbutton:"Stoppa",
    layer_button_points:"Punkter",
    layer_button_heatmap:"Värmekarta",
    lang_year: "År:",
    lang_month: "Månader:",
    lang_time_of_day: "Tidpunkt:",
    lang_stability:"Allvar:",
    lang_type:"Typ av olycka:",
    lang_partakers:"Parter i olyckan:",
    lang_reset:"Nolla",
    lang_submit:"Sök",
    lang_select_years:"Välj år",
    nSelectedText:"vald",
    selectAllText:"Välj alla",
    nonSelectedTextAll:"Alla",
    nonSelectedTextNotSelected:"Inga valda",
    lang_stability_1:"Olycka som ledde till dödsfall",
    lang_stability_2:"Olycka som ledde till personskador",
    lang_type_0:"Samma körriktningar (ej svängande fordon)",
    lang_type_1:"Samma körriktningar (svängande fordon)",
    lang_type_2:"Mötande körriktningar (ej svängande fordon)",
    lang_type_3:"Mötande körriktningar (svängande fordon)",
    lang_type_4:"Korsande körriktningar (ej svängande fordon)",
    lang_type_5:"Korsande körriktningar (svängande fordon)",
    lang_type_6:"Fotgängarolycka (på övergångsställe)",
    lang_type_7:"Fotgängarolycka (annanstans)",
    lang_type_8:"Avkörning",
    lang_type_9:"Annan olycka",
    lang_partakers_0:"Personbil eller paketbil",
    lang_partakers_1:"Buss eller lastbil",
    lang_partakers_2:"Fotgängare",
    lang_partakers_3:"Cykel",
    lang_partakers_4:"Moped",
    lang_partakers_5:"Motorcykel",
    lang_partakers_6:"Annan trafikant",
    lang_partakers_no_selected:"Alla",
    lang_graph_title:"Antal av olyckor / månad / år",
    lang_selected_filter_title:"Valda sökkriterier",
    lang_sum_1:"Totalt: ",
    lang_sum_2:" olyckor<br />",
    lang_search_route1:"Sök efter adress eller plats",
    lang_search_route2:"Välj destination",
    lang_hamburger_header1:"Kartlager",
    lang_hamburger_header2:"Instruktioner",
    lang_layers_header:"Presentationsstil  <b class='caret'></b>",
    lang_basemaps_header:"Grundkarta  <b class='caret'></b>",
    //lang_toggle_on:"Aktiverad",
    //lang_toggle_off:"Inaktiverad",
    lang_toggle_on:"On",
    lang_toggle_off:"Off",
    lang_cluster:" Punktkarta",
    lang_heatmap:" Värmekarta",
    lang_light_bgmap: " Ljus grundkarta",
    lang_dark_bgmap: " Mörk grundkarta",
    lang_transparency: "Genomskinlighet",
    lang_navi_1:"Söka efter olyckor",
    lang_navi_2:"Resultat",
    lang_navi_3:"Kartlager, bruksanvisning och information om tjänsten",
    lang_menu_header_1:"Sök efter data om trafikolyckor<b class='caret'></b>",
    lang_menu_header_2:"Presentationsstilar och egenskaper av kartan <b class='caret'></b>",
    lang_menu_header_3:"Adress-, plats- och ruttsök <b class='caret'></b>",
    lang_menu_header_4:"Information om tjänsten <b class='caret'></b>",
    lang_menu_content_1:"<p>Man kan söka efter trafikolycksstatistiker efter år och begränsa resultaten baserat på en kombination av variabler. Sökkriterierna inkluderar år, månad, tidpunkt, allvar, typ av olycka och parter. Resultaten visas som en dynamisk karta och ett stapeldiagram, som visar information om olyckor per år och månad. <br />"+
            "<ul><li>Öppna <i class='material-icons'>settings</i> menyn (öppnas som standard).</li>"+
            "<li>Börja först med att välja år. Därefter kan du välja andra sökkriterier.</li>"+
            "<li>En kombination av sökkriterier kan skapas från variablerna i rullgardinsmenyerna.</li>"+
            "<li>Man väljer parterna, som var inblandade i olyckan.</li>"+
            "<li>Sökningen startas med 'Sök'-knappen.</li>"+
            "</ul>"+
            "</p>",
    lang_menu_content_2:"<p>Du kan ändra hur sökresultaten visas från Presentationsstilar-menyn."+
            "Man kan visualisera resultaten på kartan på två sätt:"+
            "<ul><li>En värmekarta, som visar tydligt de platser där olyckor tenderar att hända oftare. Värmekartan kan inte visas när den zoomas ut för mycket. En knapp visas i övre högra hörnet - om du klickar på det, flyttas kartan till rätta nivået.</li>"+
            "<li>En punktkarta, som visar olyckorna som punktkluster. Om du zoomar in, individuella olyckor ska visas som poäng. Användaren kan då få ytterligare information om olyckan om man klickar på punkten"+
            "</li></ul></p>",
    lang_menu_content_3:"<p>Du kan söka platser efter adress, platsnamn eller skapa dirigeringar, varvid olycksstatistiker kommer att visas för din rutt. Dirigeringen fungerar antingen genom att skriva in sökfältet eller genom att välja på karta:"+ 
            "<ul>"+
            "<li>Skriv ner startadressen eller ett ställenamn i sökformuläret och välj rätta platsen från resultaten.</li>"+
            "<li>Skriv ner destinationsadressen eller ett ställenamn i sökformuläret och välj rätta platsen från resultaten</li>"+
            "ELLER"+
            "<li>Klicka på en startpunkt på kartan.</li>"+
            "<li>Klicka på en destinationspunkt på kartan.</li></ul>"+
            "Tjänsten beräknar den snabbaste vägen och antalet av olyckor längs rutten med en 50 meter sökradie. Summan kommer att visas i det vänstra fönstret. Man kan också fortsätta routningen - om det finns några nya olyckor, de kommer att läggas till summan.<br /><br />Obs! Om du inte har sökt efter olycksdata, kan man inte beräknas olyckor för din rutt."+
            "</p>",
     lang_menu_content_4:" <h5>Datakälla</h5>"+
            "<p>Webbtjänsten använder Statistikcentralens <a href='http://www.stat.fi/tup/rajapintapalvelut/tieliikenneonnettomuudet.html' target='_blank'>trafikolyckansgränssnitt.</a></p><br />"+
            "<h5>Beskrivning av data</h5>"+
            "<p>Man kan hitta en mer detaljerad beskrivning av data på<a href='http://www.paikkatietohakemisto.fi/catalogue/ui/metadata.html?lang=fi&metadataresourceuuid=de71e0a1-4516-4d50-bd54-e384e5174546' target='_blank'> Paikkatietohakemisto.</a></p> <br />"+
            "<h5>Om webbjänsten</h5>"+
            "<p>Webbtjänsten skapades av <a href='http://www.ubigu.fi/' target='_blank'>Ubigu Oy</a>.</p>",         
     lang_route_ok:"På din rutt det fanns totalt:<br /> ",
     lang_route_kpl:" olyckor.",
     lang_route_nodata:"Inga olyckor kan hittas för din rutt. Du kan fortsätta routningen - om det finns några nya olyckor, de kommer att läggas till summan.",
     lang_route_nosearch:"Välj sökkriterier, så att olyckor kan beräknas för din rutt!",
     lang_gfi_header:"Information",
     lang_gfi_year:"År:",
     lang_gfi_month:"Månad:",
     lang_gfi_td:"Tidpunkt:",
     lang_gfi_stability:"Allvar:",
     lang_gfi_toa:"Typ av olycka:",
     lang_gfi_party1:"Antal (personbil/paketbil):",
     lang_gfi_party2:"Antal (buss/lastbil):",
     lang_gfi_party3:"Antal (fotgängare):",
     lang_gfi_party4:"Antal (cykel):",
     lang_gfi_party5:"Antal (moped):",
     lang_gfi_party6:"Antal (motorcykel):",
     lang_gfi_party7:"Antal (annan):"
  };

  var fi = {
    lang_header_logo: "https://stat.webigu.fi/img/tk_logo_pieni_165.png",
    lang_welcome_header:"Tervetuloa<br />Liikenneonnettomuudet kartalla -palveluun",
    lang_welcome_innercontent:"<p>Liikenneonnettomuustilastot sisältävät monipuolista tietoa henkilövahinkoon johtaneista liikenneonnettomuuksista sekä niiden osallisista.<br /><br />"+
        "Tarkastele liikenneonnettomuuksia eri muuttujien kesken. Kartta mukautuu valintojesi mukaan.<br /><br />"+
        "Palvelussa voit tehdä myös reitityksiä, jolloin näet valintojesi mukaiset liikenneonnettomuusmäärät reitiltäsi.</p>",
    lang_continue: "Jatka palveluun",
    index_header: "Liikenneonnettomuudet kartalla",
    index_info_header: "<p>Aloita valitsemalla hakuehdot alla olevista pudotusvalikoista.<br />Sen jälkeen paina Hae-painiketta.</p>", 
    route_startpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Hae osoitteella, paikannimellä tai valitse lähtöpiste kartalta.",
    route_endpoint:"<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Jos reitität, anna määränpää.", 
    route_added: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-info-sign' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Reitti lisätty",
    route_count: "<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-cog' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;Lasketaan reitille osuvien onnettomuuksien määrää",
    lang_resolution: "Siirry oikealle mittakaavatasolle",
    route_startbutton: "Reititä",
    route_stopbutton:"Lopeta",
    layer_button_points:"Pisteet",
    layer_button_heatmap:"Heatmap",
    lang_year: "Tapahtumavuodet:",
    lang_month: "Kuukaudet:",
    lang_time_of_day: "Vuorokaudenaika:",
    lang_stability:"Vakavuus:",
    lang_type:"Onnettomuustyyppi:",
    lang_partakers:"Osalliset:",
    lang_reset:"Tyhjennä",
    lang_submit:"Hae",
    lang_select_years:"Valitse vuodet",
    nSelectedText:"valittuja",
    selectAllText:"Valitse kaikki",
    nonSelectedTextAll:"Kaikki",
    nonSelectedTextNotSelected:"Ei valittuja",
    lang_stability_1:"Kuolemaan johtanut onnettomuus",
    lang_stability_2:"Loukkaantumiseen johtanut onnettomuus",
    lang_type_0:"Samat ajosuunnat (ajo suoraan)",
    lang_type_1:"Samat ajosuunnat (ajo kääntyen)",
    lang_type_2:"Vastakkaiset ajosuunnat (ajo suoraan)",
    lang_type_3:"Vastakkaiset ajosuunnat (ajo kääntyen)",
    lang_type_4:"Risteävät ajosuunnat (ajo suoraan)",
    lang_type_5:"Risteävät ajosuunnat (ajo kääntyen)",
    lang_type_6:"Jalankulkijaonnettomuus (suojatiellä)",
    lang_type_7:"Jalankulkijaonnettomuus (muualla)",
    lang_type_8:"Tieltä suistuminen",
    lang_type_9:"Muu onnettomuus",
    lang_partakers_0:"Henkilöauto tai pakettiauto",
    lang_partakers_1:"Linja-auto tai kuorma-auto",
    lang_partakers_2:"Jalankulkija",
    lang_partakers_3:"Polkupyörä",
    lang_partakers_4:"Mopo",
    lang_partakers_5:"Moottoripyörä",
    lang_partakers_6:"Muu kulkuneuvo",
    lang_partakers_no_selected:"Kaikki",
    lang_graph_title:"Onnettomuuksien lkm. / kk / vuosi",
    lang_selected_filter_title:"Valitut hakuehdot",
    lang_sum_1:"Yhteensä: ",
    lang_sum_2:" onnettomuutta<br />",
    lang_search_route1:"Hae osoitteita tai paikkoja",
    lang_search_route2:"Valitse määränpää",
    lang_hamburger_header1:"Karttatasot",
    lang_hamburger_header2:"Ohjeita",
    lang_layers_header:"Esitystyylit  <b class='caret'></b>",
    lang_basemaps_header:"Taustakartat  <b class='caret'></b>",
    lang_toggle_on:"Päällä",
    lang_toggle_off:"Piilossa",
    lang_cluster:" Pistesymbolikartta",
    lang_heatmap:" Lämpökartta",
    lang_light_bgmap: " Vaalea taustakartta",
    lang_dark_bgmap: " Tumma taustakartta",
    lang_transparency: "Läpinäkyvyys",
    lang_navi_1:"Onnettomuushaku",
    lang_navi_2:"Tulokset",
    lang_navi_3:"Karttatasot, käyttöohjeet ja tietoja palvelusta",
    lang_menu_header_1:"Liikenneonnettomuus aineiston hakeminen <b class='caret'></b>",
    lang_menu_header_2:"Esitystyylit ja kartan ominaisuudet <b class='caret'></b>",
    lang_menu_header_3:"Osoite-, paikka- ja reittihaku <b class='caret'></b>",
    lang_menu_header_4:"Tietoja palvelusta <b class='caret'></b>",
    lang_menu_content_1:"<p>Voit hakea liikenneonnettomuustilastoja tapahtumavuoden mukaan tai rajata aineistoa sen ominaisuuksien yhdistelmänä.  Rajattavia hakuehtoja ovat tapahtumavuosi, kuukausi, vuorokaudenaika, vakavuus, onnettomuustyyppi ja osalliset. Haun tulos esitetään pylväsdiagrammina, joka kuvaa onnettomuuksien tunnuslukuja kuukauden ja vuoden suhteen sekä dynaamisena karttaesityksenä.<br />"+
            "<ul><li>Avaa <i class='material-icons'>settings</i> valikko (oletuksena auki).</li>"+
            "<li>Aloita valitsemalla ensimmäisenä vuosirajaus. Tämän jälkeen voit rajata hakua edellä mainittujen hakuehtojen mukaisesti.</li>"+
            "<li>Hakuehto muodostetaan valitsemalla pudotusvalikoista hakua rajaava ominaisuuksien joukko.</li>"+
            "<li>Osallisista valitaan ne, jotka ovat olleet osallisina onnettomuudessa.</li>"+
            "<li>Haku käynnistetään Hae-painikkeesta.</li>"+
            "</ul>"+
            "</p>",
    lang_menu_content_2:"<p>Voit vaihtaa hakutuloksen karttaesitystyyliä tämän valikon Esitystyylit -valikosta."+
            "Kartalla on mahdollista visualisoida hauntulos kahdella tavalla:"+
            "<ul><li>Lämpökartta-esitysmuoto, joka kuvaa paremmin lähemmin toisiinsa nähden sattuneet onnettomuudet lämpökarttajatkumona. Tällöin käyttäjä näkee selkeästi maantieteelliset sijainnit, joissa onnettomuuksia on sattunut enemmän. Kohdekohtaisien ominaisuuksien kysely on mahdollista yksittäisistä onnettomuuksista kohdetta klikkaamalla. Lämpökartta ei näy pienimittakaavaisilla tasoilla, tällöin kartan oikeassa yläkulmassa näkyy infoikkuna, jota klikkaamalla, kartta kohdentuu automaattisesti oikealle mittakaavatasolle.</li>"+
            "<li>Pistesymbolikartta-esitysmuoto, pienimittakaavaisilla tasoilla esittää tiheään tapahtuneet onnettomuudet suurempina palloina. Mentäessä kohden suurimittakaavaista esitysmuotoa, ilmestyy onnettomuudet oikeaan sijaintiinsa. Käyttäjä voi tällöin kysellä tarkempia ominaisuustietoja yksittäisistä onnettomuuksista kohdetta klikkaamalla."+
            "</li></ul></p>",
    lang_menu_content_3:"<p>Voit hakea sijainteja osoitteella ja paikannimellä tai tehdä reitityksiä, jolloin näet onnettomuushakuvalintojesi mukaiset liikenneonnettomuusmäärät reitiltäsi. Reititys toimii joko hakukenttään kirjoittamalla tai kartalta valitsemalla:"+ 
            "<ul>"+
            "<li>Kirjoita lähtöpisteen osoite tai paikannimi hakukenttään ja valitse hakutuloksista oikea sijainti.</li>"+
            "<li>Kirjoita määränpään osoite tai paikannimi hakukenttään ja valitse hakutuloksista oikea sijainti.</li>"+
            "TAI"+
            "<li>Klikkaa kartalta lähtöpisteen sijainti.</li>"+
            "<li>Klikkaa kartalta määränpään sijainti.</li></ul>"+
            "Palvelu laskee nopeimman reitin sekä reitille osuvien onnettomuuksien määrän 50m puskurilla. Summa näytetään vasemmassa ikkunassa. Voit jatkaa reititystä syöttämällä uusia määränpääsijainteja, jolloin onnettomuusmäärät lisätään jo laskettuun summaan.<br /><br />Huom! Jos et ole tehnyt onnettomuushakua, ei onnettomuusmääriä voida laskea reitiltä."+
            "</p>",
     lang_menu_content_4:" <h5>Aineistolähde</h5>"+
            "<p>Palvelu hyödyntää Tilastokeskuksen <a href='http://www.stat.fi/tup/rajapintapalvelut/tieliikenneonnettomuudet.html' target='_blank'>tieliikenneonnettomuusrajapintaa.</a></p><br />"+
            "<h5>Aineistokuvaus</h5>"+
            "<p>Aineiston tarkemmat kuvaukset löydät<a href='http://www.paikkatietohakemisto.fi/catalogue/ui/metadata.html?lang=fi&metadataresourceuuid=de71e0a1-4516-4d50-bd54-e384e5174546' target='_blank'> Paikkatietohakemistosta.</a></p> <br />"+
            "<h5>Palvelun toteutus</h5>"+
            "<p>Palvelun toteutuksesta vastasi <a href='http://www.ubigu.fi/' target='_blank'>Ubigu Oy</a>.</p>",         
     lang_route_ok:"Reitilläsi hakuehtojen mukaisia onnettomuuksia<br />yhteensä ",
     lang_route_kpl:" kpl.",
     lang_route_nodata:"Valitulle reittivälille ei osunut yhtään onnettomuutta. Voit jatkaa reitystä, jolloin uudet onnettomuudet lisätään edelliseen summaan.",
     lang_route_nosearch:"Valitse hakuehdot, niin reititys laskee reitille osuvat onnettomuudet!",
     lang_gfi_header:"Kohdetiedot",
     lang_gfi_year:"Tapahtumavuosi:",
     lang_gfi_month:"Tapahtumakuukausi:",
     lang_gfi_td:"Kellonaika:",
     lang_gfi_stability:"Vakavuus:",
     lang_gfi_toa:"Onnettomuustyyppi:",
     lang_gfi_party1:"Osallisten lkm (henkilöauto/pakettiauto):",
     lang_gfi_party2:"Osallisten lkm (linja-auto/kuorma-auto):",
     lang_gfi_party3:"Osallisten lkm (jalankulkija):",
     lang_gfi_party4:"Osallisten lkm (polkupyörä):",
     lang_gfi_party5:"Osallisten lkm (mopo):",
     lang_gfi_party6:"Osallisten lkm (moottoripyörä):",
     lang_gfi_party7:"Osallisten lkm (muu):"
  };
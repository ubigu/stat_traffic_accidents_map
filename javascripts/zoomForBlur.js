var colors = [];
var colors_for_diagram = ['#0073b0', '#c0d730', '#a40084', '#33c1ba', '#f8941e'];  
 // for heatmap
 function get_gradient() {
      var gradient = {};
          //colors selection
          colors =['#435CA8', '#6493DC', '#712688', '#c060a4', '#e21776'];
          //colors =['#435CA8', '#6493DC', '#712688', '#c060a4', '#e331a9'];
          //var colors = ["#7AB8FF", "#6FA5ED", "#6493DC", "#5980CB", "#435CA8", "#BCFFB8", "#179400", "#70B0FF", "#00224C"];
          //some logic of selection of colors
          // gradient[1] = colors[1];
          return colors;
          //return gradient; 
}

 // for diagram
 function get_colors() {    
          //colors selection
                  
          return colors_for_diagram;
}

 function zoomForBlur(){ 
        var numFeatures = parseInt(countFeatures());
        //console.log(numFeatures);
        console.log('ZoomLevel:'+Math.round(map.getView().getZoom()));
        //console.log(vectorHeatmap.getVisible());
        if(map.getView().getResolution()<=500 || vectorHeatmap.getVisible()==false){
          $("#success").hide();
          $('#success').css('margin-top','0px');
        } else if(vectorHeatmap.getVisible()==true){
          if($(window).innerWidth() <= 1024 && $(window).innerWidth() >= 768){
           if($('#msg').is(":visible")){
            if($('#msg').is(":visible")){            
              $('#success').css('margin-top','85px');                      
            }else{
              $('#success').css('margin-top','43px');
            }          
          }
        }else if($(window).innerWidth() <= 640){
            if($('#msg').is(":visible")){                     
              $('#success').css('bottom','28px');              
            }else{
              $('#success').css('bottom','-40px');
            }
        }else{
          if($('#msg').is(":visible")){            
            $('#success').css('margin-top','67px');                      
          }else{
            $('#success').css('margin-top','0px');
          }
        }
          $("#success").show();
          $("#success").html("");
          $("#success").append("<span style='top: 10px; font-size:2em;' class='glyphicon glyphicon-eye-open' aria-hidden='true'></span>&nbsp;&nbsp;&nbsp;"+translator.getStr("lang_resolution")+""); 
        }

        switch(Math.round(map.getView().getZoom())){          
          case 4:     
           if (numFeatures <= 1500 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(2);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.5);  
           }
          break;
          case 5:
           if (numFeatures <= 1500 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.8);     
           }else {
           vectorHeatmap.setBlur(2);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.5); 
           }
          break;
          case 6:
           if (numFeatures <= 1500 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.7);           
           }else{
           vectorHeatmap.setBlur(3);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.5);  
           }
          break;
          case 7:
           if (numFeatures <= 1500 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.7);           
           }else {
           vectorHeatmap.setBlur(5);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.5);
           }
          break;
          case 8:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(3);
           vectorHeatmap.setOpacity(0.7);           
           } else {
           vectorHeatmap.setBlur(6);
           vectorHeatmap.setRadius(2);
           vectorHeatmap.setOpacity(0.5); 
           }
          break;
          case 9:  
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(3);
           vectorHeatmap.setOpacity(0.6);           
           }else{
           vectorHeatmap.setBlur(6);
           vectorHeatmap.setRadius(2.5);
           vectorHeatmap.setOpacity(0.6); 
           }
          break;
          case 10:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(3.5);
           vectorHeatmap.setOpacity(0.6);           
           } else {
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(2.5);
           vectorHeatmap.setOpacity(0.6);
           }
          break;
          case 11:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(4);
           vectorHeatmap.setOpacity(0.6);           
           }else{
           vectorHeatmap.setBlur(8);
           vectorHeatmap.setRadius(3.5);
           vectorHeatmap.setOpacity(0.6);  
           }
          break;
          case 12:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(5);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(8);
           vectorHeatmap.setRadius(4);
           vectorHeatmap.setOpacity(0.6);  
           }
          break;
          case 13:  
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(5);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(5);
           vectorHeatmap.setOpacity(0.6); 
           }
          break;
          case 14:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8); 
           }
          break;
          case 15:  
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);  
           }
          break;
          case 16:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(8);
           vectorHeatmap.setRadius(5);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(8);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);  
           }
          break;
          case 17:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(9);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);           
           } else {
           vectorHeatmap.setBlur(9);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);
           }
          break;
          case 18:
           if (numFeatures <= 1000 && numFeatures >= 1){
           vectorHeatmap.setBlur(10);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);           
           }else{
           vectorHeatmap.setBlur(10);
           vectorHeatmap.setRadius(6);
           vectorHeatmap.setOpacity(0.8);
           }
          break;
        }       
        
         /*if (numFeatures < 30000 && numFeatures >= 1000)
         {
           vectorHeatmap.setBlur(2);
           vectorHeatmap.setRadius(1);
           vectorHeatmap.setOpacity(0.5);
         } 
         else if (numFeatures >= 999 && numFeatures >= 500){
          vectorHeatmap.setBlur(8);
           vectorHeatmap.setRadius(3);
           vectorHeatmap.setOpacity(0.6);          
         }
         else if (numFeatures >= 499 && numFeatures >= 100){
           vectorHeatmap.setBlur(7);
           vectorHeatmap.setRadius(5);
           vectorHeatmap.setOpacity(0.8);           
         }
         else if (map.getView().getZoom() >= 10 && map.getView().getZoom() <= 11){
           vectorHeatmap.setBlur(20);
           vectorHeatmap.setRadius(5); 
           //var zoomForBlur = map.getView().getZoom()*0.2;
           //vectorHeatmap.setBlur(parseInt(1));
           vectorHeatmap.setOpacity(0.8);           
         }
         else if (map.getView().getZoom() >= 12 && map.getView().getZoom() <= 13){
           vectorHeatmap.setBlur(13);
           vectorHeatmap.setRadius(6); 
           //var zoomForBlur = map.getView().getZoom()*0.2;
           //vectorHeatmap.setBlur(parseInt(1));
           vectorHeatmap.setOpacity(0.8);           
         }
         else if (map.getView().getZoom() >= 14 && map.getView().getZoom() <= 15){
           vectorHeatmap.setBlur(35);
           vectorHeatmap.setRadius(10); 
           //var zoomForBlur = map.getView().getZoom()*0.2;
           //vectorHeatmap.setBlur(parseInt(1));
           vectorHeatmap.setOpacity(0.8);           
         }
         else if (map.getView().getZoom() >= 16){
           vectorHeatmap.setBlur(45);
           vectorHeatmap.setRadius(15); 
           //var zoomForBlur = map.getView().getZoom()*0.8;
           //vectorHeatmap.setBlur(parseInt(4)); 
           vectorHeatmap.setOpacity(0.8);          
         }
         console.log(map.getView().getZoom());
        // console.log(zoomForBlur);
        //vectorHeatmap.setRadius(parseInt(zoomForBlur));*/
      } 
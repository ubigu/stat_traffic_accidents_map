'use strict';

// generate supercluster.js from the repo root with:
// browserify index.js -s supercluster > demo/supercluster.js

importScripts('supercluster.js');

var now = Date.now();
var url = '';

var index;
var ready_ = '';

//var url = 'http://www.ubigu.fi/geoserver/ubigu/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ubigu:tieliikenne_2011,ubigu:tieliikenne_2012,ubigu:tieliikenne_2013,ubigu:tieliikenne_2014,ubigu:tieliikenne_2015&outputFormat=application%2Fjson&srsName=EPSG:4326';
var gfeatures = '';

self.onmessage = function (e) { 
 url = e.data.url;
 if(url != null){
    importScripts(url); 
    //console.log('loaded ' + geojson.features.length + ' points JSON in ' + ((Date.now() - now) / 1000) + 's');
    console.log('loaded ' + geojson.features.length + ' points JSON in ' + ((Date.now() - now) / 1000) + 's');

    index = supercluster({
        log: true,
        radius: 60,
        extent: 256,
        maxZoom: 16
    }).load(geojson.features);
    gfeatures = geojson.features;
    
    //console.log(index.getTile(0, 0, 0));
    postMessage({ready: true, dataPoint: gfeatures, years: e.data.years});
    ready_ = true;
 }

 if (e.data && ready_==true) {
    var data_index = index.getClusters(e.data.bbox, e.data.zoom);   

    postMessage({dataCluster: data_index});        
 } 
} //end self

var geojson;
function xhr(data) {
geojson = data;   
}
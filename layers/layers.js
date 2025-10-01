var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Residence_2 = new ol.format.GeoJSON();
var features_Residence_2 = format_Residence_2.readFeatures(json_Residence_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residence_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residence_2.addFeatures(features_Residence_2);
var lyr_Residence_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residence_2, 
                style: style_Residence_2,
                popuplayertitle: 'Residence',
                interactive: true,
                title: '<img src="styles/legend/Residence_2.png" /> Residence'
            });
var format_GPSStore4INTERVENTION_3 = new ol.format.GeoJSON();
var features_GPSStore4INTERVENTION_3 = format_GPSStore4INTERVENTION_3.readFeatures(json_GPSStore4INTERVENTION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSStore4INTERVENTION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSStore4INTERVENTION_3.addFeatures(features_GPSStore4INTERVENTION_3);
var lyr_GPSStore4INTERVENTION_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSStore4INTERVENTION_3, 
                style: style_GPSStore4INTERVENTION_3,
                popuplayertitle: 'GPS Store 4-INTERVENTION',
                interactive: true,
                title: '<img src="styles/legend/GPSStore4INTERVENTION_3.png" /> GPS Store 4-INTERVENTION'
            });
var format_GPSStore3INTERVENTION_4 = new ol.format.GeoJSON();
var features_GPSStore3INTERVENTION_4 = format_GPSStore3INTERVENTION_4.readFeatures(json_GPSStore3INTERVENTION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSStore3INTERVENTION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSStore3INTERVENTION_4.addFeatures(features_GPSStore3INTERVENTION_4);
var lyr_GPSStore3INTERVENTION_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSStore3INTERVENTION_4, 
                style: style_GPSStore3INTERVENTION_4,
                popuplayertitle: 'GPS Store 3-INTERVENTION',
                interactive: true,
                title: '<img src="styles/legend/GPSStore3INTERVENTION_4.png" /> GPS Store 3-INTERVENTION'
            });
var format_GPSStore2INTERVENTION_5 = new ol.format.GeoJSON();
var features_GPSStore2INTERVENTION_5 = format_GPSStore2INTERVENTION_5.readFeatures(json_GPSStore2INTERVENTION_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSStore2INTERVENTION_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSStore2INTERVENTION_5.addFeatures(features_GPSStore2INTERVENTION_5);
var lyr_GPSStore2INTERVENTION_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSStore2INTERVENTION_5, 
                style: style_GPSStore2INTERVENTION_5,
                popuplayertitle: 'GPS Store 2-INTERVENTION',
                interactive: true,
                title: '<img src="styles/legend/GPSStore2INTERVENTION_5.png" /> GPS Store 2-INTERVENTION'
            });
var format_GPSStore1INTERVENTION_6 = new ol.format.GeoJSON();
var features_GPSStore1INTERVENTION_6 = format_GPSStore1INTERVENTION_6.readFeatures(json_GPSStore1INTERVENTION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSStore1INTERVENTION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSStore1INTERVENTION_6.addFeatures(features_GPSStore1INTERVENTION_6);
var lyr_GPSStore1INTERVENTION_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPSStore1INTERVENTION_6, 
                style: style_GPSStore1INTERVENTION_6,
                popuplayertitle: 'GPS Store 1-INTERVENTION',
                interactive: true,
                title: '<img src="styles/legend/GPSStore1INTERVENTION_6.png" /> GPS Store 1-INTERVENTION'
            });
var group_StoresforIntervention = new ol.layer.Group({
                                layers: [lyr_GPSStore4INTERVENTION_3,lyr_GPSStore3INTERVENTION_4,lyr_GPSStore2INTERVENTION_5,lyr_GPSStore1INTERVENTION_6,],
                                fold: 'open',
                                title: 'Stores for Intervention'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Residence_2.setVisible(true);lyr_GPSStore4INTERVENTION_3.setVisible(true);lyr_GPSStore3INTERVENTION_4.setVisible(true);lyr_GPSStore2INTERVENTION_5.setVisible(true);lyr_GPSStore1INTERVENTION_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelite_1,lyr_Residence_2,group_StoresforIntervention];
lyr_Residence_2.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Contact': 'Contact', 'Residence': 'Residence', 'Residential GPS': 'Residential GPS', 'field_6': 'field_6', 'GPS Stall 1': 'GPS Stall 1', 'field_8': 'field_8', 'GPS Stall 2': 'GPS Stall 2', 'field_10': 'field_10', 'GPS Stall 3': 'GPS Stall 3', 'field_12': 'field_12', 'GPS Stall 4': 'GPS Stall 4', 'field_14': 'field_14', });
lyr_GPSStore4INTERVENTION_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Contact': 'Contact', 'Residence': 'Residence', 'Residential GPS': 'Residential GPS', 'field_6': 'field_6', 'GPS Stall 1': 'GPS Stall 1', 'field_8': 'field_8', 'GPS Stall 2': 'GPS Stall 2', 'field_10': 'field_10', 'GPS Stall 3': 'GPS Stall 3', 'field_12': 'field_12', 'GPS Stall 4': 'GPS Stall 4', 'field_14': 'field_14', });
lyr_GPSStore3INTERVENTION_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Contact': 'Contact', 'Residence': 'Residence', 'Residential GPS': 'Residential GPS', 'field_6': 'field_6', 'GPS Stall 1': 'GPS Stall 1', 'field_8': 'field_8', 'GPS Stall 2': 'GPS Stall 2', 'field_10': 'field_10', 'GPS Stall 3': 'GPS Stall 3', 'field_12': 'field_12', 'GPS Stall 4': 'GPS Stall 4', 'field_14': 'field_14', });
lyr_GPSStore2INTERVENTION_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Contact': 'Contact', 'Residence': 'Residence', 'Residential GPS': 'Residential GPS', 'field_6': 'field_6', 'GPS Stall 1': 'GPS Stall 1', 'field_8': 'field_8', 'GPS Stall 2': 'GPS Stall 2', 'field_10': 'field_10', 'GPS Stall 3': 'GPS Stall 3', 'field_12': 'field_12', 'GPS Stall 4': 'GPS Stall 4', 'field_14': 'field_14', });
lyr_GPSStore1INTERVENTION_6.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Contact': 'Contact', 'Residence': 'Residence', 'Residential GPS': 'Residential GPS', 'field_6': 'field_6', 'GPS Stall 1': 'GPS Stall 1', 'field_8': 'field_8', 'GPS Stall 2': 'GPS Stall 2', 'field_10': 'field_10', 'GPS Stall 3': 'GPS Stall 3', 'field_12': 'field_12', 'GPS Stall 4': 'GPS Stall 4', 'field_14': 'field_14', });
lyr_Residence_2.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Contact': 'TextEdit', 'Residence': 'TextEdit', 'Residential GPS': 'TextEdit', 'field_6': 'TextEdit', 'GPS Stall 1': 'TextEdit', 'field_8': 'TextEdit', 'GPS Stall 2': 'TextEdit', 'field_10': 'TextEdit', 'GPS Stall 3': 'TextEdit', 'field_12': 'TextEdit', 'GPS Stall 4': 'TextEdit', 'field_14': 'TextEdit', });
lyr_GPSStore4INTERVENTION_3.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Contact': 'TextEdit', 'Residence': 'TextEdit', 'Residential GPS': 'TextEdit', 'field_6': 'TextEdit', 'GPS Stall 1': 'TextEdit', 'field_8': 'TextEdit', 'GPS Stall 2': 'TextEdit', 'field_10': 'TextEdit', 'GPS Stall 3': 'TextEdit', 'field_12': 'TextEdit', 'GPS Stall 4': 'TextEdit', 'field_14': 'TextEdit', });
lyr_GPSStore3INTERVENTION_4.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Contact': 'TextEdit', 'Residence': 'TextEdit', 'Residential GPS': 'TextEdit', 'field_6': 'TextEdit', 'GPS Stall 1': 'TextEdit', 'field_8': 'TextEdit', 'GPS Stall 2': 'TextEdit', 'field_10': 'TextEdit', 'GPS Stall 3': 'TextEdit', 'field_12': 'TextEdit', 'GPS Stall 4': 'TextEdit', 'field_14': 'TextEdit', });
lyr_GPSStore2INTERVENTION_5.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Contact': 'TextEdit', 'Residence': 'TextEdit', 'Residential GPS': 'TextEdit', 'field_6': 'TextEdit', 'GPS Stall 1': 'TextEdit', 'field_8': 'TextEdit', 'GPS Stall 2': 'TextEdit', 'field_10': 'TextEdit', 'GPS Stall 3': 'TextEdit', 'field_12': 'TextEdit', 'GPS Stall 4': 'TextEdit', 'field_14': 'TextEdit', });
lyr_GPSStore1INTERVENTION_6.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Contact': 'TextEdit', 'Residence': 'TextEdit', 'Residential GPS': 'TextEdit', 'field_6': 'TextEdit', 'GPS Stall 1': 'TextEdit', 'field_8': 'TextEdit', 'GPS Stall 2': 'TextEdit', 'field_10': 'TextEdit', 'GPS Stall 3': 'TextEdit', 'field_12': 'TextEdit', 'GPS Stall 4': 'TextEdit', 'field_14': 'TextEdit', });
lyr_Residence_2.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Contact': 'inline label - visible with data', 'Residence': 'inline label - visible with data', 'Residential GPS': 'inline label - visible with data', 'field_6': 'inline label - visible with data', 'GPS Stall 1': 'inline label - visible with data', 'field_8': 'inline label - visible with data', 'GPS Stall 2': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'GPS Stall 3': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'GPS Stall 4': 'inline label - visible with data', 'field_14': 'inline label - visible with data', });
lyr_GPSStore4INTERVENTION_3.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Contact': 'inline label - visible with data', 'Residence': 'inline label - visible with data', 'Residential GPS': 'inline label - visible with data', 'field_6': 'inline label - visible with data', 'GPS Stall 1': 'inline label - visible with data', 'field_8': 'inline label - visible with data', 'GPS Stall 2': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'GPS Stall 3': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'GPS Stall 4': 'inline label - visible with data', 'field_14': 'inline label - visible with data', });
lyr_GPSStore3INTERVENTION_4.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Contact': 'inline label - visible with data', 'Residence': 'inline label - visible with data', 'Residential GPS': 'inline label - visible with data', 'field_6': 'inline label - visible with data', 'GPS Stall 1': 'inline label - visible with data', 'field_8': 'inline label - visible with data', 'GPS Stall 2': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'GPS Stall 3': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'GPS Stall 4': 'inline label - visible with data', 'field_14': 'inline label - visible with data', });
lyr_GPSStore2INTERVENTION_5.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Contact': 'inline label - visible with data', 'Residence': 'inline label - visible with data', 'Residential GPS': 'inline label - visible with data', 'field_6': 'inline label - visible with data', 'GPS Stall 1': 'inline label - visible with data', 'field_8': 'inline label - visible with data', 'GPS Stall 2': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'GPS Stall 3': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'GPS Stall 4': 'inline label - visible with data', 'field_14': 'inline label - visible with data', });
lyr_GPSStore1INTERVENTION_6.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Residence': 'inline label - visible with data', 'Residential GPS': 'inline label - visible with data', 'field_6': 'inline label - visible with data', 'GPS Stall 1': 'inline label - visible with data', 'field_8': 'inline label - visible with data', 'GPS Stall 2': 'inline label - visible with data', 'field_10': 'inline label - visible with data', 'GPS Stall 3': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'GPS Stall 4': 'inline label - visible with data', 'field_14': 'inline label - visible with data', });
lyr_GPSStore1INTERVENTION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
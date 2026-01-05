var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DesaPurwokertoLor_2 = new ol.format.GeoJSON();
var features_DesaPurwokertoLor_2 = format_DesaPurwokertoLor_2.readFeatures(json_DesaPurwokertoLor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPurwokertoLor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPurwokertoLor_2.addFeatures(features_DesaPurwokertoLor_2);
var lyr_DesaPurwokertoLor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPurwokertoLor_2,
maxResolution:28004.466152261964,
 minResolution:1.9603126306583372,

                style: style_DesaPurwokertoLor_2,
                popuplayertitle: 'Desa Purwokerto Lor',
                interactive: true,
                title: '<img src="styles/legend/DesaPurwokertoLor_2.png" /> Desa Purwokerto Lor'
            });
var format_BAngunan_3 = new ol.format.GeoJSON();
var features_BAngunan_3 = format_BAngunan_3.readFeatures(json_BAngunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAngunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAngunan_3.addFeatures(features_BAngunan_3);
var lyr_BAngunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAngunan_3,
maxResolution:0.7001116538065492,
 
                style: style_BAngunan_3,
                popuplayertitle: 'BAngunan',
                interactive: true,
                title: '<img src="styles/legend/BAngunan_3.png" /> BAngunan'
            });
var format_Lapangan_4 = new ol.format.GeoJSON();
var features_Lapangan_4 = format_Lapangan_4.readFeatures(json_Lapangan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_4.addFeatures(features_Lapangan_4);
var lyr_Lapangan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_4,
maxResolution:1.4002233076130983,
 
                style: style_Lapangan_4,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_4.png" /> Lapangan'
            });
var format_Lahan_5 = new ol.format.GeoJSON();
var features_Lahan_5 = format_Lahan_5.readFeatures(json_Lahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_5.addFeatures(features_Lahan_5);
var lyr_Lahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_5,
maxResolution:1.4002233076130983,
 
                style: style_Lahan_5,
                popuplayertitle: 'Lahan',
                interactive: true,
                title: '<img src="styles/legend/Lahan_5.png" /> Lahan'
            });
var format_Makam_6 = new ol.format.GeoJSON();
var features_Makam_6 = format_Makam_6.readFeatures(json_Makam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_6.addFeatures(features_Makam_6);
var lyr_Makam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_6,
maxResolution:1.4002233076130983,
 
                style: style_Makam_6,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_6.png" /> Makam'
            });
var format_JalanDesa_7 = new ol.format.GeoJSON();
var features_JalanDesa_7 = format_JalanDesa_7.readFeatures(json_JalanDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_7.addFeatures(features_JalanDesa_7);
var lyr_JalanDesa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_7,
maxResolution:2.8004466152261966,
 minResolution:0.8401339845678589,

                style: style_JalanDesa_7,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_7.png" /> Jalan Desa'
            });
var format_JalanGang_8 = new ol.format.GeoJSON();
var features_JalanGang_8 = format_JalanGang_8.readFeatures(json_JalanGang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_8.addFeatures(features_JalanGang_8);
var lyr_JalanGang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_8,
maxResolution:1.4002233076130983,
 
                style: style_JalanGang_8,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_8.png" /> Jalan Gang'
            });
var format_JalanKabupaten_9 = new ol.format.GeoJSON();
var features_JalanKabupaten_9 = format_JalanKabupaten_9.readFeatures(json_JalanKabupaten_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_9.addFeatures(features_JalanKabupaten_9);
var lyr_JalanKabupaten_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_9,
maxResolution:5.600893230452393,
 minResolution:1.9603126306583372,

                style: style_JalanKabupaten_9,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_9.png" /> Jalan Kabupaten'
            });
var format_Shop_10 = new ol.format.GeoJSON();
var features_Shop_10 = format_Shop_10.readFeatures(json_Shop_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_10.addFeatures(features_Shop_10);
cluster_Shop_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shop_10
});
var lyr_Shop_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shop_10,
maxResolution:1.4002233076130983,
 
                style: style_Shop_10,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_10.png" /> Shop'
            });
var format_Bank_11 = new ol.format.GeoJSON();
var features_Bank_11 = format_Bank_11.readFeatures(json_Bank_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_11.addFeatures(features_Bank_11);
cluster_Bank_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bank_11
});
var lyr_Bank_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bank_11,
maxResolution:1.4002233076130983,
 
                style: style_Bank_11,
                popuplayertitle: 'Bank',
                interactive: true,
                title: '<img src="styles/legend/Bank_11.png" /> Bank'
            });
var format_FoodDrink_12 = new ol.format.GeoJSON();
var features_FoodDrink_12 = format_FoodDrink_12.readFeatures(json_FoodDrink_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_12.addFeatures(features_FoodDrink_12);
cluster_FoodDrink_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FoodDrink_12
});
var lyr_FoodDrink_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FoodDrink_12,
maxResolution:1.4002233076130983,
 
                style: style_FoodDrink_12,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_12.png" /> Food&Drink'
            });
var format_Penginapan_13 = new ol.format.GeoJSON();
var features_Penginapan_13 = format_Penginapan_13.readFeatures(json_Penginapan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_13.addFeatures(features_Penginapan_13);
cluster_Penginapan_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Penginapan_13
});
var lyr_Penginapan_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Penginapan_13,
maxResolution:1.4002233076130983,
 
                style: style_Penginapan_13,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_13.png" /> Penginapan'
            });
var format_Pemerintahan_14 = new ol.format.GeoJSON();
var features_Pemerintahan_14 = format_Pemerintahan_14.readFeatures(json_Pemerintahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_14.addFeatures(features_Pemerintahan_14);
cluster_Pemerintahan_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pemerintahan_14
});
var lyr_Pemerintahan_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemerintahan_14,
maxResolution:2.8004466152261966,
 
                style: style_Pemerintahan_14,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_14.png" /> Pemerintahan'
            });
var group_Point = new ol.layer.Group({
                                layers: [lyr_Shop_10,lyr_Bank_11,lyr_FoodDrink_12,lyr_Penginapan_13,lyr_Pemerintahan_14,],
                                fold: 'open',
                                title: 'Point'});
var group_Line = new ol.layer.Group({
                                layers: [lyr_JalanDesa_7,lyr_JalanGang_8,lyr_JalanKabupaten_9,],
                                fold: 'open',
                                title: 'Line'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_DesaPurwokertoLor_2,lyr_BAngunan_3,lyr_Lapangan_4,lyr_Lahan_5,lyr_Makam_6,],
                                fold: 'open',
                                title: 'Polygon'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DesaPurwokertoLor_2.setVisible(true);lyr_BAngunan_3.setVisible(true);lyr_Lapangan_4.setVisible(true);lyr_Lahan_5.setVisible(true);lyr_Makam_6.setVisible(true);lyr_JalanDesa_7.setVisible(true);lyr_JalanGang_8.setVisible(true);lyr_JalanKabupaten_9.setVisible(true);lyr_Shop_10.setVisible(true);lyr_Bank_11.setVisible(true);lyr_FoodDrink_12.setVisible(true);lyr_Penginapan_13.setVisible(true);lyr_Pemerintahan_14.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,group_Polygon,group_Line,group_Point];
lyr_DesaPurwokertoLor_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_BAngunan_3.set('fieldAliases', {'fclass': 'fclass', });
lyr_Lapangan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Lahan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Makam_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanDesa_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanGang_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanKabupaten_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Shop_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bank_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FoodDrink_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Penginapan_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pemerintahan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_DesaPurwokertoLor_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BAngunan_3.set('fieldImages', {'fclass': 'TextEdit', });
lyr_Lapangan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lahan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Makam_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanDesa_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanGang_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanKabupaten_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Shop_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bank_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_FoodDrink_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Penginapan_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pemerintahan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DesaPurwokertoLor_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_BAngunan_3.set('fieldLabels', {'fclass': 'hidden field', });
lyr_Lapangan_4.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Lahan_5.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Makam_6.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_JalanDesa_7.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_JalanGang_8.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_JalanKabupaten_9.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Lebar': 'inline label - visible with data', });
lyr_Shop_10.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_Bank_11.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_FoodDrink_12.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', });
lyr_Penginapan_13.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Pemerintahan_14.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Pemerintahan_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Nama_Kranji_2 = new ol.format.GeoJSON();
var features_Nama_Kranji_2 = format_Nama_Kranji_2.readFeatures(json_Nama_Kranji_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Kranji_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_Kranji_2.addFeatures(features_Nama_Kranji_2);
var lyr_Nama_Kranji_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_Kranji_2,
maxResolution:28004.466152261964,
 minResolution:1.9603126306583372,

                style: style_Nama_Kranji_2,
                popuplayertitle: 'Nama_Kranji',
                interactive: true,
                title: '<img src="styles/legend/Nama_Kranji_2.png" /> Nama_Kranji'
            });
var format_Bangunan_3 = new ol.format.GeoJSON();
var features_Bangunan_3 = format_Bangunan_3.readFeatures(json_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_3.addFeatures(features_Bangunan_3);
var lyr_Bangunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_3,
maxResolution:0.7001116538065492,
 
                style: style_Bangunan_3,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_3.png" /> Bangunan'
            });
var format_Kebun_4 = new ol.format.GeoJSON();
var features_Kebun_4 = format_Kebun_4.readFeatures(json_Kebun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_4.addFeatures(features_Kebun_4);
var lyr_Kebun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_4,
maxResolution:1.4002233076130983,
 
                style: style_Kebun_4,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_4.png" /> Kebun'
            });
var format_Sawah_5 = new ol.format.GeoJSON();
var features_Sawah_5 = format_Sawah_5.readFeatures(json_Sawah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_5.addFeatures(features_Sawah_5);
var lyr_Sawah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_5,
maxResolution:1.4002233076130983,
 
                style: style_Sawah_5,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_5.png" /> Sawah'
            });
var format_Lapangan_6 = new ol.format.GeoJSON();
var features_Lapangan_6 = format_Lapangan_6.readFeatures(json_Lapangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_6.addFeatures(features_Lapangan_6);
var lyr_Lapangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_6,
maxResolution:1.4002233076130983,
 
                style: style_Lapangan_6,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_6.png" /> Lapangan'
            });
var format_Makam_7 = new ol.format.GeoJSON();
var features_Makam_7 = format_Makam_7.readFeatures(json_Makam_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_7.addFeatures(features_Makam_7);
var lyr_Makam_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_7,
maxResolution:1.4002233076130983,
 
                style: style_Makam_7,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_7.png" /> Makam'
            });
var format_Sungai_8 = new ol.format.GeoJSON();
var features_Sungai_8 = format_Sungai_8.readFeatures(json_Sungai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_8.addFeatures(features_Sungai_8);
var lyr_Sungai_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_8, 
                style: style_Sungai_8,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_8.png" /> Sungai'
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
maxResolution:4.200669922839294,
 minResolution:1.1201786460904786,

                style: style_JalanKabupaten_9,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_9.png" /> Jalan Kabupaten'
            });
var format_JalanGang_10 = new ol.format.GeoJSON();
var features_JalanGang_10 = format_JalanGang_10.readFeatures(json_JalanGang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_10.addFeatures(features_JalanGang_10);
var lyr_JalanGang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_10,
maxResolution:1.1201786460904786,
 
                style: style_JalanGang_10,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_10.png" /> Jalan Gang'
            });
var format_JalanDesa_11 = new ol.format.GeoJSON();
var features_JalanDesa_11 = format_JalanDesa_11.readFeatures(json_JalanDesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_11.addFeatures(features_JalanDesa_11);
var lyr_JalanDesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_11,
maxResolution:2.240357292180957,
 minResolution:0.5600893230452393,

                style: style_JalanDesa_11,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_11.png" /> Jalan Desa'
            });
var format_TempatIbadah_12 = new ol.format.GeoJSON();
var features_TempatIbadah_12 = format_TempatIbadah_12.readFeatures(json_TempatIbadah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_12.addFeatures(features_TempatIbadah_12);
cluster_TempatIbadah_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatIbadah_12
});
var lyr_TempatIbadah_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatIbadah_12,
maxResolution:1.6802679691357179,
 
                style: style_TempatIbadah_12,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_12.png" /> Tempat Ibadah'
            });
var format_Shop_13 = new ol.format.GeoJSON();
var features_Shop_13 = format_Shop_13.readFeatures(json_Shop_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_13.addFeatures(features_Shop_13);
cluster_Shop_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shop_13
});
var lyr_Shop_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shop_13,
maxResolution:1.4002233076130983,
 
                style: style_Shop_13,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_13.png" /> Shop'
            });
var format_Penginapan_14 = new ol.format.GeoJSON();
var features_Penginapan_14 = format_Penginapan_14.readFeatures(json_Penginapan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_14.addFeatures(features_Penginapan_14);
cluster_Penginapan_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Penginapan_14
});
var lyr_Penginapan_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Penginapan_14,
maxResolution:1.4002233076130983,
 
                style: style_Penginapan_14,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_14.png" /> Penginapan'
            });
var format_Pendidikan_15 = new ol.format.GeoJSON();
var features_Pendidikan_15 = format_Pendidikan_15.readFeatures(json_Pendidikan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_15.addFeatures(features_Pendidikan_15);
cluster_Pendidikan_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pendidikan_15
});
var lyr_Pendidikan_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pendidikan_15,
maxResolution:1.6802679691357179,
 
                style: style_Pendidikan_15,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_15.png" /> Pendidikan'
            });
var format_Pemerintahan_16 = new ol.format.GeoJSON();
var features_Pemerintahan_16 = format_Pemerintahan_16.readFeatures(json_Pemerintahan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_16.addFeatures(features_Pemerintahan_16);
cluster_Pemerintahan_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pemerintahan_16
});
var lyr_Pemerintahan_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemerintahan_16,
maxResolution:2.8004466152261966,
 
                style: style_Pemerintahan_16,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_16.png" /> Pemerintahan'
            });
var format_Kesehatan_17 = new ol.format.GeoJSON();
var features_Kesehatan_17 = format_Kesehatan_17.readFeatures(json_Kesehatan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_17.addFeatures(features_Kesehatan_17);
cluster_Kesehatan_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kesehatan_17
});
var lyr_Kesehatan_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kesehatan_17,
maxResolution:1.4002233076130983,
 
                style: style_Kesehatan_17,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_17.png" /> Kesehatan'
            });
var format_FoodDrink_18 = new ol.format.GeoJSON();
var features_FoodDrink_18 = format_FoodDrink_18.readFeatures(json_FoodDrink_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_18.addFeatures(features_FoodDrink_18);
cluster_FoodDrink_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FoodDrink_18
});
var lyr_FoodDrink_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FoodDrink_18,
maxResolution:1.4002233076130983,
 
                style: style_FoodDrink_18,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_18.png" /> Food&Drink'
            });
var format_Bank_19 = new ol.format.GeoJSON();
var features_Bank_19 = format_Bank_19.readFeatures(json_Bank_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_19.addFeatures(features_Bank_19);
cluster_Bank_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bank_19
});
var lyr_Bank_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bank_19,
maxResolution:1.4002233076130983,
 
                style: style_Bank_19,
                popuplayertitle: 'Bank',
                interactive: true,
                title: '<img src="styles/legend/Bank_19.png" /> Bank'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_TempatIbadah_12,lyr_Shop_13,lyr_Penginapan_14,lyr_Pendidikan_15,lyr_Pemerintahan_16,lyr_Kesehatan_17,lyr_FoodDrink_18,lyr_Bank_19,],
                                fold: 'open',
                                title: 'group1'});
var group_group2 = new ol.layer.Group({
                                layers: [lyr_Sungai_8,lyr_JalanKabupaten_9,lyr_JalanGang_10,lyr_JalanDesa_11,],
                                fold: 'open',
                                title: 'group2'});
var group_group3 = new ol.layer.Group({
                                layers: [lyr_Nama_Kranji_2,lyr_Bangunan_3,lyr_Kebun_4,lyr_Sawah_5,lyr_Lapangan_6,lyr_Makam_7,],
                                fold: 'open',
                                title: 'group3'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Nama_Kranji_2.setVisible(true);lyr_Bangunan_3.setVisible(true);lyr_Kebun_4.setVisible(true);lyr_Sawah_5.setVisible(true);lyr_Lapangan_6.setVisible(true);lyr_Makam_7.setVisible(true);lyr_Sungai_8.setVisible(true);lyr_JalanKabupaten_9.setVisible(true);lyr_JalanGang_10.setVisible(true);lyr_JalanDesa_11.setVisible(true);lyr_TempatIbadah_12.setVisible(true);lyr_Shop_13.setVisible(true);lyr_Penginapan_14.setVisible(true);lyr_Pendidikan_15.setVisible(true);lyr_Pemerintahan_16.setVisible(true);lyr_Kesehatan_17.setVisible(true);lyr_FoodDrink_18.setVisible(true);lyr_Bank_19.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_group3,group_group2,group_group1];
lyr_Nama_Kranji_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Bangunan_3.set('fieldAliases', {'fclass': 'fclass', });
lyr_Kebun_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Sawah_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Lapangan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Makam_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sungai_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanKabupaten_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanGang_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanDesa_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_TempatIbadah_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Shop_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Penginapan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pendidikan_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pemerintahan_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_FoodDrink_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Bank_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Nama_Kranji_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bangunan_3.set('fieldImages', {'fclass': 'TextEdit', });
lyr_Kebun_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Sawah_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lapangan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Makam_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sungai_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanKabupaten_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanGang_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanDesa_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TempatIbadah_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Shop_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Penginapan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pendidikan_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pemerintahan_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FoodDrink_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bank_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_Kranji_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bangunan_3.set('fieldLabels', {'fclass': 'no label', });
lyr_Kebun_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Sawah_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Lapangan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Makam_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Sungai_8.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanKabupaten_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanGang_10.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanDesa_11.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TempatIbadah_12.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Shop_13.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Penginapan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Pendidikan_15.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Pemerintahan_16.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kesehatan_17.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_FoodDrink_18.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Bank_19.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bank_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
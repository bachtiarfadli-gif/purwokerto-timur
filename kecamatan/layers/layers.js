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
var format_Sokanegara_2 = new ol.format.GeoJSON();
var features_Sokanegara_2 = format_Sokanegara_2.readFeatures(json_Sokanegara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sokanegara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sokanegara_2.addFeatures(features_Sokanegara_2);
var lyr_Sokanegara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sokanegara_2,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_Sokanegara_2,
                popuplayertitle: 'Sokanegara',
                interactive: true,
                title: '<img src="styles/legend/Sokanegara_2.png" /> Sokanegara'
            });
var format_PurwokertoWetan_3 = new ol.format.GeoJSON();
var features_PurwokertoWetan_3 = format_PurwokertoWetan_3.readFeatures(json_PurwokertoWetan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PurwokertoWetan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PurwokertoWetan_3.addFeatures(features_PurwokertoWetan_3);
var lyr_PurwokertoWetan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PurwokertoWetan_3,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_PurwokertoWetan_3,
                popuplayertitle: 'Purwokerto Wetan',
                interactive: true,
                title: '<img src="styles/legend/PurwokertoWetan_3.png" /> Purwokerto Wetan'
            });
var format_PurwokertoLor_4 = new ol.format.GeoJSON();
var features_PurwokertoLor_4 = format_PurwokertoLor_4.readFeatures(json_PurwokertoLor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PurwokertoLor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PurwokertoLor_4.addFeatures(features_PurwokertoLor_4);
var lyr_PurwokertoLor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PurwokertoLor_4,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_PurwokertoLor_4,
                popuplayertitle: 'Purwokerto Lor',
                interactive: true,
                title: '<img src="styles/legend/PurwokertoLor_4.png" /> Purwokerto Lor'
            });
var format_Mersi_5 = new ol.format.GeoJSON();
var features_Mersi_5 = format_Mersi_5.readFeatures(json_Mersi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mersi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mersi_5.addFeatures(features_Mersi_5);
var lyr_Mersi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mersi_5,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_Mersi_5,
                popuplayertitle: 'Mersi',
                interactive: true,
                title: '<img src="styles/legend/Mersi_5.png" /> Mersi'
            });
var format_Kranji_6 = new ol.format.GeoJSON();
var features_Kranji_6 = format_Kranji_6.readFeatures(json_Kranji_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kranji_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kranji_6.addFeatures(features_Kranji_6);
var lyr_Kranji_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kranji_6,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_Kranji_6,
                popuplayertitle: 'Kranji',
                interactive: true,
                title: '<img src="styles/legend/Kranji_6.png" /> Kranji'
            });
var format_Arcawinangun_7 = new ol.format.GeoJSON();
var features_Arcawinangun_7 = format_Arcawinangun_7.readFeatures(json_Arcawinangun_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arcawinangun_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arcawinangun_7.addFeatures(features_Arcawinangun_7);
var lyr_Arcawinangun_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arcawinangun_7,
maxResolution:28004.466152261964,
 minResolution:3.3605359382714357,

                style: style_Arcawinangun_7,
                popuplayertitle: 'Arcawinangun',
                interactive: true,
                title: '<img src="styles/legend/Arcawinangun_7.png" /> Arcawinangun'
            });
var format_Sawah_8 = new ol.format.GeoJSON();
var features_Sawah_8 = format_Sawah_8.readFeatures(json_Sawah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_8.addFeatures(features_Sawah_8);
var lyr_Sawah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_8,
maxResolution:0.7001116538065492,
 
                style: style_Sawah_8,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_8.png" /> Sawah'
            });
var format_Makam_9 = new ol.format.GeoJSON();
var features_Makam_9 = format_Makam_9.readFeatures(json_Makam_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_9.addFeatures(features_Makam_9);
var lyr_Makam_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_9,
maxResolution:0.8401339845678589,
 
                style: style_Makam_9,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_9.png" /> Makam'
            });
var format_Lapangan_10 = new ol.format.GeoJSON();
var features_Lapangan_10 = format_Lapangan_10.readFeatures(json_Lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_10.addFeatures(features_Lapangan_10);
var lyr_Lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_10,
maxResolution:0.8401339845678589,
 
                style: style_Lapangan_10,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_10.png" /> Lapangan'
            });
var format_Kebun_11 = new ol.format.GeoJSON();
var features_Kebun_11 = format_Kebun_11.readFeatures(json_Kebun_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_11.addFeatures(features_Kebun_11);
var lyr_Kebun_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_11,
maxResolution:0.7001116538065492,
 
                style: style_Kebun_11,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_11.png" /> Kebun'
            });
var format_Bangunan_12 = new ol.format.GeoJSON();
var features_Bangunan_12 = format_Bangunan_12.readFeatures(json_Bangunan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_12.addFeatures(features_Bangunan_12);
var lyr_Bangunan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_12,
maxResolution:0.7001116538065492,
 
                style: style_Bangunan_12,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_12.png" /> Bangunan'
            });
var format_Sungai_13 = new ol.format.GeoJSON();
var features_Sungai_13 = format_Sungai_13.readFeatures(json_Sungai_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_13.addFeatures(features_Sungai_13);
var lyr_Sungai_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_13,
maxResolution:2.8004466152261966,
 
                style: style_Sungai_13,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_13.png" /> Sungai'
            });
var format_JalanGang_14 = new ol.format.GeoJSON();
var features_JalanGang_14 = format_JalanGang_14.readFeatures(json_JalanGang_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_14.addFeatures(features_JalanGang_14);
var lyr_JalanGang_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_14,
maxResolution:1.1201786460904786,
 
                style: style_JalanGang_14,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_14.png" /> Jalan Gang'
            });
var format_JalanDesa_15 = new ol.format.GeoJSON();
var features_JalanDesa_15 = format_JalanDesa_15.readFeatures(json_JalanDesa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_15.addFeatures(features_JalanDesa_15);
var lyr_JalanDesa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_15,
maxResolution:1.9603126306583372,
 minResolution:0.28004466152261964,

                style: style_JalanDesa_15,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_15.png" /> Jalan Desa'
            });
var format_JalanKabupaten_16 = new ol.format.GeoJSON();
var features_JalanKabupaten_16 = format_JalanKabupaten_16.readFeatures(json_JalanKabupaten_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_16.addFeatures(features_JalanKabupaten_16);
var lyr_JalanKabupaten_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_16,
maxResolution:4.200669922839294,
 minResolution:1.4002233076130983,

                style: style_JalanKabupaten_16,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_16.png" /> Jalan Kabupaten'
            });
var format_TempatIbadah_17 = new ol.format.GeoJSON();
var features_TempatIbadah_17 = format_TempatIbadah_17.readFeatures(json_TempatIbadah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_17.addFeatures(features_TempatIbadah_17);
cluster_TempatIbadah_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatIbadah_17
});
var lyr_TempatIbadah_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatIbadah_17,
maxResolution:1.4002233076130983,
 
                style: style_TempatIbadah_17,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_17.png" /> Tempat Ibadah'
            });
var format_Shop_18 = new ol.format.GeoJSON();
var features_Shop_18 = format_Shop_18.readFeatures(json_Shop_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_18.addFeatures(features_Shop_18);
cluster_Shop_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shop_18
});
var lyr_Shop_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shop_18,
maxResolution:1.4002233076130983,
 
                style: style_Shop_18,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_18.png" /> Shop'
            });
var format_Penginapan_19 = new ol.format.GeoJSON();
var features_Penginapan_19 = format_Penginapan_19.readFeatures(json_Penginapan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_19.addFeatures(features_Penginapan_19);
cluster_Penginapan_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Penginapan_19
});
var lyr_Penginapan_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Penginapan_19,
maxResolution:1.4002233076130983,
 
                style: style_Penginapan_19,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_19.png" /> Penginapan'
            });
var format_Pendidikan_20 = new ol.format.GeoJSON();
var features_Pendidikan_20 = format_Pendidikan_20.readFeatures(json_Pendidikan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_20.addFeatures(features_Pendidikan_20);
cluster_Pendidikan_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pendidikan_20
});
var lyr_Pendidikan_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pendidikan_20,
maxResolution:1.4002233076130983,
 
                style: style_Pendidikan_20,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_20.png" /> Pendidikan'
            });
var format_Pemerintahan_21 = new ol.format.GeoJSON();
var features_Pemerintahan_21 = format_Pemerintahan_21.readFeatures(json_Pemerintahan_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_21.addFeatures(features_Pemerintahan_21);
cluster_Pemerintahan_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pemerintahan_21
});
var lyr_Pemerintahan_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemerintahan_21,
maxResolution:1.4002233076130983,
 
                style: style_Pemerintahan_21,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_21.png" /> Pemerintahan'
            });
var format_Kesehatan_22 = new ol.format.GeoJSON();
var features_Kesehatan_22 = format_Kesehatan_22.readFeatures(json_Kesehatan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_22.addFeatures(features_Kesehatan_22);
cluster_Kesehatan_22 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kesehatan_22
});
var lyr_Kesehatan_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kesehatan_22,
maxResolution:1.4002233076130983,
 
                style: style_Kesehatan_22,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_22.png" /> Kesehatan'
            });
var format_FoodDrink_23 = new ol.format.GeoJSON();
var features_FoodDrink_23 = format_FoodDrink_23.readFeatures(json_FoodDrink_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_23.addFeatures(features_FoodDrink_23);
cluster_FoodDrink_23 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FoodDrink_23
});
var lyr_FoodDrink_23 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FoodDrink_23,
maxResolution:1.4002233076130983,
 
                style: style_FoodDrink_23,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_23.png" /> Food&Drink'
            });
var format_Bank_24 = new ol.format.GeoJSON();
var features_Bank_24 = format_Bank_24.readFeatures(json_Bank_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_24.addFeatures(features_Bank_24);
cluster_Bank_24 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bank_24
});
var lyr_Bank_24 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bank_24,
maxResolution:1.4002233076130983,
 
                style: style_Bank_24,
                popuplayertitle: 'Bank',
                interactive: true,
                title: '<img src="styles/legend/Bank_24.png" /> Bank'
            });
var group_Point = new ol.layer.Group({
                                layers: [lyr_TempatIbadah_17,lyr_Shop_18,lyr_Penginapan_19,lyr_Pendidikan_20,lyr_Pemerintahan_21,lyr_Kesehatan_22,lyr_FoodDrink_23,lyr_Bank_24,],
                                fold: 'open',
                                title: 'Point'});
var group_Line = new ol.layer.Group({
                                layers: [lyr_Sungai_13,lyr_JalanGang_14,lyr_JalanDesa_15,lyr_JalanKabupaten_16,],
                                fold: 'open',
                                title: 'Line'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_Sokanegara_2,lyr_PurwokertoWetan_3,lyr_PurwokertoLor_4,lyr_Mersi_5,lyr_Kranji_6,lyr_Arcawinangun_7,lyr_Sawah_8,lyr_Makam_9,lyr_Lapangan_10,lyr_Kebun_11,lyr_Bangunan_12,],
                                fold: 'open',
                                title: 'Polygon'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Sokanegara_2.setVisible(true);lyr_PurwokertoWetan_3.setVisible(true);lyr_PurwokertoLor_4.setVisible(true);lyr_Mersi_5.setVisible(true);lyr_Kranji_6.setVisible(true);lyr_Arcawinangun_7.setVisible(true);lyr_Sawah_8.setVisible(true);lyr_Makam_9.setVisible(true);lyr_Lapangan_10.setVisible(true);lyr_Kebun_11.setVisible(true);lyr_Bangunan_12.setVisible(true);lyr_Sungai_13.setVisible(true);lyr_JalanGang_14.setVisible(true);lyr_JalanDesa_15.setVisible(true);lyr_JalanKabupaten_16.setVisible(true);lyr_TempatIbadah_17.setVisible(true);lyr_Shop_18.setVisible(true);lyr_Penginapan_19.setVisible(true);lyr_Pendidikan_20.setVisible(true);lyr_Pemerintahan_21.setVisible(true);lyr_Kesehatan_22.setVisible(true);lyr_FoodDrink_23.setVisible(true);lyr_Bank_24.setVisible(true);
var layersList = [group_Polygon,group_Line,group_Point];
lyr_Sokanegara_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_PurwokertoWetan_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_PurwokertoLor_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Mersi_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Kranji_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Arcawinangun_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Makam_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Kebun_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Bangunan_12.set('fieldAliases', {'fclass': 'fclass', });
lyr_Sungai_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanGang_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanDesa_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanKabupaten_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_TempatIbadah_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Shop_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Penginapan_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_FoodDrink_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bank_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sokanegara_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PurwokertoWetan_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PurwokertoLor_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Mersi_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kranji_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Arcawinangun_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Makam_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Kebun_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bangunan_12.set('fieldImages', {'fclass': 'TextEdit', });
lyr_Sungai_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanGang_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanDesa_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanKabupaten_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_TempatIbadah_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Shop_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Penginapan_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pemerintahan_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FoodDrink_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bank_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sokanegara_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_PurwokertoWetan_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_PurwokertoLor_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Mersi_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kranji_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Arcawinangun_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Sawah_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Makam_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Lapangan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Kebun_11.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Bangunan_12.set('fieldLabels', {'fclass': 'no label', });
lyr_Sungai_13.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanGang_14.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanDesa_15.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanKabupaten_16.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_TempatIbadah_17.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Shop_18.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Penginapan_19.set('fieldLabels', {'id': 'inline label - always visible', 'Nama': 'inline label - visible with data', });
lyr_Pendidikan_20.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Pemerintahan_21.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - always visible', });
lyr_Kesehatan_22.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_FoodDrink_23.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bank_24.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bank_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
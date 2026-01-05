var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Nama_Sokanegara_1 = new ol.format.GeoJSON();
var features_Nama_Sokanegara_1 = format_Nama_Sokanegara_1.readFeatures(json_Nama_Sokanegara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Sokanegara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_Sokanegara_1.addFeatures(features_Nama_Sokanegara_1);
var lyr_Nama_Sokanegara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_Sokanegara_1,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_Sokanegara_1,
                popuplayertitle: 'Nama_Sokanegara',
                interactive: true,
                title: '<img src="styles/legend/Nama_Sokanegara_1.png" /> Nama_Sokanegara'
            });
var format_Nama_PurwokertoWetan_2 = new ol.format.GeoJSON();
var features_Nama_PurwokertoWetan_2 = format_Nama_PurwokertoWetan_2.readFeatures(json_Nama_PurwokertoWetan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_PurwokertoWetan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_PurwokertoWetan_2.addFeatures(features_Nama_PurwokertoWetan_2);
var lyr_Nama_PurwokertoWetan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_PurwokertoWetan_2,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_PurwokertoWetan_2,
                popuplayertitle: 'Nama_Purwokerto Wetan',
                interactive: true,
                title: '<img src="styles/legend/Nama_PurwokertoWetan_2.png" /> Nama_Purwokerto Wetan'
            });
var format_Nama_PurwokertoLor_3 = new ol.format.GeoJSON();
var features_Nama_PurwokertoLor_3 = format_Nama_PurwokertoLor_3.readFeatures(json_Nama_PurwokertoLor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_PurwokertoLor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_PurwokertoLor_3.addFeatures(features_Nama_PurwokertoLor_3);
var lyr_Nama_PurwokertoLor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_PurwokertoLor_3,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_PurwokertoLor_3,
                popuplayertitle: 'Nama_Purwokerto Lor',
                interactive: true,
                title: '<img src="styles/legend/Nama_PurwokertoLor_3.png" /> Nama_Purwokerto Lor'
            });
var format_Nama_Mersi_4 = new ol.format.GeoJSON();
var features_Nama_Mersi_4 = format_Nama_Mersi_4.readFeatures(json_Nama_Mersi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Mersi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_Mersi_4.addFeatures(features_Nama_Mersi_4);
var lyr_Nama_Mersi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_Mersi_4,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_Mersi_4,
                popuplayertitle: 'Nama_Mersi',
                interactive: true,
                title: '<img src="styles/legend/Nama_Mersi_4.png" /> Nama_Mersi'
            });
var format_Nama_Kranji_5 = new ol.format.GeoJSON();
var features_Nama_Kranji_5 = format_Nama_Kranji_5.readFeatures(json_Nama_Kranji_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Kranji_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_Kranji_5.addFeatures(features_Nama_Kranji_5);
var lyr_Nama_Kranji_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_Kranji_5,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_Kranji_5,
                popuplayertitle: 'Nama_Kranji',
                interactive: true,
                title: '<img src="styles/legend/Nama_Kranji_5.png" /> Nama_Kranji'
            });
var format_Nama_Arcawinangun_6 = new ol.format.GeoJSON();
var features_Nama_Arcawinangun_6 = format_Nama_Arcawinangun_6.readFeatures(json_Nama_Arcawinangun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nama_Arcawinangun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nama_Arcawinangun_6.addFeatures(features_Nama_Arcawinangun_6);
var lyr_Nama_Arcawinangun_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nama_Arcawinangun_6,
maxResolution:28004.466152261964,
 minResolution:2.8004466152261966,

                style: style_Nama_Arcawinangun_6,
                popuplayertitle: 'Nama_Arcawinangun',
                interactive: true,
                title: '<img src="styles/legend/Nama_Arcawinangun_6.png" /> Nama_Arcawinangun'
            });
var format_Sawah_7 = new ol.format.GeoJSON();
var features_Sawah_7 = format_Sawah_7.readFeatures(json_Sawah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_7.addFeatures(features_Sawah_7);
var lyr_Sawah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_7,
maxResolution:0.7001116538065492,
 
                style: style_Sawah_7,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_7.png" /> Sawah'
            });
var format_Makam_8 = new ol.format.GeoJSON();
var features_Makam_8 = format_Makam_8.readFeatures(json_Makam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_8.addFeatures(features_Makam_8);
var lyr_Makam_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_8,
maxResolution:0.8401339845678589,
 
                style: style_Makam_8,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_8.png" /> Makam'
            });
var format_Lapangan_9 = new ol.format.GeoJSON();
var features_Lapangan_9 = format_Lapangan_9.readFeatures(json_Lapangan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_9.addFeatures(features_Lapangan_9);
var lyr_Lapangan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_9,
maxResolution:0.8401339845678589,
 
                style: style_Lapangan_9,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_9.png" /> Lapangan'
            });
var format_Kebun_10 = new ol.format.GeoJSON();
var features_Kebun_10 = format_Kebun_10.readFeatures(json_Kebun_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_10.addFeatures(features_Kebun_10);
var lyr_Kebun_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_10,
maxResolution:0.7001116538065492,
 
                style: style_Kebun_10,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_10.png" /> Kebun'
            });
var format_Bangunan_11 = new ol.format.GeoJSON();
var features_Bangunan_11 = format_Bangunan_11.readFeatures(json_Bangunan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_11.addFeatures(features_Bangunan_11);
var lyr_Bangunan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_11,
maxResolution:0.5600893230452393,
 
                style: style_Bangunan_11,
                popuplayertitle: 'Bangunan',
                interactive: false,
                title: '<img src="styles/legend/Bangunan_11.png" /> Bangunan'
            });
var format_Sungai_12 = new ol.format.GeoJSON();
var features_Sungai_12 = format_Sungai_12.readFeatures(json_Sungai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_12.addFeatures(features_Sungai_12);
var lyr_Sungai_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_12,
maxResolution:2.8004466152261966,
 
                style: style_Sungai_12,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_12.png" /> Sungai'
            });
var format_JalanKabupaten_13 = new ol.format.GeoJSON();
var features_JalanKabupaten_13 = format_JalanKabupaten_13.readFeatures(json_JalanKabupaten_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_13.addFeatures(features_JalanKabupaten_13);
var lyr_JalanKabupaten_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_13,
maxResolution:2.8004466152261966,
 
                style: style_JalanKabupaten_13,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_13.png" /> Jalan Kabupaten'
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
maxResolution:0.8401339845678589,
 
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
maxResolution:1.6802679691357179,
 
                style: style_JalanDesa_15,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_15.png" /> Jalan Desa'
            });
var format_TempatIbadah_16 = new ol.format.GeoJSON();
var features_TempatIbadah_16 = format_TempatIbadah_16.readFeatures(json_TempatIbadah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_16.addFeatures(features_TempatIbadah_16);
var lyr_TempatIbadah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_16,
maxResolution:1.4002233076130983,
 
                style: style_TempatIbadah_16,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_16.png" /> Tempat Ibadah'
            });
var format_Shop_17 = new ol.format.GeoJSON();
var features_Shop_17 = format_Shop_17.readFeatures(json_Shop_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_17.addFeatures(features_Shop_17);
cluster_Shop_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shop_17
});
var lyr_Shop_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shop_17,
maxResolution:1.4002233076130983,
 
                style: style_Shop_17,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_17.png" /> Shop'
            });
var format_Penginapan_18 = new ol.format.GeoJSON();
var features_Penginapan_18 = format_Penginapan_18.readFeatures(json_Penginapan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_18.addFeatures(features_Penginapan_18);
cluster_Penginapan_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Penginapan_18
});
var lyr_Penginapan_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Penginapan_18,
maxResolution:1.4002233076130983,
 
                style: style_Penginapan_18,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_18.png" /> Penginapan'
            });
var format_Pendidikan_19 = new ol.format.GeoJSON();
var features_Pendidikan_19 = format_Pendidikan_19.readFeatures(json_Pendidikan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_19.addFeatures(features_Pendidikan_19);
cluster_Pendidikan_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pendidikan_19
});
var lyr_Pendidikan_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pendidikan_19,
maxResolution:1.4002233076130983,
 
                style: style_Pendidikan_19,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_19.png" /> Pendidikan'
            });
var format_Pemerintahan_20 = new ol.format.GeoJSON();
var features_Pemerintahan_20 = format_Pemerintahan_20.readFeatures(json_Pemerintahan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_20.addFeatures(features_Pemerintahan_20);
var lyr_Pemerintahan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_20,
maxResolution:1.4002233076130983,
 
                style: style_Pemerintahan_20,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_20.png" /> Pemerintahan'
            });
var format_Kesehatan_21 = new ol.format.GeoJSON();
var features_Kesehatan_21 = format_Kesehatan_21.readFeatures(json_Kesehatan_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_21.addFeatures(features_Kesehatan_21);
cluster_Kesehatan_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kesehatan_21
});
var lyr_Kesehatan_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kesehatan_21,
maxResolution:1.4002233076130983,
 
                style: style_Kesehatan_21,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_21.png" /> Kesehatan'
            });
var format_FoodDrink_22 = new ol.format.GeoJSON();
var features_FoodDrink_22 = format_FoodDrink_22.readFeatures(json_FoodDrink_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_22.addFeatures(features_FoodDrink_22);
cluster_FoodDrink_22 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FoodDrink_22
});
var lyr_FoodDrink_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FoodDrink_22,
maxResolution:1.4002233076130983,
 
                style: style_FoodDrink_22,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_22.png" /> Food&Drink'
            });
var format_Bank_23 = new ol.format.GeoJSON();
var features_Bank_23 = format_Bank_23.readFeatures(json_Bank_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_23.addFeatures(features_Bank_23);
cluster_Bank_23 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bank_23
});
var lyr_Bank_23 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bank_23,
maxResolution:1.4002233076130983,
 
                style: style_Bank_23,
                popuplayertitle: 'Bank',
                interactive: true,
                title: '<img src="styles/legend/Bank_23.png" /> Bank'
            });
var group_group3 = new ol.layer.Group({
                                layers: [lyr_TempatIbadah_16,lyr_Shop_17,lyr_Penginapan_18,lyr_Pendidikan_19,lyr_Pemerintahan_20,lyr_Kesehatan_21,lyr_FoodDrink_22,lyr_Bank_23,],
                                fold: 'open',
                                title: 'group3'});
var group_group2 = new ol.layer.Group({
                                layers: [lyr_Sungai_12,lyr_JalanKabupaten_13,lyr_JalanGang_14,lyr_JalanDesa_15,],
                                fold: 'open',
                                title: 'group2'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_Nama_Sokanegara_1,lyr_Nama_PurwokertoWetan_2,lyr_Nama_PurwokertoLor_3,lyr_Nama_Mersi_4,lyr_Nama_Kranji_5,lyr_Nama_Arcawinangun_6,lyr_Sawah_7,lyr_Makam_8,lyr_Lapangan_9,lyr_Kebun_10,lyr_Bangunan_11,],
                                fold: 'open',
                                title: 'group1'});

lyr_GoogleMaps_0.setVisible(true);lyr_Nama_Sokanegara_1.setVisible(true);lyr_Nama_PurwokertoWetan_2.setVisible(true);lyr_Nama_PurwokertoLor_3.setVisible(true);lyr_Nama_Mersi_4.setVisible(true);lyr_Nama_Kranji_5.setVisible(true);lyr_Nama_Arcawinangun_6.setVisible(true);lyr_Sawah_7.setVisible(true);lyr_Makam_8.setVisible(true);lyr_Lapangan_9.setVisible(true);lyr_Kebun_10.setVisible(true);lyr_Bangunan_11.setVisible(true);lyr_Sungai_12.setVisible(true);lyr_JalanKabupaten_13.setVisible(true);lyr_JalanGang_14.setVisible(true);lyr_JalanDesa_15.setVisible(true);lyr_TempatIbadah_16.setVisible(true);lyr_Shop_17.setVisible(true);lyr_Penginapan_18.setVisible(true);lyr_Pendidikan_19.setVisible(true);lyr_Pemerintahan_20.setVisible(true);lyr_Kesehatan_21.setVisible(true);lyr_FoodDrink_22.setVisible(true);lyr_Bank_23.setVisible(true);
var layersList = [group_group1,group_group2,group_group3];
lyr_Nama_Sokanegara_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Nama_PurwokertoWetan_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Nama_PurwokertoLor_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Nama_Mersi_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Nama_Kranji_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Nama_Arcawinangun_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Makam_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Kebun_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Bangunan_11.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_Sungai_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanKabupaten_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'path': 'path', });
lyr_JalanGang_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_JalanDesa_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', 'layer': 'layer', 'path': 'path', });
lyr_TempatIbadah_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Shop_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Penginapan_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pendidikan_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Pemerintahan_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_FoodDrink_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'layer': 'layer', 'path': 'path', });
lyr_Bank_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Nama_Sokanegara_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_PurwokertoWetan_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_PurwokertoLor_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_Mersi_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_Kranji_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_Arcawinangun_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Makam_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Kebun_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bangunan_11.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Sungai_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanKabupaten_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanGang_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanDesa_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TempatIbadah_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Shop_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Penginapan_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pendidikan_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pemerintahan_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FoodDrink_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bank_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Nama_Sokanegara_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Nama_PurwokertoWetan_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Nama_PurwokertoLor_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Nama_Mersi_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Nama_Kranji_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Nama_Arcawinangun_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Sawah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Makam_8.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Lapangan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Kebun_10.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Bangunan_11.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sungai_12.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanKabupaten_13.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'path': 'no label', });
lyr_JalanGang_14.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanDesa_15.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TempatIbadah_16.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Shop_17.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Penginapan_18.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Pendidikan_19.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Pemerintahan_20.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kesehatan_21.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_FoodDrink_22.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'layer': 'no label', 'path': 'no label', });
lyr_Bank_23.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bank_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
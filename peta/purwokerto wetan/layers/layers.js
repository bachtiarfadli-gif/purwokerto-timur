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
var format_RW_2 = new ol.format.GeoJSON();
var features_RW_2 = format_RW_2.readFeatures(json_RW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_2.addFeatures(features_RW_2);
var lyr_RW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_2,
maxResolution:56.00893230452392,
 minResolution:1.9603126306583372,

                style: style_RW_2,
                popuplayertitle: 'RW',
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_2_0.png" /> 01<br />\
    <img src="styles/legend/RW_2_1.png" /> 02<br />\
    <img src="styles/legend/RW_2_2.png" /> 03<br />\
    <img src="styles/legend/RW_2_3.png" /> 04<br />\
    <img src="styles/legend/RW_2_4.png" /> 05<br />\
    <img src="styles/legend/RW_2_5.png" /> 06<br />\
    <img src="styles/legend/RW_2_6.png" /> 07<br />\
    <img src="styles/legend/RW_2_7.png" /> 08<br />\
    <img src="styles/legend/RW_2_8.png" /> 09<br />\
    <img src="styles/legend/RW_2_9.png" /> 10<br />\
    <img src="styles/legend/RW_2_10.png" /> 11<br />\
    <img src="styles/legend/RW_2_11.png" /> <br />' });
var format_RT_3 = new ol.format.GeoJSON();
var features_RT_3 = format_RT_3.readFeatures(json_RT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_3.addFeatures(features_RT_3);
var lyr_RT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_3,
maxResolution:2.8004466152261966,
 minResolution:1.6802679691357179,

                style: style_RT_3,
                popuplayertitle: 'RT',
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_3_0.png" /> <br />\
    <img src="styles/legend/RT_3_1.png" /> 01<br />\
    <img src="styles/legend/RT_3_2.png" /> 02<br />\
    <img src="styles/legend/RT_3_3.png" /> 03<br />\
    <img src="styles/legend/RT_3_4.png" /> 0305<br />\
    <img src="styles/legend/RT_3_5.png" /> 04<br />\
    <img src="styles/legend/RT_3_6.png" /> 05<br />\
    <img src="styles/legend/RT_3_7.png" /> 06<br />' });
var format_Sawah_4 = new ol.format.GeoJSON();
var features_Sawah_4 = format_Sawah_4.readFeatures(json_Sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_4.addFeatures(features_Sawah_4);
var lyr_Sawah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_4,
maxResolution:1.1201786460904786,
 
                style: style_Sawah_4,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_4.png" /> Sawah'
            });
var format_Bangunan_5 = new ol.format.GeoJSON();
var features_Bangunan_5 = format_Bangunan_5.readFeatures(json_Bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_5.addFeatures(features_Bangunan_5);
var lyr_Bangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_5,
maxResolution:0.7001116538065492,
 
                style: style_Bangunan_5,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_5.png" /> Bangunan'
            });
var format_Ladang_6 = new ol.format.GeoJSON();
var features_Ladang_6 = format_Ladang_6.readFeatures(json_Ladang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_6.addFeatures(features_Ladang_6);
var lyr_Ladang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladang_6,
maxResolution:1.1201786460904786,
 
                style: style_Ladang_6,
                popuplayertitle: 'Ladang',
                interactive: true,
                title: '<img src="styles/legend/Ladang_6.png" /> Ladang'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7,
maxResolution:1.1201786460904786,
 
                style: style_Lapangan_7,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_PurwokertoWetan_8 = new ol.format.GeoJSON();
var features_PurwokertoWetan_8 = format_PurwokertoWetan_8.readFeatures(json_PurwokertoWetan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PurwokertoWetan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PurwokertoWetan_8.addFeatures(features_PurwokertoWetan_8);
var lyr_PurwokertoWetan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PurwokertoWetan_8, 
                style: style_PurwokertoWetan_8,
                popuplayertitle: 'Purwokerto Wetan',
                interactive: true,
                title: '<img src="styles/legend/PurwokertoWetan_8.png" /> Purwokerto Wetan'
            });
var format_Sekolah_9 = new ol.format.GeoJSON();
var features_Sekolah_9 = format_Sekolah_9.readFeatures(json_Sekolah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_9.addFeatures(features_Sekolah_9);
cluster_Sekolah_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Sekolah_9
});
var lyr_Sekolah_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Sekolah_9,
maxResolution:1.4002233076130983,
 
                style: style_Sekolah_9,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_9.png" /> Sekolah'
            });
var format_Swalayan_10 = new ol.format.GeoJSON();
var features_Swalayan_10 = format_Swalayan_10.readFeatures(json_Swalayan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swalayan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swalayan_10.addFeatures(features_Swalayan_10);
cluster_Swalayan_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Swalayan_10
});
var lyr_Swalayan_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Swalayan_10,
maxResolution:1.1201786460904786,
 
                style: style_Swalayan_10,
                popuplayertitle: 'Swalayan',
                interactive: true,
                title: '<img src="styles/legend/Swalayan_10.png" /> Swalayan'
            });
var format_TempatIbadah_11 = new ol.format.GeoJSON();
var features_TempatIbadah_11 = format_TempatIbadah_11.readFeatures(json_TempatIbadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_11.addFeatures(features_TempatIbadah_11);
cluster_TempatIbadah_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatIbadah_11
});
var lyr_TempatIbadah_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatIbadah_11,
maxResolution:1.1201786460904786,
 
                style: style_TempatIbadah_11,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_11.png" /> Tempat Ibadah'
            });
var format_TempatMakanMinum_12 = new ol.format.GeoJSON();
var features_TempatMakanMinum_12 = format_TempatMakanMinum_12.readFeatures(json_TempatMakanMinum_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatMakanMinum_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakanMinum_12.addFeatures(features_TempatMakanMinum_12);
cluster_TempatMakanMinum_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatMakanMinum_12
});
var lyr_TempatMakanMinum_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatMakanMinum_12,
maxResolution:0.9801563153291686,
 
                style: style_TempatMakanMinum_12,
                popuplayertitle: 'Tempat Makan Minum',
                interactive: true,
                title: '<img src="styles/legend/TempatMakanMinum_12.png" /> Tempat Makan Minum'
            });
var format_TempatKesehatan_13 = new ol.format.GeoJSON();
var features_TempatKesehatan_13 = format_TempatKesehatan_13.readFeatures(json_TempatKesehatan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatKesehatan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatKesehatan_13.addFeatures(features_TempatKesehatan_13);
cluster_TempatKesehatan_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatKesehatan_13
});
var lyr_TempatKesehatan_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatKesehatan_13,
maxResolution:1.6802679691357179,
 
                style: style_TempatKesehatan_13,
                popuplayertitle: 'Tempat Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/TempatKesehatan_13.png" /> Tempat Kesehatan'
            });
var format_Kuburan_14 = new ol.format.GeoJSON();
var features_Kuburan_14 = format_Kuburan_14.readFeatures(json_Kuburan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_14.addFeatures(features_Kuburan_14);
cluster_Kuburan_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kuburan_14
});
var lyr_Kuburan_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kuburan_14,
maxResolution:1.4002233076130983,
 
                style: style_Kuburan_14,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_14.png" /> Kuburan'
            });
var format_Hotel_15 = new ol.format.GeoJSON();
var features_Hotel_15 = format_Hotel_15.readFeatures(json_Hotel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_15.addFeatures(features_Hotel_15);
cluster_Hotel_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hotel_15
});
var lyr_Hotel_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hotel_15,
maxResolution:1.4002233076130983,
 
                style: style_Hotel_15,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_15.png" /> Hotel'
            });
var format_TempatPemerintahan_16 = new ol.format.GeoJSON();
var features_TempatPemerintahan_16 = format_TempatPemerintahan_16.readFeatures(json_TempatPemerintahan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPemerintahan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPemerintahan_16.addFeatures(features_TempatPemerintahan_16);
cluster_TempatPemerintahan_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatPemerintahan_16
});
var lyr_TempatPemerintahan_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatPemerintahan_16, 
                style: style_TempatPemerintahan_16,
                popuplayertitle: 'Tempat Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/TempatPemerintahan_16.png" /> Tempat Pemerintahan'
            });
var format_Sungai_17 = new ol.format.GeoJSON();
var features_Sungai_17 = format_Sungai_17.readFeatures(json_Sungai_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_17.addFeatures(features_Sungai_17);
var lyr_Sungai_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_17, 
                style: style_Sungai_17,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_17.png" /> Sungai'
            });
var format_Gang_18 = new ol.format.GeoJSON();
var features_Gang_18 = format_Gang_18.readFeatures(json_Gang_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_18.addFeatures(features_Gang_18);
var lyr_Gang_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_18,
maxResolution:1.4002233076130983,
 
                style: style_Gang_18,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_18.png" /> Gang'
            });
var format_JalanDesa_19 = new ol.format.GeoJSON();
var features_JalanDesa_19 = format_JalanDesa_19.readFeatures(json_JalanDesa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_19.addFeatures(features_JalanDesa_19);
var lyr_JalanDesa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_19,
maxResolution:1.9603126306583372,
 
                style: style_JalanDesa_19,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_19.png" /> Jalan Desa'
            });
var format_JalanKabupaten_20 = new ol.format.GeoJSON();
var features_JalanKabupaten_20 = format_JalanKabupaten_20.readFeatures(json_JalanKabupaten_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_20.addFeatures(features_JalanKabupaten_20);
var lyr_JalanKabupaten_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_20,
maxResolution:2.8004466152261966,
 minResolution:1.4002233076130983,

                style: style_JalanKabupaten_20,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_20.png" /> Jalan Kabupaten'
            });
var group_Line = new ol.layer.Group({
                                layers: [lyr_Sungai_17,lyr_Gang_18,lyr_JalanDesa_19,lyr_JalanKabupaten_20,],
                                fold: 'open',
                                title: 'Line'});
var group_Point = new ol.layer.Group({
                                layers: [lyr_Sekolah_9,lyr_Swalayan_10,lyr_TempatIbadah_11,lyr_TempatMakanMinum_12,lyr_TempatKesehatan_13,lyr_Kuburan_14,lyr_Hotel_15,lyr_TempatPemerintahan_16,],
                                fold: 'open',
                                title: 'Point'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_RW_2,lyr_RT_3,lyr_Sawah_4,lyr_Bangunan_5,lyr_Ladang_6,lyr_Lapangan_7,lyr_PurwokertoWetan_8,],
                                fold: 'open',
                                title: 'Polygon'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_RW_2.setVisible(true);lyr_RT_3.setVisible(true);lyr_Sawah_4.setVisible(true);lyr_Bangunan_5.setVisible(true);lyr_Ladang_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_PurwokertoWetan_8.setVisible(true);lyr_Sekolah_9.setVisible(true);lyr_Swalayan_10.setVisible(true);lyr_TempatIbadah_11.setVisible(true);lyr_TempatMakanMinum_12.setVisible(true);lyr_TempatKesehatan_13.setVisible(true);lyr_Kuburan_14.setVisible(true);lyr_Hotel_15.setVisible(true);lyr_TempatPemerintahan_16.setVisible(true);lyr_Sungai_17.setVisible(true);lyr_Gang_18.setVisible(true);lyr_JalanDesa_19.setVisible(true);lyr_JalanKabupaten_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_Polygon,group_Point,group_Line];
lyr_RW_2.set('fieldAliases', {'id': 'id', 'RW': 'RW', });
lyr_RT_3.set('fieldAliases', {'id': 'id', 'RT': 'RT', 'RW': 'RW', });
lyr_Sawah_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bangunan_5.set('fieldAliases', {'fclass': 'fclass', });
lyr_Ladang_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_PurwokertoWetan_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Swalayan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatMakanMinum_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatKesehatan_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kuburan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Hotel_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatPemerintahan_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sungai_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_Gang_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanDesa_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanKabupaten_20.set('fieldAliases', {'fclass': 'fclass', });
lyr_RW_2.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', });
lyr_RT_3.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_Sawah_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'fclass': 'TextEdit', });
lyr_Ladang_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PurwokertoWetan_8.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Sekolah_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Swalayan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatMakanMinum_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatKesehatan_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kuburan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Hotel_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatPemerintahan_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sungai_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Gang_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanDesa_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanKabupaten_20.set('fieldImages', {'fclass': 'TextEdit', });
lyr_RW_2.set('fieldLabels', {'id': 'no label', 'RW': 'inline label - visible with data', });
lyr_RT_3.set('fieldLabels', {'id': 'no label', 'RT': 'inline label - visible with data', 'RW': 'no label', });
lyr_Sawah_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Bangunan_5.set('fieldLabels', {'fclass': 'no label', });
lyr_Ladang_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_PurwokertoWetan_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sekolah_9.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Swalayan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_TempatIbadah_11.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_TempatMakanMinum_12.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_TempatKesehatan_13.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kuburan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Hotel_15.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_TempatPemerintahan_16.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Sungai_17.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_Gang_18.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanDesa_19.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanKabupaten_20.set('fieldLabels', {'fclass': 'no label', });
lyr_JalanKabupaten_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
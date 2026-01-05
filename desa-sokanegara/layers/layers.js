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
var format_rt_rw_RW3_RT2_2 = new ol.format.GeoJSON();
var features_rt_rw_RW3_RT2_2 = format_rt_rw_RW3_RT2_2.readFeatures(json_rt_rw_RW3_RT2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW3_RT2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW3_RT2_2.addFeatures(features_rt_rw_RW3_RT2_2);
var lyr_rt_rw_RW3_RT2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW3_RT2_2,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW3_RT2_2,
                popuplayertitle: 'rt_rw_RW3_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW3_RT2_2.png" /> rt_rw_RW3_RT2'
            });
var format_rt_rw_RW3_RT3_3 = new ol.format.GeoJSON();
var features_rt_rw_RW3_RT3_3 = format_rt_rw_RW3_RT3_3.readFeatures(json_rt_rw_RW3_RT3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW3_RT3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW3_RT3_3.addFeatures(features_rt_rw_RW3_RT3_3);
var lyr_rt_rw_RW3_RT3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW3_RT3_3,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW3_RT3_3,
                popuplayertitle: 'rt_rw_RW3_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW3_RT3_3.png" /> rt_rw_RW3_RT3'
            });
var format_rt_rw_RW3_RT4_4 = new ol.format.GeoJSON();
var features_rt_rw_RW3_RT4_4 = format_rt_rw_RW3_RT4_4.readFeatures(json_rt_rw_RW3_RT4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW3_RT4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW3_RT4_4.addFeatures(features_rt_rw_RW3_RT4_4);
var lyr_rt_rw_RW3_RT4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW3_RT4_4,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW3_RT4_4,
                popuplayertitle: 'rt_rw_RW3_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW3_RT4_4.png" /> rt_rw_RW3_RT4'
            });
var format_rt_rw_RW4_RT1_5 = new ol.format.GeoJSON();
var features_rt_rw_RW4_RT1_5 = format_rt_rw_RW4_RT1_5.readFeatures(json_rt_rw_RW4_RT1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW4_RT1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW4_RT1_5.addFeatures(features_rt_rw_RW4_RT1_5);
var lyr_rt_rw_RW4_RT1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW4_RT1_5,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW4_RT1_5,
                popuplayertitle: 'rt_rw_RW4_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW4_RT1_5.png" /> rt_rw_RW4_RT1'
            });
var format_rt_rw_RW4_RT2_6 = new ol.format.GeoJSON();
var features_rt_rw_RW4_RT2_6 = format_rt_rw_RW4_RT2_6.readFeatures(json_rt_rw_RW4_RT2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW4_RT2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW4_RT2_6.addFeatures(features_rt_rw_RW4_RT2_6);
var lyr_rt_rw_RW4_RT2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW4_RT2_6,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW4_RT2_6,
                popuplayertitle: 'rt_rw_RW4_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW4_RT2_6.png" /> rt_rw_RW4_RT2'
            });
var format_rt_rw_RW1_RT1_7 = new ol.format.GeoJSON();
var features_rt_rw_RW1_RT1_7 = format_rt_rw_RW1_RT1_7.readFeatures(json_rt_rw_RW1_RT1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW1_RT1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW1_RT1_7.addFeatures(features_rt_rw_RW1_RT1_7);
var lyr_rt_rw_RW1_RT1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW1_RT1_7,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW1_RT1_7,
                popuplayertitle: 'rt_rw_RW1_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW1_RT1_7.png" /> rt_rw_RW1_RT1'
            });
var format_rt_rw_RW1_RT2_8 = new ol.format.GeoJSON();
var features_rt_rw_RW1_RT2_8 = format_rt_rw_RW1_RT2_8.readFeatures(json_rt_rw_RW1_RT2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW1_RT2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW1_RT2_8.addFeatures(features_rt_rw_RW1_RT2_8);
var lyr_rt_rw_RW1_RT2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW1_RT2_8,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW1_RT2_8,
                popuplayertitle: 'rt_rw_RW1_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW1_RT2_8.png" /> rt_rw_RW1_RT2'
            });
var format_rt_rw_RW1_RT3_9 = new ol.format.GeoJSON();
var features_rt_rw_RW1_RT3_9 = format_rt_rw_RW1_RT3_9.readFeatures(json_rt_rw_RW1_RT3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW1_RT3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW1_RT3_9.addFeatures(features_rt_rw_RW1_RT3_9);
var lyr_rt_rw_RW1_RT3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW1_RT3_9,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW1_RT3_9,
                popuplayertitle: 'rt_rw_RW1_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW1_RT3_9.png" /> rt_rw_RW1_RT3'
            });
var format_rt_rw_RW1_RT4_10 = new ol.format.GeoJSON();
var features_rt_rw_RW1_RT4_10 = format_rt_rw_RW1_RT4_10.readFeatures(json_rt_rw_RW1_RT4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW1_RT4_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW1_RT4_10.addFeatures(features_rt_rw_RW1_RT4_10);
var lyr_rt_rw_RW1_RT4_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW1_RT4_10,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW1_RT4_10,
                popuplayertitle: 'rt_rw_RW1_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW1_RT4_10.png" /> rt_rw_RW1_RT4'
            });
var format_rt_rw_RW1_RT5_11 = new ol.format.GeoJSON();
var features_rt_rw_RW1_RT5_11 = format_rt_rw_RW1_RT5_11.readFeatures(json_rt_rw_RW1_RT5_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW1_RT5_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW1_RT5_11.addFeatures(features_rt_rw_RW1_RT5_11);
var lyr_rt_rw_RW1_RT5_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW1_RT5_11,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW1_RT5_11,
                popuplayertitle: 'rt_rw_RW1_RT5',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW1_RT5_11.png" /> rt_rw_RW1_RT5'
            });
var format_rt_rw_RW2_RT1_12 = new ol.format.GeoJSON();
var features_rt_rw_RW2_RT1_12 = format_rt_rw_RW2_RT1_12.readFeatures(json_rt_rw_RW2_RT1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW2_RT1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW2_RT1_12.addFeatures(features_rt_rw_RW2_RT1_12);
var lyr_rt_rw_RW2_RT1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW2_RT1_12,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW2_RT1_12,
                popuplayertitle: 'rt_rw_RW2_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW2_RT1_12.png" /> rt_rw_RW2_RT1'
            });
var format_rt_rw_RW2_RT2_13 = new ol.format.GeoJSON();
var features_rt_rw_RW2_RT2_13 = format_rt_rw_RW2_RT2_13.readFeatures(json_rt_rw_RW2_RT2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW2_RT2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW2_RT2_13.addFeatures(features_rt_rw_RW2_RT2_13);
var lyr_rt_rw_RW2_RT2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW2_RT2_13,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW2_RT2_13,
                popuplayertitle: 'rt_rw_RW2_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW2_RT2_13.png" /> rt_rw_RW2_RT2'
            });
var format_rt_rw_RW4_RT3_14 = new ol.format.GeoJSON();
var features_rt_rw_RW4_RT3_14 = format_rt_rw_RW4_RT3_14.readFeatures(json_rt_rw_RW4_RT3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW4_RT3_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW4_RT3_14.addFeatures(features_rt_rw_RW4_RT3_14);
var lyr_rt_rw_RW4_RT3_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW4_RT3_14,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW4_RT3_14,
                popuplayertitle: 'rt_rw_RW4_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW4_RT3_14.png" /> rt_rw_RW4_RT3'
            });
var format_rt_rw_RW4_RT4_15 = new ol.format.GeoJSON();
var features_rt_rw_RW4_RT4_15 = format_rt_rw_RW4_RT4_15.readFeatures(json_rt_rw_RW4_RT4_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW4_RT4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW4_RT4_15.addFeatures(features_rt_rw_RW4_RT4_15);
var lyr_rt_rw_RW4_RT4_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW4_RT4_15,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW4_RT4_15,
                popuplayertitle: 'rt_rw_RW4_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW4_RT4_15.png" /> rt_rw_RW4_RT4'
            });
var format_rt_rw_RW5_RT1_16 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT1_16 = format_rt_rw_RW5_RT1_16.readFeatures(json_rt_rw_RW5_RT1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT1_16.addFeatures(features_rt_rw_RW5_RT1_16);
var lyr_rt_rw_RW5_RT1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT1_16,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT1_16,
                popuplayertitle: 'rt_rw_RW5_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT1_16.png" /> rt_rw_RW5_RT1'
            });
var format_rt_rw_RW5_RT2_17 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT2_17 = format_rt_rw_RW5_RT2_17.readFeatures(json_rt_rw_RW5_RT2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT2_17.addFeatures(features_rt_rw_RW5_RT2_17);
var lyr_rt_rw_RW5_RT2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT2_17,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT2_17,
                popuplayertitle: 'rt_rw_RW5_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT2_17.png" /> rt_rw_RW5_RT2'
            });
var format_rt_rw_RW5_RT3_18 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT3_18 = format_rt_rw_RW5_RT3_18.readFeatures(json_rt_rw_RW5_RT3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT3_18.addFeatures(features_rt_rw_RW5_RT3_18);
var lyr_rt_rw_RW5_RT3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT3_18,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT3_18,
                popuplayertitle: 'rt_rw_RW5_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT3_18.png" /> rt_rw_RW5_RT3'
            });
var format_rt_rw_RW5_RT4_19 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT4_19 = format_rt_rw_RW5_RT4_19.readFeatures(json_rt_rw_RW5_RT4_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT4_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT4_19.addFeatures(features_rt_rw_RW5_RT4_19);
var lyr_rt_rw_RW5_RT4_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT4_19,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT4_19,
                popuplayertitle: 'rt_rw_RW5_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT4_19.png" /> rt_rw_RW5_RT4'
            });
var format_rt_rw_RW5_RT7_20 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT7_20 = format_rt_rw_RW5_RT7_20.readFeatures(json_rt_rw_RW5_RT7_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT7_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT7_20.addFeatures(features_rt_rw_RW5_RT7_20);
var lyr_rt_rw_RW5_RT7_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT7_20,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT7_20,
                popuplayertitle: 'rt_rw_RW5_RT7',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT7_20.png" /> rt_rw_RW5_RT7'
            });
var format_rt_rw_RW5_RT8_21 = new ol.format.GeoJSON();
var features_rt_rw_RW5_RT8_21 = format_rt_rw_RW5_RT8_21.readFeatures(json_rt_rw_RW5_RT8_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW5_RT8_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW5_RT8_21.addFeatures(features_rt_rw_RW5_RT8_21);
var lyr_rt_rw_RW5_RT8_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW5_RT8_21,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW5_RT8_21,
                popuplayertitle: 'rt_rw_RW5_RT8',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW5_RT8_21.png" /> rt_rw_RW5_RT8'
            });
var format_rt_rw_RW6_RT2_22 = new ol.format.GeoJSON();
var features_rt_rw_RW6_RT2_22 = format_rt_rw_RW6_RT2_22.readFeatures(json_rt_rw_RW6_RT2_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW6_RT2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW6_RT2_22.addFeatures(features_rt_rw_RW6_RT2_22);
var lyr_rt_rw_RW6_RT2_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW6_RT2_22,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW6_RT2_22,
                popuplayertitle: 'rt_rw_RW6_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW6_RT2_22.png" /> rt_rw_RW6_RT2'
            });
var format_rt_rw_RW6_RT3_23 = new ol.format.GeoJSON();
var features_rt_rw_RW6_RT3_23 = format_rt_rw_RW6_RT3_23.readFeatures(json_rt_rw_RW6_RT3_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW6_RT3_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW6_RT3_23.addFeatures(features_rt_rw_RW6_RT3_23);
var lyr_rt_rw_RW6_RT3_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW6_RT3_23,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW6_RT3_23,
                popuplayertitle: 'rt_rw_RW6_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW6_RT3_23.png" /> rt_rw_RW6_RT3'
            });
var format_rt_rw_RW6_RT4_24 = new ol.format.GeoJSON();
var features_rt_rw_RW6_RT4_24 = format_rt_rw_RW6_RT4_24.readFeatures(json_rt_rw_RW6_RT4_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW6_RT4_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW6_RT4_24.addFeatures(features_rt_rw_RW6_RT4_24);
var lyr_rt_rw_RW6_RT4_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW6_RT4_24,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW6_RT4_24,
                popuplayertitle: 'rt_rw_RW6_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW6_RT4_24.png" /> rt_rw_RW6_RT4'
            });
var format_rt_rw_RW6_RT5_25 = new ol.format.GeoJSON();
var features_rt_rw_RW6_RT5_25 = format_rt_rw_RW6_RT5_25.readFeatures(json_rt_rw_RW6_RT5_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW6_RT5_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW6_RT5_25.addFeatures(features_rt_rw_RW6_RT5_25);
var lyr_rt_rw_RW6_RT5_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW6_RT5_25,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW6_RT5_25,
                popuplayertitle: 'rt_rw_RW6_RT5',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW6_RT5_25.png" /> rt_rw_RW6_RT5'
            });
var format_rt_rw_RW6_RT7_26 = new ol.format.GeoJSON();
var features_rt_rw_RW6_RT7_26 = format_rt_rw_RW6_RT7_26.readFeatures(json_rt_rw_RW6_RT7_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW6_RT7_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW6_RT7_26.addFeatures(features_rt_rw_RW6_RT7_26);
var lyr_rt_rw_RW6_RT7_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW6_RT7_26,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW6_RT7_26,
                popuplayertitle: 'rt_rw_RW6_RT7',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW6_RT7_26.png" /> rt_rw_RW6_RT7'
            });
var format_rt_rw_RW7_RT1_27 = new ol.format.GeoJSON();
var features_rt_rw_RW7_RT1_27 = format_rt_rw_RW7_RT1_27.readFeatures(json_rt_rw_RW7_RT1_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW7_RT1_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW7_RT1_27.addFeatures(features_rt_rw_RW7_RT1_27);
var lyr_rt_rw_RW7_RT1_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW7_RT1_27,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW7_RT1_27,
                popuplayertitle: 'rt_rw_RW7_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW7_RT1_27.png" /> rt_rw_RW7_RT1'
            });
var format_rt_rw_RW7_RT2_28 = new ol.format.GeoJSON();
var features_rt_rw_RW7_RT2_28 = format_rt_rw_RW7_RT2_28.readFeatures(json_rt_rw_RW7_RT2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW7_RT2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW7_RT2_28.addFeatures(features_rt_rw_RW7_RT2_28);
var lyr_rt_rw_RW7_RT2_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW7_RT2_28,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW7_RT2_28,
                popuplayertitle: 'rt_rw_RW7_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW7_RT2_28.png" /> rt_rw_RW7_RT2'
            });
var format_rt_rw_RW7_RT4_29 = new ol.format.GeoJSON();
var features_rt_rw_RW7_RT4_29 = format_rt_rw_RW7_RT4_29.readFeatures(json_rt_rw_RW7_RT4_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW7_RT4_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW7_RT4_29.addFeatures(features_rt_rw_RW7_RT4_29);
var lyr_rt_rw_RW7_RT4_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW7_RT4_29,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW7_RT4_29,
                popuplayertitle: 'rt_rw_RW7_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW7_RT4_29.png" /> rt_rw_RW7_RT4'
            });
var format_rt_rw_RW8_RT1_30 = new ol.format.GeoJSON();
var features_rt_rw_RW8_RT1_30 = format_rt_rw_RW8_RT1_30.readFeatures(json_rt_rw_RW8_RT1_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW8_RT1_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW8_RT1_30.addFeatures(features_rt_rw_RW8_RT1_30);
var lyr_rt_rw_RW8_RT1_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW8_RT1_30,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW8_RT1_30,
                popuplayertitle: 'rt_rw_RW8_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW8_RT1_30.png" /> rt_rw_RW8_RT1'
            });
var format_rt_rw_RW8_RT2_31 = new ol.format.GeoJSON();
var features_rt_rw_RW8_RT2_31 = format_rt_rw_RW8_RT2_31.readFeatures(json_rt_rw_RW8_RT2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW8_RT2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW8_RT2_31.addFeatures(features_rt_rw_RW8_RT2_31);
var lyr_rt_rw_RW8_RT2_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW8_RT2_31,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW8_RT2_31,
                popuplayertitle: 'rt_rw_RW8_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW8_RT2_31.png" /> rt_rw_RW8_RT2'
            });
var format_rt_rw_RW8_RT3_32 = new ol.format.GeoJSON();
var features_rt_rw_RW8_RT3_32 = format_rt_rw_RW8_RT3_32.readFeatures(json_rt_rw_RW8_RT3_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW8_RT3_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW8_RT3_32.addFeatures(features_rt_rw_RW8_RT3_32);
var lyr_rt_rw_RW8_RT3_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW8_RT3_32,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW8_RT3_32,
                popuplayertitle: 'rt_rw_RW8_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW8_RT3_32.png" /> rt_rw_RW8_RT3'
            });
var format_rt_rw_RW8_RT4_33 = new ol.format.GeoJSON();
var features_rt_rw_RW8_RT4_33 = format_rt_rw_RW8_RT4_33.readFeatures(json_rt_rw_RW8_RT4_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW8_RT4_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW8_RT4_33.addFeatures(features_rt_rw_RW8_RT4_33);
var lyr_rt_rw_RW8_RT4_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW8_RT4_33,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW8_RT4_33,
                popuplayertitle: 'rt_rw_RW8_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW8_RT4_33.png" /> rt_rw_RW8_RT4'
            });
var format_rt_rw_RW9_RT1_34 = new ol.format.GeoJSON();
var features_rt_rw_RW9_RT1_34 = format_rt_rw_RW9_RT1_34.readFeatures(json_rt_rw_RW9_RT1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW9_RT1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW9_RT1_34.addFeatures(features_rt_rw_RW9_RT1_34);
var lyr_rt_rw_RW9_RT1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW9_RT1_34,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW9_RT1_34,
                popuplayertitle: 'rt_rw_RW9_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW9_RT1_34.png" /> rt_rw_RW9_RT1'
            });
var format_rt_rw_RW9_RT2_35 = new ol.format.GeoJSON();
var features_rt_rw_RW9_RT2_35 = format_rt_rw_RW9_RT2_35.readFeatures(json_rt_rw_RW9_RT2_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW9_RT2_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW9_RT2_35.addFeatures(features_rt_rw_RW9_RT2_35);
var lyr_rt_rw_RW9_RT2_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW9_RT2_35,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW9_RT2_35,
                popuplayertitle: 'rt_rw_RW9_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW9_RT2_35.png" /> rt_rw_RW9_RT2'
            });
var format_rt_rw_RW9_RT3_36 = new ol.format.GeoJSON();
var features_rt_rw_RW9_RT3_36 = format_rt_rw_RW9_RT3_36.readFeatures(json_rt_rw_RW9_RT3_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW9_RT3_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW9_RT3_36.addFeatures(features_rt_rw_RW9_RT3_36);
var lyr_rt_rw_RW9_RT3_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW9_RT3_36,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW9_RT3_36,
                popuplayertitle: 'rt_rw_RW9_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW9_RT3_36.png" /> rt_rw_RW9_RT3'
            });
var format_rt_rw_RW9_RT4_37 = new ol.format.GeoJSON();
var features_rt_rw_RW9_RT4_37 = format_rt_rw_RW9_RT4_37.readFeatures(json_rt_rw_RW9_RT4_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW9_RT4_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW9_RT4_37.addFeatures(features_rt_rw_RW9_RT4_37);
var lyr_rt_rw_RW9_RT4_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW9_RT4_37,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW9_RT4_37,
                popuplayertitle: 'rt_rw_RW9_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW9_RT4_37.png" /> rt_rw_RW9_RT4'
            });
var format_rt_rw_RW10_RT1_38 = new ol.format.GeoJSON();
var features_rt_rw_RW10_RT1_38 = format_rt_rw_RW10_RT1_38.readFeatures(json_rt_rw_RW10_RT1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW10_RT1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW10_RT1_38.addFeatures(features_rt_rw_RW10_RT1_38);
var lyr_rt_rw_RW10_RT1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW10_RT1_38,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW10_RT1_38,
                popuplayertitle: 'rt_rw_RW10_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW10_RT1_38.png" /> rt_rw_RW10_RT1'
            });
var format_rt_rw_RW10_RT2_39 = new ol.format.GeoJSON();
var features_rt_rw_RW10_RT2_39 = format_rt_rw_RW10_RT2_39.readFeatures(json_rt_rw_RW10_RT2_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW10_RT2_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW10_RT2_39.addFeatures(features_rt_rw_RW10_RT2_39);
var lyr_rt_rw_RW10_RT2_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW10_RT2_39,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW10_RT2_39,
                popuplayertitle: 'rt_rw_RW10_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW10_RT2_39.png" /> rt_rw_RW10_RT2'
            });
var format_rt_rw_RW11_RT1_40 = new ol.format.GeoJSON();
var features_rt_rw_RW11_RT1_40 = format_rt_rw_RW11_RT1_40.readFeatures(json_rt_rw_RW11_RT1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW11_RT1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW11_RT1_40.addFeatures(features_rt_rw_RW11_RT1_40);
var lyr_rt_rw_RW11_RT1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW11_RT1_40,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW11_RT1_40,
                popuplayertitle: 'rt_rw_RW11_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW11_RT1_40.png" /> rt_rw_RW11_RT1'
            });
var format_rt_rw_RW11_RT2_41 = new ol.format.GeoJSON();
var features_rt_rw_RW11_RT2_41 = format_rt_rw_RW11_RT2_41.readFeatures(json_rt_rw_RW11_RT2_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW11_RT2_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW11_RT2_41.addFeatures(features_rt_rw_RW11_RT2_41);
var lyr_rt_rw_RW11_RT2_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW11_RT2_41,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW11_RT2_41,
                popuplayertitle: 'rt_rw_RW11_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW11_RT2_41.png" /> rt_rw_RW11_RT2'
            });
var format_rt_rw_RW12_RT3_42 = new ol.format.GeoJSON();
var features_rt_rw_RW12_RT3_42 = format_rt_rw_RW12_RT3_42.readFeatures(json_rt_rw_RW12_RT3_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW12_RT3_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW12_RT3_42.addFeatures(features_rt_rw_RW12_RT3_42);
var lyr_rt_rw_RW12_RT3_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW12_RT3_42,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW12_RT3_42,
                popuplayertitle: 'rt_rw_RW12_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW12_RT3_42.png" /> rt_rw_RW12_RT3'
            });
var format_rt_rw_RW12_RT2_43 = new ol.format.GeoJSON();
var features_rt_rw_RW12_RT2_43 = format_rt_rw_RW12_RT2_43.readFeatures(json_rt_rw_RW12_RT2_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW12_RT2_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW12_RT2_43.addFeatures(features_rt_rw_RW12_RT2_43);
var lyr_rt_rw_RW12_RT2_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW12_RT2_43,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW12_RT2_43,
                popuplayertitle: 'rt_rw_RW12_RT2',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW12_RT2_43.png" /> rt_rw_RW12_RT2'
            });
var format_rt_rw_RW11_RT3_44 = new ol.format.GeoJSON();
var features_rt_rw_RW11_RT3_44 = format_rt_rw_RW11_RT3_44.readFeatures(json_rt_rw_RW11_RT3_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW11_RT3_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW11_RT3_44.addFeatures(features_rt_rw_RW11_RT3_44);
var lyr_rt_rw_RW11_RT3_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW11_RT3_44,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW11_RT3_44,
                popuplayertitle: 'rt_rw_RW11_RT3',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW11_RT3_44.png" /> rt_rw_RW11_RT3'
            });
var format_rt_rw_RW11_RT4_45 = new ol.format.GeoJSON();
var features_rt_rw_RW11_RT4_45 = format_rt_rw_RW11_RT4_45.readFeatures(json_rt_rw_RW11_RT4_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW11_RT4_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW11_RT4_45.addFeatures(features_rt_rw_RW11_RT4_45);
var lyr_rt_rw_RW11_RT4_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW11_RT4_45,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW11_RT4_45,
                popuplayertitle: 'rt_rw_RW11_RT4',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW11_RT4_45.png" /> rt_rw_RW11_RT4'
            });
var format_rt_rw_RW12_RT1_46 = new ol.format.GeoJSON();
var features_rt_rw_RW12_RT1_46 = format_rt_rw_RW12_RT1_46.readFeatures(json_rt_rw_RW12_RT1_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_RW12_RT1_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_RW12_RT1_46.addFeatures(features_rt_rw_RW12_RT1_46);
var lyr_rt_rw_RW12_RT1_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_RW12_RT1_46,
maxResolution:280.0446615226196,
 minResolution:1.4002233076130983,

                style: style_rt_rw_RW12_RT1_46,
                popuplayertitle: 'rt_rw_RW12_RT1',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_RW12_RT1_46.png" /> rt_rw_RW12_RT1'
            });
var format_Makam_47 = new ol.format.GeoJSON();
var features_Makam_47 = format_Makam_47.readFeatures(json_Makam_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_47.addFeatures(features_Makam_47);
var lyr_Makam_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_47,
maxResolution:1.1201786460904786,
 
                style: style_Makam_47,
                popuplayertitle: 'Makam',
                interactive: true,
                title: '<img src="styles/legend/Makam_47.png" /> Makam'
            });
var format_Lapangan_48 = new ol.format.GeoJSON();
var features_Lapangan_48 = format_Lapangan_48.readFeatures(json_Lapangan_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_48.addFeatures(features_Lapangan_48);
var lyr_Lapangan_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_48,
maxResolution:1.1201786460904786,
 
                style: style_Lapangan_48,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_48.png" /> Lapangan'
            });
var format_Kebun_49 = new ol.format.GeoJSON();
var features_Kebun_49 = format_Kebun_49.readFeatures(json_Kebun_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_49.addFeatures(features_Kebun_49);
var lyr_Kebun_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_49,
maxResolution:1.1201786460904786,
 
                style: style_Kebun_49,
                popuplayertitle: 'Kebun',
                interactive: true,
                title: '<img src="styles/legend/Kebun_49.png" /> Kebun'
            });
var format_Sawah_50 = new ol.format.GeoJSON();
var features_Sawah_50 = format_Sawah_50.readFeatures(json_Sawah_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_50.addFeatures(features_Sawah_50);
var lyr_Sawah_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_50,
maxResolution:1.1201786460904786,
 
                style: style_Sawah_50,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_50.png" /> Sawah'
            });
var format_Bangunan2_51 = new ol.format.GeoJSON();
var features_Bangunan2_51 = format_Bangunan2_51.readFeatures(json_Bangunan2_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan2_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan2_51.addFeatures(features_Bangunan2_51);
var lyr_Bangunan2_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan2_51,
maxResolution:0.8401339845678589,
 
                style: style_Bangunan2_51,
                popuplayertitle: 'Bangunan2',
                interactive: true,
                title: '<img src="styles/legend/Bangunan2_51.png" /> Bangunan2'
            });
var format_Sungai_52 = new ol.format.GeoJSON();
var features_Sungai_52 = format_Sungai_52.readFeatures(json_Sungai_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_52.addFeatures(features_Sungai_52);
var lyr_Sungai_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_52, 
                style: style_Sungai_52,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_52.png" /> Sungai'
            });
var format_JalanGang_53 = new ol.format.GeoJSON();
var features_JalanGang_53 = format_JalanGang_53.readFeatures(json_JalanGang_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_53.addFeatures(features_JalanGang_53);
var lyr_JalanGang_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_53,
maxResolution:1.1201786460904786,
 
                style: style_JalanGang_53,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_53.png" /> Jalan Gang'
            });
var format_JalanDesa2_54 = new ol.format.GeoJSON();
var features_JalanDesa2_54 = format_JalanDesa2_54.readFeatures(json_JalanDesa2_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa2_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa2_54.addFeatures(features_JalanDesa2_54);
var lyr_JalanDesa2_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa2_54,
maxResolution:2.8004466152261966,
 minResolution:0.5600893230452393,

                style: style_JalanDesa2_54,
                popuplayertitle: 'Jalan Desa2',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa2_54.png" /> Jalan Desa2'
            });
var format_JalanKabupaten_55 = new ol.format.GeoJSON();
var features_JalanKabupaten_55 = format_JalanKabupaten_55.readFeatures(json_JalanKabupaten_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_55.addFeatures(features_JalanKabupaten_55);
var lyr_JalanKabupaten_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_55,
maxResolution:4.200669922839294,
 minResolution:0.8401339845678589,

                style: style_JalanKabupaten_55,
                popuplayertitle: 'Jalan Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/JalanKabupaten_55.png" /> Jalan Kabupaten'
            });
var format_TempatIbadah_56 = new ol.format.GeoJSON();
var features_TempatIbadah_56 = format_TempatIbadah_56.readFeatures(json_TempatIbadah_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_56.addFeatures(features_TempatIbadah_56);
cluster_TempatIbadah_56 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TempatIbadah_56
});
var lyr_TempatIbadah_56 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TempatIbadah_56,
maxResolution:1.9603126306583372,
 
                style: style_TempatIbadah_56,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_56.png" /> Tempat Ibadah'
            });
var format_Pemerintahan_57 = new ol.format.GeoJSON();
var features_Pemerintahan_57 = format_Pemerintahan_57.readFeatures(json_Pemerintahan_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_57.addFeatures(features_Pemerintahan_57);
cluster_Pemerintahan_57 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pemerintahan_57
});
var lyr_Pemerintahan_57 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemerintahan_57,
maxResolution:2.240357292180957,
 
                style: style_Pemerintahan_57,
                popuplayertitle: 'Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_57.png" /> Pemerintahan'
            });
var format_Shop_58 = new ol.format.GeoJSON();
var features_Shop_58 = format_Shop_58.readFeatures(json_Shop_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shop_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_58.addFeatures(features_Shop_58);
cluster_Shop_58 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shop_58
});
var lyr_Shop_58 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shop_58,
maxResolution:1.4002233076130983,
 
                style: style_Shop_58,
                popuplayertitle: 'Shop',
                interactive: true,
                title: '<img src="styles/legend/Shop_58.png" /> Shop'
            });
var format_Penginapan_59 = new ol.format.GeoJSON();
var features_Penginapan_59 = format_Penginapan_59.readFeatures(json_Penginapan_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penginapan_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penginapan_59.addFeatures(features_Penginapan_59);
cluster_Penginapan_59 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Penginapan_59
});
var lyr_Penginapan_59 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Penginapan_59,
maxResolution:1.4002233076130983,
 
                style: style_Penginapan_59,
                popuplayertitle: 'Penginapan',
                interactive: true,
                title: '<img src="styles/legend/Penginapan_59.png" /> Penginapan'
            });
var format_Pendidikan_60 = new ol.format.GeoJSON();
var features_Pendidikan_60 = format_Pendidikan_60.readFeatures(json_Pendidikan_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_60.addFeatures(features_Pendidikan_60);
cluster_Pendidikan_60 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Pendidikan_60
});
var lyr_Pendidikan_60 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pendidikan_60,
maxResolution:1.9603126306583372,
 
                style: style_Pendidikan_60,
                popuplayertitle: 'Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_60.png" /> Pendidikan'
            });
var format_Kesehatan_61 = new ol.format.GeoJSON();
var features_Kesehatan_61 = format_Kesehatan_61.readFeatures(json_Kesehatan_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_61.addFeatures(features_Kesehatan_61);
cluster_Kesehatan_61 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kesehatan_61
});
var lyr_Kesehatan_61 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kesehatan_61,
maxResolution:1.6802679691357179,
 
                style: style_Kesehatan_61,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_61.png" /> Kesehatan'
            });
var format_FoodDrink_62 = new ol.format.GeoJSON();
var features_FoodDrink_62 = format_FoodDrink_62.readFeatures(json_FoodDrink_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodDrink_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodDrink_62.addFeatures(features_FoodDrink_62);
cluster_FoodDrink_62 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FoodDrink_62
});
var lyr_FoodDrink_62 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FoodDrink_62,
maxResolution:0.8401339845678589,
 
                style: style_FoodDrink_62,
                popuplayertitle: 'Food&Drink',
                interactive: true,
                title: '<img src="styles/legend/FoodDrink_62.png" /> Food&Drink'
            });
var group_group2 = new ol.layer.Group({
                                layers: [lyr_TempatIbadah_56,lyr_Pemerintahan_57,lyr_Shop_58,lyr_Penginapan_59,lyr_Pendidikan_60,lyr_Kesehatan_61,lyr_FoodDrink_62,],
                                fold: 'open',
                                title: 'group2'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_Sungai_52,lyr_JalanGang_53,lyr_JalanDesa2_54,lyr_JalanKabupaten_55,],
                                fold: 'open',
                                title: 'group1'});
var group_group3 = new ol.layer.Group({
                                layers: [lyr_rt_rw_RW3_RT2_2,lyr_rt_rw_RW3_RT3_3,lyr_rt_rw_RW3_RT4_4,lyr_rt_rw_RW4_RT1_5,lyr_rt_rw_RW4_RT2_6,lyr_rt_rw_RW1_RT1_7,lyr_rt_rw_RW1_RT2_8,lyr_rt_rw_RW1_RT3_9,lyr_rt_rw_RW1_RT4_10,lyr_rt_rw_RW1_RT5_11,lyr_rt_rw_RW2_RT1_12,lyr_rt_rw_RW2_RT2_13,lyr_rt_rw_RW4_RT3_14,lyr_rt_rw_RW4_RT4_15,lyr_rt_rw_RW5_RT1_16,lyr_rt_rw_RW5_RT2_17,lyr_rt_rw_RW5_RT3_18,lyr_rt_rw_RW5_RT4_19,lyr_rt_rw_RW5_RT7_20,lyr_rt_rw_RW5_RT8_21,lyr_rt_rw_RW6_RT2_22,lyr_rt_rw_RW6_RT3_23,lyr_rt_rw_RW6_RT4_24,lyr_rt_rw_RW6_RT5_25,lyr_rt_rw_RW6_RT7_26,lyr_rt_rw_RW7_RT1_27,lyr_rt_rw_RW7_RT2_28,lyr_rt_rw_RW7_RT4_29,lyr_rt_rw_RW8_RT1_30,lyr_rt_rw_RW8_RT2_31,lyr_rt_rw_RW8_RT3_32,lyr_rt_rw_RW8_RT4_33,lyr_rt_rw_RW9_RT1_34,lyr_rt_rw_RW9_RT2_35,lyr_rt_rw_RW9_RT3_36,lyr_rt_rw_RW9_RT4_37,lyr_rt_rw_RW10_RT1_38,lyr_rt_rw_RW10_RT2_39,lyr_rt_rw_RW11_RT1_40,lyr_rt_rw_RW11_RT2_41,lyr_rt_rw_RW12_RT3_42,lyr_rt_rw_RW12_RT2_43,lyr_rt_rw_RW11_RT3_44,lyr_rt_rw_RW11_RT4_45,lyr_rt_rw_RW12_RT1_46,lyr_Makam_47,lyr_Lapangan_48,lyr_Kebun_49,lyr_Sawah_50,lyr_Bangunan2_51,],
                                fold: 'open',
                                title: 'group3'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_rt_rw_RW3_RT2_2.setVisible(true);lyr_rt_rw_RW3_RT3_3.setVisible(true);lyr_rt_rw_RW3_RT4_4.setVisible(true);lyr_rt_rw_RW4_RT1_5.setVisible(true);lyr_rt_rw_RW4_RT2_6.setVisible(true);lyr_rt_rw_RW1_RT1_7.setVisible(true);lyr_rt_rw_RW1_RT2_8.setVisible(true);lyr_rt_rw_RW1_RT3_9.setVisible(true);lyr_rt_rw_RW1_RT4_10.setVisible(true);lyr_rt_rw_RW1_RT5_11.setVisible(true);lyr_rt_rw_RW2_RT1_12.setVisible(true);lyr_rt_rw_RW2_RT2_13.setVisible(true);lyr_rt_rw_RW4_RT3_14.setVisible(true);lyr_rt_rw_RW4_RT4_15.setVisible(true);lyr_rt_rw_RW5_RT1_16.setVisible(true);lyr_rt_rw_RW5_RT2_17.setVisible(true);lyr_rt_rw_RW5_RT3_18.setVisible(true);lyr_rt_rw_RW5_RT4_19.setVisible(true);lyr_rt_rw_RW5_RT7_20.setVisible(true);lyr_rt_rw_RW5_RT8_21.setVisible(true);lyr_rt_rw_RW6_RT2_22.setVisible(true);lyr_rt_rw_RW6_RT3_23.setVisible(true);lyr_rt_rw_RW6_RT4_24.setVisible(true);lyr_rt_rw_RW6_RT5_25.setVisible(true);lyr_rt_rw_RW6_RT7_26.setVisible(true);lyr_rt_rw_RW7_RT1_27.setVisible(true);lyr_rt_rw_RW7_RT2_28.setVisible(true);lyr_rt_rw_RW7_RT4_29.setVisible(true);lyr_rt_rw_RW8_RT1_30.setVisible(true);lyr_rt_rw_RW8_RT2_31.setVisible(true);lyr_rt_rw_RW8_RT3_32.setVisible(true);lyr_rt_rw_RW8_RT4_33.setVisible(true);lyr_rt_rw_RW9_RT1_34.setVisible(true);lyr_rt_rw_RW9_RT2_35.setVisible(true);lyr_rt_rw_RW9_RT3_36.setVisible(true);lyr_rt_rw_RW9_RT4_37.setVisible(true);lyr_rt_rw_RW10_RT1_38.setVisible(true);lyr_rt_rw_RW10_RT2_39.setVisible(true);lyr_rt_rw_RW11_RT1_40.setVisible(true);lyr_rt_rw_RW11_RT2_41.setVisible(true);lyr_rt_rw_RW12_RT3_42.setVisible(true);lyr_rt_rw_RW12_RT2_43.setVisible(true);lyr_rt_rw_RW11_RT3_44.setVisible(true);lyr_rt_rw_RW11_RT4_45.setVisible(true);lyr_rt_rw_RW12_RT1_46.setVisible(true);lyr_Makam_47.setVisible(true);lyr_Lapangan_48.setVisible(true);lyr_Kebun_49.setVisible(true);lyr_Sawah_50.setVisible(true);lyr_Bangunan2_51.setVisible(true);lyr_Sungai_52.setVisible(true);lyr_JalanGang_53.setVisible(true);lyr_JalanDesa2_54.setVisible(true);lyr_JalanKabupaten_55.setVisible(true);lyr_TempatIbadah_56.setVisible(true);lyr_Pemerintahan_57.setVisible(true);lyr_Shop_58.setVisible(true);lyr_Penginapan_59.setVisible(true);lyr_Pendidikan_60.setVisible(true);lyr_Kesehatan_61.setVisible(true);lyr_FoodDrink_62.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_group3,group_group1,group_group2];
lyr_rt_rw_RW3_RT2_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW3_RT3_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW3_RT4_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW4_RT1_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW4_RT2_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW1_RT1_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW1_RT2_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW1_RT3_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW1_RT4_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW1_RT5_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW2_RT1_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW2_RT2_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW4_RT3_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW4_RT4_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT1_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT2_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT3_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT4_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT7_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW5_RT8_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW6_RT2_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW6_RT3_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW6_RT4_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW6_RT5_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW6_RT7_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW7_RT1_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW7_RT2_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW7_RT4_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW8_RT1_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW8_RT2_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW8_RT3_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW8_RT4_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW9_RT1_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW9_RT2_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW9_RT3_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW9_RT4_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW10_RT1_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW10_RT2_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW11_RT1_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW11_RT2_41.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW12_RT3_42.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW12_RT2_43.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW11_RT3_44.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW11_RT4_45.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_rt_rw_RW12_RT1_46.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RT': 'RT', 'RW': 'RW', 'rt_rw': 'rt_rw', });
lyr_Makam_47.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_48.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kebun_49.set('fieldAliases', {'id': 'id', });
lyr_Sawah_50.set('fieldAliases', {'id': 'id', });
lyr_Bangunan2_51.set('fieldAliases', {'fclass': 'fclass', });
lyr_Sungai_52.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanGang_53.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JalanDesa2_54.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanKabupaten_55.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_TempatIbadah_56.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_57.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Shop_58.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Penginapan_59.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_60.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_61.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_FoodDrink_62.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_rt_rw_RW3_RT2_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW3_RT3_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW3_RT4_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW4_RT1_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW4_RT2_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW1_RT1_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW1_RT2_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW1_RT3_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW1_RT4_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW1_RT5_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW2_RT1_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW2_RT2_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW4_RT3_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW4_RT4_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT1_16.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT2_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT3_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT4_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT7_20.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW5_RT8_21.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW6_RT2_22.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW6_RT3_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW6_RT4_24.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW6_RT5_25.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW6_RT7_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW7_RT1_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW7_RT2_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW7_RT4_29.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW8_RT1_30.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW8_RT2_31.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW8_RT3_32.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW8_RT4_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW9_RT1_34.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW9_RT2_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW9_RT3_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW9_RT4_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW10_RT1_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW10_RT2_39.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW11_RT1_40.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW11_RT2_41.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW12_RT3_42.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW12_RT2_43.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW11_RT3_44.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW11_RT4_45.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_rt_rw_RW12_RT1_46.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'RT': 'TextEdit', 'RW': 'Range', 'rt_rw': 'TextEdit', });
lyr_Makam_47.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Lapangan_48.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Kebun_49.set('fieldImages', {'id': 'Range', });
lyr_Sawah_50.set('fieldImages', {'id': 'Range', });
lyr_Bangunan2_51.set('fieldImages', {'fclass': 'TextEdit', });
lyr_Sungai_52.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanGang_53.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JalanDesa2_54.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanKabupaten_55.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_TempatIbadah_56.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Pemerintahan_57.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Shop_58.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Penginapan_59.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Pendidikan_60.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_Kesehatan_61.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_FoodDrink_62.set('fieldImages', {'id': 'Range', 'Nama': 'TextEdit', });
lyr_rt_rw_RW3_RT2_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW3_RT3_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW3_RT4_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW4_RT1_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW4_RT2_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW1_RT1_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW1_RT2_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW1_RT3_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW1_RT4_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW1_RT5_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW2_RT1_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW2_RT2_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW4_RT3_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW4_RT4_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT1_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT2_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT3_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT4_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT7_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW5_RT8_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW6_RT2_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW6_RT3_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW6_RT4_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW6_RT5_25.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW6_RT7_26.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW7_RT1_27.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW7_RT2_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW7_RT4_29.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW8_RT1_30.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW8_RT2_31.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW8_RT3_32.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW8_RT4_33.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW9_RT1_34.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW9_RT2_35.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW9_RT3_36.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW9_RT4_37.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW10_RT1_38.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW10_RT2_39.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW11_RT1_40.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW11_RT2_41.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW12_RT3_42.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW12_RT2_43.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW11_RT3_44.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW11_RT4_45.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_rt_rw_RW12_RT1_46.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RT': 'no label', 'RW': 'no label', 'rt_rw': 'inline label - visible with data', });
lyr_Makam_47.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Lapangan_48.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kebun_49.set('fieldLabels', {'id': 'no label', });
lyr_Sawah_50.set('fieldLabels', {'id': 'no label', });
lyr_Bangunan2_51.set('fieldLabels', {'fclass': 'no label', });
lyr_Sungai_52.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanGang_53.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_JalanDesa2_54.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_JalanKabupaten_55.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', 'Lebar': 'no label', });
lyr_TempatIbadah_56.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Pemerintahan_57.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Shop_58.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Penginapan_59.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Pendidikan_60.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Kesehatan_61.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_FoodDrink_62.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_FoodDrink_62.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
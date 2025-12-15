const kelurahanConfig = {
  center: [-7.413948, 109.237669],   // sesuaikan koordinat
  zoom: 16,

  layers: {

    // =====================
    // LINE
    // =====================
    "Sungai": {
      url: "data/kelurahan/line/Sungai.geojson",
      style: { color: "#0dcaf0", weight: 2 }
    },
    "Jalan Kabupaten": {
      url: "data/kelurahan/line/Jalan Kabupaten.geojson",
      style: { color: "#fd7e14", weight: 3 }
    },
    "Jalan Gang": {
      url: "data/kelurahan/line/Jalan Gang.geojson",
      style: { color: "#6c757d", weight: 1 }
    },
    "Jalan Desa": {
      url: "data/kelurahan/line/Jalan Desa.geojson",
      style: { color: "#ffc107", weight: 2 }
    },

    // =====================
    // POINT
    // =====================
    "Makam (Titik)": {
      url: "data/kelurahan/point/Makam.geojson",
      color: "#6c757d"
    },
    "Tempat Ibadah": {
      url: "data/kelurahan/point/Tempat Ibadah.geojson",
      color: "#20c997"
    },
    "Kesehatan": {
      url: "data/kelurahan/point/Kesehatan.geojson",
      color: "#dc3545"
    },
    "Pendidikan": {
      url: "data/kelurahan/point/Pendidikan.geojson",
      color: "#0d6efd"
    },
    "Food & Drink": {
      url: "data/kelurahan/point/Food&Drink.geojson",
      color: "#fd7e14"
    },
    "Penginapan": {
      url: "data/kelurahan/point/Penginapan.geojson",
      color: "#6f42c1"
    },
    "Shop": {
      url: "data/kelurahan/point/Shop.geojson",
      color: "#198754"
    },

    // =====================
    // POLYGON
    // =====================
    "Batas Wilayah": {
      url: "data/kelurahan/polygon/Batas Wilayah.geojson",
      style: { color: "#dc3545", weight: 2, fillOpacity: 0 }
    },
    "RW": {
      url: "data/kelurahan/polygon/RW.geojson",
      style: { color: "#0d6efd", weight: 1, fillOpacity: 0 },
      visible: false
    },
    "RT": {
      url: "data/kelurahan/polygon/RT.geojson",
      style: { color: "#20c997", weight: 1, fillOpacity: 0 },
      visible: false
    },
    "Sawah": {
      url: "data/kelurahan/polygon/Sawah.geojson",
      style: { color: "#198754", fillOpacity: 0.5 }
    },
    "Kebun": {
      url: "data/kelurahan/polygon/Kebun.geojson",
      style: { color: "#2ca02c", fillOpacity: 0.5 }
    },
    "Lapangan": {
      url: "data/kelurahan/polygon/Lapangan.geojson",
      style: { color: "#20c997", fillOpacity: 0.6 }
    },
    "Bangunan": {
      url: "data/kelurahan/polygon/Bangunan.geojson",
      style: { color: "#adb5bd", fillOpacity: 0.7 }
    },
    "Bangunan (Alt)": {
      url: "data/kelurahan/polygon/Bangunan_2.geojson",
      style: { color: "#868e96", fillOpacity: 0.7 }
    },
    "Makam (Area)": {
      url: "data/kelurahan/polygon/MakamP.geojson",
      style: { color: "#6c757d", fillOpacity: 0.6 }
    }

  }
};

const kecamatanConfig = {
  center: [-7.413948, 109.237669],   // sesuaikan
  zoom: 16,

  layers: {

    // =====================
    // LINE
    // =====================
    "Jalan Desa": {
      url: "data/kecamatan/line/Jalan Desa.geojson",
      style: { color: "#ffc107", weight: 2 }
    },
    "Jalan Gang": {
      url: "data/kecamatan/line/Jalan Gang.geojson",
      style: { color: "#6c757d", weight: 1 }
    },
    "Jalan Kabupaten": {
      url: "data/kecamatan/line/Jalan Kabupaten.geojson",
      style: { color: "#fd7e14", weight: 3 }
    },
    "Sungai": {
      url: "data/kecamatan/line/Sungai.geojson",
      style: { color: "#0dcaf0", weight: 2 }
    },

    // =====================
    // POLYGON
    // =====================
    "Batas Wilayah": {
      url: "data/kecamatan/polygon/Batas Wilayah.geojson",
      style: { color: "#dc3545", weight: 2, fillOpacity: 0.5 }
    },
    "Sawah": {
      url: "data/kecamatan/polygon/Sawah.geojson",
      style: { color: "#198754", fillOpacity: 0.5 }
    },
    "Kebun": {
      url: "data/kecamatan/polygon/Kebun.geojson",
      style: { color: "#2ca02c", fillOpacity: 0.5 }
    },
    "Lapangan": {
      url: "data/kecamatan/polygon/Lapangan.geojson",
      style: { color: "#20c997", fillOpacity: 0.6 }
    },
    "Makam": {
      url: "data/kecamatan/polygon/Makam.geojson",
      style: { color: "#6c757d", fillOpacity: 0.6 }
    },
    "Bangunan": {
      url: "data/kecamatan/polygon/Bangunan.geojson",
      style: { color: "#adb5bd", fillOpacity: 0.7 }
    },

    // =====================
    // POINT
    // =====================
    "Bank": {
      url: "data/kecamatan/point/Bank.geojson",
      color: "#198754"
    },
    "Food & Drink": {
      url: "data/kecamatan/point/Food&Drink.geojson",
      color: "#dc3545"
    },
    "Kesehatan": {
      url: "data/kecamatan/point/Kesehatan.geojson",
      color: "#0dcaf0"
    },
    "Pemerintahan": {
      url: "data/kecamatan/point/Pemerintahan.geojson",
      color: "#495057"
    },
    "Pendidikan": {
      url: "data/kecamatan/point/Pendidikan.geojson",
      color: "#0d6efd"
    },
    "Penginapan": {
      url: "data/kecamatan/point/Penginapan.geojson",
      color: "#6f42c1"
    },
    "Shop": {
      url: "data/kecamatan/point/Shop.geojson",
      color: "#fd7e14"
    },
    "Tempat Ibadah": {
      url: "data/kecamatan/point/Tempat Ibadah.geojson",
      color: "#20c997"
    }

  }
};

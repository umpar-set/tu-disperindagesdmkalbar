
const keterangan = sessionStorage.getItem("keterangan");
const lastUpdate = sessionStorage.getItem("LastUpdate");
const tanggal = sessionStorage.getItem("tanggal");

if (keterangan) {
    document.getElementById("output").innerText = keterangan;
}

if (tanggal) {
    document.getElementById("datedetik").innerText = tanggal;
    document.getElementById("tgldetik").innerText = tanggal;
}

if (lastUpdate) {
    document.getElementById("date").innerText = lastUpdate;
    document.getElementById("tgl").innerText = lastUpdate;
}

if (keterangan && keterangan.length > 1) {
    document.getElementById("terkirimStep").classList.remove("hidden");
    document.getElementById("selesaiStep").classList.remove("hidden");
}

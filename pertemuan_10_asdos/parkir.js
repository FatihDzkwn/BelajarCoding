
// Menghitung Biaya Parkir
function hitungBiayaParkir() {
    let jamMasuk = document.getElementById('jam_masuk').value;
    let jamKeluar = document.getElementById('jam_keluar').value;
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir);
    
    // Biaya 2 Jam Pertama
    let biayaParkir = 3000;
    lamaParkir -= 2;
    
    // Hitung Sisa Jam
    if(lamaParkir > 0) {
        biayaParkir = biayaParkir + (lamaParkir * 1000);
    }

    console.log(biayaParkir);
    // Tampilkan Hasil kedalam Html
    document.getElementById('biaya_parkir').innerHTML = biayaParkir;
}
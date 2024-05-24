function submitOrder() {
  // Ambil nilai dari form
  const name = document.getElementById('name').value;
  const notelp = document.getElementById('notelp').value;
  const jenis = document.getElementById('jenis').value;
  const jumlah = document.getElementById('jumlah').value;

  // Cek jika semua field sudah diisi
  if (name && notelp && jenis !== 'Pilih menu:' && jumlah) {
    const orderDetails = `Nama: ${name}\nNo Telp: ${notelp}\nJenis: ${jenis}\nJumlah: ${jumlah}`;
    const confirmation = confirm(`Konfirmasi Order:\n${orderDetails}\n\nApakah Anda ingin melanjutkan?`);
    if (confirmation) {
      alert('Order sedang diproses!');
      document.getElementById('orderForm').reset();
    }
  } else {
    alert('Mohon lengkapi semua field.');
  }
}

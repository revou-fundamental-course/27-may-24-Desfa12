document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    // Mengambil nilai dari setiap input
    var nama = document.getElementById("sender-nama").value;
    var tgl_lahir = document.getElementById("sender-birth-date").value;
    // var jenis_kelamin = document.getElementById("sender-gender").value;
    var pesan = document.getElementById("sender-pesan").value;

    // Mengambil elemen error
    var namaError = document.getElementById("vnama");
    var tglError = document.getElementById("vlahir");
    // var jkError = document.getElementById("vjenis_kelamin");
    var pesanError = document.getElementById("vpesan");

    // Validasi
    var isValid = true;

    // Validasi nama tidak boleh kosong
    if (nama === "") {
      namaError.textContent = "Nama harus diisi";
      isValid = false;
    } else {
      namaError.textContent = "";
      isValid = false;
    }

    // Validasi tanggal lahir tidak boleh kosong
    if (tgl_lahir === "") {
      tglError.textContent = "Tanggal lahir harus diisi";
      isValid = false;
    } else {
      tglError.textContent = "";
      isValid = false;
    }

    // Validasi pesan tidak boleh kosong
    if (pesan === "") {
      // pesanError.textContent = "Pesan harus diisi";
      pesanError.textContent = "Pesan harus diisi";
      isValid = false;
    } else {
      pesanError.textContent = "";
      isValid = false;
    }

    // Menghentikan pengiriman form jika ada kesalahan
    if (!isValid) {
      event.preventDefault();
    }

    // setSenderUI(nama, tgl_lahir, pesan);
    document.getElementById("hnama").innerHTML = nama;

    document.getElementById("htgl_lahir").innerHTML = tgl_lahir;

    // document.getElementById("hjenis_kelamin").innerHTML = jenis_kelamin;

    document.getElementById("hpesan").innerHTML = pesan;
  });

//  Script untuk validasi form
// function validateForm() {
//   const nama = document.forms["nama"].value;
//   const tgl_lahir = document.forms["tgl_lahir"].value;
//   const jenis_kelamin = document.forms["contus"]["jenis_kelamin"].value;
//   const pesan = document.forms["contus"]["pesan"].value;

//   if (nama == "" || tgl_lahir == "" || jenis_kelamin == "" || pesan == "") {
//     document.getElementById("error-warning").innerHTML = "masih error";
//   } else {
//     document.getElementById("error-warning").innerHTML = "";
//   }

//   setSenderUI(nama, tgl_lahir, jenis_kelamin, pesan);

//   return false;
// }

function setSenderUI(nama, tgl_lahir, pesan) {
  document.getElementById("hnama").innerHTML = nama;

  document.getElementById("htgl_lahir").innerHTML = tgl_lahir;

  // document.getElementById("hjenis_kelamin").innerHTML = jenis_kelamin;

  document.getElementById("hpesan").innerHTML = pesan;
}

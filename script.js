function openEmailForm() {
    document.getElementsById("emailModal").style.display = "blockk";
}
function closeEmailForm() {
    document.getElementsById("emailModal").style.display = "none";
}

function sendEmail(event) {
    event.preventDefault(); 
    // mencegah halaman refresh

    const message =
    document.getElementsById('message').value;
    const email = 'tkjsmkth@gmail.com'; // alamat email

    // membuat tautan email agar pengguna dapat mengisi pesan sebelum mengirim
    const mailtoLink = 'mailto: ${email}?subject=Pesan dari pengguna&body=${encodeURIComponent(message)}';

    // Buka aplikasi email dengan isi pesan tadi
    window.location.href = mailtoLink;

    // tutup modal setelah pesan tekirim
    closeEmailForm();
}
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// JavaScript untuk menangani pengiriman form menggunakan AJAX
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari pengiriman standar

    var formData = new FormData(this);

    // Mengirimkan form menggunakan fetch API ke Formspree
    fetch('https://formspree.io/f/xpwzewzq', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'  // Menambahkan no-cors untuk menghindari masalah CORS
    })
    .then(response => {
        alert('Terima kasih! Pesan Anda telah terkirim.');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
    
});

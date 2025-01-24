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

// Nomor WhatsApp
const whatsappNumber = "6287776714687";

// tombol Beli Sekarang
document.querySelectorAll(".buy-now-button").forEach(button => {
  button.addEventListener("click", function () {
    const productElement = this.closest(".product-item");
    const productName = productElement.querySelector(".product-title").textContent;
    const productPrice = productElement.querySelector(".product-price").getAttribute("data-price");

    const message = `Halo, saya tertarik membeli produk berikut:\n\n` +
                    `Nama Produk: ${productName}\n` +
                    `Harga: Rp ${Number(productPrice).toLocaleString('id-ID')}\n\n` +
                    `Apakah produk ini masih tersedia?`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
});

// tombol Lihat Detail
document.querySelectorAll(".product-image").forEach(button => {
  button.addEventListener("click", function () {
    const productElement = this.closest(".product-item");
    const productName = productElement.querySelector(".product-title").textContent;
    const productDescription = productElement.querySelector(".product-description").textContent;

    const galleryImages = productElement.querySelectorAll(".product-gallery");
    const modalImagesContainer = document.getElementById("modal-images");
    modalImagesContainer.innerHTML = ""; 

    galleryImages.forEach(image => {
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      modalImagesContainer.appendChild(img);
    });

    document.getElementById("modal-title").textContent = productName;
    document.getElementById("modal-description").textContent = productDescription;
    document.getElementById("modal").style.display = "flex";
  });
});

// tombol Close pada modal
document.querySelector(".close-button").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // menyimpan data ke localStorage
  function saveToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    console.log("Tipe data keranjang sebelum validasi:", typeof cart, cart);
  
    if (!Array.isArray(cart)) {
      console.warn("Keranjang tidak valid, mengatur ulang ke array kosong.");
      cart = [];
    }
  
    const existingProduct = cart.find(item => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push(product);
    }
  
    console.log("Tipe data keranjang setelah validasi:", typeof cart, cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // menambahkan produk ke keranjang
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productItem = button.closest(".product-item");
      const productId = productItem.getAttribute("data-id");
      const productName = productItem.getAttribute("data-name");
      const productPrice = parseInt(productItem.getAttribute("data-price"));
      const productImage = productItem.querySelector(".product-image").src;

      // Membuat objek produk
      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1 
      };

      // Simpan produk ke keranjang
      saveToCart(product);
      alert(`${productName} telah ditambahkan ke keranjang!`);
    });
  });
});


const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".help-slide");

let currentIndex = 0;
const totalSlides = slides.length;

function goToSlide(index) {
  currentIndex = index % totalSlides;

  const offset = -currentIndex * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex++;
  goToSlide(currentIndex);
}

// Slider otomatis setiap 3 detik
setInterval(nextSlide, 5000);

// Set posisi awal
goToSlide(currentIndex);









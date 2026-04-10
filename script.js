// LOADING SCREEN
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500);

  // Popup promo muncul setelah loading
  setTimeout(() => {
    document.getElementById("promoPopup").classList.add("show");
  }, 2200);
});

// CLOSE PROMO
document.getElementById("closePromo").addEventListener("click", function () {
  document.getElementById("promoPopup").classList.remove("show");
});

// DARK MODE
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

// FILTER PAKET
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {
      const categories = card.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// LOKASI DESTINASI
const lokasiButtons = document.querySelectorAll(".lokasi-btn");
const locationDisplay = document.getElementById("locationDisplay");

lokasiButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lokasi = button.getAttribute("data-location");
    locationDisplay.innerHTML = `<strong>Destinasi Dipilih:</strong> ${lokasi}`;
    locationDisplay.scrollIntoView({ behavior: "smooth" });
  });
});

// FORM BOOKING KE WHATSAPP
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const paket = document.getElementById("paketPilihan").value;
  const tanggal = document.getElementById("tanggal").value;
  const jumlah = document.getElementById("jumlah").value;
  const catatan = document.getElementById("catatan").value;

  const pesan = `Halo Dream Tour, saya ingin booking paket wisata.%0A%0A` +
                `Nama: ${nama}%0A` +
                `No WA: ${telepon}%0A` +
                `Paket: ${paket}%0A` +
                `Tanggal Keberangkatan: ${tanggal}%0A` +
                `Jumlah Peserta: ${jumlah}%0A` +
                `Catatan: ${catatan}`;

  const nomorWA = "6281234567890";
  window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
});

// TESTIMONI DENGAN LOCAL STORAGE
const testimonialForm = document.getElementById("testimonialForm");
const testimonialGrid = document.querySelector(".testimonial-grid");

// Ambil data testimoni dari localStorage
let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];

// Fungsi render testimoni
function renderTestimonials() {
  const dynamicCards = document.querySelectorAll(".testimonial-card.dynamic");
  dynamicCards.forEach(card => card.remove());

  testimonials.forEach((item, index) => {
    const newCard = document.createElement("div");
    newCard.classList.add("testimonial-card", "dynamic");

    newCard.innerHTML = `
      <p>"${item.message}"</p>
      <h4>- ${item.name}, ${item.city}</h4>
      <button class="delete-btn" onclick="deleteTestimonial(${index})">Hapus</button>
    `;

    testimonialGrid.appendChild(newCard);
  });
}

// FUNGSI HAPUS TESTIMONI (TARUH DI SINI)
function deleteTestimonial(index) {
  if (confirm("Yakin ingin menghapus testimoni ini?")) {
    testimonials.splice(index, 1);
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
    renderTestimonials();
  }
}

// Saat form dikirim
testimonialForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const city = document.getElementById("customerCity").value;
  const message = document.getElementById("customerMessage").value;

  const newTestimonial = { name, city, message };
  testimonials.push(newTestimonial);

  localStorage.setItem("testimonials", JSON.stringify(testimonials));

  renderTestimonials();

  alert("Terima kasih! Pesan / kritik / saran Anda berhasil dikirim.");
  testimonialForm.reset();
});

// Tampilkan saat halaman dibuka
renderTestimonials();

// Saat form dikirim
testimonialForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const city = document.getElementById("customerCity").value;
  const message = document.getElementById("customerMessage").value;

  const newTestimonial = { name, city, message };
  testimonials.push(newTestimonial);

  localStorage.setItem("testimonials", JSON.stringify(testimonials));

  renderTestimonials();

  alert("Terima kasih! Pesan / kritik / saran Anda berhasil dikirim.");
  testimonialForm.reset();
});

// Tampilkan saat halaman dibuka
renderTestimonials();

// 

// SCROLL REVEAL
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

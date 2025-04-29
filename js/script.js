const scrollContainer = document.querySelector('.work-list');
let scrollInterval;
const scrollSpeed = 30; // Adjust this value to change the speed

// Fungsi untuk scroll otomatis
function autoScroll() {
    scrollContainer.scrollBy({
        top: 0,
        left: 1, // Jumlah piksel untuk scroll ke kanan
        behavior: 'smooth' // Animasi scroll
    });

    // Jika sudah mencapai akhir, kembali ke awal
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
    }
}

// Mulai scrolling otomatis
function startAutoScroll() {
    scrollInterval = setInterval(autoScroll, scrollSpeed);
}

// Hentikan scrolling otomatis
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Menangani hover untuk pause / resume scrolling
scrollContainer.addEventListener('mouseover', stopAutoScroll);
scrollContainer.addEventListener('mouseout', startAutoScroll);

// Mulai scrolling saat halaman dimuat
startAutoScroll();

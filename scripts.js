document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    for (let link of navLinks) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Dropdown Menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-content'); // Perhatikan penggunaan class dropdown-content untuk submenu

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });


    // Intersection Observer untuk animasi scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Tambahkan script untuk menampilkan tombol saat digulir ke bawah
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

// Tambahkan fungsi untuk kembali ke atas saat tombol diklik
var scrollToTopBtn = document.getElementById("scroll-to-top");
scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var scrollStep = -window.scrollY / (1000 / 15); // 1000/15 adalah kecepatan scroll
    var scrollInterval = setInterval(function(){
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval); 
    },15);
});


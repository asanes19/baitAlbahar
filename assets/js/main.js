/*=============== scroll reveal fade in ===============*/
const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1500,
    delay: 500,
    // reset: true,
});

function fadeOutSlideContent() {
    const slideContent = document.querySelector(".slide-content");
    slideContent.classList.add("fade-out");
}

// Call the fadeOutSlideContent function after 10 seconds (10000 milliseconds)
setTimeout(fadeOutSlideContent, 6000);

const animateElements = document.querySelectorAll(".animate-element");
animateElements.forEach((element) => {
    sr.reveal(element);
});

sr.reveal(".animate-element", { interval: 500 });

document.addEventListener("DOMContentLoaded", function () {
    const apartmentSections = document.querySelectorAll(".apartmentMain");

    apartmentSections.forEach(function (apartmentSection, index) {
        let currentSlide = 0;
        const images = apartmentSection.querySelector(".image-slider").querySelectorAll("img");
        const totalSlides = images.length;

        function showSlide(slideIndex) {
            images.forEach((image, idx) => {
                if (idx === slideIndex) {
                    image.style.opacity = 1;
                } else {
                    image.style.opacity = 0;
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function autoSlide() {
            nextSlide();
            setTimeout(autoSlide, 3000); // Change slide every 5 seconds
        }

        showSlide(currentSlide);
        autoSlide();
    });
});

 let slideIndex = 0;

        function showSlide(n) {
            const slides = document.getElementsByClassName("carousel-slide");
            if (n >= slides.length) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex].style.display = "block";
        }

        function prevSlide() {
            showSlide(--slideIndex);
        }

        function nextSlide() {
            showSlide(++slideIndex);
        }

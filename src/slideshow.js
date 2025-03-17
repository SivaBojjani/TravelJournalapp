function showSlides(n, slideIndex) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (!slides || slides.length === 0) {
    console.error("No slides found");
    return;
  }

  // Wrap around the slide index if it goes out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

export { showSlides };

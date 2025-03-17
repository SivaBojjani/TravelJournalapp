function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Check if slides exist
  if (!slides || slides.length === 0) {
    console.error("Slides not found.");
    return;
  }

  // Check if dots exist
  if (!dots || dots.length === 0) {
    console.error("Dots not found.");
    return;
  }

  // Wrap around the slide index
  if (n > slides.length) {
    n = 1;
  }
  if (n < 1) {
    n = slides.length;
  }

  // Hide all slides and remove 'active' class from all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and set the corresponding dot as active
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
}

export { showSlides };

const slides = [
    {
      image: "img/3.jpg",
      title: "Mahek Mahesh",
      subtitle: "Art",
      buttonText: "Explore Art",
    buttonLink: "portfolio.html"
    },
    {
      image: "img/8.jpg",
      title: "Creative",
      subtitle: "Projects",
      buttonText: "About the Artist",
    buttonLink: "about.html"
    },
    {
      image: "img/9.jpg",
      title: "Digital & Physical",
      subtitle: "Expression",
       buttonText: "About the Artist",
    buttonLink: "about.html"
    }
  ];
  
  let currentSlide = 0;
  const heroImage = document.getElementById("heroImage");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const content = document.getElementById("heroContent");
  
  function updateSlide() {
    content.classList.remove("show");
  
    setTimeout(() => {
      const slide = slides[currentSlide];
      heroImage.style.opacity = 0;
  
      setTimeout(() => {
        heroImage.src = slide.image;
        title.textContent = slide.title;
        subtitle.textContent = slide.subtitle;
        heroImage.style.opacity = 1;
        content.classList.add("show");
  
        currentSlide = (currentSlide + 1) % slides.length;
      }, 500); // Wait for fade-out before changing image/text
  
    }, 500); // Fade text out before switching
  }
  
  window.addEventListener("load", () => {
    content.classList.add("show");
    setInterval(updateSlide, 5000); // Slower interval
  });
  

  
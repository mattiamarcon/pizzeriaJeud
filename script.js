document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dots = document.querySelectorAll('#dots button');
    const navLinks= document.querySelectorAll(".navLink");
    const mobileMenu=document.getElementById("mobile-menu-2");

    const navbar = document.getElementById('navbar');

    navLinks.forEach(link=>{
        link.addEventListener("click",()=>{
            mobileMenu.classList.add("hidden");
        })
    })
  
    // Aggiungi stili CSS per la transizione
    navbar.style.transition = 'transform 0.3s ease-in-out';
    
    // Modifica la posizione da absolute a fixed per mantenere la navbar in posizione durante lo scroll
    navbar.classList.remove('absolute');
    navbar.classList.add('fixed', 'top-0');
    
    // Variabili per gestire lo scroll
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Soglia minima di scroll per attivare l'effetto
    let isNavbarVisible = true;
    
    // Funzione per gestire lo scroll
    function handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Ignora piccoli movimenti di scroll
      if (Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) {
        return;
      }
      
      // Se siamo all'inizio della pagina, mostra sempre la navbar
      if (currentScrollTop <= 50) {
        navbar.style.transform = 'translateY(0)';
        isNavbarVisible = true;
        return;
      }
      
      // Scroll verso il basso: nascondi la navbar
      if (currentScrollTop > lastScrollTop) {
        if (isNavbarVisible) {
          navbar.style.transform = 'translateY(-100%)';
          isNavbarVisible = false;
        }
      } 
      // Scroll verso l'alto: mostra la navbar
      else {
        if (!isNavbarVisible) {
          navbar.style.transform = 'translateY(0)';
          isNavbarVisible = true;
        }
      }
      
      lastScrollTop = currentScrollTop;
    }
    
    // Aggiungi l'event listener per lo scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    const prevReview=document.getElementById("prevReview");
    const nextReview=document.getElementById("nextReview");

    const reviews = [
      {
        img: "./public/piz.png",
        text: "Recensione numero uno: ottimo servizio!"
      },
      {
        img: "./public/asp.png",
        text: "Recensione numero due: esperienza fantastica!"
      },
      {
        img: "./public/ris.png",
        text: "Recensione numero tre: consigliatissimo."
      }
    ];

    let current = 0;

    function updateReview() {
      const reviewEl = document.getElementById('review');
      reviewEl.classList.remove('fade-in');
      reviewEl.classList.add('fade-out');

      setTimeout(() => {
        document.getElementById('review-img').src = reviews[current].img;
        document.getElementById('review-text').innerText = reviews[current].text;

        reviewEl.classList.remove('fade-out');
        reviewEl.classList.add('fade-in');
      }, 300);
    }

    prevReview.addEventListener("click",()=> {
      current = (current - 1 + reviews.length) % reviews.length;
      updateReview();
    })

    nextReview.addEventListener("click",()=> {
      current = (current - 1 + reviews.length) % reviews.length;
      updateReview();
    })

  });
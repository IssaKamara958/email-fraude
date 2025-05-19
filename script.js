 // Mise à jour automatique de l'année
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Fonctions de partage (simplifiées)
    function shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
    
    function shareOnTwitter() {
      const text = encodeURIComponent("Protégez-vous contre les arnaques par email - Guide complet");
      const url = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
    
    // Animation au défilement
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
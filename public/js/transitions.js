document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    const body = document.body;
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
  
        body.classList.add('animate__animated', 'animate__fadeOut');
  
        setTimeout(() => {
          window.location.href = href;
        }, 800);
      });
    });
  });
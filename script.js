document.addEventListener('DOMContentLoaded', function() {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(function(element) {
      element.classList.add('show');
    });
  });
console.log("Hello")
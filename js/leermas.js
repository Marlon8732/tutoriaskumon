document.addEventListener('DOMContentLoaded', function () {
    var collapsedParagraphs = document.querySelectorAll('.collapsed');
  
    collapsedParagraphs.forEach(function (paragraph) {
      var readMoreLink = paragraph.querySelector('.read-more');
  
      readMoreLink.addEventListener('click', function (event) {
        event.preventDefault();
        paragraph.classList.remove('collapsed');
        readMoreLink.style.display = 'none';
        readMoreLink.style.visibility = 'hidden'; // O puedes usar 'opacity: 0;' para ocultar gradualmente
      });
  
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".icon");
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.textContent = "+";
          button.appendChild(icon);
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.textContent = "-";
          button.appendChild(icon);
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
  
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  });
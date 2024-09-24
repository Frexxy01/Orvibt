document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 1;
  
    function openModal(imageSrc) {
      var modal = document.getElementById('myModal');
      var modalImg = document.getElementById('modalImage');
      modal.style.display = "block";
      modalImg.src = imageSrc;
    }

    // Get all images with class "image" inside element with class "grid-catalog"
    var images = document.querySelectorAll('.grid-catalog .image');
  
    // Loop through each image and attach onclick event
    images.forEach(function(image) {
      image.onclick = function() {
        openModal(image.src); // Pass the image source to the openModal function
      };
    });
  });
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
function showSlides(n) {
    var modalImg = document.getElementById('modalImage');
    var images = [
      "Munkak/ablak1-2.jpg",
      "Munkak/ablak1.jpg",
      "Munkak/ablak3.jpg",
      
    ];
    if (n > images.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = images.length; }
    modalImg.src = images[slideIndex - 1];
  }

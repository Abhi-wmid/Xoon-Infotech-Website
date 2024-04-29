const loader = () => {
  const num = document.querySelector("#number");

  document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    let interval = setInterval(() => {
      if (count <= 100) {
        num.innerHTML = count + "%";
        count++;
      } else {
        clearInterval(interval);
        document.querySelector("#loader").style.transform = "translateY(-100%)";
        setTimeout(() => {
          document.querySelector("#loader").style.display = "none";
          console.log("kain");
        }, 500);
      }
    }, 20);
  });
};

// loader();
const navbar = () =>{

  var getHubergerIcon = document.getElementById("hamburger-menu");
  var getHubergerCrossIcon = document.getElementById("hamburger-cross");
  var getMobileMenu = document.getElementById("mobile-menu");

  getHubergerIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
      getMobileMenu.style.transform = "translateX(0%)";
    }, 50);
  });

  getHubergerCrossIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.transform = "translateX(-100%)";
    setTimeout(function () {
      getMobileMenu.style.display = "none";
    }, 300);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
      getMobileMenu.style.display = "none";
    }
  });

}
navbar()



// }
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let slideIndex = 0;
  const slideWidth = document.querySelector('.card').offsetWidth;

  function showSlides() {
      slides.style.transform = `translateX(-${(slideWidth * slideIndex) + 20}px)`;
  }

  function nextSlide() {
      if (slideIndex < slides.children.length - 2) {
          slideIndex++;
      } else {
          slideIndex = 0;
      }
      showSlides();
  }

  function prevSlide() {
      if (slideIndex > 0) {
          slideIndex--;
      } else {
          slideIndex = slides.children.length - 2;
      }
      showSlides();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Responsive slide adjustment
  window.addEventListener('resize', function() {
      slideWidth = document.querySelector('.card').offsetWidth;
      showSlides();
  });

  // Auto slide change
  // setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});

// // scrollUpIco

// window.addEventListener('scroll', function() {
//   var scrollUpIcon = document.getElementById('scroll-up-icon');
//   if (window.scrollY > 100) {
//       scrollUpIcon.classList.add('show');
//   } else {
//       scrollUpIcon.classList.remove('show');
//   }
// });

//update scrollico


// Smooth scroll function
function scrollToTop() {
  var scrollDuration = 1000; // Scroll duration in milliseconds
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
      } else {
          clearInterval(scrollInterval);
      }
  }, 15);
}

// Scroll event listener to show/hide the scroll-up icon
window.addEventListener('scroll', function() {
  var scrollUpIcon = document.getElementById('scroll-up-icon');
  if (window.scrollY > 500) {
      scrollUpIcon.classList.add('show');
  } else {
      scrollUpIcon.classList.remove('show');
  }
});

// Click event listener for the scroll-up icon
document.querySelector('.scroll-up-link').addEventListener('click', function(event) {
  event.preventDefault();
  scrollToTop();
});

// slider



document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  let startX = 0;
  let endX = 0;

  slider.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchmove', function (e) {
      endX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', function () {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) { // Adjust swipe sensitivity here
          if (diff > 0) {
              // Swiped left
              nextSlide();
          } else {
              // Swiped right
              prevSlide();
          }
      }
  });

  function nextSlide() {
      // Implement logic to navigate to the next slide
      slides.style.transform = 'translateX(-100%)'; // Example: Move to the next slide
  }

  function prevSlide() {
      // Implement logic to navigate to the previous slide
      slides.style.transform = 'translateX(0)'; // Example: Move to the previous slide
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('homeRight');
  var image = document.getElementById('moving-text');
  var containerRect = container.getBoundingClientRect();
  var containerCenterX = containerRect.left + containerRect.width / 2;
  var containerCenterY = containerRect.top + containerRect.height / 2;

  container.addEventListener('mousemove', function(e) {
      var cursorX = e.clientX;
      var cursorY = e.clientY;

      // Calculate the distance from the cursor to the center of the container
      var distX = cursorX - containerCenterX;
      var distY = cursorY - containerCenterY;

      // Define the maximum distance the image can move from the center
      var maxDistance = 50;

      // Calculate the percentage of maximum distance for the image to move
      var moveX = (distX / containerRect.width) * maxDistance;
      var moveY = (distY / containerRect.height) * maxDistance;

      // Apply the movement to the image with animation
      image.style.transition = 'transform 0.1s ease';
      image.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
  });

  container.addEventListener('mouseleave', function() {
      // Reset image position when cursor leaves the container
      image.style.transition = 'transform 0.3s ease';
      image.style.transform = 'translate(0, 0)';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('homeLeft');
  var text = container.querySelectorAll('h3, h1, h4');
  var containerRect = container.getBoundingClientRect();
  var containerCenterX = containerRect.left + containerRect.width / 2;
  var containerCenterY = containerRect.top + containerRect.height / 2;

  container.addEventListener('mousemove', function(e) {
      var cursorX = e.clientX;
      var cursorY = e.clientY;

      // Calculate the distance from the cursor to the center of the container
      var distX = cursorX - containerCenterX;
      var distY = cursorY - containerCenterY;

      // Define the maximum distance the text can move from the center
      var maxDistance = 20;

      // Calculate the percentage of maximum distance for the text to move
      var moveX = (distX / containerRect.width) * maxDistance;
      var moveY = (distY / containerRect.height) * maxDistance;

      // Apply the movement to each text element with animation
      text.forEach(function(element) {
          element.style.transition = 'transform 0.1s ease';
          element.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
      });
  });

  container.addEventListener('mouseleave', function() {
      // Reset text position when cursor leaves the container
      text.forEach(function(element) {
          element.style.transition = 'transform 0.3s ease';
          element.style.transform = 'translate(0, 0)';
      });
  });
});

// for contact

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Validate email
      const email = form.querySelector('input[type="email"]').value;
      if (!validateEmail(email)) {
          showError('Please enter a valid email address.');
          return;
      }

      // Validate name
      const name = form.querySelector('input[type="text"]').value;
      if (name.trim() === '') {
          showError('Please enter your name.');
          return;
      }

      // Validate phone number
      const phone = form.querySelector('input[type="tel"]').value;
      if (!validatePhoneNumber(phone)) {
          showError('Please enter a valid phone number.');
          return;
      }

      // Validate message
      const message = form.querySelector('textarea').value;
      if (message.trim() === '') {
          showError('Please enter your message.');
          return;
      }

      // If all validations pass, submit the form
      form.submit();
  });

  // Function to validate email
  function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  // Function to validate phone number
  function validatePhoneNumber(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
  }

  // Function to show error message
  function showError(message) {
      const errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerText = message;
      form.appendChild(errorElement);

      // Remove error message after 3 seconds
      setTimeout(function() {
          errorElement.remove();
      }, 3000);
  }
});

    // js for our team
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: 'true',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      breakpoints:{
          0: {
              slidesPerView: 1,
          },
          520: {
              slidesPerView: 2,
          },
          950: {
              slidesPerView: 3,
          }
      }
    });


    // navbar srinking
    let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY;
  let navbar = document.querySelector('.navbar');
  let contactButton = document.querySelector('.nav-button');

  if (currentScroll > lastScrollTop) {
    // scrolling down
    navbar.classList.add('scroll-down'); // Add class for scrolling down
    navbar.classList.remove('scroll-up'); // Remove class for scrolling up
    contactButton.classList.add('scroll-down'); // Add class for scrolling down
    contactButton.classList.remove('scroll-up'); // Remove class for scrolling up
  } else {
    // scrolling up
    navbar.classList.remove('scroll-down'); // Remove class for scrolling down
    navbar.classList.add('scroll-up'); // Add class for scrolling up
    contactButton.classList.remove('scroll-down'); // Remove class for scrolling down
    contactButton.classList.add('scroll-up'); // Add class for scrolling up
  }

  // If the user has scrolled to the top of the page, remove the scroll-up class
  if (currentScroll === 0) {
    navbar.classList.remove('scroll-up');
    contactButton.classList.remove('scroll-up');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

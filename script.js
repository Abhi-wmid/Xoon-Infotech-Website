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




// scroll behavior

function disableSmoothScroll() {
  document.documentElement.style.scrollBehavior = 'auto';
}

function restoreSmoothScroll() {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function scrollToTop() {
  disableSmoothScroll();  
  
  var scrollDuration = 800;
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
      } else {
          clearInterval(scrollInterval);
          restoreSmoothScroll();  
      }
  }, 15);
}


window.addEventListener('scroll', function() {
  var scrollUpIcon = document.getElementById('scrollup-icon');
  if (window.scrollY > 400) {
      scrollUpIcon.classList.add('show');
  } else {
      scrollUpIcon.classList.remove('show');
  }
});

document.querySelector('.scrollup-link').addEventListener('click', function(event) {
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
      slides.style.transform = 'translateX(-100%)'; 
  }

  function prevSlide() {
     
      slides.style.transform = 'translateX(0)'; 
  }
});

// mouse function for image
// document.addEventListener('DOMContentLoaded', function() {
//   var container = document.getElementById('homeRight');
//   var image = document.getElementById('moving-text');
//   var containerRect = container.getBoundingClientRect();
//   var containerCenterX = containerRect.left + containerRect.width / 2;
//   var containerCenterY = containerRect.top + containerRect.height / 2;

//   container.addEventListener('mousemove', function(e) {
//       var cursorX = e.clientX;
//       var cursorY = e.clientY; 
//       var distX = cursorX - containerCenterX;
//       var distY = cursorY - containerCenterY;
//      var maxDistance = 50;
//       var moveX = (distX / containerRect.width) * maxDistance;
//       var moveY = (distY / containerRect.height) * maxDistance;
//       image.style.transition = 'transform 0.1s ease';
//       image.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
//   });

//   container.addEventListener('mouseleave', function() {
//          image.style.transition = 'transform 0.3s ease';
//       image.style.transform = 'translate(0, 0)';
//   });
// });

// mouse function for text
// document.addEventListener('DOMContentLoaded', function() {
//   var container = document.getElementById('homeLeft');
//   var text = container.querySelectorAll('h3, h1, h4');
//   var containerRect = container.getBoundingClientRect();
//   var containerCenterX = containerRect.left + containerRect.width / 2;
//   var containerCenterY = containerRect.top + containerRect.height / 2;
//   container.addEventListener('mousemove', function(e) {
//       var cursorX = e.clientX;
//       var cursorY = e.clientY;
//       var distX = cursorX - containerCenterX;
//       var distY = cursorY - containerCenterY;
//       var maxDistance = 20;

//       var moveX = (distX / containerRect.width) * maxDistance;
//       var moveY = (distY / containerRect.height) * maxDistance;
//       text.forEach(function(element) {
//           element.style.transition = 'transform 0.1s ease';
//           element.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
//       });
//   });

//   container.addEventListener('mouseleave', function() {
//       text.forEach(function(element) {
//           element.style.transition = 'transform 0.3s ease';
//           element.style.transform = 'translate(0, 0)';
//       });
//   });
// });

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

// swiper reviews
function myFunction(widthSize) {
  if (widthSize.matches) {
      // If media query matches
      const swiper = new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },

          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  } else {
      const swiper = new Swiper(".swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);


// var swiper = new Swiper('.mySwiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


    // navbar srinking
//     let lastScrollTop = 0;

// window.addEventListener("scroll", function() {
//   let currentScroll = window.scrollY;
//   let navbar = document.querySelector('.navbar');
//   let contactButton = document.querySelector('.nav-button');

//   if (currentScroll > lastScrollTop) {
//     // scrolling down
//     navbar.classList.add('scroll-down'); 
//     navbar.classList.remove('scrollup'); 
//     contactButton.classList.add('scroll-down'); 
//     contactButton.classList.remove('scrollup'); 
//   } else {
//     // scrolling up
//     navbar.classList.remove('scroll-down'); 
//     navbar.classList.add('scrollup'); 
//     contactButton.classList.remove('scroll-down'); 
//     contactButton.classList.add('scrollup'); 
//   }
//   if (currentScroll === 0) {
//     navbar.classList.remove('scrollup');
//     contactButton.classList.remove('scrollup');
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });

// for footer subscribe button



document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email-input");
  const subscribeButton = document.getElementById("submit");
  const thanksMessage = document.querySelector(".thanks");

  console.log(emailInput);
  console.log(subscribeButton);
  console.log(thanksMessage);

  subscribeButton.addEventListener("click", function(event) {
      event.preventDefault(); 

      console.log("Subscribe button clicked");

      const email = emailInput.value;

      console.log("Email:", email);

      
      if (validateEmail(email)) {
          // Here you can add code to process the subscription, like sending the email to your server
         
          console.log('Subscribed with email: ' + email);
          
        
          thanksMessage.style.opacity = 1;
      } else {
          
          alert("Please enter a valid email address.");
      }
  });

  // Function to validate email format
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});

// for the subscride now
const scriptURL = 'https://script.google.com/macros/s/AKfycbw70_9o1SQYIgIG68dTcnyKmv9klwEOZdBY3GvBv8WipqhwWdXGzqihzNNc7lZGQF8cnA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Thank You for Subscribe!"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  // whatsappchat
  const whatsappLink = document.querySelector('.whatsapp-link');
  const phoneNumber = '9839679736';
  const message="helo"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  whatsappLink.setAttribute('href', whatsappUrl);
  
  whatsappLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.open(whatsappUrl, '_blank');
  });

 
  // Initialize Swiper
  var swiper = new Swiper('.slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    // If you have more than 3 slides, set loop to true
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var icon1 = document.getElementById("icon1");
icon1.onclick = function(){
document.body.classList.toggle("dark-them");
if(document.body.classList.contains("dark-them")){
icon1.src = "./images/logo/sun.png";
}else{
icon1.src = "./images/logo/moon.png";
}
};

// document.addEventListener('DOMContentLoaded', function () {
// var popup = document.getElementById('popup');
// var closeBtn = document.getElementById('close');
// var exploreBtn = document.getElementById('explore');
// var video = document.getElementById('video');


// setTimeout(function () {
// popup.style.display = 'block';
// video.play();
// }, 10000);


// closeBtn.onclick = function () {
// popup.style.display = 'none';
// video.pause();
// };


// exploreBtn.onclick = function () {
// window.location.href = 'https://www.envelai.com/'; 
// };


// window.onclick = function (event) {
// if (event.target == popup) {
//     popup.style.display = 'none';
//     video.pause();
// }
// };
// });



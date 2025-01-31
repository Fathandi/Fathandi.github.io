/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- BLUE-BTN FUNCTION ----- */
function redirectToAssistant() {
  window.open("./assistant/assistant.html", "_blank");
}

/* ----- DOWNLOAD CV FUNCION ----- */
function downloadCV() {
  window.open(".cv/tempCV.txt", "_blank");
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Front End Developer", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".containerload", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".project-card", { interval: 200 });


/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/* ----- CONTACT BOX EMAIL JS -----*/

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("7K2aOKMaqg5DT64wQ"); // Menggunakan Public ID yang baru

  document
    .getElementById("sendBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const serviceID = "service_9vagnoe"; // Menggunakan Service ID yang baru
      const templateID = "template_zq7n4mh"; // Menggunakan Template ID yang baru

      // Ambil nilai dari input nama, email, dan pesan
      const senderName = document.getElementById("name").value;
      const senderEmail = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Pastikan input nama, email, dan pesan tidak kosong sebelum mengirim
      if (!senderName || !senderEmail || !message) {
        Swal.fire({
          title: "Please fill in all fields!",
          timer: 2000,
          showConfirmButton: false,
        });
        return;
      }

      const templateParams = {
        from_name: senderName,
        from_email: senderEmail,
        message_html: message,
      };

      emailjs.send(serviceID, templateID, templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send your message. Please try again later",
          });
        }
      );
    });
});

window.addEventListener("scroll", scrollActive);

const Home = () => {
    const home = document.getElementById("home");
    home.innerHTML = `
      <div class="featured-text">
        <div class="featured-text-card">
          <span>Information System</span>
        </div>
        <div class="featured-name">
          <p>Fathih Apriandi<br /><span class="typedText"></span></p>
        </div>
  
        <!-- Loader Animation -->
        <div class="containerload">
          <div class="wrapper-loader">
            <div class="loader">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              <div class="dot dot4"></div>
              <div class="dot dot5"></div>
              <div class="dot dot6"></div>
              <div class="dot dot7"></div>
            </div>
          </div>
        </div>
  
        <!-- Buttons -->
        <div class="featured-text-btn">
          <button class="btn blue-btn" onclick="portfolio()">
            My Recent Projects<i class="uil uil-robot"></i>
          </button>
          <button class="btn" onclick="downloadCV()">
            Download CV<i class="uil uil-file-alt"></i>
          </button>
        </div>
  
        <!-- Social Icons -->
        <div class="social_icons">
          <div class="icon">
            <a href="https://www.instagram.com/apriandi.js?igsh=ZGZwOWhuOGZ0OHU=" target="_blank">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.linkedin.com/in/fathih-apriandi-5150b129a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://wa.me/qr/SSYVG25AACJDA1" target="_blank">
              <i class="uil uil-whatsapp"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://github.com/Fathandi" target="_blank">
              <i class="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Profile Image -->
      <div class="featured-image">
        <div class="image">
          <img src="./fathandi-profile.jpg" alt="avatar" style="border-radius: 100%" />
        </div>
      </div>
  
      <!-- Scroll Down Icon -->
      <div class="scroll-icon-box">
        <a href="#about" class="scroll-btn">
          <i class="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    `;
  };
  
  Home();
  
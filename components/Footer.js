const Footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
          <div class="top-footer">
          <p>Fathih Apriandi.</p>
        </div>

        <div class="middle-footer">
          <div class="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Website Development</a></li>
              <li><a href="#">Network Technician</a></li>
              <li><a href="#">SEO Specialist</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>My Business</h3>
            <ul>
              <li><a href="#">PT. Inti Telecom Nusantara</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Certificates</h3>
            <ul>
              <li><a href="#">Network Fundamental</a></li>
              <li><a href="#">Algorithm and Programming</a></li>
              <li><a href="#">JavaScript Full Course</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-menu-container">
          <ul class="footer-menu">
            <li class="footer_menu_list">
              <a href="#home">Home</a>
            </li>
            <li class="footer_menu_list">
              <a href="#about">About</a>
            </li>
            <li class="footer_menu_list">
              <a href="#projects">Projects</a>
            </li>
            <li class="footer_menu_list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-social-icons social_icons">
          <div class="icon">
            <a href="https://www.instagram.com/apriandi.js" target="_blank">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
          <div class="icon">
            <a
              href="https://www.linkedin.com/in/fathih-apriandi"
              target="_blank"
            >
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

        <div class="bottom-footer">
          <p>
            Copyright &copy; <span id="year">2025</span>
            <a href="#home">Fathih Apriandi</a> - All rights reserved
          </p>
        </div>
  `;
};

Footer();
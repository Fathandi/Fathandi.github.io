const Navbar = () => {
  const header = document.getElementById("header");
  header.innerHTML = `
    <div class="nav-logo">
      <p class="nav-name">Apriandi</p>
      <span>.</span>
    </div>
    <div class="nav-menu" id="myNavMenu">
      <ul class="nav_menu_list">
        <li class="nav_list">
          <a href="#home" class="nav-link active-link">Home</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#about" class="nav-link">About</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#projects" class="nav-link">Projects</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#contact" class="nav-link">Contact</a>
          <div class="circle"></div>
        </li>
      </ul>
    </div>
    <div class="nav-button">
      <button class="btn" onclick="downloadCV()">
        Download CV <i class="uil uil-file-alt"></i>
      </button>
    </div>
    <div class="nav-menu-btn">
      <i class="uil uil-bars" onclick="myMenuFunction()"></i>
    </div>
  `;
};

Navbar();

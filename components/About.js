const About = () => {
  const about = document.getElementById("about");
  about.innerHTML = `
    <div class="top-header">
      <h1>About Me</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="about-info">
          <h3>My introduction</h3>
          <p>
            I am well-versed in HTML, CSS and JavaScript , and other
            cutting edge frameworks and libraries,which allows me to
            implement interactive features.
          </p>
          <br>
          <div class="about-btn" onclick="downloadCV()">
            <button class="btn">
              Download CV <i class="uil uil-import"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="skills-box">
          <div class="skills-header">
            <h3>Frontend</h3>
          </div>
          <div class="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>Vue</span>
            <span>React</span>
            <span>Angular</span>
          </div>
        </div>
        <div class="skills-box">
          <div class="skills-header">
            <h3>Backend</h3>
          </div>
          <div class="skills-list">
            <span>PHP</span>
            <span>JAVA</span>
            <span>Python</span>
            <span>C++</span>
          </div>
        </div>
        <div class="skills-box">
          <div class="skills-header">
            <h3>Database</h3>
          </div>
          <div class="skills-list">
            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

About();

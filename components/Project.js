const Project = () => {
    const project = document.getElementById("projects");
    project.innerHTML = `
          <div class="top-header">
            <h1>Projects</h1>
          </div>
          <div class="project-container">
            <div class="project-box">
              <i class="uil uil-briefcase-alt"></i>
              <h3>Completed</h3>
              <label>15+ Finished Projects</label>
            </div>
            <div class="project-box">
              <i class="uil uil-users-alt"></i>
              <h3>Clients</h3>
              <label>25+ Happy Clients</label>
            </div>
            <div class="project-box">
              <i class="uil uil-award"></i>
              <h3>Experience</h3>
              <label>2+ Years in the field</label>
            </div>
          </div>
    `
}
Project();
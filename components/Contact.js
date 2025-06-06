const Contact = () => {
    const contact = document.getElementById("contact");
    contact.innerHTML = `
              <div class="top-header">
            <h1>Get in touch</h1>
            <span>Do you have a project in your mind, contact me here</span>
          </div>
          <div class="row">
            <div class="col">
              <div class="contact-info">
                <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                <p>
                  <i class="uil uil-envelope"></i> mufathihapriandi@gmail.com
                </p>
                <p><i class="uil uil-phone"></i> +62 822 9979 4339</p>
              </div>
            </div>
            <div class="col">
              <div class="form-control">
                <div class="form-inputs">
                  <input
                    type="text"
                    id="name"
                    class="input-field"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    id="email"
                    class="input-field"
                    placeholder="Email"
                  />
                </div>
                <div class="text-area">
                  <textarea id="message" placeholder="Message"></textarea>
                </div>
                <div class="form-button">
                  <button class="btn" id="sendBtn">
                    Send <i class="uil uil-message"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
    `;
};

Contact();
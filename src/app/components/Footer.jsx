export default function Footer() {
  return (
    <footer className="pt-5 footer-main">
      <div className="footer-container border-top pt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="foot-section-1">
              <div className="logo-footer">
                <a className="navbar-brand" href="#">
                  <img
                    src="/Dhruvlogodark.svg"
                    className="dhruv-logo-dark"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="foot-intro-content">
                <p>
                  Designed and developed with passion, showcasing creativity,
                  skills, and dedication. Always learning, growing, and striving
                  to build better digital experiences!
                </p>
              </div>
              <div className="social-media-links">
                <a
                  href="https://www.facebook.com/share/1BuUuvpQ2K/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/fb.svg" alt="fb" className="social-media-link" />
                </a>
                <a
                  href="https://www.instagram.com/dhruv_girdhar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ig.svg" alt="ig" className="social-media-link" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruv-girdhar-a35106215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/in.svg" alt="in" className="social-media-link" />
                </a>
                <a
                  href="https://github.com/dhruvgirdhar07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/git.svg" alt="git" className="social-media-link" />
                </a>
                <a
                  href="https://www.blogger.com/blog/posts/1984508305820531927"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/blog.svg"
                    alt="blog"
                    className="social-media-link"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section-2">
              <h5>Navigation Links</h5>
              <div>
                <ul className="navigation-links-list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-section-3">
              <h5>Contact</h5>
              <ul className="navigation-links-list">
                <li className="con-link-main-phn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="con-link-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span>+91 8570841612</span>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=girdhardhruv07@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="con-link-main"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="con-link-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>girdhardhruv07@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 mt-4 border-top copyright">
          <p>© 2025 Dhruv Girdhar, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


export default function Header() {
    return (
      <header>
        <div className="navbar-main">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              {/* Logo */}
              <a className="navbar-brand" href="#">
                <img src="/DhruvLogo.svg" className="dhruv-logo" alt="Logo" />
              </a>
  
              {/* Toggle Button (for mobile) */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
  
              {/* Nav Links */}
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav navbar-ul d-flex gap-4">
                  <li className="nav-item">
                    <a className="nav-link active" href="#hero">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#about">About Me</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#education-and-work">Education & Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#projects">Projects</a>
                  </li>
                </ul>
              </div>
  
              {/* Contact Button */}
              <div className="contact-btn ms-auto">
                <a href="#contact" className="btn btn-primary">Contact Me</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
  
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Carousel } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useEffect, useState } from "react";

export default function Home() {
  const skills = [
    ["HTML", "CSS", "JavaScript"],
    ["React", " Next.js", "Tailwind CSS"],
    ["Figma", " Git", "Photoshop"],
    ["TypeScript", "Bootstrap", "Redux"],
  ];
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const phrases = ["UI/UX Designer", "Frontend Developer"];
  const typingSpeed = 150; // Adjust speed (ms per letter)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        // Typing forward
        setDisplayText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setDisplayText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        // Switch to next phrase or reverse
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, currentPhraseIndex, isDeleting]);

  return (
    <>
      {/* hero section */}

      <section className="hero-section" id="hero">
        <div className="hero-section-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-section-content">
                <div className="decorative-box">
                  <h3 className="typing-text">Hello There !</h3>
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                </div>
                <h2>
                  I'm <span className="my-name">Dhruv Girdhar</span> <br />
                  <span className="animated-text">
                    {displayText}
                    <span className="cursor">|</span>
                  </span>
                </h2>
                <p>
                  "From B.Tech classrooms to real-world projects, I’ve spent
                  years honing my ability to translate ideas into pixel-perfect
                  designs and efficient code. Every interface I create aims to
                  solve problems—not just look pretty."
                </p>
                <a href="\dhruv-resume-updated-april25.pdf" download>
                  <button className="resume-view">
                    <div className="resume-view-btn">Download Resume</div>
                    <div className="right-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-container">
                <img
                  src="/dhruv-new-pic-hero.svg"
                  alt="dhruv"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 ABOUT ME */}

      <section className="about-me-section" id="about">
        {/* skills caraousell section */}
        <section className="skills-strip-section">
          <div
            style={{
              backgroundColor: "#f4a300",
              padding: "10px 0",
              borderTop: "1px solid #e0e0e0",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Carousel
              autoplay
              autoplayInterval={2000}
              controls={false}
              indicators={false}
              style={{ height: 60 }}
            >
              {skills.map((group, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {group.map((skill, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "30px",
                          color: "#333",
                          padding: "6px 12px",
                          borderRadius: "20px",
                        }}
                      >
                        {skill}
                      </span>

                      {i !== group.length - 1 && (
                        <span
                          style={{
                            margin: "0 180px",
                            fontSize: "40px",
                            color: "black",
                          }}
                        >
                          {/* Optional connector icon */}
                          <svg
                            fill="none"
                            height="24"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7L6.5 9M21 17L17.5 15M12 12L6.5 9M12 12L6.5 15M12 12V5M12 12V18.5M12 12L17.5 15M12 12L17.5 9M12 2V5M12 22V18.5M21 7L17.5 9M3 17L6.5 15M6.5 9L3 10M6.5 9L6 5.5M6.5 15L3 14M6.5 15L6 18.5M12 5L9.5 4M12 5L14.5 4M12 18.5L14.5 20M12 18.5L9.5 20M17.5 15L18 18.5M17.5 15L21 14M17.5 9L21 10M17.5 9L18 5.5"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <div className="about-me-main">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="/dhruv-about-new-pic-2.svg"
                alt="dhruv"
                className="blob2"
              />
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <h4 className="about-title">
                  <span style={{ color: "#f4a300 " }}>-</span> About Me
                </h4>
                <h1>
                  Who is{" "}
                  <span style={{ color: "#f4a300" }}>Dhruv Girdhar </span>?
                </h1>
                <p>
                  I am a B.Tech 8th semester student currently undergoing
                  training cum internship in UI/UX design and Front-End Web
                  Development. Passionate about creating user-friendly and
                  visually appealing digital experiences, I specialize in
                  designing intuitive interfaces and developing responsive
                  websites using modern web technologies.
                </p>

                <div className="exp-cards">
                  <div className="exp-card">
                    <h4>5+</h4>
                    <p>Projects</p>
                  </div>
                  <div className="exp-card">
                    <h4>2+</h4>
                    <p>Internships</p>
                  </div>
                  <div className="exp-card">
                    <h4>5+</h4>
                    <p>Frontend Skills</p>
                  </div>
                  <div className="exp-card">
                    <h4>2</h4>
                    <p>International Clients Handeled</p>
                  </div>
                </div>
                <a href="\dhruv-resume-updated-april25.pdf" download>
                  <button className="resume-view">
                    <div className="resume-view-btn">Download Resume</div>
                    <div className="right-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 Education and Work */}

      <section id="education-and-work">
        <div className="education-section-main">
          <h5>
            <span style={{ color: "#f4a300" }}>-</span>Education & Work
          </h5>
          <h2>
            My <span style={{ color: "#f4a300" }}>Academic and</span>
            <br />
            <span style={{ color: "#f4a300" }}>Professional</span> Journey.
          </h2>
        </div>
        <div className="education-work-section">
          <div className="row">
            <div className="col-lg-6">
              <div className="edu-sec-main">
                <div className="education-section">
                  <div className="education-title">
                    <div className="edu-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                    <h2>Education</h2>
                  </div>
                  <div className="education">
                    <p>2007-2021</p>
                    <h4>
                      Swami Vivekanad Public <br /> School , YNR
                    </h4>
                    <p>10+2</p>
                  </div>
                  <div className="education">
                    <p>2007-2021</p>
                    <h4>
                      Guru Nanak Dev Engineering <br />
                      College , Ludhiana
                    </h4>
                    <p>B.Tech Information Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-section-main">
                <div className="work-section">
                  <div className="work-title">
                    <div className="work-logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <h2>Work</h2>
                  </div>
                  <div className="work">
                    <p>June 2024 - July 2024</p>
                    <h4>Novem Controls Ltd</h4>
                    <p>React Developer Intern</p>
                  </div>
                  <div className="work">
                    <p>Jan 2025 - March 2025</p>
                    <h4>Promatics Technologies Pvt Ltd</h4>
                    <p>UI/UX Developer Intern</p>
                  </div>
                  <div className="work">
                    <p>March 2025 - Current</p>
                    <h4>Ryaz.IO Technologies Pvt Ltd</h4>
                    <p>Frontend Developer Trainee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="projects-section-container">
          <div className="education-section-main">
            <h5>
              <span style={{ color: "#f4a300" }}>-</span>My Projects
            </h5>
            <h2>
              "BUILT |{" "}
              <span style={{ color: "#F4A300" }}>From concept to code</span>"
            </h2>
          </div>
          <div className="projects-container">
            <div className="project-card">
              <div className="project-logo">
                <img src="/Newsmonkeylogo.svg" alt="project" />
              </div>
              <div className="project-title">
                <h4>News Monkey</h4>
              </div>
              <div className="project-description">
                <p>
                  "Developed News Monkey, a real-time news application, by
                  integrating a public API to display news articles. Focused on
                  building a dynamic interface and learning the process of API
                  integration to fetch and display live data."
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-logo">
                <img src="/infychat.svg" alt="project" />
              </div>
              <div className="project-title">
                <h4>Infychat</h4>
              </div>
              <div className="project-description">
                <p>
                  "Designed the UI/UX and contributed to frontend development
                  for InfyChat, a real-time chat application. Focused on
                  creating a clean, user-friendly interface and collaborated on
                  building responsive messaging components for seamless
                  real-time interactions."
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-logo">
                <img src="/learnify.svg" alt="project" />
              </div>
              <div className="project-title">
                <h4>Learnify</h4>
              </div>
              <div className="project-description">
                <p>
                  "Designed the UI/UX for Learnify, an online education platform
                  specializing in IELTS, PTE, and Spoken English courses.
                  Focused on delivering a responsive and intuitive learning
                  experience tailored to students' needs."
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-logo">
                <img src="/trail.svg" alt="project" />
              </div>
              <div className="project-title">
                <h4>Trail Blaze</h4>
              </div>
              <div className="project-description">
                <p>
                  "A Next.js-based travel web application featuring a Kanban
                  Board and itinerary planning, fully UI/UX designed and
                  developed by me for a Canadian client during my internship at
                  Promatics Technologies."
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-logo">
                <img src="/profile.svg" alt="project" />
              </div>
              <div className="project-title">
                <h4>Dhruv's Portfolio</h4>
              </div>
              <div className="project-description">
                <p>
                  "Built a responsive personal portfolio using Next.js,
                  featuring smooth animations, modern UI/UX design, and
                  interactive transitions. The project was focused on providing
                  an engaging user experience while showcasing my work, skills,
                  and design capabilities in frontend development."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
            
      <section className="contact-section" id="contact">
        <div className="contact-section-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-title">
                <h5>
                  <span style={{ color: "#f4a300" }}>-</span>Contact Me
                </h5>
                <h2>
                  Let's <span style={{ color: "#F4A300" }}>TALK</span>
                </h2>
                <p>
                  Have an opportunity for me in mind or just want to say hello?
                  I'd love to hear from you!
                </p>
              </div>
              <div className="contact-detail">
                <div className="phone">
                  <div className="con-icon-con-sec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="#2e4328"
                      height={20}
                      width={"100%"}
                      // className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <p>+91 8570841612</p>
                </div>
                <div className="phone">
                  <div className="con-icon-con-sec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="#2e4328"
                      // className="size-6"
                      height={20}
                      width={"100%"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <p>girdhardhruv07@gmail.com</p>
                </div>
                <div className="phone">
                  <div className="con-icon-con-sec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="#2e4328"
                      height={20}
                      width={"100%"}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <p>Haibowal Kalan , Ludhiana , 141001</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-me-form">
                <form
                  action="https://formsubmit.co/girdhardhruv07@gmail.com"
                  method="POST"
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Your Message Here"
                      required
                    ></textarea>
                  </div>

                  {/* Captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  <button type="submit" className="resume-view">
                    <div className="resume-view-btn">Submit Information</div>
                    <div className="right-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

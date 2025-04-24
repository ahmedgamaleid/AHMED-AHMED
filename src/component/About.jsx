import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import ProfilePic from '../assest/prpimg1.jpg'; // Replace with your correct image path
import { BiBold } from "react-icons/bi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion"
const TechStack = () => {
  const serviceCardsRef = useRef(null);
  const serviceCardssRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger for Service Cards animation
    gsap.fromTo(
      serviceCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3, // Stagger the animation
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceCardsRef.current,
          start: "top 80%", // Start animation when the top of the section is 80% from the top
          end: "bottom top", // End when the bottom of the section reaches the top
          scrub: true, // Smooth animation as you scroll
        },
      }
    );
  }, []);
  return (
<div className="mx-2 about" style={{ marginTop: '0%', paddingTop: '80px', backgroundColor: 'white' }}>

      {/* Profile Section */}
      <div className="container">
  <div className="row">
    <div className="col-12 col-lg-5 d-flex justify-content-center mb-4 py-1 mb-lg-0">
      <img src={ProfilePic} alt="Profile" className="img-fluid w-100 immmm" />
    </div>
    <div className="col-12 col-lg-7 text-center text-lg-start py-5">
      <h1 className="font-bold contactt">Junior Frontend Developer</h1>
      <br></br>
      <p className="mt-2">
        My name is <span style={{ color: '#02c94f', fontWeight: 'bold' }}>Ahmed Gamal Abdel-Khalek</span>, and I am currently studying at the Faculty of Computers and Artificial Intelligence at Benha University.<br />
        <br></br>
        With one year of hands-on experience in web development, I specialize in front-end technologies, particularly React.js.<br />
        <br></br>
        I am passionate about building dynamic, responsive, and scalable web applications. I hold a Bachelor's degree in Computer Science (Medical Informatics, 2024, GPA: 2.9) and have recently completed a Front-End Web Development diploma accredited by the Information Technology Route Training Centre.<br /> 
        <br></br>
        My expertise spans a wide range of modern web technologies, and I am eager to continue expanding my skills as a developer.
      </p>

      <p className="mt-3"><strong>Phone:</strong> +39 393 553 1809</p>
<p><strong>Email:</strong> eiid.ahmed4444@gmail.com</p>
<p><strong>Address:</strong> Via Paolo Maspero, Milan, Italy</p>

    </div>
  </div>
</div>


    


  {/* skills Section */}
  <div className="container ">
  <div
        className="container text-center mt-5 position-relative pt-5 d-flex justify-content-center align-items-center"
        ref={serviceCardsRef}
      >
        <h1
          className=" text-uppercase position-absolute text-center w-100 top-50 start-50 translate-middle opacity-10"
          style={{
            fontSize: window.innerWidth < 568 ? "5rem" : "7rem",            fontWeight: "bold",
            color: "#f3f3f3",
            textAlign: "center",
          }}
        >
           Skills
        </h1>

        <div className="text-center position-relative">
          <h2 className="fw-bold d-inline-block position-relative">
            Know Me More
            <span
              className="d-block mx-auto mt-1"
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#03fe63",
                margin: "auto",
              }}
            ></span>
          </h2>
        </div>
      </div>
  </div>
 
  <div className="container py-5">
  {/* Skills Section */}
  <div className="row mb-5 g-4">
    <div className="col-12">
      <h1 className="fw-bold mb-4 py-4 contactt">Skills</h1>
      <div className="row g-4" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>

        <div className="col-md-6" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Programming Languages</h5>
          <p>HTML5, CSS3, Sass, JavaScript (ES6+), TypeScript, C++</p>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Frameworks & Libraries</h5>
          <p>React.js, jQuery, Bootstrap</p>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Databases</h5>
          <p>SQL</p>
        </div>
        
        <div className="col-md-6" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px'  }}>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Core Concepts</h5>
          <p>OOP, Data Structures & Algorithms</p>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Tools & Version Control</h5>
          <p>Git, GitHub, NPM, Postman, figma , motion</p>
        </div>
      </div>
    </div>
  </div>

  {/* Education and Awards Section */}
  <div className="row mb-5 g-4">
    <div className="col-md-6">
      <h2 className="fw-bold mb-3 contactt">Education</h2>
      <p className="mb-2" style={{ backgroundColor: '#f9f9f9', padding: '24px', borderRadius: '8px' }}>
        <strong style={{ color: '#02c94f' }}>Bachelor of Computer Science – Medical Informatics</strong><br />
        Benha University, 2020 – 2024 <br />
        GPA: 2.9
      </p>
    </div>
    <div className="col-md-6">
  <h2 className="fw-bold mb-3 contactt">Certifications</h2>
  <ul className="py-4" style={{ backgroundColor: '#f9f9f9', paddingLeft: '30px', borderRadius: '8px' }}>
    <li>
      Front-End Web Development Diploma – <span style={{ color: '#02c94f' }}>Route Academy</span>
    </li>
    <li>
      Front-End Web Development Nanodegree – <span style={{ color: '#02c94f' }}>Udacity</span>
    </li>
    <li>
      Information Technology Specialist in Database – <span style={{ color: '#02c94f' }}>Microsoft</span>
    </li>
  </ul>
</div>

  </div>

  {/* Experience Section */}
  <div className="row g-4">
    <div className="col-12"  style={{ backgroundColor: 'transparent' }}>
      <h2 className="fw-bold mb-4 my-2 py-4 contactt" style={{ backgroundColor: 'transparent' }}>Experience</h2>
      <div className="row g-4 " style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <div className="col-md-4 mb-4" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Microsoft Instructor – Future Academy</h5>
          <p>Sep 2024 - Dec 2024</p>
          <p>Taught Database courses to university students.</p>
        </div>
        <div className="col-md-4 mb-4" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Freelance Frontend Developer</h5>
          <p>2023 - Present</p>
          <p>Worked on React projects, building modern UIs for clients and honing responsive design skills.</p>
        </div>
        <div className="col-md-4 mb-4" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h5 className="fw-semibold" style={{ color: '#02c94f' }}>Intern - Route Academy</h5>
          <p>2022</p>
          <p>Completed hands-on training with live front-end development tasks and teamwork experience.</p>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>
  );
};

export default TechStack;

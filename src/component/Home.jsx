import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion'; // Only one import needed here
import styles from "../../src/assest/Home.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProfilePicc from '../assest/React-icon.svg.png';

// React Three Fiber Component for 3D React Logo
const ReactLogo3D = () => {
  
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
    <Canvas style={{ height: "100%", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#61DAFB" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
};

const Home = () => {
  // Download CV Handler
  const serviceCardsRef = useRef(null);
  const serviceCardssRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP scroll animation
    if (serviceCardsRef.current) {
      gsap.fromTo(
        serviceCardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: serviceCardsRef.current,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);
  const downloadCV = () => {
    const pdfUrl =
      "https://docs.google.com/document/d/1buwRqOiRlesZYjAUu2qJ33O5H0A7qmVL/export?format=pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ahmed_Gamal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Landing Section */}
      <div style={{ minHeight: "75vh" }}>
        <div className="row   my-4 align-items-center">
          {/* Left Section with Text */}
          <motion.div
            className="col-12 col-md-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`${styles.c} d-flex flex-column align-items-start justify-content-start text-start`}
              style={{ paddingTop: "80px", position: "relative" }}
            >
              <div>
                <h2
                  className={`${styles.texttt} `}
                  style={{ color: "black" }}
                >
                  Expert Ahmed Gamal for <br /> a{" "}
                  <span style={{ color: "gray" }}>connected</span>{" "}
                  <span style={{ color: "#03fe63" }}>&#123;world&#125;</span>
                </h2>
              </div>
              <p
                className="pland mx-4 py-3"
                style={{ fontSize: "1.2rem", maxWidth: "600px" }}
              >
                I am a passionate <strong>Frontend Developer</strong> and{" "}
                <strong>UI/UX Designer</strong>, dedicated to crafting
                beautiful and user-friendly web experiences. I specialize in
                modern technologies, intuitive design, and seamless user
                interactions.
              </p>

              <button
                className={styles.cta}
                onClick={downloadCV}
              >
                <span className={styles["hover-underline-animation"]}>
                  Download MY CV
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                  className={styles.arrowIcon}
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Section with 3D React Logo */}
          <motion.div
            className={`${styles.bbb} col-12  py-5 col-md-4 text-center`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
          <img src={ProfilePicc} alt="Profile" className="w-100 p-5 rotating-image" />

          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={serviceCardsRef} className=" hhhhho container text-center mt-5 position-relative pt-5 d-flex justify-content-center align-items-center">
        <h1
          className="text-uppercase position-absolute text-center w-100 top-50 start-50 translate-middle opacity-10"
          style={{
            fontSize: window.innerWidth < 568 ? "4rem" : "7rem",
            fontWeight: "bold",
            color: "#f3f3f3",
          }}
        >
          service
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

      {/* Service Cards */}
    
<div className="container mt-5">
  <div className="row g-4 mt-5">
    {/* Service Card 1 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-code"></i>
        <h3>Interactive Web Development</h3>
        <p>
          Building dynamic, responsive, and interactive websites using
          modern frameworks like React to deliver seamless user experiences.
        </p>
      </div>
    </motion.div>

    {/* Service Card 2 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-link"></i>
        <h3>API Integration</h3>
        <p>
          Connecting frontend applications with backend services through
          RESTful APIs or GraphQL, ensuring smooth data flow and
          functionality.
        </p>
      </div>
    </motion.div>

    {/* Service Card 3 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-database"></i>
        <h3>State Management</h3>
        <p>
          Implementing state management solutions like Redux, Context API,
          or Vuex to handle application data efficiently and maintain a
          consistent user experience.
        </p>
      </div>
    </motion.div>

    {/* Service Card 4 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-gauge-high"></i>
        <h3>Performance Optimization</h3>
        <p>
          Optimizing frontend performance by reducing load times,
          improving rendering speed, and ensuring efficient resource usage.
        </p>
      </div>
    </motion.div>

    {/* Service Card 5 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-paint-brush"></i>
        <h3>UI/UX Design</h3>
        <p>
          I create beautiful and intuitive designs that provide seamless
          user experiences.
        </p>
      </div>
    </motion.div>

    {/* Service Card 6 */}
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`${styles.serviceCard} d-flex flex-column`}>
        <i className="fa-solid fa-users"></i>
        <h3>Collaboration & Teamwork</h3>
        <p>
          I enjoy working in collaborative environments, sharing ideas, and
          building strong, scalable applications with teams.
        </p>
      </div>
    </motion.div>
  </div>
</div>

    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';


function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Design');

  const projectsData = [
    {
      title: 'Gennify E-commerce',
      description: 'Elegant shopping website with user auth and payment integration.',
      category: 'Professional',
      github: 'https://github.com/ahmedgamaleid/Gennify',
      image: '/gennify.png',
    },
    {
      title: 'piano.js',
      description: 'Virtual piano using JavaScript and keyboard events.',
      category: 'JavaScript',
      github: 'https://github.com/ahmedgamaleid/EID_PIANO',
      image: '/piano.png',
    },
    {
      title: 'Movie Recommendation App',
      description: 'Recommends movies and TV shows using TMDB API.',
      category: 'Professional',
      github: 'https://github.com/ahmedgamaleid/Movie-TVShow-Recommendation',
      image: '/movis.png',
    },
    {
      title: 'FlashPoint News',
      description: 'News app with pagination, search and offline mode.',
      category: 'Professional',
      github: 'https://github.com/yourusername/flashpoint-news',
      image: '/flash.png',
    },
    {
      title: 'gameovergg',
      description: 'Game news website with modern UI.',
      category: 'Professional',
      github: 'https://github.com/ahmedgamaleid/gameovergg',
      image: '/game.png',
    },
    {
      title: 'food-recipe',
      description: 'Recipe finder using JavaScript and APIs.',
      category: 'JavaScript',
      github: 'https://github.com/ahmedgamaleid/food-recipe',
      image: '/food.png',
    },
    {
      title: 'the-office',
      description: 'Landing page for office design company.',
      category: 'Design',
      github: 'https://github.com/ahmedgamaleid/the-office',
      image: '/office.png',
    },
    {
      title: 'angora',
      description: 'Creative portfolio template design.',
      category: 'Design',
      github: 'https://github.com/ahmedgamaleid/angora',
      image: '/angora.png',
    },
    {
      title: 'simone',
      description: 'Personal portfolio design.',
      category: 'Design',
      github: 'https://github.com/ahmedgamaleid/simone',
      image: '/simon.png',
    },
    {
      title: 'soundcare',
      description: 'Audio equipment landing page design.',
      category: 'Professional',
      github: 'https://github.com/ahmedgamaleid/soundcare',
      image: '/sound.png',
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className="container py-5 my-5 ">
      <h2 className="text-center  fw-bold mb-4 pppppp">My Projects</h2>
      <p className="text-center mb-4 px-3">
        Explore a curated selection of my frontend development projects. These works showcase my
        skills in React, JavaScript, design, and API integration, highlighting both creativity and
        functionality. Select a category to view relevant projects.
      </p>
  
      <div className="d-flex contactt justify-content-center gap-3 mb-4 flex-wrap">
        {['Design', 'JavaScript', 'Professional'].map((category) => (
          <button
            key={category}
            className={`btn  rounded-5 ${selectedCategory === category ? 'btn-success rounded-5' : 'btn-outline-success'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
  
      <div className="row">
        {filteredProjects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="project-card-modern">
              <img src={project.image} alt={project.title} />
              <div className="overlay-modern ">
                <h5 className='pppppp fs-2'>{project.title}</h5>
                <p>{project.description}</p>
                <a
  href={project.github}
  target="_blank"
  className="rounded-link rounded-4 "
  rel="noopener noreferrer"
>
  <FontAwesomeIcon icon={faGithub} className="me-2 fs-3 pppppp" />
  View on GitHub
</a>

              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Additional note section */}
      <div className="mt-5 text-center">
        <div className="alert alert-success rounded-5" role="alert">
          <strong>Note:</strong> This page is a portfolio showcase and is not part of any one individual project.
          It was created specifically to display and organize all of my work in one place.
        </div>
      </div>
    </div>
  );
  
}

export default Projects;

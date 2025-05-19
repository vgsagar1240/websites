import React from "react";
import "./projects.css";
import Navbar from "../Navbar";
import projectImage from "../assets/project_landing.jpg";
import ongo1 from "../assets/Aero_Villas.jpg";
import ongoo2 from "../assets/AeroHomes1.jpg";
import up1 from "../assets/AeroMansions1.jpg";
import up2 from "../assets/AeroResorts1.jpg";
import up3 from "../assets/CommercialSpaces.jpg";
import up4 from "../assets/Convention Centers.jpg";
import up5 from "../assets/FarmHouse.jpg";
import up6 from "../assets/Buildings.jpg";
import up7 from "../assets/RecreationCenter.jpg";
import up8 from "../assets/ResidentialBuildings.jpg";

const OurProjects = () => {
  return (
    <>
      <Navbar />
      <div className="story_image">
        <img src={projectImage} className="story_landing" alt="projects" />
        <div className="image_text">
          <h1>OUR PROJECTS</h1>
          <p className="imape_p1">
            Discover the Landmarks We've Brought to Life.
          </p>
        </div>
      </div>
      {/* Ongoing Projects */}
      {/* <div className='ongoing_container'>
          <div className='ongoing_left'>
            <p className='ongoing_text'>ONGOING PROJECTS</p>
          </div>
          <div className='ongoing_right'>
            <div className='image_column'>
              <img src={ongo1} alt='Project 1' className='project_image image_top' />
              <img src={ongoo2} alt='Project 2' className='project_image image_bottom' />
            </div>
          </div>
        </div> */}
      <div className="ongoing_container">
        <div className="ongoing_left">
          <p className="ongoing_text">ONGOING PROJECTS</p>
        </div>
        <div className="ongoing_right">
          <div className="image_column">
            <div className="image_item">
              <img src={ongo1} alt="Project 1" className="project_image" />
              <p className="image_caption">AERO VILLAS</p>
            </div>
            <div className="image_item stepped_image">
              <img src={ongoo2} alt="Project 2" className="project_image" />
              <p className="image_caption">AERO HOMES</p>
            </div>
          </div>
        </div>
      </div>
      {/* up comming Section */}
      <div className="upcoming_container">
        <div className="upcoming_left">
          <p className="upcoming_text">UPCOMING PROJECTS</p>
        </div>

        <div className="upcoming_right">
          <div className="image_grid">
            <div className="image_item">
              <img src={up1} alt="Project 1" className="project_image" />
              <p className="image_caption">AERO MANSIONS</p>
            </div>
            <div className="image_item stepped_image">
              <img src={up2} alt="Project 2" className="project_image" />
              <p className="image_caption">AERO RESORTS</p>
            </div>

            <div className="image_item">
              <img src={up4} alt="Project 3" className="project_image" />
              <p className="image_caption">CONVENTION CENTERS</p>
            </div>
            <div className="image_item stepped_image">
              <img src={up7} alt="Project 4" className="project_image" />
              <p className="image_caption">RECREATION CENTER</p>
            </div>

            <div className="image_item">
              <img src={up8} alt="Project 3" className="project_image" />
              <p className="image_caption">RESIDENTIAL APARTMENTS</p>
            </div>
            <div className="image_item stepped_image">
              <img src={up6} alt="Project 4" className="project_image" />
              <p className="image_caption">HIGH-RISE APPARTMENTS</p>
            </div>
            <div className="image_item">
              <img src={up3} alt="Project 3" className="project_image" />
              <p className="image_caption">COMMERTIAL SPACES</p>
            </div>
            <div className="image_item stepped_image">
              <img src={up5} alt="Project 4" className="project_image" />
              <p className="image_caption">FARM HOUSES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;

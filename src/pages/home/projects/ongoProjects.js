import React from "react";
import "./ongoProjects.css";
import aerovillas from "../../../assets/AeroVillas.jpg";
import aerohomes from "../../../assets/AeroHomes.jpg";
import aeromansions from "../../../assets/AeroMansions.jpg";
import aeroresorts from "../../../assets/AeroResorts.jpg";
import aeroconvensions from "../../../assets/AeroConvensions.jpg";
import CustomButton from "../../../components/CustomButton";
import { Link } from "react-router-dom";

const OngoProjects = () => {
  return (
    <>
      <div className="onGo_Container">
        <h1 className="project_head">AASRITHA INFRA PROJECTS</h1>
        <p className="project_description">
          Bold Architecture. Effortless Luxury
        </p>

        <div className="container1">
          <div className="palette">
            <div className="card active rounded-5">
              <div className="image-container ">
                <img
                  src={aerovillas}
                  alt="Aero Villas community in Shamshabad"
                />
                <div className="top-tag">Ongoing</div>
              </div>
              <div className="content">
                <div className="logo1">
                  Aero
                  <br />
                  Villas
                </div>
                <div className="content-center">
                  <p>
                    Gated luxury villa community designed with lifestyle
                    amenities.
                    <br />
                    <span>SHAMSHABAD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-5">
              <div className="image-container">
                <img
                  src={aerohomes}
                  alt="Aero Homes residential project in Shamshabad"
                />
                <div className="top-tag">Ongoing</div>
              </div>
              <div className="content">
                <div className="logo1">
                  AERO <br /> Homes
                </div>
                <div className="content-center">
                  <p>
                    Gated luxury villa community designed with lifestyle
                    amenities.
                    <br />
                    <span>SHAMSHABAD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-5">
              <div className="image-container">
                <img
                  src={aeromansions}
                  alt="Aero Mansions luxury development"
                />
                <div className="top-tag">Upcoming</div>
              </div>
              <div className="content">
                <div className="logo1">
                  AERO <br />
                  Mansions
                </div>
                <div className="content-center">
                  <p>
                    Gated luxury villa community designed with lifestyle
                    amenities.
                    <br />
                    <span>SHAMSHABAD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-5">
              <div className="image-container">
                <img
                  src={aeroresorts}
                  alt="Aero Resorts exclusive stay destination"
                />
                <div className="top-tag">Upcoming</div>
              </div>
              <div className="content">
                <div className="logo1">
                  AERO <br />
                  Resorts
                </div>
                <div className="content-center">
                  <p>
                    Gated luxury villa community designed with lifestyle
                    amenities.
                    <br />
                    <span>SHAMSHABAD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-5">
              <div className="image-container1">
                <img src={aeroconvensions} alt="Aero Conventions event space" />
                <div className="top-tag">Upcoming</div>
              </div>
              <div className="content">
                <div className="logo1">
                  AER0 <br />
                  Conventions
                </div>
                <div className="content-center">
                  <p>
                    Gated luxury villa community designed with lifestyle
                    amenities.
                    <br />
                    <span>SHAMSHABAD</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ongobtn">
          <Link to="/projects">
            <CustomButton text="View More" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OngoProjects;

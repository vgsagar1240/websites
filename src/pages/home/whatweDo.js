import React from "react";
import "./whatweDo.css";
import villas from "../../assets/wedo1.jpg";
import Mansions from "../../assets/wedo2.png";
import Appartments from "../../assets/wedo3.jpg";
import commercial from "../../assets/wedo4.jpg";
import landdev from "../../assets/wedo5.png";
import convensions from "../../assets/wedo6.jpg";

const WhatweDo = () => {
  return (
    <>
      <div className="wedo-container d-none d-md-block">
        <div className="wedo">
          <div className="wedo-left">
            <h1 className="wedoHead">
              WHAT WE BUILD <br />
              DEFINES US.
            </h1>
          </div>

          <div className="wedo-right">
            <div className="step-row top-row">
              <div className="step-item first">
                <img src={villas} alt="Project 1" />
                <div className="step-label fs-6">
                  Villas & Independent Houses
                </div>
              </div>
              <div className="step-item second">
                <img src={Mansions} alt="Project 2" />
                <div className="step-label fs-6">Mansions</div>
              </div>
              <div className="step-item third">
                <img src={Appartments} alt="Project 3" />
                <div className="step-label fs-6">
                  Appartments and High-Rise Buildings
                </div>
              </div>
            </div>

            <div className="step-row bottom-row">
              <div className="step-item first">
                <img src={convensions} alt="Project 4" />
                <div className="step-label fs-6">convensions Centers</div>
              </div>
              <div className="step-item second">
                <img src={landdev} alt="Project 5" />
                <div className="step-label fs-6">Land Development</div>
              </div>
              <div className="step-item third">
                <img src={commercial} alt="Project 6" />
                <div className="step-label fs-6">commercial Spaces</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-none">
        <div className="wedo-container">
          <h1 className="text-center text-secondary fs-3 wedomob1">
            <span className="wedomob">WHAT WE BUILD</span> DEFINES US.
          </h1>
        </div>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={villas} alt="Project 1" />
                <div className="step-label fs-6">
                  Villas & Independent Houses
                </div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={Mansions} alt="Project 2" />
                <div className="step-label fs-6">Mansions</div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={Appartments} alt="Project 3" />
                <div className="step-label fs-6">
                  Apartments & High-Rise Buildings
                </div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={convensions} alt="Project 4" />
                <div className="step-label fs-6">Convention Centers</div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={landdev} alt="Project 5" />
                <div className="step-label fs-6">Land Development</div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-center mb-3">
              <div className="step-item">
                <img src={commercial} alt="Project 6" />
                <div className="step-label fs-6">Commercial Spaces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatweDo;

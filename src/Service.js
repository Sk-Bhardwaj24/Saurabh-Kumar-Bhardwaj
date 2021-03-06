import React from "react";
import "./Service.css";
import HTMLOGO from "./img/HTMLOGO.png";
import CSSLOGO from "./img/CSSLOGO.png";
import JAVACRIPTLOGO from "./img/JSLOGO.png";
import REACTLOGO from "./img/REACTLOGO.png";
import REDUXLOGO from "./img/REDUXLOG.png";
import CLOGO from "./img/CLOGO.png";
import Mongo from "./img/mongo.png";
import Node from "./img/nodeicon.png";
import Express from "./img/Express.png";

function Service() {
  return (
    <div className="Ser">
      <div className="service component__space" id="Services">
        <div className="heading">
          <h1 className="heading">Skills and Tools</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={HTMLOGO} alt="" />
                  <p>HTML</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={CSSLOGO} alt="" />
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={JAVACRIPTLOGO} alt="" />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={REACTLOGO} alt="" />
                  <p>REACT</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={REDUXLOGO} alt="" />
                  <p>REDUX</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={CLOGO} alt="" />
                  <p>C Programming</p>
                </div>
              </div>
            </div>
            {/* ****************** */}
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={Mongo} alt="" />
                  <p>mongoDB</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={Express} alt="" />
                  <p>Express js</p>
                </div>
              </div>
            </div>
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <img src={Node} alt="" />
                  <p>Node.js</p>
                </div>
              </div>
            </div>
            {/* ****************** */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

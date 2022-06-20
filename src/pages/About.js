import React, { Component } from 'react';
import "./About.css";
import head from  "../assets/head.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {head}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Stephen Pasch</div>
            <div className="brief_description">
              <p>I am 19 years old. <br/> My hobbies included <br/> sailing,<br/> cooking,<br/> and coding.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
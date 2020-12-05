import React, { Component } from 'react';

export default class About extends Component {
  state = { };

  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h1 className="name">I'm Liz,</h1>
          <p>a software developer</p>
        </div>
        <div className="bio-image-container">
          <img class="bio-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fNMphL0plLvgajx8ZiEwoZ051L8mYR9Q6Q&usqp=CAU"
            alt="Liz Barnes"/>
        </div>
        <div className="bio-intro">
          <p>this is me dawg</p>
        </div>
      </div>
    );
  }
}

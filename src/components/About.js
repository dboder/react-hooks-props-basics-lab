import React from "react";
import Links from "./Links";

function About(props) {
  const usrBio = props.bio;
  let bio_paragraph;
  if (usrBio && usrBio.length > 0)
  {
    bio_paragraph = <p>{usrBio}</p>;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio_paragraph}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin={props.linkedin}/>
    </div>
  );
}


export default About;

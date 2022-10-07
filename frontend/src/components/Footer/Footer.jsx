import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Ravindra Thombre. I am a Full-Stack Developer and a
          Vlogger on Youtube channel called <b> Ravindra Thombre Vlog</b>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ravindrathombre/" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZ9WUVJFIXj0Mu8LfCX69Pg"
          target="black"
        >
          <BsYoutube />
        </a>
        <a href="https://instagram.com/mr_ravindra_09official/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ravindra-thombre-3823371ba"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;

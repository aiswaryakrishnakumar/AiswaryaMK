import React, { useRef } from "react";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";
import git from "../images/git.png";

const Footer = () => {
  let socialLinks = useRef(null);

  return (
    <div className="hidden fixed pb-6 bottom-0 lg:flex  w-full flex-col gap-2 font-[avenir-medium]">
      <h2 className="text-sm">Follow me:</h2>
      <div className="socials flex gap-2" ref={socialLinks}>
        <a
          href="https://www.linkedin.com/in/aiswaryamk020/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="linkedin" alt="linkedin" />
        </a>

        <a
          href="https://github.com/aiswaryakrishnakumar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} className="w-7 h-7 twitter" alt="GitHub" />
        </a>

        <a href="mailto:aiswarya.mkrishnakumar@gmail.com" target="_blank">
            <img src={mail} alt="mail" />
          </a>
      </div>
    </div>
  );
};

export default Footer;

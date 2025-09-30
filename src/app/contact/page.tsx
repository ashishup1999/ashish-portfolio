import Image from "next/image";
import React from "react";
import "@/app/contact/contact.scss";
import myImg from "@/assets/MyImage.png";
import { Iceland } from "next/font/google";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const Contact = () => {
  return (
    <div id="contact-sec">
      <Image src={myImg} alt="myImg" />
      <label className="name">Name</label>
      <input type="text" className="name" />
      <label className="email">Email</label>
      <input type="text" className="email" />
      <label className="msg">Message</label>
      <textarea className="msg" />
      <button id="send" className={iceland.className}>
        Send
      </button>
    </div>
  );
};

export default Contact;

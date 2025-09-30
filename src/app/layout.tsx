"use client";
import { Inter, Goldman, Iceland } from "next/font/google";
import "./global.css";
import logo from "@/../public/Logo.svg";
import arrowDown from "@/assets/arrowDown.svg";
import lnkdin from "@/assets/lnkdin.svg";
import github from "@/assets/github.svg";
import twitter from "@/assets/twitter.svg";
import menu from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import useMainLayout from "@/hooks/useMainLayout";

const goldman = Goldman({ weight: "400", subsets: ["latin"] });
const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pathName, onClick, onMenuClick } = useMainLayout();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href={logo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Ashish's Portfolio`}</title>
      </head>
      <body className={iceland.className}>
        <main id="main">
          <div id="right-pannel">
            <Image id="logo" src={logo} alt="logo" />
            <ul id="menu" className={goldman.className}>
              <li id="about" onClick={onClick}>
                <Link href="/about">About</Link>
              </li>
              <li id="skills" onClick={onClick}>
                <Link href="/skills">Skills</Link>
              </li>
              <li id="works" onClick={onClick}>
                <Link href="/works">Works</Link>
              </li>
              <li id="experience" onClick={onClick}>
                <Link href="/experience">Experience</Link>
              </li>
              <li id="contact" onClick={onClick}>
                <Link href="/contact">Contact</Link>
              </li>
              <li id="resume">
                <a
                  href="https://docs.google.com/document/d/1jh3wPdsQRGrG_QiVwPvijWT8R7BNGCIm/edit?usp=sharing&ouid=112454956979602675957&rtpof=true&sd=true"
                  download="Ashish_Resume"
                  target="_blank"
                >
                  Resume <Image src={arrowDown} alt="arrowDown" />
                </a>
              </li>
            </ul>
            <ul id="socials">
              <li id="linkedin">
                <Link
                  href="https://www.linkedin.com/in/ashishup1999/"
                  target="_blank"
                >
                  <Image src={lnkdin} alt="lnkdin" />
                </Link>
              </li>
              <li id="github">
                <Link href="https://github.com/ashishup1999" target="_blank">
                  <Image src={github} alt="github" />
                </Link>
              </li>
              <li id="twitter">
                <Link href="https://x.com/ashishup03" target="_blank">
                  <Image src={twitter} alt="twitter" />
                </Link>
              </li>
            </ul>
          </div>
          <div id="content-pannel">
            <div className="mobile-header">
              <Image id="logo" src={logo} alt="logo" />
              <p id="section">{pathName.toUpperCase()}</p>
              <Image
                id="menu-logo"
                src={menu}
                alt="menu"
                onClick={onMenuClick}
              />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

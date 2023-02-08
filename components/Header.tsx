import React from "react";
import "../styles/Header.module.scss";
import Join from "./Join";
import Nav from "./Nav";
import Image from "../lib/Image";
import background from "../public/images/background.png";
import { title } from "../data";

export default function Header() {
  return (
    <div className='header d-flex flex-column justify-content-between align-items-center'>
      <Image
        src={background}
        alt='background of a rainbow'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        style={{ opacity: 0.6 }}
      />
      <Nav />
      <div className='server-info d-flex align-items-center flex-column text-center'>
        <h1>{title}</h1>
        <Join />
      </div>
    </div>
  );
}

import { description, title } from "../data";
import Image from "../lib/Image";
import logo from "../public/images/logo.png";

export default function About() {
  return (
    <section
      className='d-flex justify-content-between flex-lg-nowrap flex-wrap'
      id='about'
    >
      <div id='logo-wrapper'>
        <Image
          src={logo}
          height={200}
          width={200}
          alt='Dysautonomia awareness ribbon on rainbow background'
        />
      </div>
      <article>
        <h2>About</h2>
        <p>
          <b>{title}</b>&nbsp;{description}
        </p>
      </article>
    </section>
  );
}

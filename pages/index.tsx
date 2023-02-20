import type { NextPage } from "next";
import { NextSeo } from 'next-seo';
import Head from "next/head";
import seo from '../seo-config';
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { title } from "../data";

type Props = {};

const Index: NextPage<Props> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <NextSeo {...seo} />

      {/* Containers */}
      <div className='container d-flex flex-column'>
        <Header />
        <div className='inner d-flex flex-column'>
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;

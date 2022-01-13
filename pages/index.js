import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
//import Jumbotron from "../components/jumbotron";
import Hero from "../components/jumbotron/hero";
import Tab from "../components/tab";
import Album from "../components/album";

import Interface from "../layouts/interface";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample NeXt </title>
        <meta name="description" content="Welcome to neXt Sampling Prototypes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Interface>
        <Hero />
        <section className="container col-xxl-8 px-4">          
          <Tab />
          <Album />
        </section>
      </Interface>

    </div>
  )
}

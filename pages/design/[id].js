//import Head from 'next/head';
//import Script from "next/script";
import {useRouter} from "next/router";
import Interface from "../../layouts/interface";

import Slider from "../../components/slide";



export default function Home() {
    const router = useRouter();
    const {id} = router.query;


  return (
    <Interface>
      <Slider />
      
    </Interface>
  )
}

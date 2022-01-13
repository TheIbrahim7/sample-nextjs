import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
	//this is what the solution says:
	useEffect(() => {
	    import("bootstrap/dist/js/bootstrap");
	}, []);

  return <Component {...pageProps} />
}

export default MyApp

import React from "react";
import styles from "./index.module.css";
import Image from "next/image"
import Link from "next/link";


function HeadNav(){

	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light" id={styles.navigation}>
		  <div className="container-fluid">
		  	<Link href="/">
		    <a className="navbar-brand" id={styles.polarized}>
		      <Image src={"/bstrap.svg"} width={30} height={24} alt="Boostrap Icon @Twitter Boostrap" className="d-inline-block align-text-top"/>
		      NextJS Samples
		    </a>
		    </Link>

		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
		    	aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		      	<Link href="/" passHref>
			        <li className="nav-item">
			           <a className="nav-link active" aria-current="page">Home</a>
			        </li>
		         </Link>
		      	
		      	<Link href="/about/" passHref>
		        <li className="nav-item">
		          <a className="nav-link" >About</a>
		        </li>
		      	</Link>

		      </ul>
		      

		      {/*Sample Just paste whatever here and it will be on the right part of the navi*/}
		    
		    </div>
		  </div>
		</nav>

		)
};

export default HeadNav;
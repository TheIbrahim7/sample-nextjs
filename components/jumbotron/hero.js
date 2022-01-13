import styles from "./hero.module.css";
import Link from "next/link";

export default function Hero(){

	return(


		<div className="container col-xxl-8 px-4 py-3">
		    
		    <div className="row flex-lg-row-reverse flex-sm-row-reverse py-3">{/*g-2 is part of the class and it controls the margin but i want to control that myself*/}
		      <div className="col-12 col-sm-4 col-lg-4 py-2 my-2" id={styles.nboard}>
		        <p>Sample Next JS is a global sample of next JS APP in production.</p>
		        <Link href="/more/">
		        	<a>Learn More</a>
		        </Link>
		      </div>
		      <div className="col-lg-8 col-sm-8">
		        <h1 className="display-5 fw-bold lh-1 mb-3">Introducing Sample Next JS Protoypes</h1>
		        <p className="lead">Quickly design and customize responsive mobile-first sites with pre designed templates</p>
		        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
		          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" id={styles["main-button"]}>Read More</button>
		          <button type="button" className="btn btn-outline-secondary btn-lg px-4" id={styles["sub-button"]}>Go to Sample Next JS</button>
		        </div>
		      </div>
		    </div>
		  </div>


		)
};
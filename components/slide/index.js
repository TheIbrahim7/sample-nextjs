import styles from "./index.module.css";


export default function Slider(){

	return(
		<>
		

		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
		  <div className="carousel-indicators" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
		  </div>
		  <div className="carousel-inner" id={styles.useless}>
		    
		    <div className="carousel-item">
		      <img src="/iphone.png" className="d-block w-100" alt="screen one" />
		      <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
		        <h5>First slide label</h5>
		        <p>Some representative placeholder content for the first slide.</p>
		      </div>
		    </div>
		    
		    <div className="carousel-item">
		      <img src="/iphone2.png" className="d-block w-100" alt="screen two" />
		      <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
		        <h5>Second slide label</h5>
		        <p>Some representative placeholder content for the second slide.</p>
		      </div>
		    </div>
		    
		    <div className="carousel-item active">
		      <img src="/iphone3.png" className="d-block w-100" alt="screen three" />
		      <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
		        <h5>Third slide label</h5>
		        <p>Some representative placeholder content for the third slide.</p>
		      </div>
		    </div>

		    <div className="carousel-item">
		      <img src="/iphone4.png" className="d-block w-100" alt="screen four" />
		      <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, .5)"}}>
		        <h5>Slide Number 4</h5>
		        <p>Some representative placeholder content for the third slide.</p>
		      </div>
		    </div>
		  </div>

		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Next</span>
		  </button>
		</div>

		</>
		)
};
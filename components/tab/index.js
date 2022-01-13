

function Tab(){

	return(
		<ul className="nav nav-tabs">
		  <li className="nav-item">
		    <a className="nav-link" aria-current="page" href="#">Article</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link active" href="#">Sample</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link" href="#">Best Sellers</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link disabled">Drafts</a>
		  </li>
		</ul>

		)
};

export default Tab;
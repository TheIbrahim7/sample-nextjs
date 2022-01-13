import HeadNav from "../../components/navigation";
import Footer from "../../components/footer";

export default function Interface({children}){

	return(
		<>
		<HeadNav />

		<main>
			{children}
		</main>

		<Footer />

		
		</>
		)
};


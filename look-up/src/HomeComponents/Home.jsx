import DrugListCard from "../ReusableComponents/DrugDetailCard";
import "./HomeStyles.css";
// import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer";
export default function Home() {
	return (
		<div className="Homes">
			{/* <Link to="/search">Can you see the Home Component here</Link> */}
			<SearchContainer /> <br />
			<br />
			<DrugListCard />
		</div>
	);
}

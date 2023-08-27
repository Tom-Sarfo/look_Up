import "./HomeStyles.css";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="Home">
			<Link to="/search">Can you see the Home Component here</Link>
		</div>
	);
}

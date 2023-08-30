import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import "./App.css";

function AppEntry() {
	return (
		<>
			<NavBar />
			<div className="OutletContainer">
				<Outlet />
			</div>

			<Footer />
		</>
	);
}

export default AppEntry;

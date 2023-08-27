import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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

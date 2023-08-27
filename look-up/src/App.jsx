import "./App.css";
import AppEntry from "./AppEntry";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routers } from "./Router";
function App() {
	const router = createBrowserRouter(Routers);
	return (
		<div>
			<RouterProvider router={router}>
				<AppEntry />
			</RouterProvider>
		</div>
	);
}

export default App;

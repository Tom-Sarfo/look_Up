import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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

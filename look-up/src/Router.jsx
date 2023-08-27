import AppEntry from "./AppEntry";
import Home from "./HomeComponents/Home";
import SearchInput from "./HomeComponents/SearchInput";

export const Routers = [
	{
		path: "/",
		element: <AppEntry />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/search",
				element: <SearchInput />,
			},
		],
	},
];

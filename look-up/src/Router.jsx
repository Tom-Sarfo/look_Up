import AppEntry from "./AppEntry";
import Home from "./HomeComponents/Home";
import SearchInput from "./HomeComponents/SearchInput";
import WelcomeText from "./HomeComponents/WelcomeText";
import DrugDetailCard from "./ReusableComponents/DrugDetailCard";

export const Routers = [
	{
		path: "/",
		element: <AppEntry />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/",
						element: <WelcomeText />,
					},
					{
						path: "/drug_details/:id",
						element: <DrugDetailCard />,
					},
				],
			},
			{
				path: "/search",
				element: <SearchInput />,
			},
		],
	},
];

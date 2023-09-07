import { useContext } from "react";
import { DrugData } from "../DrugDataContext";

export default function WelcomeText() {
	const { input } = useContext(DrugData);
	const [searchInput] = input;

	return (
		<div>
			{searchInput === "" && (
				<div>Get Quick Information on your Stock Position!</div>
			)}
		</div>
	);
}

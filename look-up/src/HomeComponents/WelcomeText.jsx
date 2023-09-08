import { useContext } from "react";
import { DrugData } from "../DrugDataContext";

export default function WelcomeText() {
	const { input } = useContext(DrugData);
	const [searchInput] = input;

	return (
		<div>
			{searchInput === "" && (
				<div>
					<h2>Get Quick Information from your Stock Position!</h2>
				</div>
			)}
		</div>
	);
}

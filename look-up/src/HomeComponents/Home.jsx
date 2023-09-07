import DrugDetailCard from "../ReusableComponents/DrugDetailCard";
import "./HomeStyles.css";
import { useState } from "react";
import { DrugData } from "../DrugDataContext";
import SearchContainer from "./SearchContainer";
import { Outlet } from "react-router-dom";
export default function Home() {
	const [searchInput, setSearchInput] = useState("");
	const [drugData, setDrugData] = useState([]);

	return (
		<DrugData.Provider
			value={{
				drugs: [drugData, setDrugData],
				input: [searchInput, setSearchInput],
			}}
		>
			<div className="Homes">
				{/* <Link to="/search">Can you see the Home Component here</Link> */}
				<SearchContainer
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					drugData={drugData}
					setDrugData={setDrugData}
				/>
				<br />
				<br />
				{/* {searchInput === "" && <DrugDetailCard />} */}
				<section>
					<Outlet />
				</section>
			</div>
		</DrugData.Provider>
	);
}

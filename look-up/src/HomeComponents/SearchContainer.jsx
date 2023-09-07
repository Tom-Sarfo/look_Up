import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestion";
import { useEffect, useState } from "react";
import supabase from "../DbConnection";

export default function SearchContainer() {
	const [searchInput, setSearchInput] = useState("");
	const [toggleSuggestedList, setToggleSuggestedList] = useState(false);
	const [drugData, setDrugData] = useState([]);

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		setToggleSuggestedList(false);
		fetchDrugData(inputValue);
	};

	useEffect(() => {
		fetchDrugData();
	}, []);

	async function fetchDrugData(inputValue) {
		const { data } = await supabase.from("Drugs").select();
		let searchFilter = data?.filter((match) => {
			const searchValue = inputValue?.toLowerCase();
			return match.DrugName.toLowerCase().includes(searchValue);
		});
		setDrugData(searchFilter);
	}

	function handleHide() {
		setToggleSuggestedList(!toggleSuggestedList);
	}

	return (
		<div className="SearchContainer">
			<section className="SearchWrapper">
				<div className="Search">
					<div className="SearchIcon">
						<SearchIcon
							sx={{
								color: "#FF9900",
							}}
						/>
					</div>
					<SearchInput searchInput={searchInput} setInput={handleChange} />
				</div>
				{searchInput !== "" && toggleSuggestedList === false && (
					<ul className="SearchSuggestedList" onClick={handleHide}>
						{drugData.map((drug) => {
							return (
								<li key={drug.DrugId}>
									<SearchSuggestion drug={drug} />
								</li>
							);
						})}
					</ul>
				)}
			</section>
		</div>
	);
}

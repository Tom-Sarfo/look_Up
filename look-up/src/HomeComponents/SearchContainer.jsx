import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestion";
import { useState } from "react";

export default function SearchContainer() {
	const [searchInput, setSearchInput] = useState("");
	const [toggleSuggestedList, setToggleSuggestedList] = useState(false);

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		setToggleSuggestedList(false);
		// fetchData(inputValue);
	};

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
						<li>
							<SearchSuggestion />
						</li>
						<li>
							<SearchSuggestion />
						</li>
						<li>
							<SearchSuggestion />
						</li>
						<li>
							<SearchSuggestion />
						</li>
						<li>
							<SearchSuggestion />
						</li>
					</ul>
				)}
			</section>
		</div>
	);
}

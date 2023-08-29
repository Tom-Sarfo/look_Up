import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestion";
import { useState } from "react";

export default function SearchContainer() {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		// fetchData(inputValue);
	};

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
				{searchInput !== "" && (
					<ul className="SearchSuggestedList">
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

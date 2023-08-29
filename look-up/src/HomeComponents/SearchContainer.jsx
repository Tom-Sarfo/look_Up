import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import SearchSuggestion from "./SearchSuggestion";

export default function SearchContainer() {
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
					<SearchInput />
				</div>
				<ul className="SearchSuggestedList">
					<li>
						<SearchSuggestion />
					</li>
				</ul>
			</section>
		</div>
	);
}

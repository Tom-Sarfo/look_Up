import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";

export default function SearchContainer() {
	return (
		<div>
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
			</section>
		</div>
	);
}

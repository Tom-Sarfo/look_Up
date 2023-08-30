import { useForm } from "react-hook-form";
import "../Css/SearchInput.css";

export default function SearchInput({ searchInput, setInput }) {
	const { register } = useForm({
		defaultValues: {
			searchField: searchInput,
		},
	});
	return (
		<div className="SearchInput">
			<input
				type="text"
				{...register("searchField")}
				placeholder="Search Drug Name"
				autoFocus
				onChange={(e) => setInput(e.target.value)}
				className="input"
			/>
		</div>
	);
}

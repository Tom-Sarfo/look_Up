export default function SearchSuggestion({ drug }) {
	return (
		<div className="SearchSuggestion">
			<p>{drug.DrugName}</p>
		</div>
	);
}

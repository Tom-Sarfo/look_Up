import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DrugData } from "../DrugDataContext";
import Details from "./Details";
import BasicMenu from "./Menu";

export default function DrugListCard() {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	const drugId = useParams();
	const { drugs, input } = useContext(DrugData);
	const [searchInput] = input;
	const [drugData] = drugs;

	const uniqDrug = drugData.filter((drug) => drug.DrugId === Number(drugId.id));

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<div>
			{uniqDrug.length > 0 && (
				<Paper className="drugItem">
					<table>
						<tbody>
							<tr>
								<td>ID:</td>
								<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}>
									GHD{uniqDrug[0]?.DrugId}
								</td>
								<td align="right">
									<BasicMenu />
								</td>
							</tr>
							<tr>
								<td>
									{expandDrugDetail === false ? (
										<ExpandMoreIcon onClick={handleDetailExpansion} />
									) : (
										<ExpandLessIcon onClick={handleDetailExpansion} />
									)}
								</td>
								<td colSpan={2} width={430}>
									<p className="drugName">{uniqDrug[0]?.DrugName}</p>
								</td>
								<td>
									<b>¢{uniqDrug[0]?.DrugPrice}</b>
								</td>
							</tr>
						</tbody>
					</table>
					<Details ExpandDetail={expandDrugDetail} uniqDrug={uniqDrug} />
				</Paper>
			)}
		</div>
	);
}

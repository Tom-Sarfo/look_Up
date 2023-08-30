import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Details from "./Details";
import BasicMenu from "./Menu";

import { useState } from "react";

export default function DrugListCard() {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<Paper className="drugItem">
			<table>
				<tbody>
					<tr>
						<td>ID:</td>
						<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}>
							GH45385
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
							<p className="drugName">Augmentin 625mg tablet</p>
						</td>
						<td>
							<b>¢20</b>
						</td>
					</tr>
				</tbody>
			</table>
			<Details ExpandDetail={expandDrugDetail} />
		</Paper>
	);
}

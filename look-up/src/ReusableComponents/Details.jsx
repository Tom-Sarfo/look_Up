import { Chip } from "@mui/material";
import "./DrugDetailCard.css";
import BoltIcon from "@mui/icons-material/Bolt";
export default function DrugDetails({ ExpandDetail, uniqDrug }) {
	return (
		<div>
			{ExpandDetail === true && (
				<table width={450} className="DrugDetailTable">
					<tbody>
						<tr>
							<td>
								<b>Drug details</b>
							</td>
							<td>
								<Chip
									icon={<BoltIcon />}
									label="Movable"
									variant="contained"
									size="small"
									sx={{
										background: "#FF5100",
										color: "white",
									}}
									className="chip"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<b>Availability</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">
									{uniqDrug[0]?.Availability}pks
								</b>
							</td>
						</tr>
						<tr>
							<td>
								<b>Old Price</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢26.00</b>
							</td>
						</tr>
						<tr>
							<td>
								{uniqDrug[0]?.Alternative !== null ? (
									<b>{uniqDrug[0]?.Alternative} (Alternative)</b>
								) : (
									<b>No Alternative Available</b>
								)}
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢0.00</b>
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
}

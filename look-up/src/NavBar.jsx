import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import "./App.css";

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }} className="NavBar">
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: "#ff5100",
					color: "white",
				}}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, color: "white" }}
					>
						{/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
						Look<b>Up</b>
						{/* </Link> */}
					</Typography>
					{/* <Link to="/stock_position"> */}
					<Button
						color="inherit"
						sx={{
							textDecoration: "none",
							color: "white",
							":hover": {
								color: "#ff5100",
								bgcolor: "white",
							},
						}}
					>
						Stock Position
					</Button>
					{/* </Link> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

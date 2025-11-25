import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Video from "./pages/Video/Video.jsx";
const App = () => {
	const [sidebar, setSidebar] = React.useState(true);

	return (
		<div>
			<Navbar setSidebar={setSidebar} />
			<Routes>
				<Route path="/" element={<Home sidebar={sidebar} />} />
				<Route path="/video/:categoryId/:videoId" element={<Video />} />
			</Routes>
		</div>
	);
};

export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

const App = () => {
	const [sidebar, setSidebar] = React.useState(true);
	
	return (
		<div>
			<Navbar setSidebar={setSidebar}/>
			<Routes>
				<Route path="/" element={<Home sidebar={sidebar} />} />
				<Route path="/video/:categoryId/:videoId" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;

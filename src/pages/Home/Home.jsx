import React from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";
const Home = ({ sidebar }) => {
	const [category, setCategory] = React.useState(0);
	return (
		<>
			<Sidebar
				sidebar={sidebar}
				category={category}
				setCategory={setCategory}
			/>
			<div
				className={`transition-all duration-1000 pb-[30px] pt-[10px] pr-[1.5%] ${
					sidebar ? " pl-[16.5%]" : " pl-[1.5%]"
				}`}
			>
				<Feed category={category} />
			</div>
		</>
	);
};

export default Home;

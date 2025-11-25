import React from "react";
import "./Sidebar.css";
import { Photos } from "../../constant/photos";
const Sidebar = ({sidebar}) => {
	return (
		<div className={ `sidebar border-r-2 border-gray-200 bg-white w-[15%] h-[calc(100vh-70px)] overflow-y-auto pl-[2%] mt-[70px] pt-[20px] pb-[20px] fixed top-0 ${sidebar ? 'left-0' : '-left-80'} transition-all duration-1000`}>
			<div className="shortcut-links [&_img]:w-[20px] [&_img]:mr-[20px]">
				<div className="side-link">
					<img src={Photos.homeIcon} alt="" />
					<p>Home</p>
				</div>

				<div className="side-link">
					<img src={Photos.gameIcon} alt="" />
					<p>Gaming</p>
				</div>

				<div className="side-link">
					<img src={Photos.automobileIcon} alt="" />
					<p>Cars</p>
				</div>

				<div className="side-link">
					<img src={Photos.sportIcon} alt="" />
					<p>Sports</p>
				</div>

				<div className="side-link">
					<img src={Photos.entertainmentIcon} alt="" />
					<p>Entertainment</p>
				</div>

				<div className="side-link">
					<img src={Photos.techIcon} alt="" />
					<p>Technology</p>
				</div>

				<div className="side-link">
					<img src={Photos.musicIcon} alt="" />
					<p>Music</p>
				</div>

				<div className="side-link">
					<img src={Photos.blogIcon} alt="" />
					<p>Podcast</p>
				</div>

				<div className="side-link">
					<img src={Photos.newsIcon} alt="" />
					<p>News</p>
				</div>

				<hr className="border-0 h-[1px] bg-[#ccc] w-[85%]" />
			</div>

			<div className="subscribed-list [&_img]:w-[25px] [&_img]:rounded-[20px] [&_img]:mr-[20px]">
				<h3 className="text-[13px] my-[20px] text-[#5a5a5a] font-bold">
					Subscribed
				</h3>
				<div className="side-link">
					<img src={Photos.jackIcon} alt="" />
					<p>Channel-1</p>
				</div>
				<div className="side-link">
					<img src={Photos.simonIcon} alt="" />
					<p>Channel-2</p>
				</div>
				<div className="side-link">
					<img src={Photos.tomIcon} alt="" />
					<p>Channel-3</p>
				</div>
				<div className="side-link">
					<img src={Photos.meganIcon} alt="" />
					<p>Channel-4</p>
				</div>
				<div className="side-link">
					<img src={Photos.cameronIcon} alt="" />
					<p>Channel-5</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

import React from "react";
import "./Navbar.css";
import { Photos } from "../../constant/photos";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
	const {
		logoIcon,
		menuIcon,
		searchIcon,
		uploadIcon,
		moreIcon,
		notificationIcon,
		profileIcon,
	} = Photos;

	return (
		<nav className="flex-div py-[8px] px-[2%] justify-between shadow-lg/5 bg-white sticky top-0 z-10">
			<div className="nav-left flex-div">
				<img
					className="menu-icon mr-[25px] w-[22px]"
					onClick={() => setSidebar((prev) => !prev)}
					src={menuIcon}
					alt=""
				/>
				<Link to={"/"}>
					<img
						className="logo -translate-y-1 w-[160px]"
						src={logoIcon}
						alt=""
					/>
				</Link>
			</div>
			<div className="nav-middle flex-div">
				<div className="search-box flex-div justify-between border border-gray-300 rounded-[25px] py-[8px] px-[12px] w-[500px]">
					<input
						type="text"
						placeholder="Search"
						className="w-[400px] border-0 outline-0 bg-transparent"
					/>
					<img src={searchIcon} alt="" className="w-[15px]" />
				</div>
			</div>

			<div className="nav-right flex-div *:w-[25px] *:mr-[25px] ">
				<img src={uploadIcon} />
				<img src={moreIcon} />
				<img src={notificationIcon} />
				<img
					src={profileIcon}
					className="user-icon !w-[37px] rounded-full"
					alt=""
				/>
			</div>
		</nav>
	);
};

export default Navbar;

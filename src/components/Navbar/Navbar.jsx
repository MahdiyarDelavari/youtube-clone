import React from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/MMM.png";
const Navbar = () => {
	return (
		<nav className="flex-div py-[8px] px-[2%] justify-between shadow-lg/5 bg-white sticky top-0 z-10">
			<div className="nav-left flex-div">
				<img className="menu-icon mr-[25px] w-[22px]" src={menuIcon} alt="" />
				<img className="logo -translate-y-1 w-[160px]" src={logo} alt="" />
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

			<div className="nav-right flex-div ">
				<img src={uploadIcon} className="w-[25px] mr-[25px]" alt="" />
				<img src={moreIcon} className="w-[25px] mr-[25px]" alt="" />
				<img src={notificationIcon} className="w-[25px] mr-[25px]" alt="" />
				<img
					src={profileIcon}
					className="user-icon w-[35px] mr-[25px] rounded-full "
					alt=""
				/>
			</div>
		</nav>
	);
};

export default Navbar;

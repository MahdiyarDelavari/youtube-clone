import React from "react";
import "./Recommended.css";
import {
	thumbnail1,
	thumbnail2,
	thumbnail3,
	thumbnail4,
	thumbnail5,
	thumbnail6,
	thumbnail7,
	thumbnail8,
} from "../../constant/photos";

const Recommended = () => {
	return (
		<div className="recommended">
			<div className="side-video-list">
				<img src={thumbnail1} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail2} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail3} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail4} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail5} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail6} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail7} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
			<div className="side-video-list">
				<img src={thumbnail8} alt="" />
				<div className="video-info">
					<h4>Best Channel To Learn Coding</h4>
					<p>MeowTube</p>
					<p>200K Views</p>
				</div>
			</div>
		</div>
	);
};

export default Recommended;

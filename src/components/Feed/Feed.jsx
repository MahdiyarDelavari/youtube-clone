import React from "react";
import "./Feed.css";
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
import { Link } from "react-router-dom";

const Feed = () => {
	return (
		<div className="feed">
			<Link to={"/video/20/123"} className="card">
				<img src={thumbnail1} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</Link>
			<div className="card">
				<img src={thumbnail2} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail3} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail4} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail5} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail6} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail7} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail8} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail1} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail2} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail3} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail4} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail5} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail6} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail7} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={thumbnail8} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
		</div>
	);
};

export default Feed;

import React from "react";
import "./Feed.css";
import { Photos } from "../../constant/photos";
import { Link } from "react-router-dom";

const Feed = () => {
	return (
		<div className="feed">
			<Link to={'/video/20/123'} className="card">
				<img src={Photos.thumbnail1} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</Link>
			<div className="card">
				<img src={Photos.thumbnail2} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail3} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail4} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail5} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail6} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail7} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail8} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail1} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail2} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail3} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail4} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail5} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail6} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail7} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
			<div className="card">
				<img src={Photos.thumbnail8} alt="" />
				<h2>Best Channel To Learn Coding</h2>
				<h3>MeowChannel</h3>
				<p>15k views &bull; 2days ago</p>
			</div>
		</div>
	);
};

export default Feed;

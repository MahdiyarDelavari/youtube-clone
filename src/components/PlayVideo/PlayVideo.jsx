import React from "react";
import "./PlayVideo.css";
import {
	likeIcon,
	dislikeIcon,
	shareIcon,
	saveIcon,
	cameronIcon,
	userProfileIcon,
	video1,
} from "../../constant/photos";
const PlayVideo = () => {
	return (
		<div className="play-video">
			<video src={video1} controls autoPlay muted></video>
			<h3>Best Channel To Learn Coding</h3>
			<div className="play-video-info">
				<p>1525 views &bull; 2 days ago</p>
				<div className="">
					<span className="">
						<img src={likeIcon} alt="" />
						125
					</span>
					<span>
						<img src={dislikeIcon} alt="" />
						125
					</span>
					<span>
						<img src={shareIcon} alt="" />
						Share
					</span>
					<span>
						<img src={saveIcon} alt="" />
						Save
					</span>
				</div>
			</div>
			<hr />
			<div className="publisher">
				<img src={cameronIcon} alt="" />
				<div>
					<p>MeowChannel</p>
					<span>10M Subscribers</span>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="video-description">
				<p>Channel That Makes Learning Easy</p>
				<p>Subscribe MeowChannel To Watch More Tutorials</p>
				<hr />
				<h4>130 Comments</h4>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
				<div className="comment">
					<img src={userProfileIcon} alt="" />
					<div>
						<h3>
							Cameron Cami <span>1 day ago</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
							dolorem ad repellendus animi odit molestiae quisquam ut alias
							obcaecati iste!
						</p>
						<div className="comment-action">
							<img src={likeIcon} alt="" />
							<span>244</span>
							<img src={dislikeIcon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayVideo;

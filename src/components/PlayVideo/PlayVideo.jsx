import React from "react";
import "./PlayVideo.css";
import {
	likeIcon,
	dislikeIcon,
	shareIcon,
	saveIcon,

} from "../../constant/photos";
import { valueConverter } from "../../utils/ValueConverter";
import moment from "moment";
import { useParams } from "react-router-dom";


const PlayVideo = () => {
	
	const {videoId} =useParams()

	const [apiData, setApiData] = React.useState(null);
	const [channelData, setChannelData] = React.useState(null);
	const [commentData, setCommentData] = React.useState([]);
	
	const fetchVideoData = async () => {
		const videoDetailURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
		
		await fetch(videoDetailURL)
			.then((res) => res.json())
			.then((data) => setApiData(data.items[0]));
	}
	const fetchChannelAndCommentsData = async () => {
		const channelDetailURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
		const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
		
		
		await fetch(channelDetailURL)
			.then((res) => res.json())
			.then((data) => setChannelData(data.items[0]));
		
		await fetch(commentUrl)
			.then((res) => res.json())
			.then((data) => setCommentData(data.items));
		
		
	};

	React.useEffect(() => { 
		fetchVideoData();
	}, [videoId])
	
	React.useEffect(() => { 
		fetchChannelAndCommentsData();
	}, [apiData])
	
	return (
		<div className="play-video">
			{/* <video src={video1} controls autoPlay muted></video> */}
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<h3>{apiData ? apiData.snippet.title : "Title..."}</h3>
			<div className="play-video-info">
				<p>
					{apiData ? valueConverter(apiData.statistics.viewCount) : "???"} views
					&bull;{" "}
					{apiData ? moment(apiData.snippet.publishedAt).fromNow() : "???"}
				</p>
				<div>
					<span>
						<img src={likeIcon} alt="" />
						{apiData ? valueConverter(apiData.statistics.likeCount) : "???"}
					</span>
					<span>
						<img src={dislikeIcon} alt="" />
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
				<img
					src={channelData ? channelData.snippet.thumbnails.medium.url : "??"}
					alt=""
				/>
				<div>
					<p>{apiData ? apiData.snippet.channelTitle : "???"}</p>
					<span>
						{channelData
							? valueConverter(channelData.statistics.subscriberCount)
							: "???"}{" "}
						Subscribers
					</span>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="video-description">
				<p>{apiData ? apiData.snippet.description.slice(0, 250) : "???"}...</p>
				<hr />
				<h4>
					{apiData ? valueConverter(apiData.statistics.commentCount) : "???"}{" "}
					Comments
				</h4>

				{commentData.map((item, i) => (
					<div key={i} className="comment">
						<img
							src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
							alt=""
						/>
						<div>
							<h3>
								{item.snippet.topLevelComment.snippet.authorDisplayName}
								<span>
									{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
								</span>
							</h3>
							<p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
							<div className="comment-action">
								<img src={likeIcon} alt="" />
								<span>
									{valueConverter(
										item.snippet.topLevelComment.snippet.likeCount
									)}
								</span>
								<img src={dislikeIcon} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlayVideo;

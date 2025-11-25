import React from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import { valueConverter } from "../../utils/ValueConverter";
import moment from "moment";

const Feed = ({ category }) => {
	const [data, setData] = React.useState([]);

	const fetchData = async () => {

		const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
		await fetch(videoList_url)
			.then((res) => res.json())
			.then((data) => setData(data.items));
	};

	React.useEffect(() => { 
		fetchData();
	}, [category]);
	

	return (
		<div className="feed">
			{data.map((item) => (
				<Link
					key={item.id}
					to={`/video/${item.snippet.categoryId}/${item.id}`}
					className="card"
				>
					<img src={item.snippet.thumbnails.medium.url} alt="" />
					<h2>{item.snippet.title}</h2>
					<h3>{item.snippet.channelTitle}</h3>
					<p>
						{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Feed;

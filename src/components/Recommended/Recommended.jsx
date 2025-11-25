import React from "react";
import "./Recommended.css";
import { valueConverter } from "../../utils/ValueConverter";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
	
	const [apiData, setApiData] = React.useState([]);
	const fetchData = async () => {
	
			const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
			await fetch(videoList_url)
				.then((res) => res.json())
				.then((data) => setApiData(data.items));
		};
	
		React.useEffect(() => { 
			fetchData();
		}, []);


	return (
		<div className="recommended">
			{apiData.map((item, index) => (
				<Link
					to={`/video/${item.snippet.categoryId}/${item.id}`}
					key={index}
					className="side-video-list"
				>
					<img src={item.snippet.thumbnails.medium.url} alt="" />
					<div className="video-info">
						<h4 className="">{item.snippet.title.slice(0, 25)}..</h4>
						<p>{item.snippet.channelTitle}</p>
						<p>{valueConverter(item.statistics.viewCount)} views</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Recommended;

import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Feed from '../../components/Feed/Feed.jsx'
const Home = ({sidebar}) => {
  return (
		<>
			<Sidebar sidebar={sidebar} />
			<div
				className={`transition-all duration-1000 pb-[30px] pt-[10px] pr-[1.5%] ${
					sidebar ? " pl-[16.5%]" : " pl-[1.5%]"
				}`}
			>
				<Feed />
			</div>
		</>
	);
}

export default Home
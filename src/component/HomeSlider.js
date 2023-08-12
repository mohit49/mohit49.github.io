import React from 'react';
import imgHome from '../assets/home.jpg';
import workimg from '../assets/work.png';
import coverPic from '../assets/cover.jpg';
function HomeSlider({ currentPage }) {
	return (
		<div className="common-slider">
			{currentPage == 'home' && (
				<div className="home-page">
					<img src={imgHome} />
				</div>
			)}
			{currentPage == 'about' && (
				<div className="home-page">
					<img src={coverPic} />
				</div>
			)}
			{currentPage == 'work' && (
				<div className="home-page">
					<img src={workimg} />
				</div>
			)}
		</div>
	);
}

export default HomeSlider;

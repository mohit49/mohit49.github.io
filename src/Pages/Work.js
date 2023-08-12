import React, { useEffect } from 'react';
import iwc from '../assets/img1.png';
import devBikers from '../assets/sniptolldev.png';
import bikeSlider from '../assets/slider.png';
import westcon from '../assets/westcon.png';
function Work({ setPageName }) {
	useEffect(() => {
		setPageName('work');
	});

	return (
		<div className="mn-con aboutus">
			<div className="cen-container">
				<h1>My Work</h1>
				<div className="scroll-con">
					<div className="work-sec-items">
						<div className="item">
							<a href="https://www.iwc.com" target="_blank">
								<div className="thumbs">
									<img src={iwc} />
								</div>
								<h3>IWC</h3>
							</a>
						</div>
						<div className="item">
							<a href="https://dev-bikers.space/" target="_blank">
								<div className="thumbs">
									<img src={devBikers} />
								</div>
								<h3>Bikers</h3>
							</a>
						</div>
						<div className="item">
							<a href="https://mohit49.github.io/Custom-timeline-slider-no-plugin/" target="_blank">
								<div className="thumbs">
									<img src={bikeSlider} />
								</div>
								<h3>Simple Slider</h3>
							</a>
						</div>
						<div className="item">
							<a href="https://www.westconcomstor.com/global/en.html" target="_blank">
								<div className="thumbs">
									<img src={westcon} />
								</div>
								<h3>westcon</h3>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;

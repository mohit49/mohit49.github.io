import React, { useEffect } from 'react';

export default function About({ setPageName }) {
	useEffect(() => {
		setPageName('about');
	});
	return (
		<div className="mn-con aboutus">
			<div className="cen-container">
				<h1>About Me</h1>
				<div className="scroll-con">
					<p>
						A passionate and enthusiastic web developer who loves coding and always ready to learn something
						new. A creative mind who likes to take initiative and participate in different projects. A
						self-taught, frontend web developer always keen to learn the new, exciting and amazing
						technologies 👨🏻‍💻👨🏻‍💻
					</p>
					<br />
					<p>
						❖ Frontend Developer with 8+ years of professional experiences in User Interface Development.{' '}
					</p>
					<p>
						❖ Tech stack: HTML(5), Css(3), Sass, Less, Bootstrap, JavaScript, jQuery, Reactjs, mongoDB,
						nodeJS, adobe target, AEM
					</p>
					<p>
						❖ Strong experience with Cross Browser Compatibility issues and Optimization for web, including
						CSS Sprites and best practices
					</p>
					<p>❖ Experts in responsive Web Design and analysing and fixing UI bugs quickly.</p>
					<p>❖ Proficiency in code optimization to improving the performance, lighthouse , webvitals</p>
				</div>
			</div>
		</div>
	);
}

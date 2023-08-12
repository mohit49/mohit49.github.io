import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className="header-menu">
			<ul>
				<li>
					<Link to="/mohit49">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/work">Work</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className="header-menu">
			<ul>
				<li>
					<Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
				</li>
				<li>
					<Link to={process.env.PUBLIC_URL + '/about'}>About</Link>
				</li>
				<li>
					<Link to={process.env.PUBLIC_URL + '/work'}>Work</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;

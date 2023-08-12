import React, { useEffect } from 'react';

function Home({ setPageName }) {
	useEffect(() => {
		setPageName('home');
	});
	return<> <div className='cen-con'>
        <div className='cen-container'>
            <h1>Hi,
                <br></br>
                I'm Mohit,
                <br></br>
                Frontend Developer
            </h1>
        </div>
    </div>
    </>;
}

export default Home;

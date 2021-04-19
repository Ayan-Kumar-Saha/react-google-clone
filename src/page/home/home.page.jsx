import './home.styles.scss';

import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import SearchBox from '../../component/search-box/search-box.component';

const HomePage = () => {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar style={{ height: '30px', width: '30px' }}/>
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home__inputContainer">
                    <SearchBox />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
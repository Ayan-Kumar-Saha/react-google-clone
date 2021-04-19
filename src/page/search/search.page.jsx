import './search.styles.scss';

import SearchBox from '../../component/search-box/search-box.component';
import { useStateValue } from '../../context/search/stateProvider';
import useGoogleSearch from '../../hook/google-search/googleSearch';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import response from '../../dummyResponse';


import { Link } from 'react-router-dom';

const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue();
    // const { data } = useGoogleSearch(term);

    const data = response;
    

    return (
        <div className="searchPage">

            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
                </Link>

                <div className="searchPage__headerBody">
                    <SearchBox hideButtons initialInput={term} />

                    <div className="searchPage__options">

                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <VideoLibraryIcon />
                                <Link to="/all">Videos</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="searchPage__results">
                <p className="searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                </p>

                {
                    data?.items.map(item => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link}>
                                <span>{ item.displayLink }</span> <ArrowDropDownIcon />
                            </a> 
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultDescription">
                                {item.snippet}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default SearchPage;
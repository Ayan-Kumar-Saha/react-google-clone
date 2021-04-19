import './search.styles.scss';

import SearchBox from '../../component/search-box/search-box.component';
import { useStateValue } from '../../context/search/stateProvider';
import useGoogleSearch from '../../hook/google-search/googleSearch';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import response from '../../config/dummyResponse';

import { Link } from 'react-router-dom';

const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    // const data = response;

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
                                <SearchOutlinedIcon className="icon" />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <DescriptionOutlinedIcon className="icon" />
                                <Link to="/all">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageOutlinedIcon className="icon" />
                                <Link to="/all">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferOutlinedIcon className="icon" />
                                <Link to="/all">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <VideoLibraryOutlinedIcon className="icon" />
                                <Link to="/all">Videos</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertOutlinedIcon className="icon" />
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
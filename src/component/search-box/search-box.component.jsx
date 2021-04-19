import './search-box.styles.scss';

import { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../../context/search/stateProvider';
import { actionTypes } from '../../context/search/reducer';

const SearchBox = ({ hideButtons = false, initialInput = '' }) => {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState(initialInput);
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        if (input === '') return;

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search-results')
    }

    return (
        <form className="search">

            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {
                !hideButtons ?
                    (
                        <div className="search__buttons">
                            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                            <Button variant="outlined">I'm Feeling Lucky</Button>
                        </div>
                    ) :
                    (
                        <div className="search__buttons">
                            <Button type="submit" onClick={search} variant="outlined" className="search__buttonsHidden">Google Search</Button>
                            <Button variant="outlined" className="search__buttonsHidden">I'm Feeling Lucky</Button>
                        </div>
                    )
            }

        </form>
    )
}

export default SearchBox;

import { useState, useEffect } from 'react';
import { GOOGLE_SEARCH_API_KEY, GOOGLE_SEARCH_ENGINE_ID } from '../../configuration';

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_SEARCH_ENGINE_ID}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })     
        }

        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch;
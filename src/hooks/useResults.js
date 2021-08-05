import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('sal');
    const response = await yelp
      .get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york',
        },
      })
      .catch((err) => {
        setErrorMessage('Error loading');
      });
    return setResults(response.data.businesses);
  };

  //call searchAPI when component is first rendered

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

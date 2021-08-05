import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer jbfiTvCW74n8QIrjgO7RRYRPO2h-f6X-PTUjxR9Lcp3B9t8MhwqgJ4du0nKRRqxDeQIM4wJxs7V85UnXncbGjo48-4dMLbgpJv4wPevPsvm3hhj57SCfFDEOb7FgYHYx',
  },
});

import axios from 'axios';

const OMDB_API_KEY = d946fac1;

export default async (req, res) => {
  const { s } = req.query;
  const response = await axios.get(`http://www.omdbapi.com/?s=${s}&apikey=${OMDB_API_KEY}`);
  res.status(200).json(response.data);
};

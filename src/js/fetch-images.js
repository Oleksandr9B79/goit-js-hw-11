import axios from 'axios';
export { fetchImg };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31523944-0215721ab9e7129101460c873';

async function fetchImg(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
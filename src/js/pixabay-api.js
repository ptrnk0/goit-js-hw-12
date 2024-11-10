import axios from 'axios';

const API_KEY = '46823434-044aaff3f806d325c686b1cda';

export default async function getImages(query, page = 1) {
    const { data } = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page: 15,
        },
    });

    return data;
}

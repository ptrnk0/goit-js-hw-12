import getImages from './js/pixabay-api';
import { renderMarkup, lightboxInstance } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('form');
const imagesList = document.querySelector('ul');
const loadMoreBtn = document.querySelector('.load-more-btn');
let userInput;
let totalPage;
let page;

form.addEventListener('submit', onsubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onsubmit(event) {
    event.preventDefault();
    userInput = event.target.elements.search.value;
    page = 1;

    if (!userInput) {
        return;
    }

    imagesList.innerHTML = '';
    document.querySelector('.loader').style.display = 'block';

    try {
        const data = await getImages(userInput);

        if (!data.total) {
            iziToast.show({
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }

        totalPage = Math.ceil(Number(data.total) / 15);

        const imagesMarkup = renderMarkup(data);
        imagesList.insertAdjacentHTML('beforeend', imagesMarkup);
        totalPage > 1 ? (loadMoreBtn.style.display = 'block') : '';

        lightboxInstance();
    } catch (error) {
        console.log(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

async function onLoadMore() {
    loadMoreBtn.style.display = 'none';
    document.querySelector('.loader').style.display = 'block';
    page += 1;

    try {
        const data = await getImages(userInput, page);

        const imagesMarkup = renderMarkup(data);
        imagesList.insertAdjacentHTML('beforeend', imagesMarkup);

        window.scrollBy({ top: 720, left: 0, behavior: 'smooth' });

        lightboxInstance();
    } catch (error) {
        console.log(error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
        if (page >= totalPage) {
            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

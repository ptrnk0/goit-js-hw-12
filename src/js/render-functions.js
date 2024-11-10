import SimpleLightbox from 'simplelightbox';

let lightbox;

export function renderMarkup(imagesObj) {
    const imagesMarkupArray = imagesObj.hits.map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => {
            return `<li class="list-item">
                        <a href='${largeImageURL}' class="image-link"> 
                            <img src='${webformatURL}' alt="${tags}">
                        </a>
                        <div class="list-item-info">
                            <div class="image-info">
                                <h2>Likes</h2>
                                <p>${likes}</p>
                            </div>
                            <div class="image-info">
                                <h2>Views</h2>
                                <p>${views}</p>
                            </div>
                            <div class="image-info">
                                <h2>Comments</h2>
                                <p>${comments}</p>
                            </div>
                            <div class="image-info">
                                <h2>Downloads</h2>
                                <p>${downloads}</p>
                            </div>
                        </div>                 
                    </li> `;
        }
    );

    return imagesMarkupArray.join('');
}

export function lightboxInstance() {
    lightbox ? lightbox.destroy() : '';
    lightbox = new SimpleLightbox('.list-item a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

const galleryList = document.querySelector(`.social-gallery__list`);

if (galleryList) {
  const url = 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token='+ InstagramToken;

  fetch(url)
    .then(response => response.json())
    .then((response) => {
      const instaFeeds = response.data;
      const photoFeeds = instaFeeds.filter(feed => feed.media_type === `IMAGE` || feed.media_type === `CAROUSEL_ALBUM`);
      
      let feedPhotosFragment = document.createDocumentFragment();
      let firstCopyPhotosFragment = document.createDocumentFragment();

      photoFeeds.forEach((feed, index) => {
        if (index < 16) {
          const li = document.createElement(`li`);
          const img = document.createElement(`img`);
    
          li.classList.add(`social-gallery__item--${index}`, `social-gallery__item`);
          img.classList.add(`social-gallery__image`);
    
          img.src = feed.media_url;
          img.alt = feed.caption;
    
          li.appendChild(img);
    
          feedPhotosFragment.appendChild(li);
        }
      });

      photoFeeds.forEach((feed, index) => {
        if (index < 8) {
          const li = document.createElement(`li`);
          const img = document.createElement(`img`);
    
          li.classList.add(`social-gallery__item--${16 + index}`, `social-gallery__item`);
          img.classList.add(`social-gallery__image`);
    
          img.src = feed.media_url;
          img.alt = feed.caption;
    
          li.appendChild(img);
    
          firstCopyPhotosFragment.appendChild(li);
        }
      });
      
      galleryList.appendChild(feedPhotosFragment);
      galleryList.appendChild(firstCopyPhotosFragment);
    });
}
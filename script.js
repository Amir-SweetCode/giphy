const API_KEY = '2JgYTHVCvRTorxzyX6BKEWUdHrMkEKBp';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');

searchForm.addEventListener('submit', event => {
   event.preventDefault();
   const searchTerm = searchInput.value;

   fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=1`)
   .then(response => response.json())
   .then(data => {
      const imageUrl = data.data[0].images.fixed_height.url;
      gifContainer.innerHTML = `<img src="${imageUrl}" alt="${searchTerm} GIF">`;
   })
   .catch(error => console.error(error));
});

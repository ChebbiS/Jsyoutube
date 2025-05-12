import {videos} from "./data.js";
function displayVideos(videosToShow) {
    const container = document.getElementById("cardRow");
    container.innerHTML = "";

    videosToShow.forEach(video => {
        const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${video.thumbnail}" class="card-img-top" alt="${video.title}">
          <div class="card-body">
            <h5 class="card-title">${video.title}</h5>
            <img class="profile-img" src="${video.thumbnail}" alt="${video.channel}"
            <p class="card-text">${video.channel}</p>
            <p class="card-text text-muted">${video.views} · ${video.date}</p>
          </div>
        </div>
      </div>
    `;
        container.innerHTML += card;
    });
}

function setupSearch() {
    const form = document.getElementById("searchForm");
    const searchInput = document.getElementById("search");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = searchInput.value.trim().toLowerCase();

        const filtered = videos.filter(video =>
            video.title.toLowerCase().includes(value) ||
            video.channel.toLowerCase().includes(value)
        );

        displayVideos(filtered);
    });
}

window.onload = () => {
    displayVideos(videos);
    setupSearch();
};
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}
const displayVideos = (videos) => {
    console.log(videos)
    const videosContainer = document.getElementById('videos-container')
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList="card card-compact bg-base-100 pb-5 shadow-xl"
        card.innerHTML =
            `<figure>
                    <img class="w-full h-[200px] rounded-lg"
                        src=${video.thumbnail}
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                <div class="flex gap-3">
                    <img class="rounded-full w-10 h-10" src=${video.authors[0].profile_picture}>
                    <div class="space-y-2">
                        <h2 class="card-title font-bold">${video.title}</h2>
                        <p class="font-medium text-gray-400">${video.authors[0].profile_name}</p>
                        <p class="font-medium text-gray-400">${video.others.views} views</p>
                    </div>
                </div>                 
                </div>`
                videosContainer.append(card)
    });

}

loadVideos()
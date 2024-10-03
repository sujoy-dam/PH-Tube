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
            `<figure class="h-[200px]">
                    <img class="w-full h-full object-cover rounded-lg"
                        src=${video.thumbnail}
                        alt="video" />
                </figure>
                <div class="px-2 pt-4">
                <div class="flex gap-3">
                    <img class="rounded-full w-10 h-10 object-cover" src=${video.authors[0].profile_picture}>
                    <div class="space-y-2">
                        <h2 class="card-title font-bold">${video.title}</h2>
                        <div class="flex items-center gap-2">
                            <p class="font-medium text-gray-400">${video.authors[0].profile_name}</p>
                            ${video.authors[0].verified === true?`<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000">`: ''}
                        </div>
                        <p class="font-medium text-gray-400">${video.others.views} views</p>
                    </div>
                </div>                 
                </div>`
                videosContainer.append(card)
    });

}

loadVideos()
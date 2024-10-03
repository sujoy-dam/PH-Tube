function calculateTime(time) {
    const hour = parseInt(time / 3600);
    const remainingSecond = time % 3600;
    const minutes = parseInt(remainingSecond / 60);
    const remainingRestSecond = minutes % 60;
    return `${hour}hr ${minutes}m ${remainingRestSecond}s ago`
}


const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}
function selectCategoryVideos(id) {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
        .catch((error) => console.log(error))
}
const displayVideos = (videos) => {
    // console.log(videos)
    const videosContainer = document.getElementById('videos-container')
    videosContainer.innerHTML = "";


    if (videos.length == 0) {
        videosContainer.classList.remove('grid')
        videosContainer.innerHTML = `
        <div class="flex justify-center items-center min-h-[350px]">
        <img src="../assets/Icon.png"
        </div>
        
        `;
    }else{
        videosContainer.classList.add('grid')

    }
    videos.forEach(video => {
        // console.log(video)
        const card = document.createElement('div');
        card.classList = "card card-compact bg-base-100 pb-5 shadow-xl"
        card.innerHTML =
            `<figure class="h-[200px] relative">
                    <img class="w-full h-full object-cover rounded-lg"
                        src=${video.thumbnail}
                        alt="video" />
                        ${video.others.posted_date?.length === 0 ? "" : `<span class="text-gray-400 text-xs font-bold bg-black rounded-lg px-1 py-1 bottom-3 right-3 absolute">${calculateTime(video.others.posted_date)}</span>`
            }
                        
                </figure>
                <div class="px-2 pt-4">
                <div class="flex gap-3">
                    <img class="rounded-full w-10 h-10 object-cover" src=${video.authors[0].profile_picture}>
                    <div class="space-y-2">
                        <h2 class="card-title font-bold">${video.title}</h2>
                        <div class="flex items-center gap-2">
                            <p class="font-medium text-gray-400">${video.authors[0].profile_name}</p>
                            ${video.authors[0].verified === true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000">` : ''}
                        </div>
                        <p class="font-medium text-gray-400">${video.others.views} views</p>
                    </div>
                </div>                 
                </div>`
        videosContainer.append(card)
    });

}

loadVideos()
const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data =>displayVideos(data.videos))
}
const displayVideos = (videos)=>{
    console.log(videos)
    const videosContainer = document.getElementById('videos-container')
    videos.forEach(video => {
        console.log(video)
    });

}

loadVideos()
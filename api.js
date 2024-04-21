import { YT_API_KEY } from './config.py';



// Function to fetch follower count from YouTube API
async function getYouTubeSubscribers() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=gc_tech&key=${YT_API_KEY}`);
    const data = await response.json();
    return data.items[0].statistics.subscriberCount;
}

// Function to update HTML with follower counts
async function updateFollowers() {
    const youtubeSubscribers = await getYouTubeSubscribers();
    document.getElementById('youtube-subscribers').innerText = youtubeSubscribers;
}

// Call the updateFollowers function to fetch and update follower counts
updateFollowers();
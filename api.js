import { YT_API_KEY } from './config.js';

// Function to fetch follower count from YouTube API
async function getYouTubeSubscribers() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkuvibRmQebYFeuAgQJK38w&key=${YT_API_KEY}`);
    const data = await response.json();
    return data.items[0].statistics.subscriberCount;
}

async function updateFollowers() {
    try {
        const youtubeSubscribers = await getYouTubeSubscribers();
        document.getElementById('youtube-subscribers').innerText = youtubeSubscribers;
    } catch (error) {
        console.error('Error fetching YouTube subscriber count:', error.message);
    }
}

updateFollowers();


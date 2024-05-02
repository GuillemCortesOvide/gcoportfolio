const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Function to fetch follower count from YouTube API
async function getYouTubeSubscribers() {
    const apiKey = functions.config().api.key;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkuvibRmQebYFeuAgQJK38w&key=${apiKey}`);
    const data = await response.json();
    return data.items[0].statistics.subscriberCount;
}

async function updateSubs() {
    try {
        const youtubeSubscribers = await getYouTubeSubscribers();
        document.getElementById('youtube-subscribers').innerText = youtubeSubscribers;
    } catch (error) {
        console.error('Error fetching YouTube subscriber count:', error.message);
    }
}

updateSubs();

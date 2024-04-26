import { YT_API_KEY } from './config.js';

// Function to fetch follower count from YouTube API
async function getYouTubeSubscribers() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkuvibRmQebYFeuAgQJK38wkey=${YT_API_KEY}`);
    const data = await response.json();
    return data.items[0].statistics.subscriberCount;
}

// Function to fetch follower count from Instagram API
async function getInstagramFollowers() {
    // Make a request to the Instagram API to fetch follower count
    const response = await fetch('INSTAGRAM_API_ENDPOINT', {
        headers: {
            'Authorization': 'Bearer INSTAGRAM_ACCESS_TOKEN' // Include your Instagram access token here
        }
    });

    // Check if the request was successful
    if (response.ok) {
        // Parse the response JSON data
        const data = await response.json();
        // Extract follower count from the response data (replace 'followerCountField' with the actual field name from the API response)
        const followerCount = data.followerCountField;
        // Return the follower count
        return followerCount;
    } else {
        // Handle error if request fails
        throw new Error('Failed to fetch Instagram follower count');
    }
}

// Function to fetch follower count from TikTok API
async function getTikTokFollowers() {
    try {
        // Make an API request to fetch follower count from TikTok
        const response = await fetch('https://api.tiktok.com/...'); // Replace '...' with the actual TikTok API endpoint
        const data = await response.json();
        // Extract and return the follower count from the response data
        return data.followers;
    } catch (error) {
        // If an error occurs during the API request, throw an error
        throw new Error('Failed to fetch TikTok follower count: ' + error.message);
    }
}

// Function to update HTML with follower counts
async function updateFollowers() {
    try {
        // Call the function to fetch follower count from YouTube API
        const youtubeSubscribers = await getYouTubeSubscribers();
        // Update the HTML element with the fetched follower count for YouTube
        document.getElementById('youtube-followers').innerText = youtubeSubscribers;

        // Call the function to fetch follower count from Instagram API
        const instagramFollowers = await getInstagramFollowers();
        // Update the HTML element with the fetched follower count for Instagram
        document.getElementById('instagram-followers').innerText = instagramFollowers;

        // Call the function to fetch follower count from TikTok API
        const tiktokFollowers = await getTikTokFollowers();
        // Update the HTML element with the fetched follower count for TikTok
        document.getElementById('tiktok-followers').innerText = tiktokFollowers;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching follower counts:', error.message);
    }
}

// Call the updateFollowers function to fetch and update follower counts for all platforms
updateFollowers();

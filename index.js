// Sample data for initial tweets
const initialTweets = [
    "Hello, Twitter!",
    "This is a simple Twitter clone.",
    "You can post tweets here.",
];

const tweetButton = document.getElementById("tweet-button");
const tweetInput = document.getElementById("tweet-input");
const tweetFeed = document.getElementById("tweet-feed");

// Function to add a new tweet
function addTweet(content) {
    const tweetDiv = document.createElement("div");
    tweetDiv.className = "tweet";
    tweetDiv.textContent = content;
    tweetFeed.prepend(tweetDiv);
}

// Function to handle the tweet button click
function handleTweetButtonClick() {
    const tweetContent = tweetInput.value.trim();
    if (tweetContent !== "") {
        addTweet(tweetContent);
        tweetInput.value = "";
    }
}

// Populate initial tweets
initialTweets.forEach((tweet) => addTweet(tweet));

// Event listener for tweet button click
tweetButton.addEventListener("click", handleTweetButtonClick);

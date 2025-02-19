document.getElementById("getRecommendation").addEventListener("click", async () => {
    const artist = document.getElementById("artistInput").value.trim();
    const recommendationDiv = document.getElementById("recommendation");

    if (!artist) {
        recommendationDiv.innerHTML = "Please enter an artist name!";
        return;
    }

    recommendationDiv.innerHTML = "Loading...";

    // Simulating API request (replace with actual API call)
    setTimeout(() => {
        const recommendations = {
            "Coldplay": { artist: "Keane", reason: "Similar piano-driven alternative rock style." },
            "Eminem": { artist: "NF", reason: "Both are known for deep lyrics and intense rap flows." },
            "The Beatles": { artist: "The Beach Boys", reason: "Both were pioneers of the 60s pop-rock era." }
        };

        const response = recommendations[artist] || {
            artist: "Unknown Artist",
            reason: "Sorry, no recommendation found. Try another artist!"
        };

        recommendationDiv.innerHTML = `<strong>${response.artist}</strong>: ${response.reason}`;
    }, 1000);
});

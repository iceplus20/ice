document.addEventListener("DOMContentLoaded", function() {
    const commentsData = [
        { text: "Wow! I made $300 with $1500 in 6mins, This is awesome", img: "user1.png" },
        { text: "Finally, a blockchain that empowers users", img: "user2.png" },
        { text: "Decentralization at its best", img: "user3.png" },
        { text: "I just received my ice token with extra 20%, massive profits.", img: "user4.png" },
        { text: "Loving the speed of Ice Open Network", img: "user5.png" },
        { text: "ION transactions are super fast!", img: "user6.png" },
        { text: "I love the benefits of this platform", img: "user7.png" },
        { text: "A game-changer in blockchain technology.", img: "user8.png" },
        { text: "The rewards are amazing", img: "user9.png" },
        { text: "I highly recommend Ice Open Network for daily traders", img: "user10.png" }
    ];

    const commentsList = document.getElementById("comments");

    commentsData.forEach(comment => {
        let listItem = document.createElement("li");

        let userImage = document.createElement("img");
        userImage.src = comment.img;
        userImage.alt = "User Profile";
        userImage.classList.add("comment-img");

        let commentText = document.createElement("span");
        commentText.textContent = comment.text;

        listItem.appendChild(userImage);
        listItem.appendChild(commentText);
        commentsList.appendChild(listItem);
    });
});

function showUSDT() {
    document.getElementById("usdt-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("usdt-popup").style.display = "none";
}

function copyUSDT() {
    const usdtAddress = document.getElementById("usdt-address").innerText;
    navigator.clipboard.writeText(usdtAddress).then(() => {
        alert("USDT Address copied to clipboard!");
    });
}
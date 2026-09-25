const starCount = window.innerWidth < 600 ? 80 : 200;
for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (1 + Math.random() * 2) + "s";
    star.style.opacity = Math.random();
    document.body.appendChild(star);
}

const lanternImages = [];
for (let i = 1; i <= 9; i++) lanternImages.push(`./style/img/lantern/ld (${i}).png`);

const messages = [
    { text: "Chúc bé Thảo Trung Thu vui vẻ, ấm áp và luôn khỏe mạnh, bình an! 😊", img: "./style/img/Anh (5).gif" },
    { text: "Trung Thu này hong cần quà, chỉ cần em thoi! 🎁", img: "https://i.pinimg.com/originals/75/35/89/753589ee385233757d931b8800cc7475.gif" },
    { text: "Trung thu này nếu em chưa có người thương, hong xao hong xao, có anh thương^^", img: "https://i.pinimg.com/originals/60/b4/f9/60b4f9c20f6b6536bc232355030c4b7a.gif" },
    { text: "Người ta ngắm trăng, còn anh lại ngắm em — vì em rực rỡ hơn cả đêm Trung Thu. 💖🌙", img: "./style/img/Anh (4).gif" },
    { text: "Nếu có một điều ước trong đêm trăng rằm, anh chỉ muốn mỗi ngày đều được nhìn thấy em", img: "./style/img/Anh (1).jpg" }, 
    { text: "Nếu có thể gửi lời chúc theo ánh trăng, anh sẽ nhắn rằng: ‘Thảo ơi, em mãi tỏa sáng nha! 🌟 ", img: "https://i.pinimg.com/originals/88/23/82/882382f97862c72e60fc06822e36eb55.gif" }, 
    { text: "Trung Thu này, có em là đủ ngọt ngào hơn mọi loại bánh 🍰", img: "./style/img/Anh (3).gif" }, 
    { text: "Bánh Trung Thu có nhân gì cũng được, miễn là trong tim anh luôn có ‘nhân vật chính’ là Thảo 🌿", img: "./style/img/thao.jpg" }, 
    { text: "Trăng tròn rồi sẽ khuyết, nhưng tình cảm của anh này dành cho em thì không bao giờ phai 🌙", img: "https://i.pinimg.com/originals/8e/d5/3a/8ed53a260b997abc3dc6bef98a71192b.gif" }, 
    { text: "Đêm nay trăng tròn, tim anh cũng tròn — vì Thảo đã chiếm trọn cả hai 🧡", img: "https://i.pinimg.com/originals/fc/cb/07/fccb0736aba4e6892cf1dabe9f6866d6.gif" }, 
    { text: "Nếu mỗi ngọn đèn lồng là một lời chúc, thì anh xin thắp cả ngàn đèn để chúc Thảo luôn hạnh phúc 🏮", img: "./style/img/Anh (7).gif" }, 
    { text: "Đêm Trung Thu gió mát, trăng trong, nhưng không gì làm anh rung động bằng giọng nói của em 🍂 ", img: "./style/img/Anh (2).jpg" },
    { text: "Chị Hằng trong đêm trăng thì cũng đẹp đấy, nhưng lộng lẫy nhất là Thảo cơ ✨ ", img: "./style/img/Anh (6).gif" }
];

const lanternsContainer = document.getElementById("lanternsContainer");
let maxLanterns = window.innerWidth < 600 ? 15 : 30;
let lanternInterval = null;

function createLantern() {
    if (lanternsContainer.querySelectorAll(".lantern").length >= maxLanterns) return;

    let lantern = document.createElement("img");
    lantern.src = lanternImages[Math.floor(Math.random() * lanternImages.length)];
    lantern.className = "lantern";

    // Giới hạn lantern không tràn màn hình
    let startX = Math.random() * 85; // 0% -> 85%
    lantern.style.left = startX + "vw";

    // random horizontal drift
    let driftX = (Math.random() - 0.5) * 50; // ±25vw
    lantern.style.setProperty('--x', driftX + 'vw');

    let duration = 10 + Math.random() * 10;
    lantern.style.animationDuration = duration + "s";

    lantern.addEventListener("click", () => {
    let randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("popupText").innerText = randomMsg.text;
    document.getElementById("popupImg").src = randomMsg.img;
    document.getElementById("popup").classList.add("show");
    document.getElementById("overlay").classList.add("show");
    });

    lanternsContainer.appendChild(lantern);
    lantern.addEventListener("animationend", () => lantern.remove());
}

const song = document.getElementById("bgMusic");
document.getElementById("releaseBtn").addEventListener("click", () => {
    if (!lanternInterval) {
    song.currentTime = 57;
    song.play();
    lanternInterval = setInterval(() => {
        let count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) createLantern();
    }, 1200);
    document.getElementById("releaseBtn").style.display = "none";
    }
});

function closePopup() {
    document.getElementById("popup").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
}
document.getElementById("overlay").addEventListener("click", closePopup);
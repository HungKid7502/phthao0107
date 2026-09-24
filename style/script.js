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
    { text: "Chúc chị bé của em Trung Thu vui vẻ, ấm áp và luôn khỏe mạnh, bình an! 😊", img: "https://i.pinimg.com/originals/fc/cb/07/fccb0736aba4e6892cf1dabe9f6866d6.gif" },
    { text: "Trung Thu này hong cần quà, chỉ cần chị thoi! 🎁", img: "https://i.pinimg.com/originals/75/35/89/753589ee385233757d931b8800cc7475.gif" },
    { text: "Trung thu này nếu chị chưa có người thương, hong xao hong xao, có e thương^^", img: "https://i.pinimg.com/originals/60/b4/f9/60b4f9c20f6b6536bc232355030c4b7a.gif" },
    { text: "Người ta ngắm trăng, còn em lại ngắm chị — vì chị rực rỡ hơn cả đêm Trung Thu. 💖🌙", img: "./style/img/Anh (4).jpg" },
    { text: "Nếu có điều ước trong đêm trăng rằm, em chỉ muốn được nhìn thấy chị ngoài đời thêm một lần", img: "./style/img/Anh (1).jpg" }, 
    { text: "Nếu có thể gửi lời chúc theo ánh trăng, em muốn nhắn rằng: ‘Chị ơi, mãi tỏa sáng nha! 🌟 ", img: "./style/img/Anh (11).jpg" }, 
    { text: "Trung Thu này, có chị là đủ ngọt ngào hơn mọi loại bánh 🍰", img: "./style/img/Anh (3).jpg" }, 
    { text: "Bánh Trung Thu có nhân gì cũng được, miễn là trong tim em luôn có ‘nhân vật chính’ là chị 🥮", img: "./style/img/Anh (9).jpg" }, 
    { text: "Trăng tròn rồi sẽ khuyết, nhưng tình cảm của fan nhỏ này dành cho chị thì không bao giờ phai 🌙", img: "https://i.pinimg.com/originals/8e/d5/3a/8ed53a260b997abc3dc6bef98a71192b.gif" }, 
    { text: "Đêm nay trăng tròn, tim em cũng tròn — vì chị đã chiếm trọn cả hai 🧡", img: "./style/img/Anh (5).jpg" }, 
    { text: "Nếu mỗi ngọn đèn lồng là một lời chúc, thì em xin thắp cả ngàn đèn để chúc chị luôn hạnh phúc 🏮", img: "./style/img/Anh (7).jpg" }, 
    { text: "Đêm Trung Thu gió mát, trăng trong, nhưng không gì làm em rung động bằng giọng nói của chị 🍂 ", img: "./style/img/Anh (2).jpg" },
    { text: "Chị Hằng trong đêm trăng thì cũng đẹp đấy, nhưng lộng lẫy nhất là chị Hà cơ ✨ ", img: "./style/img/Anh (6).jpg" }
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
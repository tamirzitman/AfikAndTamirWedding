const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get("mode");

if (mode === "photos") {
  const giftsSection = document.getElementById("gifts");
  if (giftsSection) {
    giftsSection.style.display = "none";
  }
  // Hide gift icon from top buttons too
  const giftIcon = document.getElementById("gift-icon");
  if (giftIcon) {
    giftIcon.style.display = "none";
  }
}

const galleryContainer = document.getElementById("random-gallery");
const galleryPath = "assets/gallery/";

// List of all image filenames
const imageFiles = [
  "6026030539141662795.jpg",
  "6026030539141662796.jpg",
  "6026030539141662797.jpg",
  "6026030539141662798.jpg",
  "6026030539141662799.jpg",
  "6026030539141662800.jpg",
  "6026030539141662801.jpg",
  "6026030539141662802.jpg",
  "6026030539141662803.jpg",
  "6026030539141662804.jpg",
  "6026030539141662805.jpg",
  "6026030539141662806.jpg",
  "6026030539141662807.jpg",
  "6026030539141662808.jpg",
  "6026030539141662809.jpg",
  "6026030539141662810.jpg",
  "6026030539141662811.jpg",
  "6026030539141662812.jpg",
  "6026030539141662813.jpg",
  "6026030539141662814.jpg",
  "6026030539141662815.jpg",
  "6026030539141662816.jpg",
  "6026030539141662817.jpg",
  "6026030539141662818.jpg",
  "6026030539141662819.jpg",
  "6026030539141662820.jpg",
  "6026030539141662821.jpg",
];
// Shuffle and select 4
const shuffled = imageFiles.sort(() => 0.5 - Math.random()).slice(0, 6);

// Add them to the DOM
shuffled.forEach((filename) => {
  const div = document.createElement("div");
  div.className = "gallery-img";
  div.innerHTML = `<img src="${galleryPath}${filename}" alt="תמונה שלנו" />`;
  galleryContainer.appendChild(div);
});

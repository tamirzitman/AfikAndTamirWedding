const config = {
  weddingEndDate: "2025-07-25T21:00:00+03:00", // YYYY-MM-DDTHH:mm:ss+TZD format
  galleryPath: "assets/gallery/",
  imageFiles: [
    "6026030539141662795.jpg", "6026030539141662796.jpg", "6026030539141662797.jpg",
    "6026030539141662798.jpg", "6026030539141662799.jpg", "6026030539141662800.jpg",
    "6026030539141662801.jpg", "6026030539141662802.jpg", "6026030539141662803.jpg",
    "6026030539141662804.jpg", "6026030539141662805.jpg", "6026030539141662806.jpg",
    "6026030539141662807.jpg", "6026030539141662808.jpg", "6026030539141662809.jpg",
    "6026030539141662810.jpg", "6026030539141662811.jpg", "6026030539141662812.jpg",
    "6026030539141662813.jpg", "6026030539141662814.jpg", "6026030539141662815.jpg",
    "6026030539141662816.jpg", "6026030539141662817.jpg", "6026030539141662818.jpg",
    "6026030539141662819.jpg", "6026030539141662820.jpg", "6026030539141662821.jpg",
  ],
  links: {
    paybox: "https://payboxapp.page.link/W9DitJpYJkBgFW137",
    wiwi: "https://wiwi.gifts/KnVko3",
    sharedAlbum: "https://photos.app.goo.gl/ctE7Vn4TSXdk5bAj9"
  },
  imageAssets: {
    googlePhotos: "images/google_photos.png",
    giftIcon: "images/gift_img.png",
    shareIcon: "images/share.png",
    payboxIcon: "images/paybox.png",
    wiwiIcon: "images/wiwi.png",
    heroBackground: "assets/gallery/6026030539141662797.jpg"
  }
};

// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // Set hero background
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('${config.imageAssets.heroBackground}') center/cover no-repeat
    `;
  }

  const weddingEndDate = new Date(config.weddingEndDate);
  const now = new Date();

  if (now >= weddingEndDate) {
    const albumSection = document.getElementById("shared-album");
    const giftsSection = document.getElementById("gifts");

    if (albumSection && giftsSection && albumSection.parentNode) {
      // Move gifts section right after the album section
      albumSection.parentNode.insertBefore(giftsSection, albumSection.nextSibling);
    }
    // Hide gift icon from top buttons
    const giftIcon = document.getElementById("gift-icon");
    if (giftIcon) {
      giftIcon.style.display = "none";
    }
  }

  // Set links
  document.getElementById("paybox-link").href = config.links.paybox;
  document.getElementById("wiwi-link").href = config.links.wiwi;
  document.getElementById("google-photos-link").href = config.links.sharedAlbum;

  // Set icons
  document.querySelectorAll(".icon-google-photos").forEach(img => {
    img.src = config.imageAssets.googlePhotos;
  });
  document.querySelectorAll(".icon-paybox").forEach(img => {
    img.src = config.imageAssets.payboxIcon;
  });
  document.querySelectorAll(".icon-wiwi").forEach(img => {
    img.src = config.imageAssets.wiwiIcon;
  });
  document.querySelector("#share-icon img").src = config.imageAssets.shareIcon;
  document.querySelector("#gift-icon img").src = config.imageAssets.giftIcon;
});


document.getElementById("share-icon").addEventListener("click", async () => {
  const cleanUrl = window.location.origin + window.location.pathname;

  if (navigator.share) {
    await navigator.share({
      title: document.title,
      url: cleanUrl,
    });
  } else {
    // fallback
    navigator.clipboard.writeText(cleanUrl);
    alert("Link copied to clipboard!");
  }
});

const galleryContainer = document.getElementById("random-gallery");
const galleryPath = config.galleryPath;
const imageFiles = config.imageFiles;

function shuffleImages() {
  // Clear current images with a fade-out
  const images = document.querySelectorAll(".gallery-img");
  images.forEach((img) => {
    img.classList.add("fade-out");
  });

  // After fade-out, shuffle and replace
  setTimeout(() => {
    galleryContainer.innerHTML = ""; // clear existing

    const shuffled = imageFiles.sort(() => 0.5 - Math.random()).slice(0, 6);
    shuffled.forEach((filename) => {
      const div = document.createElement("div");
      div.className = "gallery-img fade-in";
      div.innerHTML = `<img src="${config.galleryPath}${filename}" alt="תמונה שלנו" />`;
      galleryContainer.appendChild(div);
    });
  }, 500); // match fade-out duration
}

// Initial render
shuffleImages();

// Repeat every X seconds
setInterval(shuffleImages, 5000);

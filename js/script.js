const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get("mode");

if (mode === "photos") {
  const giftsSection = document.getElementById("gifts");
  if (giftsSection) {
    giftsSection.style.display = "none";
  }
}

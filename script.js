function playVideo(type) {
  const is1080 = type === "song1080p";

  document.getElementById("cookie-container").style.display = "none";

  const sources = {
    song720p:
      "https://github.com/pagedeploy/cdn/raw/refs/heads/main/autoplay/song720p.mp4",
    song1080p:
      "https://github.com/pagedeploy/cdn/raw/refs/heads/main/autoplay/song1080p.mp4",
  };

  const container = document.getElementById("video-container");
  const video = document.getElementById("custom-video");
  container.style.display = "flex";
  video.src = sources[type];
  video.muted = false;
  video.autoplay = true;
  video.playsInline = true;
  video.removeAttribute("controls");
  video.play().catch((e) => console.error("Autoplay error:", e));

  setTimeout(() => {
    document.title = is1080 ? "Get Spun Around!" : "Get Rickrolled!";

    const iconUrl = is1080
      ? "https://github.com/pagedeploy/cdn/blob/main/autoplay/youspinme.png?raw=true"
      : "https://github.com/pagedeploy/cdn/blob/main/autoplay/rickastley.png?raw=true";

    document.querySelectorAll('link[rel*="icon"]').forEach((f) => f.remove());
    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.href = iconUrl;
    newFavicon.type = "image/png";
    document.head.appendChild(newFavicon);
  }, 500);
}

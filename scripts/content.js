const observer = new MutationObserver((mutations) => {
  console.log(mutations);
});

const videos = document.querySelectorAll("video");

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { pageLoaded, error } = obj;
  if (response && pageLoaded) {
    console.log("response received and page loaded");
    videos.forEach((video) => {
      console.log("video", video);
      observer.observe(video, { attributes: true });

      video.playbackRate = 1.75;
    });
  } else {
    console.error(error);
  }
});

const observer = new MutationObserver((mutations) => {
  //
  console.log(mutations);

  mutations.forEach((video) => {
    video.playbackRate = 1.75;
  });
});

const videos = document.querySelectorAll("video");

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { pageLoaded, error, site } = obj;
  if (response && pageLoaded && !site) {
    console.log("response received and page loaded");
    videos.forEach((video) => {
      console.log("video", video);
      observer.observe(video, { attributes: true });

      video.playbackRate = 1.75;

      video.addEventListener("paused", (event) => {
        // video.playbackRate = 1.75;
        console.log(video.playbackRate, "paused");
      });
    });
  } else if (response && pageLoaded && site === "teachable.com") {
    // window.addEventListener("load", () => {
    console.log("document loaded");
    const vjsvideo = document.querySelector("#vjs_video_3_html5_api");
    console.log(vjsvideo);
    observer.observe(vjsvideo, { attributes: true, childList: true });

    vjsvideo.playbackRate = 1.75;
    // });
  } else {
    console.error(error);
  }
});

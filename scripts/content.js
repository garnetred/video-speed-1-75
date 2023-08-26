const observer = new MutationObserver((mutations) => {
  //
  console.log(mutations);
});

const video = document.querySelector("video");
console.log(video);

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { pageLoaded, error } = obj;
  if (response && pageLoaded) {
    console.log("response received and page loaded");
    observer.observe(video, { attributes: true });
    // setTimeout(() => {
    //   console.log("video after console log", video);
    //   if (video.getAttribute("preload")) {
    //     console.log(
    //       video.playbackRate,
    //       "playback rate after grabbing preload attribute",
    //     );
    //     video.playbackRate = 1.75;
    //     return;
    //   }
    //   video.playbackRate = 1.75;
    // }, 10000);

    video.addEventListener("canplay", (event) => {
      video.playbackRate = 1.75;
      console.log(video.playbackRate);
    });
  } else {
    console.error(error);
  }
});

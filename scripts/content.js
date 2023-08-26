const observer = new MutationObserver((mutations) => {
  //
  console.log(mutations);
});

const video = document.querySelector("video");
console.log(video);

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { pageLoaded, error } = obj;
  if (response && pageLoaded) {
    observer.observe(document, { characterData: true });
  } else {
    console.error(error);
  }
});

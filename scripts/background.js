chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (changeInfo.status === "complete" && !tabUrl.includes("courses.")) {
    // const observer = new MutationObserver(mutations => {
    //   //
    //   console.log(mutations)
    // })

    // const video = document.querySelector('video');
    // console.log(video)
    // observer.observe(document, {characterData: true})
    //  try {
    // document.addEventListener("onload", () => {
    // console.log("document loaded");
    chrome.tabs.sendMessage(tabId, {
      pageLoaded: true,
      site: undefined,
      error: null,
    });
    console.log("trying to send message");
    // });
    // } catch (error) {
    //   chrome.tabs.sendMessage(tabId, {
    //     pageLoaded: false,
    //     error: `The following error has appeared: ${error}`,
    //   });
    // }
  } else if (changeInfo.status === "complete" && tabUrl.includes("courses.")) {
    chrome.tabs.sendMessage(tabId, {
      pageLoaded: true,
      site: "teachable.com",
      error: null,
    });
  }
});

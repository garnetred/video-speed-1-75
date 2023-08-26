chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl
  ) {

    // const observer = new MutationObserver(mutations => {
    //   //
    //   console.log(mutations)
    // })

    // const video = document.querySelector('video');
    // console.log(video)
    // observer.observe(document, {characterData: true})
    //  try {
      chrome.tabs.sendMessage(tabId, { pageLoaded: true, error: null });
    // } catch (error) {
    //   chrome.tabs.sendMessage(tabId, {
    //     pageLoaded: false,
    //     error: `The following error has appeared: ${error}`,
    //   });
    // }
  }
});

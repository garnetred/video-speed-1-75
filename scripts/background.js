chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (changeInfo.status === "complete" && tabUrl) {
    try {
      chrome.tabs.sendMessage(tabId, {
        pageLoaded: true,
        error: null,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    chrome.tabs.sendMessage(tabId, {
      pageLoaded: false,
      error: `extension unable to load due to issue with status: ${changeInfo} or tab: ${tabUrl}`,
    });
  }
});

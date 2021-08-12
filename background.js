chrome.action.onClicked.addListener(function (_tab) {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        var activeTab = tabs[0];
        var contentInfo = {
          message: 'eight.browser_action.click',
          current_url: activeTab.url,
        };
        chrome.tabs.sendMessage(activeTab.id, contentInfo);
      }
    });
  }
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'eight_share',
    // TODO replace to i18n. see: https://bugs.chromium.org/p/chromium/issues/detail?id=1175053
    title: navigator.language === 'ja' ? '現在のページをEightでシェア' : 'Share to Eight',
    contexts: ['page'],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {
    message: 'eight.context_menu_item.page.click',
    current_url: tab.url,
  });
});

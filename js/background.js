var chrome = window.chrome;

chrome.browserAction.onClicked.addListener(function(_tab) {
  if (chrome.tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
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

chrome.contextMenus.create({
  title: '現在のページをEightでシェア',
  contexts: ['page'],
  onclick: function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
      message: 'eight.context_menu_item.page.click',
      current_url: tab.url,
    });
  },
});

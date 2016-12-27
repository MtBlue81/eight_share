const WINDOW_SPECS = [
  'toolbar=no',
  'location=no',
  'status=no',
  'menubar=no',
  'scrollbars=yes',
  'resizable=yes',
  'width=600',
  'height=400',
].join(',');

getConfig('config.json').then(onReady);

function getConfig(fileName) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL(fileName), true);
    xhr.onreadystatechange = function() {
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  });
}

function onReady(config) {
  const APP_ID = config.appId;;
  const SHARE_BASE = config.shareBase;

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === 'eight.browser_action.click'
          || request.message === 'eight.context_menu_item.page.click') {
        showDialog(request.current_url);
      }
    }
  );

  function showDialog(currentURL) {
    const shareDialogURL = `${SHARE_BASE}?application_id=${APP_ID}&url=${currentURL}`;
    window.open(shareDialogURL, 'EightShareWindow', WINDOW_SPECS);
  }
}


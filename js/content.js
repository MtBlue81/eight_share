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

const APP_ID = '${APP_ID}';
const SHARE_BASE = '${SHARE_BASE}';

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

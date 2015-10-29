
document.addEventListener('DOMContentLoaded', function() {
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    // Loads dependency scripts
    file: './js/scriptloader.js'
  });
  chrome.tabs.executeScript({
    // Launches authentication and WebRTC call
    file: './js/authentication.js'
  });
  //Modal
   chrome.tabs.executeScript({
    file: './js/modal.js'
  });
  // Modal Style
  chrome.tabs.insertCSS({
    file: './css/style.css'
  });
});
}, false);

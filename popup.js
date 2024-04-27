document.addEventListener('DOMContentLoaded', function() {
    const extractButton = document.getElementById('extractButton');
    const titleDisplay = document.getElementById('titleDisplay');
  
    extractButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        const tabTitle = currentTab.title;
        titleDisplay.innerHTML = "<strong>Title of the current tab:</br> </strong>"+ tabTitle;
      });
    });
  });
  
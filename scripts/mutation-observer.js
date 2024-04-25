function observeMutations(resultsSection) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const list = mutation.addedNodes.querySelector(resultsListSelector);
        console.log('list:', list);

        const searchResults = document.querySelectorAll('.result');
        if (searchResults.length > 0) {
          // Send a message to the background script indicating search results are available
          chrome.runtime.sendMessage({
            action: 'searchResultsAvailable',
            count: searchResults.length,
          });
        }
      }
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
}

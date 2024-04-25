const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  var observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      Array.from(mutation.addedNodes)
        .find(nodeOfTypes('OL', 'LI'))
        ?.querySelectorAll(resultLinkSelector)
        .forEach(appendSearchButton);
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
}

window.addEventListener('beforeunload', () => {
  observer?.disconnect();
});

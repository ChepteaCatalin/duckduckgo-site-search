var observer;

window.addEventListener('load', () => {
  const resultsSection = document.querySelector(resultsSectionSelector);
  if (!resultsSection) return;
  parseResults(resultsSection.children);

  observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;
      parseResults(mutation.addedNodes);
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
});

window.addEventListener('beforeunload', () => {
  observer?.disconnect();
});

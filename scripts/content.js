var observer;

addEventListener('load', () => {
  const resultsSection = document.querySelector(resultsSectionSelector);
  if (!resultsSection) return;
  parseResults(resultsSection.children);

  observer = new MutationObserver(mutations => {
    mutations.forEach(({type, addedNodes}) => {
      if (type === 'childList' && addedNodes.length) parseResults(addedNodes);
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
});

addEventListener('beforeunload', () => {
  observer?.disconnect();
});

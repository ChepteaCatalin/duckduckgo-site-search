const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      const list = Array.from(mutation.addedNodes).find(resultsList);
      if (list) {
        const resultsLinks = list.querySelectorAll(resultLinkSelector);
        appendButtons(resultsLinks);
      }
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
}

function appendButtons(resultsLinks) {
  resultsLinks.forEach(result => {
    const button = createButton();
    result.parentNode.parentNode.insertBefore(button, result.nextSibling);
  });
}

const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      const list = [...mutation.addedNodes].find(resultsList);
      if (list) {
        const resultsLinks = list.querySelectorAll(resultLinkSelector);
        appendButton([...resultsLinks]);
      }
    });
  });

  observer.observe(resultsSection, {childList: true, subtree: true});
}

function appendButtons(resultsLinks) {
  resultsLinks.forEach(result => {
    const button = createButton();
    result.parentNode.insertBefore(button, result.nextSibling); //FIXME: are you sure?
  });
}

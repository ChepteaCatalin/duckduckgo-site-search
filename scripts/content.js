const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      const list = Array.from(mutation.addedNodes).find(
        nodeOfTypes('OL', 'LI')
      );
      if (list) {
        const resultsLinks = list.querySelectorAll(resultLinkSelector);
        appendButtons(resultsLinks);
      }
    });
  }).observe(resultsSection, {childList: true, subtree: true});
}

function appendButtons(resultsLinks) {
  resultsLinks.forEach(result => {
    const grandparentNode = result.parentNode.parentNode;
    const btnExists = !!grandparentNode.querySelector(siteSearchBtnSelector);

    if (btnExists) return;

    const button = createButton();
    grandparentNode.insertBefore(button, result.nextSibling);
  });
}

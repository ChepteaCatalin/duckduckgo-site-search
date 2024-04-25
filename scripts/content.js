const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      Array.from(mutation.addedNodes)
        .find(nodeOfTypes('OL', 'LI'))
        ?.querySelectorAll(resultLinkSelector)
        .forEach(appendButton);
    });
  }).observe(resultsSection, {childList: true, subtree: true});
}

function appendButton(linkNode) {
  const searchItem = linkNode.parentNode.parentNode;
  if (buttonExistsFor(searchItem)) return;

  try {
    var hostname = new URL(linkNode.href).hostname;
  } catch (error) {
    return;
  }

  searchItem.append(searchButton(hostname));
}

function buttonExistsFor(searchItem) {
  return !!searchItem.querySelector(siteSearchBtnSelector);
}

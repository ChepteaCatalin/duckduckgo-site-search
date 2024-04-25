try {
  const resultsSection = document.querySelector(resultsSectionSelector);

  if (resultsSection) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type !== 'childList' || !mutation.addedNodes.length)
          return;

        const list = [...mutation.addedNodes].find(resultsList);
        if (list) {
          const searchResults = list.querySelectorAll(resultLinkSelector);
          appendButton([...searchResults]);
        }
      });
    });

    observer.observe(resultsSection, {childList: true, subtree: true});
  }
} catch (error) {
  console.log('err');
}

function appendButton(searchResults) {
  searchResults.forEach(result => {
    const button = createButton();
    result.parentNode.insertBefore(button, result.nextSibling); //FIXME: are you sure?
  });
}

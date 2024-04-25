try {
  const resultsSection = document.querySelector(resultsSectionSelector);

  if (resultsSection) {
    observeMutations(resultsSection);
    const searchResults = document.querySelectorAll(resultLinkSelector);

    searchResults.forEach(result => {
      const button = createButton();
      result.parentNode.insertBefore(button, result.nextSibling); //FIXME: are you sure?
    });
  }
} catch (error) {
  console.log('err');
}

function querySite(hostname) {
  const searchInput = document.getElementById(searchInputID);
  const searchButton = document.getElementById(searchButtonID);
  if (!searchInput || !searchButton) return;

  const currentSiteQuery = searchInput.value.split('site:')[1];

  if (currentSiteQuery) {
    searchInput.value = searchInput.value.replace(
      `site:${currentSiteQuery}`,
      `site:${hostname}`
    );
  } else {
    searchInput.value = searchInput.value + ` site:${hostname}`;
  }

  searchButton.click();
}

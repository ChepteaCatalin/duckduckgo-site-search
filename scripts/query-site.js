function querySite(hostname) {
  const searchInput = document.getElementById(searchInputID);
  const searchButton = document.getElementById(searchButtonID);
  if (!searchInput || !searchButton) return;

  const currentSiteQuery = searchInput.value.split('site:')[1];

  searchInput.value = currentSiteQuery
    ? searchInput.value.replace(`site:${currentSiteQuery}`, `site:${hostname}`)
    : `${searchInput.value} site:${hostname}`;

  searchButton.click();
}

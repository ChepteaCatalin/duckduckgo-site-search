function appendSearchButton(linkNode) {
  const searchItem = linkNode.parentNode.parentNode;
  if (buttonExistsFor(searchItem)) return;

  try {
    const hostname = new URL(linkNode.href).hostname;
    searchItem.append(createButton(hostname));
  } catch (error) {
    return;
  }
}

function buttonExistsFor(searchItem) {
  return !!searchItem.querySelector(siteSearchBtnSelector);
}

function createButton(hostname) {
  const button = document.createElement('button');

  button.textContent = 'Search this site';
  button.className = 'site-search-btn';
  button.type = 'button';

  button.onclick = e => {
    e.stopPropagation();
    querySite(hostname);
  };

  button.onmouseover = e => {
    e.stopPropagation();
  };

  return button;
}

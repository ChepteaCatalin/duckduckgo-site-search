function appendSearchButton(linkNode) {
  const searchItem = linkNode.parentNode.parentNode;
  if (buttonExistsFor(searchItem)) return;

  try {
    var hostname = new URL(linkNode.href).hostname;
  } catch (error) {
    return;
  }

  searchItem.append(createButton(hostname));
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
    console.log(hostname);
  };

  return button;
}

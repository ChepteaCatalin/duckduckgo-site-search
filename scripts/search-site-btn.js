function createButton() {
  const button = document.createElement('button');

  button.textContent = 'Search this site';
  button.className = 'site-search-btn';
  button.type = 'button';

  return button;
}

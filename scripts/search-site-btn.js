function searchButton(hostname) {
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

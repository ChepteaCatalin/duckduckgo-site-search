const resultsSectionSelector = 'section[data-testid="mainline"]';
const resultLinkSelector = 'a[data-testid="result-extras-url-link"]';
const siteSearchBtnSelector = 'button.site-search-btn';

function nodeOfTypes(...types) {
  return node => types.includes(node?.nodeName);
}

const resultsSectionSelector =
  '.site-wrapper #web_content_wrapper #react-layout div div div div section[data-testid="mainline"]';
const resultsListClass = 'react-results--main';
const resultLinkSelector = 'a[data-testid="result-extras-url-link"]';

function resultsList(node) {
  return node.classList.contains(resultsListClass);
}

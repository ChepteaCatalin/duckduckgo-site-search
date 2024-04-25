const resultsSectionSelector = 'section[data-testid="mainline"]';
const resultLinkSelector = 'a[data-testid="result-extras-url-link"]';

function resultsList(node) {
  return node instanceof HTMLOListElement ? node : undefined;
}

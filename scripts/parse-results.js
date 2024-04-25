function parseResults(resultsNodes) {
  return Array.from(resultsNodes)
    .find(nodeOfTypes('OL', 'LI'))
    ?.querySelectorAll(resultLinkSelector)
    .forEach(appendSearchButton);
}

function nodeOfTypes(...types) {
  return node => types.includes(node?.nodeName);
}

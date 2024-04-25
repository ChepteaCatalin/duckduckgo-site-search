const resultsSection = document.querySelector(resultsSectionSelector);

if (resultsSection) {
  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type !== 'childList' || !mutation.addedNodes.length) return;

      const list = Array.from(mutation.addedNodes).find(
        nodeOfTypes('OL', 'LI')
      );
      if (list) appendButtons(list.querySelectorAll(resultLinkSelector));
    });
  }).observe(resultsSection, {childList: true, subtree: true});
}

function appendButtons(resultsLinks) {
  resultsLinks.forEach(link => {
    const grandparentNode = link.parentNode.parentNode;
    const btnExists = !!grandparentNode.querySelector(siteSearchBtnSelector);

    if (btnExists) return;

    try {
      var hostname = new URL(link.href).hostname;
    } catch (error) {
      return;
    }

    const button = createButton();
    button.onclick = e => {
      e.stopPropagation();
      console.log(hostname);
    };
    grandparentNode.append(button);
  });
}

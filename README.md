# duckduckgo-site-search

Google Chrome extension which adds `Search this site` button next to DuckDuckGo search results, allowing for refined searches within the domain of the result.

## Installation

The extension is unpacked, so to load it, you need to follow the steps described [here](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked). Upload the root folder of this file.

## How it works

All the extension logic relies on the `content_scripts`. On the window `load` event, the search results are queried from the DOM. A `MutationObserver` is set up to monitor changes in the search results container, allowing to handle the case where new search results are displayed on the page (i.e. the `more results` button is clicked). For each search result with a valid URL, a button `Search this site` button is appended. Parsing the URL relies on the `URL` interface. If the URL constructor throws an error, the button for the link won't be appended. To perform a new search, the search input value is changed to `<query> site:<hostname>` and a click event is triggered on the search button.

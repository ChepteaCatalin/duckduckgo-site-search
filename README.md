# duckduckgo-site-search

Google Chrome extension which adds `Search this site` button next to the DuckDuckGo search results, allowing for refined searches within the domain of the result.

## Installation:

The extension is unpacked, so to load it, you need to follow the steps described [here](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked). Upload the root folder of this file when prompted.

## How it works:

All the extension logic relies on the `content_scripts`. On the window `load` event, the search results are queried from the DOM. A `MutationObserver` is set up to monitor changes in the search results container, allowing to handle the case where new search results are displayed on the page (i.e. the `more results` button is clicked). For each search result with a valid URL, a button `Search this site` button is appended. Parsing the URL relies on the `URL` interface. If the URL constructor throws an error, the button for the link won't be appended. To perform a new search, the search input value is changed to `<query> site:<hostname>` and a click event is triggered on the search button.

## Known issues and limitations:

1. No tests. Unit and e2e tests would increase the reliability of the extension and reduce the number of bugs;

2. The extension is not packaged and not published to the Chrome Web Store, making it harder to install, less secure and less performant;

3. It hasn't been tested for compatibility issues with Google Chrome versions other than `124.0.6367.79`;

4. The extension is highly dependent on the DOM of the `DuckDuckGo` site, so if they change something, the extension may not work properly. That's why the selectors have been moved to a separate single file to make them easier to change in such cases;

5. It has limited functionality. It only works in DuckDuckGo, although it could be modified to work in multiple search engines. There is no way to customise the `Search this site` button, nor any way to easily toggle it.

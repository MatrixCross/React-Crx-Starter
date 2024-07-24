(async () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openPopup') {
      chrome.windows.create({
        width: 550,
        height: 400,
        top: 200,
        left: 400,
        type: 'popup',
        url: 'popup/index.html',
        // state:"maximized"
      })
      sendResponse({ status: 'popup opened' })
    }
    return true
    // console.log(request)
    // sendResponse({status: "popup opened", request});
  })
})()

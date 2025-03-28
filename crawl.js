const { JSDOM } = require('jsdom')

async function crawlPage(currentURL){
    console.log(`Actively crawling: ${currentURL}`)
    try{
    const res = await fetch(currentURL)
    if(res.status > 399){
        console.log(`Error in fetch with status code: ${res.status} on page: ${currentURL}`)
        return
    }
    const contentType = res.headers.get('content-type')
    if(!contentType.includes('text/html')){
        console.log(`Non html response, content type: ${contentType} on page: ${currentURL}`)
    }
    }
    catch(e){
        console.log(`Error in fetching: ${e.message}`)
    }
}

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements) {
        // Relative URLS 
        if (linkElement.href.slice(0, 1) === '/') {
            try {
                const urlObj = new URL(baseURL + linkElement.href)

                urls.push(baseURL + linkElement.href)
            }
            catch (e) {
                console.log(`Error : ${e.message}`)
            }

        }
        // Absolute URLs
        else {

            try {
                const urlObj = new URL(linkElement.href)

                urls.push(linkElement.href)
            }
            catch (e) {
                console.log(`Error : ${e.message}`)
            }
        }

    }
    return urls
}
function normalizeURL(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/')
        return hostPath.slice(0, hostPath.length - 1)
    return hostPath

}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}
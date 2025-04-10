function printReport(pages){
console.log("\n==========")
console.log("REPORT")
console.log("==========")
const sortedPages = sortPages(pages)
for(const sortedPage of sortedPages){
    const url = sortedPage[0]
    const hits = sortedPage[1]
    console.log(`Found ${hits} links to pages: ${url}`)

}
console.log("\n==========")
console.log("END REPORT")
console.log("==========")
}

function sortPages(pages){
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a,b) => {
        const aHits = a[1]
        const bHits = b[1]

        return b[1] - a[1]
    })

    return pagesArr
}

module.exports = {
    sortPages,
    printReport
}
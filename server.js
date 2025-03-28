const {crawlPage} = require('./crawl.js')
async function main(){
    if(process.argv.length <3){
        console.log("No website provided ")
        process.exit(1)
    }
    else if(process.argv.length >3){
        console.log("Too many command line arguments ")
        process.exit(1)
    }
    const baseURL = process.argv[2]

    console.log(`Starting crawl of '${baseURL}'`)
   const  pages = await crawlPage(baseURL,baseURL,{})
   for(const page in pages){
    console.log(page)
   }
}

main()
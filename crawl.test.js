const {normalizeURL,getURLsFromHTML} = require('./crawl.js')
const {test , expect} = require('@jest/globals')

test('normalizeURL strip protocol',()=>{
    const input = 'https://abc.in/path'
    const actual = normalizeURL(input)
    const expected = 'abc.in/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash',()=>{
    const input = 'https://abc.in/path/'
    const actual = normalizeURL(input)
    const expected = 'abc.in/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals',()=>{
    const input = 'https://ABC.in/path/'
    const actual = normalizeURL(input)
    const expected = 'abc.in/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http',()=>{
    const input = 'https://abc.in/path/'
    const actual = normalizeURL(input)
    const expected = 'abc.in/path'
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute',()=>{
    const inputHTML =`
    <html>
    <body>
          <a href="https://abc.in/path/">
          ABC
          </a>
    </body>
    </html>
    `
    const inputBase = 'https://abc.in/path/'
    const actual = getURLsFromHTML(inputHTML,inputBase)
    const expected = ['https://abc.in/path/']
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative',()=>{
    const inputHTML =`
    <html>
    <body>
          <a href="/path/">
          ABC
          </a>
    </body>
    </html>
    `
    const inputBase = 'https://abc.in'
    const actual = getURLsFromHTML(inputHTML,inputBase)
    const expected = ['https://abc.in/path/']
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML multiple urls',()=>{
    const inputHTML =`
    <html>
    <body>
          <a href="https://abc.in/path1/">
        
          ABC
          </a>
               <a href="/path2/">
               abc 
               </a>
    </body>
    </html>
    `
    const inputBase = 'https://abc.in'
    const actual = getURLsFromHTML(inputHTML,inputBase)
    const expected = ['https://abc.in/path1/','https://abc.in/path2/']
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML bad urls',()=>{
    const inputHTML =`
    <html>
    <body>
          <a href="invalid">
        
          ABC
          </a>
    </body>
    </html>
    `
    const inputBase = 'https://abc.in'
    const actual = getURLsFromHTML(inputHTML,inputBase)
    const expected = []
    expect(actual).toEqual(expected)
})

const {normalizeURL} = require('./crawl.js')
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



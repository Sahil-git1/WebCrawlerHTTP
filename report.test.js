const {sortPages} = require('./report.js')
const {test , expect} = require('@jest/globals')

test('sortPages 2 pages',()=>{
    const input = {
        'https://abc.in/path':1,
        'https://abc.in/path2':3}
    const actual = sortPages(input)
    const expected = [
        ['https://abc.in/path2',3],
        ['https://abc.in/path',1]]
    expect(actual).toEqual(expected)
})

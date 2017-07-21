import 'isomorphic-fetch'

test('the fetch fails with an erro', () =>{
  expect.assertions(1)
  return fetch('http://localhost:8080')
    .catch(e => {
      expect(e.name).toMatch('FetchError')
    })
})

test('the data is...', () =>{
  expect.assertions(1)
  return fetch('https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text=\'chicago, il\')&format=json')
    .then(data => {
      expect(data).toBe('xx')
    })
})
const SearchInputNode = document.querySelector('.SearchInput')
const searchEngineUrl = 'https://duckduckgo.com/?q='
const doSearch = (event) => {
  event.preventDefault()
  const value = SearchInputNode.value
  if (value.indexOf('localhost:') === 0) {
    return window.location.href = `http://${value}`
  } else if (
    value.indexOf('http:') >= 0 ||
    value.indexOf('https:') >= 0 ||
    value.indexOf('localhost:') >= 0
  ) {
    return window.location.href = value
  } else {
    return window.location.href = `${searchEngineUrl}${value}`
  }
}
const doFocusSearch = () => {
  SearchInputNode.focus()
}

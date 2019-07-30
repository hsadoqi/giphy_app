document.addEventListener("DOMContentLoaded", () => {
  let limit = 5
  const apiKey = `cPJU0iKfZYXeskckuxfgG5IcMEiV5zY3`
  const apiGif = `http://api.giphy.com/v1/gifs/`
  const apiEnd = `api_key=${apiKey}&limit=${limit}`

  const gifList = document.getElementById('gif-list')
  const searchGifs = document.getElementById('search-gifs')

  searchGifs.addEventListener('submit', searchGif)

  document.addEventListener('scroll', () => {
    console.log(window.innerHeight)
    console.log(document.body.scrollHeight)
  })

  function onLoad(){
    fetch(apiGif + `random?` + apiEnd)
    .then(res => res.json())
    .then(gif => renderGif(gif.data))
  }

  function searchGif(e){
    e.preventDefault()
    let searchVal = e.target.children[0].value.split(" ").join("+")
    gifList.innerHTML = ''
    fetchGif(searchVal)
  }

  function fetchGif(searchVal){
    fetch(apiGif + `search?q=${searchVal}&` + apiEnd)
    .then(res => res.json())
    .then(gif => gif.data.forEach(renderGif))
  }

  function renderGif(gif){
    console.log(gif)
    console.log(gifList)
    gifList.innerHTML += `<li><img src="${gif.images.original.url}"></li>`
  }

  onLoad()
})

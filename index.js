// console.log('hello world')

const message = document.querySelector('aside')

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')


    const movie = document.createElement('li')    
    const movieTitle = document.createElement('span')
    const movieList = document.querySelector('ul')
    
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    movieList.appendChild(movie)

    inputField.value = ''
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
            message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}



const ul = document.getElementById('watchlist')

const resetbtn = document.getElementById('reset')

const nextbtn = document.getElementById('next')


document.addEventListener('DOMContentLoaded', () => {
    animeList()
    resetbtn.addEventListener('click', animeList)
    //nextbtn.addEventListener('click', nextList)

})

// async function fetchAnime() {
//     const res = await fetch('https://api.jikan.moe/v4/anime')
//     const data = await res.json()
//     return data
// };
function animeList () {
    //fetchAnime()
        let page = 1
        const newPage = page++
        fetch("https://api.jikan.moe/v4/anime?page=" + newPage )
        .then(res => res.json())
        .then(show => {
            
            const animeArray = show.data.map(function(anime) {
            return anime
            })
            // console.log(animeArray)
            ul.innerHTML = ''
            show.data.forEach(animeArray => {
            ul.innerHTML += `<li>${animeArray.title}</li>`
        })
        ul.addEventListener('click', crossOff)
    
    })

        //         const ul = document.getElementById('watchlist')
        //         const li = document.createElement('li')
        //         li.innerHTML = anime.title
        //         ul.appendChild(li)
        //         li.addEventListener('click', crossOff)
        //     })
        // })
}

// function nextList () {
//     fetch('https://api.jikan.moe/v4/anime?page=1')
//         .then(res => res.json())
//         .then(show => {
//             ul.innerHTML = ''
//             show.data.forEach(anime => {
//             ul.innerHTML += `<li>${anime.title}</li>`
//             ul.addEventListener('click', crossOff) 
//         })
    
//     })
// }

const crossOff = e => {
    e.target.style.textDecoration='line-through'   
    }
    // function resetFont() {
    //     animeTitles = document.querySelectorAll('li')
    //     console.log(animeTitles)
    //      return animeTitles.removeAttribute('style')
    // } 

    
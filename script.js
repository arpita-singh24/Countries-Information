const count=document.querySelector('.country')

function fetchdata() {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            createCard(data)
        })
}

fetchdata()

function createCard(data){
    data.forEach((val) => {
        const div = document.createElement('div')
        div.classList.add('card')

        const img=document.createElement('img')
        img.src=val.flags.png

        const heading=document.createElement('h2')
        heading.innerHTML=val.name.common

        const capital=document.createElement('p')
        capital.innerHTML=`Capital:${val.capital}`

        const continents=document.createElement('p')
        continents.innerHTML=`Continents:${val.continents}`

        const population=document.createElement('p')
        population.innerHTML=`Population:${val.population}`

    

        const time=document.createElement('p')
        time.innerHTML=`Time-Zone: ${val.timezones}`

    
        div.appendChild(img)
        div.appendChild(heading)
        div.appendChild(capital)
        div.appendChild(continents)
        div.appendChild(population)
        div.appendChild(time)
        count.appendChild(div)

    })

}
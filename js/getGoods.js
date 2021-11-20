const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('data', JSON.stringify(data))
            })
    }

    links.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            getData()
        })
    })

    
}

getGoods()
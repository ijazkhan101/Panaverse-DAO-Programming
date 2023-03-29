

const getData = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books");
    console.log(response)
}

getData()
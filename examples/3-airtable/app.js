const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    // const { data } = await axios.get('/api/3-airtable')
    const { data } = await axios.get('/api/3-complete')
    const products = data.map((i) => {
      const { name, url, price, id } = i
      return `<a class="product" href="product.html?id=${id}">
      <img
        src=${url}
        alt=${name}
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </a>`
    })
    result.innerHTML = products.join('')
  } catch (error) {
    result.innerHTML = `<h4>There was an error</h4>`
  }
}

fetchData()

const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-basic-api')
    const products = data
      .map((i) => {
        const {
          id,
          name,
          image: { url },
          price,
        } = i
        return `<article class="product">
      <img
        src=${url}
        alt=${name}
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    console.log(error.response.data)
    result.innerHTML = `<h4>There was an error, please try again later</h4>`
  }
}
fetchData()

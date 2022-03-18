import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head'
import style from './Product.module.css'

const Product = () => {
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true)
        const r = await fetch(url)
        const json = await r.json()
        setProduct(json)        
      } catch(anError) {
        setError('Something is wrong')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if(loading) return <div className='loading'></div>
  if(error) return <p>{error}</p>
  if(product === null) return null
  return (
    <section className={`${style.product} animeLeft`}>
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek Product: ${product.nome}`}
      />
      <div>
        {product.fotos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.titulo} />
        ))}
      </div>
      <div>
        <h1 className={style.productTitle}>{product.nome}</h1>
        <span className={style.price}>$ {product.preco} </span>
        <p className={style.description}>{product.descricao}</p>
      </div>
    </section>
  )
}

export default Product

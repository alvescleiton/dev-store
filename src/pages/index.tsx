import { NextPage } from 'next'
import Head from 'next/head'

import Container from '@/Components/Container'
import ProductList from '@/Components/ProductItem/ProductList'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Dev Store</title>
      </Head>

      <ProductList />
    </Container>
  )
}

export default Home

import { createContext, useState } from 'react'

import { ProductType } from '@/Components/Product'

type CartProducts = {
  id: number
  title: string
  price: number
  priceDiscount?: number
  quantity: number
}

type CreateContextType = {
  products: CartProducts[]
  addProduct: (product: ProductType) => void
}

type CartContextType = {
  children: React.ReactNode
}

export const CartContext = createContext<CreateContextType>({} as CreateContextType)

export const CartProvider = ({ children }: CartContextType) => {
  const [products, setProducts] = useState([])

  const addProduct = (product: ProductType) => {
    const obj = {
      id: product.id,
      title: product.title,
      price: product.price,
      priceDiscount: product.priceDiscount,
      quantity: 1,
    }

    const productExists = products.find(p => p.id === product.id)

    if (productExists) return false

    setProducts([...products, obj])
  }

  return <CartContext.Provider value={{ products, addProduct }}>{children}</CartContext.Provider>
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Produto>) => {
      const selectedProduct = action.payload

      if (state.itens.find((product) => product.id === selectedProduct.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(selectedProduct)
      }
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer

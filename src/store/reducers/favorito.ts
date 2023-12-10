import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoriteState = {
  itens: Produto[]
}

const initialState: FavoriteState = {
  itens: []
}

const favoriteSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoriteItem: (state, action: PayloadAction<Produto>) => {
      const clickedItem = action.payload

      if (state.itens.find((item) => item.id === clickedItem.id)) {
        const favoriteWithoutProduct = state.itens.filter(
          (p) => p.id !== clickedItem.id
        )
        return { ...state.itens, itens: favoriteWithoutProduct }
      } else {
        state.itens.push(clickedItem)
      }
    }
  }
})

export const { favoriteItem } = favoriteSlice.actions
export default favoriteSlice.reducer

import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItems:(state,action)=>{
            // Vanialla(older) Redux => Don't Mutate State, returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //Redux Toolkit uses immer js behind the scene
            // We have to mutate the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCarts: (state)=>{
            console.log(state);
            console.log(current(state));
            // RTK - either mutate the existing state or return a new state
            state.items.length = 0;
            // return { items: []}; this new object [] will be replaced inside originalState = [];
        },
    },
});

export const {addItems, removeItem, clearCarts} = cartSlice.actions;
export default cartSlice.reducer;
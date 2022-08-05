import { CartFuncType } from '../actions/cartAction';
import { CartActionsType } from '../types';

const inState = {
	cartItem: [],
};

function cartReducer(
	state: IProduct[] = inState.cartItem,
	action: CartFuncType
) {
	switch (action.type) {
		case CartActionsType.ADD_TO_CART:
			const newProduct = action.payload;
			const exist = state.find((item) => item.id === action.payload.id);

			if (exist) {
				state.map((item) =>
					item.id === newProduct.id
						? { ...item, qty: (item.qty! += 1) }
						: item
				);

				return [...state];
			} else {
				newProduct.qty = 1;
				return [...state, newProduct];
			}

		case CartActionsType.REMOVE_FROM_CART:
			return state.filter((item) => item.id !== action.payload);

		case CartActionsType.DECREASE_QTY:
			debugger;
			const cartExist = state.find(
				(item) => item.id === action.payload.id
			);
			if (cartExist?.qty === 1) {
				return state.filter((item) => item.id !== cartExist.id);
			} else {
				state.map((item) =>
					item.id === action.payload.id
						? { ...item, qty: (item.qty! -= 1) }
						: item
				);
				return [...state];
			}
		case CartActionsType.CLEAR_CART:
			return [];

		default:
			return state;
	}
}

export default cartReducer;

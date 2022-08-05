import { CartActionsType } from '../types';

export const add_to_cart = (payload: IProduct) => {
	return {
		type: CartActionsType.ADD_TO_CART,
		payload: payload,
	} as const;
};

export const remove_from_cart = (id: number) => {
	return {
		type: CartActionsType.REMOVE_FROM_CART,
		payload: id,
	} as const;
};

export const clear_cart = () => {
	return {
		type: CartActionsType.CLEAR_CART,
	} as const;
};

export const decrease_qty = (payload: IProduct) => {
	return {
		type: CartActionsType.DECREASE_QTY,
		payload: payload,
	} as const;
};

type x = ReturnType<typeof add_to_cart>;
type y = ReturnType<typeof remove_from_cart>;
type z = ReturnType<typeof clear_cart>;

type v = ReturnType<typeof decrease_qty>;

export type CartFuncType = x | y | z | v;

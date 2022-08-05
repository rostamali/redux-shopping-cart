interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
	qty?: number | null;
}

interface IRootState {
	cart: IProduct[];
}

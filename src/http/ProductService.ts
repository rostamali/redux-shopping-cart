import httpReq from './http.service';

class ProductService {
	async getAllData(): Promise<IProduct[]> {
		const data = await httpReq.getAll('/products');
		return data;
	}
}

export default new ProductService();

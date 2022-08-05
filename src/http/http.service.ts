import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'https://fakestoreapi.com',
	timeout: 1000,
};
const instance: AxiosInstance = axios.create(axiosConfig);

class axiosReq {
	getAll(url: string): Promise<IProduct[]> {
		return instance.get(url).then((res) => res.data);
	}
}

const httpReq = new axiosReq();
export default httpReq;

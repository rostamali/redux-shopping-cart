import { useEffect, useState } from 'react';

type StatusType = 'idle' | 'pending' | 'seccess' | 'error';

const useApi = <T>(asyncService: () => Promise<T>) => {
	// state
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [status, setStatus] = useState<StatusType>('idle');

	useEffect(() => {
		setError(null);
		setStatus('pending');
		asyncService()
			.then((result) => {
				setData(result);
				setStatus('seccess');
			})
			.catch((err) => {
				setError(err);
			});
	}, []);

	return {
		data,
		isLoading: status === 'pending',
		isSuccess: status === 'seccess',
		error,
	};
};

export default useApi;

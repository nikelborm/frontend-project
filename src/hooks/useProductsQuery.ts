import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../services/fetch';

const useProductsQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchProduct,
        queryKey: ['products'],
        staleTime: 1000 * 5,
    });
};

export { useProductsQuery };
import { useQuery } from '@tanstack/react-query';

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ['all_product'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/product/all`);
            return await response.json();
        }
    });
}

export const useSpecificProductQuery = (productId) => {
    return useQuery({
        queryKey: ['specific_product', productId],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/product/${productId}`);
            return await response.json();
        }
    });
}

export const useCategoriesQuery = () => {
    return useQuery({
        queryKey: ['all_category'],
        /** @returns {Promise<{ asd: 'asd' }>} */
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/category/all`);
            return await response.json();
        }
    });
}
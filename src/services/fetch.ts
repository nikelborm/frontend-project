import { Product } from '../types/product'
const BASE = 'http://localhost:3001/api'

export async function fetchProduct(): Promise<Product[]> {
    const res = await fetch(`${BASE}/product`)
    if (!res.ok) throw new Error('Ошибка загрузки категорий')
    return res.json()
}
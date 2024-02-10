import { useQuery } from 'react-query';
import makeApiCall from '.'

export const useGetProducts = () => {
  const fetcher = async () => {
    const res = await makeApiCall('/product', 'get')
    return res?.data
  }
  const { data, isLoading, error } = useQuery('products', fetcher)
  return { data, isLoading, error }
}

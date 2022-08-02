import { QueryFunctionContext } from '@tanstack/query-core/src/types';
import axios from 'axios';
import { apiUrl } from '../config';

const instance = axios.create({
  baseURL: apiUrl,
  timeout: 1e4,
});

export async function getHomeData({ signal }: QueryFunctionContext) {
  const res = await instance.get('/data.json', { signal });

  // in real application here should be data validation
  return res.data;
}

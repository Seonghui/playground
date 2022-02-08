import instance from './index'
import { Memo, MemoResponse, TotalMemoResponse } from '../types/memo'

const ENDPOINT = 'memo'

export const memoApi = {
  all: async (
    pages: number = 1,
    limit: number = 5,
  ): Promise<TotalMemoResponse> => {
    return await instance
      .get(`/${ENDPOINT}?_page=${pages}&_limit=${limit}&_order=desc&_sort=id`)
      .then((response) => {
        return {
          total: Number(response.headers['x-total-count']),
          memos: response.data,
        }
      })
  },
  memo: async (id: string): Promise<MemoResponse> => {
    return await instance
      .get(`/${ENDPOINT}/${id}`)
      .then((response) => response.data)
  },
  create: async (params: Memo): Promise<MemoResponse> => {
    return await instance
      .post(`/${ENDPOINT}`, params)
      .then((response) => response.data)
  },
  delete: async (id: string): Promise<MemoResponse> => {
    return await instance
      .delete(`/${ENDPOINT}/${id}`)
      .then((response) => response.data)
  },
  update: async (params: MemoResponse): Promise<MemoResponse> => {
    return await instance
      .put(`/${ENDPOINT}/${params.id.toString()}`, params)
      .then((response) => response.data)
  },
}

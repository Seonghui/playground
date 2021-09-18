import instance from './index'
import { Memo, MemoInput } from '../types/memo'

const ENDPOINT = 'memo'

export const memoApi = {
  all: async (): Promise<Memo[]> => {
    return await instance.get(`/${ENDPOINT}`).then((response) => response.data)
  },
  memo: async (id: string): Promise<Memo> => {
    return await instance
      .get(`/${ENDPOINT}/${id}`)
      .then((response) => response.data)
  },
  create: async (params: MemoInput): Promise<Memo> => {
    return await instance
      .post(`/${ENDPOINT}`, params)
      .then((response) => response.data)
  },
  delete: async (id: string): Promise<Memo> => {
    return await instance
      .delete(`/${ENDPOINT}/${id}`)
      .then((response) => response.data)
  },
  update: async (params: Memo): Promise<Memo> => {
    return await instance
      .put(`/${ENDPOINT}/${params.id}`, params)
      .then((response) => response.data)
  },
}

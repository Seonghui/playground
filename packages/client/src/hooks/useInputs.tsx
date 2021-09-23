import { ChangeEvent, useCallback, useState } from 'react'

type UseInputs<T> = [
  form: T,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
]

function useInputs<T>(initialForm: T): UseInputs<T> {
  const [form, setForm] = useState(initialForm)
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((form) => ({ ...form, [name]: value }))
  }, [])
  const reset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, reset]
}

export default useInputs

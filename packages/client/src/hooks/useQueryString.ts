import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

function useQueryString() {
  const location = useLocation()
  return queryString.parse(location.search)
}

export default useQueryString

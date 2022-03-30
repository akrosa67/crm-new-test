import axios from 'axios'

const api = axios.create({
  baseURL: 'http://algrix.in:8088/api/v1',
  timeout: 40000,
  headers: { Accept: 'application/json' },
})

export function setAuthToken(authToken) {
  api.defaults.headers.common['Authorization'] = authToken
}

export default api

export function uploadFile(uploadUrl, data, contentType) {
  return axios.put(uploadUrl, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
    },
  }).then((response) => response.data)
}

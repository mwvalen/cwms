import axios from 'axios'
import base64ArrayBuffer from './base64ArrayBuffer'

export const getBase64 = url => {
  return axios.get(url, {
    responseType: 'arraybuffer'
  })
  .then(response => base64ArrayBuffer(response.data))
}

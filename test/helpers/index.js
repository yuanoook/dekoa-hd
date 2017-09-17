import supertest from 'supertest'
import App from 'test/fixtures'

const app = new App()
// ----------------------------------------------------------------------
//  HTTP helpers
// ----------------------------------------------------------------------
export const request = supertest.agent(app.listen())
const Q = (method, path) => request[method](`${app.prefix}${path}`)

export const get = (path) => Q('get', path)
export const post = (path) => Q('post', path)
export const patch = (path) => Q('patch', path)
export const put = (path) => Q('put', path)
export const del = (path) => Q('delete', path)
export const trace = (path) => Q('trace', path)
export const head = (path) => Q('head', path)
export const options = (path) => Q('options', path)
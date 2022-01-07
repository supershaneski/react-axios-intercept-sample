import api, { resetRetry } from '../api/'

export default async function login({ id, passwd }) {

    resetRetry()

    return api.post('/login', { id: id, pwd: passwd })

}
import * as request from '../../utils/ApiRequest'

export const getInfomations = async (endPoint: string, params = {}) => {
    try {    
        const res = await request.get(endPoint,params)
        return res
    } catch (err) { console.log(err) }
}
export const getInfomationById = async (endPoint: string) => {
    try {    
        const res = await request.get(endPoint)
        return res as any
    } catch (err) { console.log(err) }
}
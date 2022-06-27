import { IResponse } from '../types/index'

export function success(data: any, message?: string): IResponse {
    return {
        code: 0,
        data,
        message
    }
}

export function error(message?: string): IResponse {
    return {
        code: 1,
        message
    }
}
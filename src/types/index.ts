// 集合类型接口
export interface IMenuItem {
    id?: string,
    title?: string,
    isLocked?: boolean,
    todoItemNum?: number
}

// 待办事项类型接口
export interface ITodoItem {
    id?: string,
    text?: string,
    isDone?: boolean,
    belongTo?: string
}

// 返回数据类型接口
export interface IResponse<T = any> {
    code: number,
    data?: T,
    message: string | undefined
}

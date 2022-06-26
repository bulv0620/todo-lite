import { request } from "./request";

// 获取集合列表
export const reqGetMenuList = async () => await request.get('/menu/list');

// 添加集合
export const reqAddMenuItem = async (params) => await request.post('/menu/add', params);

// 删除集合
export const reqRemoveMenuItem = async (params) => await request.post('/menu/remove', params);

// 修改集合的名字
export const reqEditMenuItem = async (params) => await request.post('/menu/edit', params);

// 获取集合的待办事项列表
export const reqGetTodoList = async (params) => await request.post('/todos/list', params);

// 添加待办事项
export const reqAddTodoItem = async (params) => await request.post('/todos/add', params);

// 修改待办事项内容
export const reqEditTodoItem = async (params) => await request.post('/todos/edit', params);

// 删除待办事项
export const reqRemoveTodoItem = async (params) => await request.post('/todos/remove', params);

// 修改完成状态
export const reqDoneTodoItem = async (params) => await request.post('/todos/done', params);
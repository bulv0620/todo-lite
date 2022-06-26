import Mock from 'mockjs';
import { success, error, IResponse } from './response';
import { uuid } from './uuid';

interface IMenuItem {
    id?: string,
    title?: string,
    isLocked?: boolean,
}

interface ITodoItem {
    id?: string,
    text?: string,
    isDone?: boolean,
    belongTo: string
}

interface IOptions {
    url: string,
    type: string,
    body?: string
}

const menuList: IMenuItem[] = [
    {
        id: '1',
        title: '新建的分类',
        isLocked: false,
    }
]

let todoList: ITodoItem[] = [
    {
        id: '1001',
        text: '新建的待办事项',
        isDone: false,
        belongTo: '1'
    },
    {
        id: '1002',
        text: '新建的待办事项',
        isDone: false,
        belongTo: '1'
    }
]

// 获取集合列表
Mock.mock('/api/menu/list', 'get', success(menuList, '获取集合列表成功!'));

// 添加集合
function addMenuItem(options: IOptions): IResponse {
    const { title }: IMenuItem = JSON.parse(<string>options.body);
    const id: string = uuid()
    menuList.push({
        id,
        title,
        isLocked: false
    });
    return success('ok', '添加新集合成功!');
}
Mock.mock('/api/menu/add', 'post', addMenuItem);

// 删除集合以及对应的待办
function removeMenuItem(options: IOptions): IResponse {
    const { id }: IMenuItem = JSON.parse(<string>options.body);
    menuList.splice(menuList.findIndex((item) => item.id === id), 1);
    todoList = todoList.filter(item => item.belongTo === id);
    return success('ok', '删除集合成功!');
}
Mock.mock('/api/menu/remove', 'post', removeMenuItem);

// 修改集合的名字
function editMenuItem(options: IOptions): IResponse {
    const { id, title }: IMenuItem = JSON.parse(<string>options.body);
    const menuItem: IMenuItem | undefined = menuList.find((item) => item.id === id);
    if (!menuItem) {
        return error('该集合不存在');
    }
    menuItem.title = title;
    return success('ok', '修改集合名成功!');
}
Mock.mock('/api/menu/edit', 'post', editMenuItem);


// 获取集合的待办事项列表
function getTodoList(options: IOptions): IResponse {
    const { id }: IMenuItem = JSON.parse(<string>options.body);
    return success(todoList.filter(item => item.belongTo === id), '获取待办事项列表成功');
}
Mock.mock('/api/todos/list', 'post', getTodoList);

// 添加待办事项
function addTodoItem(options: IOptions): IResponse {
    const { text, belongTo }: ITodoItem = JSON.parse(<string>options.body);
    const id: string = uuid();
    todoList.push({
        id,
        text,
        belongTo,
        isDone: false
    })
    return success('ok', '添加待办事项成功!')
}
Mock.mock('/api/todos/add', 'post', addTodoItem);

// 修改待办事项内容
function editTodoItem(options: IOptions): IResponse {
    const { text, id }: ITodoItem = JSON.parse(<string>options.body);
    const todoItem: ITodoItem | undefined = todoList.find(item => item.id === id);
    if (!todoItem) {
        return error('待办事项不存在!');
    }
    todoItem.text = text;
    return success('ok', '修改待办事项成功!');
}
Mock.mock('/api/todos/edit', 'post', editTodoItem);

// 删除待办事项
function removeTodoItem(options: IOptions): IResponse {
    const { id }: ITodoItem = JSON.parse(<string>options.body);
    todoList.splice(todoList.findIndex(item => item.id === id), 1);
    return success('ok', '删除待办事项成功!');
}
Mock.mock('/api/todos/remove', 'post', removeTodoItem);

// 修改完成状态
function doneTodoItem(options: IOptions): IResponse {
    const { id }: ITodoItem = JSON.parse(<string>options.body);
    const todoItem: ITodoItem | undefined = todoList.find(item => item.id === id);
    if(!todoItem){
        return error('待办事项不存在!');
    }
    todoItem.isDone = !todoItem.isDone;
    return success('ok', '修改完成状态成功!');
}
Mock.mock('/api/todos/done', 'post', doneTodoItem);

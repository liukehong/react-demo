import {createAction} from 'redux-actions';
export const getGoods = createAction('GET_GOODS'); 
/* 
action是一个object类型，对于action的结构有Flux有相关的标准化建议FSA
一个action必须要包含type属性，同时它还有三个可选属性error、payload和meta

type属性相当于是action的标识，通过它可以区分不同的action，其类型只能是字符串常量或Symbol。
payload属性是可选的，可以使任何类型。payload可以用来装载数据；在error为true的时候，payload一般是用来装载错误信息。
error属性是可选的，一般当出现错误时其值为true；如果是其他值，不被理解为出现错误。
meta属性可以使任何类型，它一般会包括一些不适合在payload中放置的数据。
*/
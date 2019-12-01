export const withoutIndex=(Array,index)=>
Array.slice(0,index).concat(Array.slice(index+1));
//получает массив,индекс --> возвращает массив минуя элемент с индексом
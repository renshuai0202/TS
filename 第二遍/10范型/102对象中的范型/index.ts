type TRes<TData> = {
  code: number;
  statue: string;
  data: TData;
}

type TPaginationData<TData> = {
  total: number;
  page: number;
  size: number;
  data: TData;
}

type TData<T = string> = {
  name: string;
  age: number;
  other: T;
}

const res: TRes<TPaginationData<TData>> = {
  code: 200,
  statue: 'success',
  data: {
    total: 10,
    page: 1,
    size: 20,
    data: {
      name: 'zhangsan',
      age: 18,
      other: '爱打羽毛球'
    }
  }
}

console.log(res);

/**
 * 对象中的范型
 * 常见的是范型的嵌套，比如分页查询返回的数据类型
 */
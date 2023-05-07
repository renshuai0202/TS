abstract class BaseDAL<Entity> {

  // 连接数据库
  abstract connect(): void;

  // 增加数据
  abstract create(data: Entity): void;

  // 根据 ID 删除数据
  abstract deleteById(id: number): void;

  // 根据 ID 更新数据
  abstract updateById(id: number, data: Entity): void;

  // 根据 ID 查询数据
  abstract findById(id: number): Entity;

  // 查询所有数据
  abstract findAll(): Entity[];

}

// 这个是为了不报错，临时写的
type User = any;

class UserDAL extends BaseDAL<User> {

  connect() {
    // 连接用户数据库
  }

  create(user: User) {
    // 在用户数据库中创建一个新用户
  }

  deleteById(id: number) {
    // 从用户数据库中删除指定 ID 的用户
  }

  updateById(id: number, user: User) {
    // 更新用户数据库中指定 ID 的用户信息
  }

  findById(id: number) {
    // 在用户数据库中查找指定 ID 的用户
    const user = '';
    return user;
  }

  findAll(): User[] {
    // 在用户数据库中查找所有用户
    const users = [];
    return users;
  }

}

const userDAL = new UserDAL();
userDAL.connect();
userDAL.create({ name: '张三', age: 30 });
const user = userDAL.findById(1);
userDAL.updateById(1, { name: '李四', age: 25 });
userDAL.deleteById(1);
const allUsers = userDAL.findAll();

/**
 * 
 * 在上面的代码中，我们定义了一个名为 BaseDAL 的抽象类，它包含了一些常见的数据库操作方法。
 * 然后我们定义了一个 UserDAL 类，它继承了 BaseDAL 抽象类，并实现了其中的抽象方法。
 * 通过这种方式，我们可以为每个不同的实体定义一个完整的数据访问层.
 * 而且这些 DAL 类之间的操作都非常类似，这大大减少了我们进行重复操作的工作量，提高了代码的可维护性。 
 * 
 */

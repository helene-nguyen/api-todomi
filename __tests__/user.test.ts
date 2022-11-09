//~ Import modules
import User from '../src/app/hexagon/use-cases/user/addUser';

//& Add a user
describe('Add a user', () => {
  it('Should return hello', () => {
    expect(User.getHello()).toBe('Hello');
  });
});

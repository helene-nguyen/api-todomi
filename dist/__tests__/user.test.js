import AddUser from '../src/app/hexagon/use-cases/user/addUser';
import { UserRepository } from '../src/app/adapters/secondary.driven/repositories/userRepository';
describe('Add a user', () => {
    let addUser;
    let userRepository;
    const userData = {
        username: 'username',
        email: 'email@email.com',
        password: 'password',
        role: 'admin',
    };
    beforeEach(() => {
        userRepository = new UserRepository();
        addUser = new AddUser(userRepository);
    });
    it('Should return successfully user created', async () => {
        expect(addUser.handle({
            ...userData,
        })).toBe(`User successfully created !`);
    });
});
//# sourceMappingURL=user.test.js.map
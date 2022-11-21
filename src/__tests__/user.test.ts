//~ Import modules
// import AddUser from '../src/app/hexagon/use-cases/user/addUser';
// import { UserRepository } from '../src/app/adapters/secondary.driven/repositories/userRepository';

// // open test gate
// // it('Should return hello', () => {
// //   expect(AddUser.getHello()).toBe('Hello');
// // });

// //& Add a user
// describe('Add a user', () => {
//   let addUser: AddUser;
//   let userRepository: UserRepository;
//   const userData = {
//     username: 'username',
//     email: 'email@email.com',
//     password: 'password',
//     role: 'admin',
//   };

//   //* beforeEach is only before the test
//   //my error : I've put it in the 'it' statement
//   beforeEach(() => {
//     userRepository = new UserRepository();
//     addUser = new AddUser(userRepository);
//   });

//   //add user
//   it('Should return successfully user created', async () => {
//     // assertion
//     expect(
//       addUser.handle({
//         ...userData,
//       })
//     ).toBe(`User successfully created !`);
//   });
// });

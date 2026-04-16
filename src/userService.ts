// src/services/userService.ts

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    username: string;
};

let users: User[] = [
    { id: 1, name: "Ali", email: "ali@test.com", age: 25  ,username: "ali@gamil.com"},
    { id: 2, name: "Sara", email: "sara@test.com", age: 30 ,username: "sara@gamil.com"}
];

export const getAllUsersService = () => users;

export const getUserByIdService = (id: number) => users.find(u => u.id === id);

export const addUserService = (userData: User) => {
    const newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
};

export const updateUserService = (id: number, updateData: Partial<User>) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    users[index] = { ...users[index], ...updateData };
    return users[index];
};

export const deleteUserService = (id: number) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    
    users = users.filter(u => u.id !== id);
    return true;
};
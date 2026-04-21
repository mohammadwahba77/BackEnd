// src/services/userService.ts

import { compareHash, generateToken } from "./helpers/appServices";

export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    username: string;
    password?: string;  
};

let users: User[] = [
    { id: 1, name: "Ali", email: "ali@test.com", age: 25  ,username: "ali@gamil.com", password: "hashed_password_1" },
    { id: 2, name: "Sara", email: "sara@test.com", age: 30 ,username: "sara@gamil.com", password: "hashed_password_2" }
];

export const getAllUsersService = async () => users;

export const getUserByIdService = async(id: number) => users.find(u => u.id === id);

export const addUserService = async (userData: User ) => {
        
    const newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
};

export const updateUserService = async (id: number, updateData: Partial<User>) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    users[index] = { ...users[index], ...updateData };
    return users[index];
};

export const deleteUserService = async   (id: number) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    
    users = users.filter(u => u.id !== id);
    return true;
};

export const loginService = async (username: string, pass: string) => {
    const user = users.find(u => u.username === username);
    if (user && await compareHash(pass, user.password!)) {
        return generateToken({ id: user.id, username: user.username});;
    }
    return null;
};


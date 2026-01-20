import { User } from "../services/userService";

export const testUserData = {
    create: {
        name: 'Alice',
        username: 'alice123',
        email: 'alice@example.com'
    } as Omit<User, 'id'>,

    update: {
        id: 1,
        name: 'Alice Updated',
        username: 'alice_updated',
        email: 'alice_updated@example.com'
    } as User
};

export const testIds = {
    userId: 1
};


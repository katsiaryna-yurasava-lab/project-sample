import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export interface User {
    id?: number;
    name: string;
    username: string;
    email: string;
}

export class UserService {
    /**
     * Create a new user
     * @param userData - User data to create
     * @returns Promise with created user data
     */
    async create(userData: Omit<User, 'id'>): Promise<User> {
        const response = await axios.post(BASE_URL, userData);
        return response.data;
    }

    /**
     * Read/get a user by ID
     * @param userId - ID of the user to retrieve
     * @returns Promise with user data
     */
    async read(userId: number): Promise<User> {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response.data;
    }

    /**
     * Update an existing user
     * @param userId - ID of the user to update
     * @param userData - Updated user data
     * @returns Promise with updated user data
     */
    async update(userId: number, userData: User): Promise<User> {
        const response = await axios.put(`${BASE_URL}/${userId}`, userData);
        return response.data;
    }

    /**
     * Delete a user by ID
     * @param userId - ID of the user to delete
     * @returns Promise with delete response
     */
    async delete(userId: number): Promise<void> {
        await axios.delete(`${BASE_URL}/${userId}`);
    }
}


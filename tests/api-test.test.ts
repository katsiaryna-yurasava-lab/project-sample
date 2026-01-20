import {test, expect} from "playwright/test";
import {UserService} from "../services/userService";
import {testUserData, testIds} from "../test-data/userTestData";

test('CRUD operations', async () => {
    const userService = new UserService();

    // CREATE
    const createdUser = await userService.create(testUserData.create);

    expect(createdUser.id).toBeDefined();
    const userId = createdUser.id!;

    // READ
    const user = await userService.read(testIds.userId);
    expect(user.id).toBe(testIds.userId);

    // UPDATE
    const updatedUser = await userService.update(testIds.userId, testUserData.update);

    expect(updatedUser.name).toBe(testUserData.update.name);

    // DELETE
    await userService.delete(testIds.userId);
    // Note: jsonplaceholder.typicode.com doesn't actually delete, so we just verify the call succeeds
})
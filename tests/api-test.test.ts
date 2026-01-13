import {test, expect} from "playwright/test";
import axios from "axios";

test('CRUD operations', async () => {

    // CREATE
    const createResp = await axios.post('https://jsonplaceholder.typicode.com/users',
        {
            name: 'Alice',
            username: 'alice123',
            email: 'alice@example.com'
        });

    expect(createResp.status).toBe(201);
    const userId = createResp.data.id;


    // READ
    const getResp = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(getResp.status).toBe(200);
    expect(getResp.data.id).toBe(1);

    // UPDATE
    const updateResp = await axios.put('https://jsonplaceholder.typicode.com/users/1',
        {
            id: 1,
            name: 'Alice Updated',
            username: 'alice_updated',
            email: 'alice_updated@example.com'
        })

    expect(updateResp.status).toBe(200);
    expect(updateResp.data.name).toBe('Alice Updated');

    // DELETE
    const deleteResp = await axios.delete('https://jsonplaceholder.typicode.com/users/1');

    expect(deleteResp.status).toBe(200);



})
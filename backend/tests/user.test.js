const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/userModel");

const userId = new mongoose.Types.ObjectId();
const userData = {
    '_id':userId,
    'name':'Swapnil',
    'email':'swapnil@gmail.com'
}

test('should register a new user', async () => {
    await User.deleteMany();
    await request(app).post('/api/v1/register').send(userData).expect(201);
})

test('should get all details of users', async () => {
    await request(app).get('/api/v1/users').send().expect(200);
})


test('should update a user', async () => {
    const user = await User.findOne({email:userData.email});
    const id = user._id;
    await request(app).put(`/api/v1/user/update/${id}`).send({
        "name":"Swapnil Manke"
    }).expect(200);
})


test('should delete a user', async () => {
    const user = await User.findOne({email:userData.email});
    const id = user._id;
    await request(app).delete(`/api/v1/user/delete/${id}`).expect(200);
})
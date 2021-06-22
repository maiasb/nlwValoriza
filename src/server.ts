import express, { json } from 'express';

const app = express();

app.use(express.json());

app.get("/test", (request, response) => {
    return response.json({ Message: "Test" });
});

app.post("/test-post", (request, response) => {
    const { name, email } = request.body;

    const user = { name, email };
    return response.status(200).json(user);
});

app.listen(3000, () => console.log("Server is running!"));
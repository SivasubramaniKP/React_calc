import express from "express"
import cors from "cors"
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post("/calculate", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2;
    const operation = req.body.operation;
    const expression = num1 + operation + num2
    res.send(eval(expression).toString())
});

app.post("/calcDirectly", (req, res) => {
    const givenExpression = req.body.exp;
    console.log("called here")
    res.send(eval(givenExpression).toString())  
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
import express from "express";

const app = express();
app.use(express.json());

const tasks = [];

app.get("/", (req, res) => {
  res.json ( {
    message: "Hola",
  });  
})

// get: generalmente se usa para pedirle datos al servidor
app.get("/tasks" , (req,res) => {
  res.json({
    tasks: tasks,
  })
});

//Post generalmente se usa para enviarle datos al servidor:
app.post("/task", (req,res) => {
  const task = req.body;
  tasks.push(task);
  //Le voy a responder al cliente;
  res.json({
    message: "ok",
  })
} );

app.listen(4000);

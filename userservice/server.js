const express= require('express')
const app=express();
const PORT = 5001

app.use(express.json());

let users =[{
  "id":1,
  "name": "Kavish",
  "email": "kv@gmail.com"
}
,
{
  "id": 2,
  "name" : "Suraj",
  "email": "s@hmail.com"
},
{
  "id": 3,
  "name": "Sneha",
  "email": "sn@gmail.com"
}
]

//get all users
app.get("/users", (req, res) => {

    res.json(users);

});


//get user by id
app.get("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {

        return res.status(404).json({
            message: "User not found"
        });

    }

    res.json(user);

});



app.listen(PORT,()=>
{
  console.log(`user service running on http://localhost:${PORT}`);
});


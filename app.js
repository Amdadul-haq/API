const express=require('express');
const app=express();
const PORT =process.env.PORT || 5000;
const product_routes=require("./routes/products");


app.get("/", (req,res)=>{
res.send("Hi this is homepage");
})

app.use("/api/products", product_routes);


const start = async ()=>{
    try {
    app.listen(PORT,()=>{
        console.log(`Connected with port ${PORT} successfully!`);
    })
    } catch (error) {
        console.log(error);
    }
}
start();
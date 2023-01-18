let product=require('./routes/product');
let express=require('express');
let app=express();
let port=8080;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/product',product);
app.listen(port,()=>{
    console.log(`server started`);
});
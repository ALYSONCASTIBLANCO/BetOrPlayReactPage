const express=require('express');
const app=express();
const path=require('path');
const morgan=require('morgan');
const routes=require("./routes/routes");
app.use(morgan("combined"));
app.use(routes);
app.use(express.static(path.join(__dirname, "public")));
app.set('port', process.env.port||3000);
app.listen(app.get('port'), ()=>{
    console.log('Listening on port '+app.get('port'));
});
app.use(morgan('dev'));
app.use(express.json());
import bodyParser from "body-parser";
import express from "express"; 
import cors from "cors";
import cookieParser from "cookie-parser"; 



const app = express(); 

app.use(cors({
	origin : process.env.CORS_ORIGIN, 
	credentials : true
}));



app.use(cookieParser());


//covert the encoded data comming from the client to json
app.use(express.json({extended: true , limit: "16kb"})); 

// limit the size of the request body to 16kb
app.use(express.json({limit : "16kb"}));   

//files and folder which used by our app like images 
app.use(express.static("public"));




export {app}
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://deveshsingh6986:KjKLdY2ATMyeGIH7@evalcluster.xrct5ps.mongodb.net/?retryWrites=true&w=majority&appName=evalCluster')
.then(()=>console.log("mongo db connected!"))
.catch(()=>console.log("error in connecting"))

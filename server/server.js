const path=require('path')
const express=require('express')
const app=express();
// const publicPath=path.join(__dirname,'..','public')

// app.use(express.static(publicPath))

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(publicPath,'index.html'))
// })

app.use(express.static(path.join(__dirname,'..','build')));

// Handle all routes with index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
});

app.listen(3000,()=>{
    console.log('server is running')
})
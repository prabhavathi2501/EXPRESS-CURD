          const express = require('express')
             //commonJS Import older version
            // import express from 'express'//ES Module Import add "type": "module" in package.json
            const dotenv = require('dotenv')
            dotenv.config()
            const PORT =process.env.PORT
            
            const AppRoutes = require('./src/routes')
        
            const app = express()
            app.use(express.json())
            
            app.use('/',AppRoutes)
            



app.listen(PORT,()=>console.log(`Server listening to port ${PORT}`))




// import express from "express"
// const app = express()
// app.use(express.json())
// const coupens =[ {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-12",
//     endDate:"2023-10-28",
//     offerValue:100,
//     discount:10,
//     status:ture
// },
// {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-14",
//     endDate:"2023-10-14",
//     offerValue:200,
//     discount:20,
//     status:ture
// }
// ]

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to Express </h1>')
// })
// app.post('/',(req,res)=>{
//     let data = req.body
//     let filterData = coupons.filter((e)=>e.code===data.code)
//     if(filterData.length===0)
//     {
//         counpons.push(data)
//         res.status(201).send({
//             message:"coupon create successfully"

//         })
//     }
//     else 
//     {
//         res.status(400),send({
//             message:"coupon code Already Exists"
//         })
//     }
// })

// app.listen(8001,()=>console.log("Server listening to port 8000"))





// import express from "express"
// const app = express()
// app.use(express.json())
// const coupens =[ {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-12",
//     endDate:"2023-10-28",
//     offerValue:100,
//     discount:10,
//     status:ture
// },
// {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-14",
//     endDate:"2023-10-14",
//     offerValue:200,
//     discount:20,
//     status:ture
// }
// ]

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to Express </h1>')
// })
// app.post('/',(req,res)=>{
//     let data = req.body
//     let filterData = coupons.filter((e)=>e.code===data.code)
//     if(filterData.length===0)
//     {
//         counpons.push(data)
//         res.status(201).send({
//             message:"coupon create successfully"

//         })
//     }
//     else 
//     {
//         res.status(400).send({
//             message:"coupon code Already Exists"
//         })
//     }
// })

// app.put('/coupons/:id',(req,res)=>{
//     const id= Number(req.params.id)
//     if(id!==NaN && id<coupones.length)
//     {
//         counpons.splice(id,1,req.body)
//         res.status(201).send({
//             message:"coupones Exited Successfully"
//         })
//     }
//     else{
//         res.status(400).send({
//             message:"Invalid Id"
//         })
//     }
// })




// app.listen(8001,()=>console.log("Server listening to port 8000"))
// import express from "express"
// const app = express()
// app.use(express.json())
// const coupens =[ {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-12",
//     endDate:"2023-10-28",
//     offerValue:100,
//     discount:10,
//     status:ture
// },
// {
//     name:"October offer",
//     code:"XBQ-FGY",
//     startDate:"2023-10-14",
//     endDate:"2023-10-14",
//     offerValue:200,
//     discount:20,
//     status:ture
// }
// ]

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to Express </h1>')
// })
// app.post('/',(req,res)=>{
//     let data = req.body
//     let filterData = coupons.filter((e)=>e.code===data.code)
//     if(filterData.length===0)
//     {
//         counpons.push(data)
//         res.status(201).send({
//             message:"coupon create successfully"

//         })
//     }
//     else 
//     {
//         res.status(400).send({
//             message:"coupon code Already Exists"
//         })
//     }
// })

// app.put('/coupons/:id',(req,res)=>{
//     const id= Number(req.params.id)
//     if(id!==NaN && id<coupones.length)
//     {
//         counpons.splice(id,1,req.body)
//         res.status(201).send({
//             message:"coupones Exited Successfully"
//         })
//     }
//     else{
//         res.status(400).send({
//             message:"Invalid Id"
//         })
//     }
// })
// app.delete('/coupons/:id',(req,res)=>{
//     const id= Number(req.params.id)
//     if(id!==NaN && id<coupones.length)
//     {
//         counpons.splice(id,1)
//         res.status(201).send({
//             message:"coupones Deleted Successfully"
//         })
//     }
//     else{
//         res.status(400).send({
//             message:"Invalid Id"
//         })
//     }
// })



// app.listen(8001,()=>console.log("Server listening to port 8000"))
// const express = require('express');

// const path = require('path');
// const app = express();
// const port = 4000;

// // middleware for sending data of another cases 
// // app.use(express.json());

// // app.listen(port, () => {
// //   console.log(`App listening on port ${port}`)
// // });

// // app.get("/about", (request, response) =>{
// //   res.send('The about page')
// // });

// const http = require('http')
// const server = http.createServer((req, res) => {
//   console.log(req.url)
//   res.end('Co Dung dep trai')
//   if (req.url === '/about') 
//     res.end ('the about coz')
//   else {
//     res.writeHead(404)
//     res.end('page not found')
//     }
// });

// server.listen(3000)

// const port = 3000
// const express = require('express')
// const app = express()

// app.listen(port, () =>{
//   console.log(`App listening on port ${port}`)
// })

// app.get("/about", (req, res) => {
//   res.send('the about')
// })

// app.get("/hello", (req, res) =>{                            
//   res.send('the hello')
// })

// app.get("/", (req, res) =>{
//   res.send('the home')
// })

// app.get("*", (req, res) =>{
//   res.header(404)
//   res.send('not found')
// })


const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000, () => {
  console.log("App listening on port 3000")
})



const mongoose = require('mongoose')
const BlogPost = require('./app/models/BlogPost');
const { application } = require('express');
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true });

BlogPost.create({
    title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
    body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
}, 
(error, blogpost) => {
    console.log(error, blogpost)
})

app.get('/posts/new', (req, res) =>{
    res.render('create')
})

const Blog = new BlogPost ({
    title: 'Day la Co Huy Dung',
    body: 'Coz dep trai'
})

Blog.save(Blog)
    .then(() =>{
        console.log("luu thanh cong");
    })
    .catch((err) =>{
        console.log(err);
    })

BlogPost.find()
    .then(() =>{
      title: 'Day la NodeJs'
    })
    .catch((err) =>{
      console.log(err)
    })

var id = "648a9ae56eb10bd9dcd6ed33";
BlogPost.findByIdAndUpdate(id, {title: 'updated'})
    .then((result) =>{
      console.log("ket qua " + result);
    })
    .catch((err) =>{
      console.log(err)
    })

BlogPost.findByIdAndDelete(id, {
  title: 'updated'})
    .then((result) =>{
      console.log("xoa thanh cong " + result)
    })
    .catch(err => console.log(err))


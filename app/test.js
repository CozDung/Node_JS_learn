const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost');
const { application } = require('express');
mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true });

// BlogPost.create({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
//     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
// }, 
// (error, blogpost) => {
//     console.log(error, blogpost)
// })

app.get('/posts/new', (req, res) =>{
    res.render('create')
})

const Blog = new BlogPost ({
    title: 'Day la Coz',
    body: 'Coz dep trai'
})

Blog.save(Blog)
    .then(() =>{
        console.log("luu thanh cong");
    })
    .catch((err) =>{
        console.log(err);
    })

Blog.find()
    .then(() => {

    })
    .catch((err)=> {
        console.log(err);
    })
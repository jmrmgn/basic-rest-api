exports.getPosts = (req, res, next) => {
   res.status(200).json({
      posts: [
         {
            title: 'First post',
            body: 'This is my fucking first post!'
         }
      ]
   });
};

exports.postPost = (req, res, next) => {
   const title = req.body.title;
   const body = req.body.body;
   // Create post in the db
   res.status(201).json({
      message: 'Post created successfully!',
      post: {
         id: new Date().toISOString(),
         title: title,
         body: body
      }
   });
};
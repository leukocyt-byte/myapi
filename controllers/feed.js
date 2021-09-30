exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'Your post',
        content:
          'Why did Star Wars episodes 4, 5, 6 come before 1, 2, 3? Because in charge of planning, Yoda was.',
      },
    ],
  });
};

exports.postPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in database
  res.status(201).json({
    message: 'Post created successfully',
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};

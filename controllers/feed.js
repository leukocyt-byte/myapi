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

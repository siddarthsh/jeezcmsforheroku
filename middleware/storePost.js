module.exports = (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res.redirect("/me/posts/new");
  }

  next();
};

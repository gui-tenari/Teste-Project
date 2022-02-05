const BlogPost = (sequelize, DataTypes) => {
  const newBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });
  return newBlogPost;
};

module.exports = BlogPost;
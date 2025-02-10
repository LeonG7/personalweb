const basePath = process.env.NODE_ENV === 'production' ? '/personalweb' : '';

// 在图片组件中
<Image
  src={`${basePath}${post.coverImage}`}  // 注意 coverImage 路径应该已经包含 /images/
  alt={post.title}
  // ...
/> 
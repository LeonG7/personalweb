const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');
const outputDirectory = path.join(process.cwd(), 'public');

function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.log('Posts directory not found, creating...');
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content: content.trim(),
        title: data.title || fileName.replace(/\.md$/, ''),
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        excerpt: data.excerpt || '',
        coverImage: data.coverImage,
        tags: Array.isArray(data.tags) ? data.tags : []
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return allPostsData;
}

// 生成 posts.json
async function generatePostsJson() {
  const posts = getAllPosts();
  const outputPath = path.join(outputDirectory, 'posts.json');
  
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify({ posts }, null, 2));
  console.log('Generated posts.json');
}

generatePostsJson(); 
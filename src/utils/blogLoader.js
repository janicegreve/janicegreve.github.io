import fm from 'front-matter';
import { marked } from 'marked';

// Import all markdown files as raw strings
const postFiles = import.meta.glob('../content/posts/*.md', { query: '?raw', eager: true });

export const blogPosts = Object.keys(postFiles).map((path) => {
  const fileContent = postFiles[path].default;
  const { attributes, body } = fm(fileContent);
  
  return {
    ...attributes,       // Metadata (title, date, etc.)
    // Convert Date object to string (e.g., "January 28, 2026")
    date: attributes.date instanceof Date 
      ? attributes.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : attributes.date, 
    content: marked(body), // Converted HTML content
    slug: path.split('/').pop().replace('.md', ''), // For routing
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by newest

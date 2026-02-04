import fm from 'front-matter';
import { marked } from 'marked';

// Import all markdown files from all language folders
const postFiles = import.meta.glob('../content/*/posts/*.md', { query: '?raw', eager: true });

export const getBlogPosts = (lang) => {
  return Object.keys(postFiles)
    .filter((path) => path.includes(`/content/${lang}/`))
    .map((path) => {
      const fileContent = postFiles[path].default;
      const { attributes, body } = fm(fileContent);
      
      return {
        ...attributes,
        date: attributes.date,
        dateString: attributes.date instanceof Date 
          ? attributes.date.toLocaleDateString(lang === 'da' ? 'da-DK' : 'en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            }) 
          : attributes.date,
        content: marked(body),
        slug: path.split('/').pop().replace('.md', ''),
      };
    })
    .sort((a, b) => b.date - a.date);
};

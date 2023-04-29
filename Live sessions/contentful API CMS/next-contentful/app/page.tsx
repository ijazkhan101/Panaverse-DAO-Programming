
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/enviroments/${process.env.CONTENTFUL_ENVIRONMENT}/content_types?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=article`);
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <ul>
      {blogs.items.map((item: any) => (
        <li key={item.fields.id}>{item.fields.name}</li>
      ))}
    </ul>
  )
}
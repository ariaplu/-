import { BlogData } from '../db';
import Link from 'next/link';

interface BlogProps {
  blogData: BlogData[];
}

const Blog: React.FC<BlogProps> = ({ blogData }) => {
  return (
    <div className="space-y-4">
      {blogData.map(blogData => (
        <p key={blogData.post_id} className="flex items-center space-x-2">
          <Link href={`/post/${blogData.post_id}`}>
            <span className="text-xl font-bold">{blogData.post_id}</span>
          </Link>
          <Link href={`/post/${blogData.post_id}`}>
            <b className="text-xl font-bold">{blogData.title}</b>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Blog;

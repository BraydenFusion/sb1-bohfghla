export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: number;
  categories: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface Category {
  name: string;
  count: number;
}
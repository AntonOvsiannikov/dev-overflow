interface Tag {
  id: string;
  name: string;
}

interface Author {
  id: string;
  name: string;
  image: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  views: number;
  answers: number;
}

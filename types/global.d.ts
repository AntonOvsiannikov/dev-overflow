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

interface ActionError {
  message: string;
  details?: Record<string, string[]>;
}
interface ActionRequest<T = null> {
  success: boolean;
  data?: T;
  error?: ActionError;
  status?: number;
}

type SuccessResponse<T = null> = ActionRequest<T> & { success: true };
type ErrorResponse = ActionRequest<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;

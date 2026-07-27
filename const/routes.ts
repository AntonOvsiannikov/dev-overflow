const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  TAGS: (id: string) => `/tags/${id}`,
  PROFILE: "/profile",
  QUESTION: (id: string) => `/questions/${id}`,
  JOBS: "/jobs",
  ASK_QUESTION: "/ask-question",
};

export default ROUTES;

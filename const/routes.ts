const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  TAGS: (id: string) => `/tags/${id}`,
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/question/${id}`,
  JOBS: "/jobs",
  ASK_QUESTION: "/ask-question",
  SIGN_IN_WITH_OAUTH: "/signin-with-oauth",
};

export default ROUTES;

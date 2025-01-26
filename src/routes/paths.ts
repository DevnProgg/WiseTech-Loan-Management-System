export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/`,
  analytics: `/${rootPaths.pageRoot}/analytics`,
  loans: `/${rootPaths.pageRoot}/loans`,
  borrowers: `/${rootPaths.pageRoot}/borrowers`,
  notification: `/${rootPaths.pageRoot}/notification`,
  settings: `/${rootPaths.pageRoot}/settings`,
  networkError: `/${rootPaths.pageRoot}/networkissue`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  resetPassword: `/${rootPaths.authRoot}/reset-password`,
  404: `/${rootPaths.errorRoot}/404`,
};

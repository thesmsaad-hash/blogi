export default {
  routes: [
    {
      method: 'POST',
      path: '/articles/:documentId/clap',
      handler: 'article.clap',
      config: {
        auth: false,
      }
    }
  ]
}

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async clap(ctx) {
    const { documentId } = ctx.params;
    
    const article = await strapi.documents('api::article.article').findOne({
      documentId,
    });
    
    if (!article) {
      return ctx.notFound();
    }
    
    const claps = (article.Claps || 0) + 1;
    
    await strapi.documents('api::article.article').update({
      documentId,
      data: {
        Claps: claps,
      },
      status: 'published' // Ensure we update the published version directly
    });
    
    return { claps };
  }
}));

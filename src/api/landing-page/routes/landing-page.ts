/**
 * landing-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::landing-page.landing-page', {
    config: {
        find: {
            middlewares: ['api::landing-page.portfolio-populate']
        },
        findOne: {
            middlewares: ['api::landing-page.portfolio-populate']
        },
    }
});

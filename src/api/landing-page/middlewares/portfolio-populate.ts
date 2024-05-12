/**
 * `portfolio-populate` middleware
 */

import { Strapi } from '@strapi/strapi';

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"]
      }
    }
  },
  blocks: {
    populate: {
      form: {
        populate: {
          nameInput: {
            populate: true
          },
          emailInput: {
            populate: true
          },
          messageInput: {
            populate: true
          }
        }
      },
      skills_teches: {
        populate: true
      },
      button: {
        populate: true
      },
      experiences: {
        populate: {
          tasks: {
            populate: true
          }
        }
      },
      navbar: {
        populate: true
      },
      card: {
        populate: ["skills_teches"]
      }
    }
  }
}

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In portfolio-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query
    }
    await next();
  };
};

import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutMe extends Schema.Component {
  collectionName: 'components_blocks_about_mes';
  info: {
    displayName: 'About Me';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    skills_teches: Attribute.Relation<
      'blocks.about-me',
      'oneToMany',
      'api::skills-tech.skills-tech'
    >;
  };
}

export interface BlocksContact extends Schema.Component {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    form: Attribute.Component<'elements.form'> & Attribute.Required;
    button: Attribute.Component<'elements.button'> & Attribute.Required;
    errorMessage: Attribute.String & Attribute.Required;
    successMessage: Attribute.String & Attribute.Required;
    tooManyRequests: Attribute.String;
  };
}

export interface BlocksExperience extends Schema.Component {
  collectionName: 'components_blocks_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    experiences: Attribute.Component<'elements.job-position', true> &
      Attribute.Required;
  };
}

export interface BlocksHeader extends Schema.Component {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    navbar: Attribute.Component<'elements.link', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title1: Attribute.String & Attribute.Required;
    title2: Attribute.String;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface BlocksSkills extends Schema.Component {
  collectionName: 'components_blocks_skills';
  info: {
    displayName: 'Skills';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    card: Attribute.Component<'elements.skill-card', true> & Attribute.Required;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    nameInput: Attribute.Component<'elements.input'> & Attribute.Required;
    emailInput: Attribute.Component<'elements.input'> & Attribute.Required;
    messageInput: Attribute.Component<'elements.input'> & Attribute.Required;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    placeholder: Attribute.String & Attribute.Required;
    errorMessage: Attribute.String;
  };
}

export interface ElementsJobPosition extends Schema.Component {
  collectionName: 'components_elements_job_positions';
  info: {
    displayName: 'Job Position';
  };
  attributes: {
    organization: Attribute.String;
    position: Attribute.String;
    duration: Attribute.String;
    tasks: Attribute.Component<'elements.job-task', true>;
  };
}

export interface ElementsJobTask extends Schema.Component {
  collectionName: 'components_elements_job_tasks';
  info: {
    displayName: 'Job Task';
  };
  attributes: {
    task: Attribute.Text;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsSkillCard extends Schema.Component {
  collectionName: 'components_elements_skill_cards';
  info: {
    displayName: 'Skill Card';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    skills_teches: Attribute.Relation<
      'elements.skill-card',
      'oneToMany',
      'api::skills-tech.skills-tech'
    >;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-me': BlocksAboutMe;
      'blocks.contact': BlocksContact;
      'blocks.experience': BlocksExperience;
      'blocks.header': BlocksHeader;
      'blocks.hero': BlocksHero;
      'blocks.skills': BlocksSkills;
      'elements.button': ElementsButton;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.job-position': ElementsJobPosition;
      'elements.job-task': ElementsJobTask;
      'elements.link': ElementsLink;
      'elements.skill-card': ElementsSkillCard;
      'seo.metadata': SeoMetadata;
    }
  }
}

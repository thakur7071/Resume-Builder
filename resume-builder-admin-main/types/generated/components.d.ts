import type { Schema, Struct } from '@strapi/strapi';

export interface CertificatesCertificates extends Struct.ComponentSchema {
  collectionName: 'components_certificates_certificates';
  info: {
    displayName: 'Certificates';
    icon: 'file';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'Experience';
    icon: 'briefcase';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InterestInterest extends Struct.ComponentSchema {
  collectionName: 'components_interest_interests';
  info: {
    displayName: 'Interest';
    icon: 'message';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'folder';
  };
  attributes: {
    endDate: Schema.Attribute.String;
    projectSummary: Schema.Attribute.Text;
    startDate: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certificates.certificates': CertificatesCertificates;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'interest.interest': InterestInterest;
      'project.project': ProjectProject;
      'skills.skills': SkillsSkills;
    }
  }
}

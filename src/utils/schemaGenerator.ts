/**
 * Schema.org JSON-LD Generator for Google E-E-A-T Compliance
 * Author: Khaled Gamal Khalaf
 */

export interface OrganizationSchemaOptions {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string;
  };
}

export interface AuthorSchemaOptions {
  name: string;
  url: string;
  jobTitle: string;
  knowsAbout: string[];
  sameAs?: string[];
}

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  author: AuthorSchemaOptions;
  publisher: OrganizationSchemaOptions;
  image: string;
}

export function generateOrganizationSchema(options: OrganizationSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${options.url}/#organization`,
    name: options.name,
    url: options.url,
    logo: {
      '@type': 'ImageObject',
      url: options.logo,
    },
    description: options.description,
    sameAs: options.sameAs || [],
    ...(options.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: options.contactPoint.telephone,
        contactType: options.contactPoint.contactType,
        areaServed: options.contactPoint.areaServed,
      },
    }),
  };
}

export function generateAuthorSchema(author: AuthorSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${author.url}/#person`,
    name: author.name,
    url: author.url,
    jobTitle: author.jobTitle,
    knowsAbout: author.knowsAbout,
    sameAs: author.sameAs || [],
  };
}

export function generateArticleSchema(article: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    author: generateAuthorSchema(article.author),
    publisher: generateOrganizationSchema(article.publisher),
  };
}

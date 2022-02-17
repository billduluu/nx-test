import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  courseCollection?: Maybe<CourseCollection>;
  entryCollection?: Maybe<EntryCollection>;
  layoutHeroImageCollection?: Maybe<LayoutHeroImageCollection>;
  lessonImageCollection?: Maybe<LessonImageCollection>;
};


export type AssetLinkingCollectionsCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsLayoutHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsLessonImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/category) */
export type CategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  courseCollection?: Maybe<CourseCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CategoryLinkingCollectionsCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type Course = Entry & {
  __typename?: 'Course';
  categoriesCollection?: Maybe<CourseCategoriesCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  image?: Maybe<Asset>;
  lessonsCollection?: Maybe<CourseLessonsCollection>;
  linkedFrom?: Maybe<CourseLinkingCollections>;
  shortDescription?: Maybe<Scalars['String']>;
  skillLevel?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseCategoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseDurationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseLessonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseSkillLevelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/course) */
export type CourseTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CourseCategoriesCollection = {
  __typename?: 'CourseCategoriesCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CourseCollection = {
  __typename?: 'CourseCollection';
  items: Array<Maybe<Course>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CourseFilter = {
  AND?: InputMaybe<Array<InputMaybe<CourseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CourseFilter>>>;
  categoriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_exists?: InputMaybe<Scalars['Boolean']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  lessonsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillLevel?: InputMaybe<Scalars['String']>;
  skillLevel_contains?: InputMaybe<Scalars['String']>;
  skillLevel_exists?: InputMaybe<Scalars['Boolean']>;
  skillLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillLevel_not?: InputMaybe<Scalars['String']>;
  skillLevel_not_contains?: InputMaybe<Scalars['String']>;
  skillLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseLessonsCollection = {
  __typename?: 'CourseLessonsCollection';
  items: Array<Maybe<Lesson>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CourseLinkingCollections = {
  __typename?: 'CourseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutHighlightedCourseCollection?: Maybe<LayoutHighlightedCourseCollection>;
};


export type CourseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CourseLinkingCollectionsLayoutHighlightedCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CourseOrder {
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  SkillLevelAsc = 'skillLevel_ASC',
  SkillLevelDesc = 'skillLevel_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** A page consisting of freely configurable and rearrangeable content modules. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layout) */
export type Layout = Entry & {
  __typename?: 'Layout';
  contentModulesCollection?: Maybe<LayoutContentModulesCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LayoutLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A page consisting of freely configurable and rearrangeable content modules. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layout) */
export type LayoutContentModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A page consisting of freely configurable and rearrangeable content modules. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layout) */
export type LayoutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A page consisting of freely configurable and rearrangeable content modules. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layout) */
export type LayoutSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A page consisting of freely configurable and rearrangeable content modules. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layout) */
export type LayoutTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LayoutCollection = {
  __typename?: 'LayoutCollection';
  items: Array<Maybe<Layout>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutContentModulesCollection = {
  __typename?: 'LayoutContentModulesCollection';
  items: Array<Maybe<LayoutContentModulesItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutContentModulesItem = LayoutCopy | LayoutHeroImage | LayoutHighlightedCourse;

/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopy = Entry & {
  __typename?: 'LayoutCopy';
  contentfulMetadata: ContentfulMetadata;
  copy?: Maybe<Scalars['String']>;
  ctaLink?: Maybe<Scalars['String']>;
  ctaTitle?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LayoutCopyLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  visualStyle?: Maybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyCtaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A block of text with a headline and a call to action to be shown on the landing page. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutCopy) */
export type LayoutCopyVisualStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LayoutCopyCollection = {
  __typename?: 'LayoutCopyCollection';
  items: Array<Maybe<LayoutCopy>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutCopyFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutCopyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutCopyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copy?: InputMaybe<Scalars['String']>;
  copy_contains?: InputMaybe<Scalars['String']>;
  copy_exists?: InputMaybe<Scalars['Boolean']>;
  copy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copy_not?: InputMaybe<Scalars['String']>;
  copy_not_contains?: InputMaybe<Scalars['String']>;
  copy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaLink_contains?: InputMaybe<Scalars['String']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTitle?: InputMaybe<Scalars['String']>;
  ctaTitle_contains?: InputMaybe<Scalars['String']>;
  ctaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTitle_not?: InputMaybe<Scalars['String']>;
  ctaTitle_not_contains?: InputMaybe<Scalars['String']>;
  ctaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visualStyle?: InputMaybe<Scalars['String']>;
  visualStyle_contains?: InputMaybe<Scalars['String']>;
  visualStyle_exists?: InputMaybe<Scalars['Boolean']>;
  visualStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visualStyle_not?: InputMaybe<Scalars['String']>;
  visualStyle_not_contains?: InputMaybe<Scalars['String']>;
  visualStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LayoutCopyLinkingCollections = {
  __typename?: 'LayoutCopyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutCollection?: Maybe<LayoutCollection>;
};


export type LayoutCopyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutCopyLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LayoutCopyOrder {
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaTitleAsc = 'ctaTitle_ASC',
  CtaTitleDesc = 'ctaTitle_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VisualStyleAsc = 'visualStyle_ASC',
  VisualStyleDesc = 'visualStyle_DESC'
}

export type LayoutFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutFilter>>>;
  contentModulesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A hero image and header text. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHeroImage) */
export type LayoutHeroImage = Entry & {
  __typename?: 'LayoutHeroImage';
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LayoutHeroImageLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A hero image and header text. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHeroImage) */
export type LayoutHeroImageBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A hero image and header text. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHeroImage) */
export type LayoutHeroImageHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A hero image and header text. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHeroImage) */
export type LayoutHeroImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A hero image and header text. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHeroImage) */
export type LayoutHeroImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LayoutHeroImageCollection = {
  __typename?: 'LayoutHeroImageCollection';
  items: Array<Maybe<LayoutHeroImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutHeroImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutHeroImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutHeroImageFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeroImageLinkingCollections = {
  __typename?: 'LayoutHeroImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutCollection?: Maybe<LayoutCollection>;
};


export type LayoutHeroImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutHeroImageLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LayoutHeroImageOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A curated selection of highlighted courses. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHighlightedCourse) */
export type LayoutHighlightedCourse = Entry & {
  __typename?: 'LayoutHighlightedCourse';
  contentfulMetadata: ContentfulMetadata;
  course?: Maybe<Course>;
  linkedFrom?: Maybe<LayoutHighlightedCourseLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A curated selection of highlighted courses. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHighlightedCourse) */
export type LayoutHighlightedCourseCourseArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A curated selection of highlighted courses. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHighlightedCourse) */
export type LayoutHighlightedCourseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A curated selection of highlighted courses. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/layoutHighlightedCourse) */
export type LayoutHighlightedCourseTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LayoutHighlightedCourseCollection = {
  __typename?: 'LayoutHighlightedCourseCollection';
  items: Array<Maybe<LayoutHighlightedCourse>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LayoutHighlightedCourseFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutHighlightedCourseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutHighlightedCourseFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  course?: InputMaybe<CfCourseNestedFilter>;
  course_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LayoutHighlightedCourseLinkingCollections = {
  __typename?: 'LayoutHighlightedCourseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  layoutCollection?: Maybe<LayoutCollection>;
};


export type LayoutHighlightedCourseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LayoutHighlightedCourseLinkingCollectionsLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LayoutHighlightedCourseOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LayoutLinkingCollections = {
  __typename?: 'LayoutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LayoutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LayoutOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A educational lesson, representing one section of a course. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lesson) */
export type Lesson = Entry & {
  __typename?: 'Lesson';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LessonLinkingCollections>;
  modulesCollection?: Maybe<LessonModulesCollection>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A educational lesson, representing one section of a course. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lesson) */
export type LessonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A educational lesson, representing one section of a course. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lesson) */
export type LessonModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A educational lesson, representing one section of a course. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lesson) */
export type LessonSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A educational lesson, representing one section of a course. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lesson) */
export type LessonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippets = Entry & {
  __typename?: 'LessonCodeSnippets';
  contentfulMetadata: ContentfulMetadata;
  curl?: Maybe<Scalars['String']>;
  dotNet?: Maybe<Scalars['String']>;
  java?: Maybe<Scalars['String']>;
  javaAndroid?: Maybe<Scalars['String']>;
  javascript?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LessonCodeSnippetsLinkingCollections>;
  php?: Maybe<Scalars['String']>;
  python?: Maybe<Scalars['String']>;
  ruby?: Maybe<Scalars['String']>;
  swift?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsCurlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsDotNetArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsJavaArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsJavaAndroidArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsJavascriptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsPhpArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsPythonArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsRubyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsSwiftArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A code snippet module supporting all platforms to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCodeSnippets) */
export type LessonCodeSnippetsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LessonCodeSnippetsCollection = {
  __typename?: 'LessonCodeSnippetsCollection';
  items: Array<Maybe<LessonCodeSnippets>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LessonCodeSnippetsFilter = {
  AND?: InputMaybe<Array<InputMaybe<LessonCodeSnippetsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LessonCodeSnippetsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  curl?: InputMaybe<Scalars['String']>;
  curl_contains?: InputMaybe<Scalars['String']>;
  curl_exists?: InputMaybe<Scalars['Boolean']>;
  curl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curl_not?: InputMaybe<Scalars['String']>;
  curl_not_contains?: InputMaybe<Scalars['String']>;
  curl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dotNet?: InputMaybe<Scalars['String']>;
  dotNet_contains?: InputMaybe<Scalars['String']>;
  dotNet_exists?: InputMaybe<Scalars['Boolean']>;
  dotNet_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dotNet_not?: InputMaybe<Scalars['String']>;
  dotNet_not_contains?: InputMaybe<Scalars['String']>;
  dotNet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  java?: InputMaybe<Scalars['String']>;
  javaAndroid?: InputMaybe<Scalars['String']>;
  javaAndroid_contains?: InputMaybe<Scalars['String']>;
  javaAndroid_exists?: InputMaybe<Scalars['Boolean']>;
  javaAndroid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  javaAndroid_not?: InputMaybe<Scalars['String']>;
  javaAndroid_not_contains?: InputMaybe<Scalars['String']>;
  javaAndroid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  java_contains?: InputMaybe<Scalars['String']>;
  java_exists?: InputMaybe<Scalars['Boolean']>;
  java_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  java_not?: InputMaybe<Scalars['String']>;
  java_not_contains?: InputMaybe<Scalars['String']>;
  java_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  javascript?: InputMaybe<Scalars['String']>;
  javascript_contains?: InputMaybe<Scalars['String']>;
  javascript_exists?: InputMaybe<Scalars['Boolean']>;
  javascript_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  javascript_not?: InputMaybe<Scalars['String']>;
  javascript_not_contains?: InputMaybe<Scalars['String']>;
  javascript_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  php?: InputMaybe<Scalars['String']>;
  php_contains?: InputMaybe<Scalars['String']>;
  php_exists?: InputMaybe<Scalars['Boolean']>;
  php_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  php_not?: InputMaybe<Scalars['String']>;
  php_not_contains?: InputMaybe<Scalars['String']>;
  php_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  python?: InputMaybe<Scalars['String']>;
  python_contains?: InputMaybe<Scalars['String']>;
  python_exists?: InputMaybe<Scalars['Boolean']>;
  python_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  python_not?: InputMaybe<Scalars['String']>;
  python_not_contains?: InputMaybe<Scalars['String']>;
  python_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ruby?: InputMaybe<Scalars['String']>;
  ruby_contains?: InputMaybe<Scalars['String']>;
  ruby_exists?: InputMaybe<Scalars['Boolean']>;
  ruby_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ruby_not?: InputMaybe<Scalars['String']>;
  ruby_not_contains?: InputMaybe<Scalars['String']>;
  ruby_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  swift?: InputMaybe<Scalars['String']>;
  swift_contains?: InputMaybe<Scalars['String']>;
  swift_exists?: InputMaybe<Scalars['Boolean']>;
  swift_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  swift_not?: InputMaybe<Scalars['String']>;
  swift_not_contains?: InputMaybe<Scalars['String']>;
  swift_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LessonCodeSnippetsLinkingCollections = {
  __typename?: 'LessonCodeSnippetsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  lessonCollection?: Maybe<LessonCollection>;
};


export type LessonCodeSnippetsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LessonCodeSnippetsLinkingCollectionsLessonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LessonCodeSnippetsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LessonCollection = {
  __typename?: 'LessonCollection';
  items: Array<Maybe<Lesson>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** A markdown module to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCopy) */
export type LessonCopy = Entry & {
  __typename?: 'LessonCopy';
  contentfulMetadata: ContentfulMetadata;
  copy?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<LessonCopyLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A markdown module to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCopy) */
export type LessonCopyCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A markdown module to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCopy) */
export type LessonCopyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A markdown module to be used in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonCopy) */
export type LessonCopyTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LessonCopyCollection = {
  __typename?: 'LessonCopyCollection';
  items: Array<Maybe<LessonCopy>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LessonCopyFilter = {
  AND?: InputMaybe<Array<InputMaybe<LessonCopyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LessonCopyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copy?: InputMaybe<Scalars['String']>;
  copy_contains?: InputMaybe<Scalars['String']>;
  copy_exists?: InputMaybe<Scalars['Boolean']>;
  copy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copy_not?: InputMaybe<Scalars['String']>;
  copy_not_contains?: InputMaybe<Scalars['String']>;
  copy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LessonCopyLinkingCollections = {
  __typename?: 'LessonCopyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  lessonCollection?: Maybe<LessonCollection>;
};


export type LessonCopyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LessonCopyLinkingCollectionsLessonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LessonCopyOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LessonFilter = {
  AND?: InputMaybe<Array<InputMaybe<LessonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LessonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  modulesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** An image to be used as a module in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonImage) */
export type LessonImage = Entry & {
  __typename?: 'LessonImage';
  caption?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<LessonImageLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** An image to be used as a module in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonImage) */
export type LessonImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** An image to be used as a module in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonImage) */
export type LessonImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** An image to be used as a module in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonImage) */
export type LessonImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** An image to be used as a module in a lesson. [See type definition](https://app.contentful.com/spaces/dbl1ftxc27bz/content_types/lessonImage) */
export type LessonImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LessonImageCollection = {
  __typename?: 'LessonImageCollection';
  items: Array<Maybe<LessonImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LessonImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LessonImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LessonImageFilter>>>;
  caption?: InputMaybe<Scalars['String']>;
  caption_contains?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_not?: InputMaybe<Scalars['String']>;
  caption_not_contains?: InputMaybe<Scalars['String']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LessonImageLinkingCollections = {
  __typename?: 'LessonImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  lessonCollection?: Maybe<LessonCollection>;
};


export type LessonImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LessonImageLinkingCollectionsLessonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LessonImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LessonLinkingCollections = {
  __typename?: 'LessonLinkingCollections';
  courseCollection?: Maybe<CourseCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type LessonLinkingCollectionsCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LessonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LessonModulesCollection = {
  __typename?: 'LessonModulesCollection';
  items: Array<Maybe<LessonModulesItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LessonModulesItem = LessonCodeSnippets | LessonCopy | LessonImage;

export enum LessonOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  course?: Maybe<Course>;
  courseCollection?: Maybe<CourseCollection>;
  entryCollection?: Maybe<EntryCollection>;
  layout?: Maybe<Layout>;
  layoutCollection?: Maybe<LayoutCollection>;
  layoutCopy?: Maybe<LayoutCopy>;
  layoutCopyCollection?: Maybe<LayoutCopyCollection>;
  layoutHeroImage?: Maybe<LayoutHeroImage>;
  layoutHeroImageCollection?: Maybe<LayoutHeroImageCollection>;
  layoutHighlightedCourse?: Maybe<LayoutHighlightedCourse>;
  layoutHighlightedCourseCollection?: Maybe<LayoutHighlightedCourseCollection>;
  lesson?: Maybe<Lesson>;
  lessonCodeSnippets?: Maybe<LessonCodeSnippets>;
  lessonCodeSnippetsCollection?: Maybe<LessonCodeSnippetsCollection>;
  lessonCollection?: Maybe<LessonCollection>;
  lessonCopy?: Maybe<LessonCopy>;
  lessonCopyCollection?: Maybe<LessonCopyCollection>;
  lessonImage?: Maybe<LessonImage>;
  lessonImageCollection?: Maybe<LessonImageCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryCourseArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CourseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryLayoutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutFilter>;
};


export type QueryLayoutCopyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutCopyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutCopyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutCopyFilter>;
};


export type QueryLayoutHeroImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutHeroImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutHeroImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutHeroImageFilter>;
};


export type QueryLayoutHighlightedCourseArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLayoutHighlightedCourseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LayoutHighlightedCourseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutHighlightedCourseFilter>;
};


export type QueryLessonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLessonCodeSnippetsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLessonCodeSnippetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LessonCodeSnippetsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonCodeSnippetsFilter>;
};


export type QueryLessonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LessonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFilter>;
};


export type QueryLessonCopyArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLessonCopyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LessonCopyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonCopyFilter>;
};


export type QueryLessonImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLessonImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LessonImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonImageFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfCourseNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCourseNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCourseNestedFilter>>>;
  categoriesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_exists?: InputMaybe<Scalars['Boolean']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  lessonsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillLevel?: InputMaybe<Scalars['String']>;
  skillLevel_contains?: InputMaybe<Scalars['String']>;
  skillLevel_exists?: InputMaybe<Scalars['Boolean']>;
  skillLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skillLevel_not?: InputMaybe<Scalars['String']>;
  skillLevel_not_contains?: InputMaybe<Scalars['String']>;
  skillLevel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type TestPageQuery = { __typename?: 'Query', courseCollection?: { __typename?: 'CourseCollection', items: Array<{ __typename?: 'Course', title?: string | null | undefined } | null | undefined> } | null | undefined };


export const TestPageDocument = gql`
    query TestPage {
  courseCollection {
    items {
      title
    }
  }
}
    `;
export type TestPageQueryResult = Apollo.QueryResult<TestPageQuery, TestPageQueryVariables>;
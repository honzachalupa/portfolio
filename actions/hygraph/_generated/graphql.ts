/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type About = Entity & {
  __typename?: 'About';
  content: RichText;
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type AboutImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};

export type AboutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutConnection = {
  __typename?: 'AboutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutCreateInput = {
  content: Scalars['RichTextAST']['input'];
  headline?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type AboutCreateManyInlineInput = {
  /** Create and connect multiple existing About documents */
  create?: InputMaybe<Array<AboutCreateInput>>;
};

export type AboutCreateOneInlineInput = {
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
};

export type AboutCreateWithPositionInput = {
  /** Document to create */
  data: AboutCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AboutEdge = {
  __typename?: 'AboutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: About;
};

/** Identifies documents */
export type AboutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum AboutOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AboutParent = ComponentsContainer;

export type AboutParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type AboutParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type AboutParentCreateManyInlineInput = {
  /** Create and connect multiple existing AboutParent documents */
  create?: InputMaybe<Array<AboutParentCreateInput>>;
};

export type AboutParentCreateOneInlineInput = {
  /** Create and connect one AboutParent document */
  create?: InputMaybe<AboutParentCreateInput>;
};

export type AboutParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type AboutParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type AboutParentUpdateManyInlineInput = {
  /** Create and connect multiple AboutParent component instances */
  create?: InputMaybe<Array<AboutParentCreateWithPositionInput>>;
  /** Delete multiple AboutParent documents */
  delete?: InputMaybe<Array<AboutParentWhereUniqueInput>>;
  /** Update multiple AboutParent component instances */
  update?: InputMaybe<Array<AboutParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AboutParent component instances */
  upsert?: InputMaybe<Array<AboutParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AboutParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type AboutParentUpdateOneInlineInput = {
  /** Create and connect one AboutParent document */
  create?: InputMaybe<AboutParentCreateInput>;
  /** Delete currently connected AboutParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AboutParent document */
  update?: InputMaybe<AboutParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutParent document */
  upsert?: InputMaybe<AboutParentUpsertWithNestedWhereUniqueInput>;
};

export type AboutParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type AboutParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type AboutParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type AboutParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type AboutParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type AboutParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type AboutUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type AboutUpdateManyInlineInput = {
  /** Create and connect multiple About component instances */
  create?: InputMaybe<Array<AboutCreateWithPositionInput>>;
  /** Delete multiple About documents */
  delete?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Update multiple About component instances */
  update?: InputMaybe<Array<AboutUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple About component instances */
  upsert?: InputMaybe<Array<AboutUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AboutUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutUpdateManyInput;
  /** Document search */
  where: AboutWhereInput;
};

export type AboutUpdateOneInlineInput = {
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
  /** Delete currently connected About document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single About document */
  update?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single About document */
  upsert?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
};

export type AboutUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AboutUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutWhereUniqueInput;
};

export type AboutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutUpdateInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

export type AboutUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutCreateInput;
  /** Update document if it exists */
  update: AboutUpdateInput;
};

export type AboutUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AboutUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutWhereUniqueInput;
};

export type AboutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutUpsertInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

/** Identifies documents */
export type AboutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References About record uniquely */
export type AboutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  iconClient: Array<Client>;
  iconSocialNetwork: Array<SocialNetwork>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageProject: Array<Project>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetIconClientArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ClientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClientWhereInput>;
};


/** Asset system model */
export type AssetIconSocialNetworkArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialNetworkWhereInput>;
};


/** Asset system model */
export type AssetImageProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  iconClient?: InputMaybe<ClientCreateManyInlineInput>;
  iconSocialNetwork?: InputMaybe<SocialNetworkCreateManyInlineInput>;
  imageBlockAboutMe?: InputMaybe<AboutCreateManyInlineInput>;
  imageProject?: InputMaybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  iconClient_every?: InputMaybe<ClientWhereInput>;
  iconClient_none?: InputMaybe<ClientWhereInput>;
  iconClient_some?: InputMaybe<ClientWhereInput>;
  iconSocialNetwork_every?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_none?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_some?: InputMaybe<SocialNetworkWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProject_every?: InputMaybe<ProjectWhereInput>;
  imageProject_none?: InputMaybe<ProjectWhereInput>;
  imageProject_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  iconClient?: InputMaybe<ClientUpdateManyInlineInput>;
  iconSocialNetwork?: InputMaybe<SocialNetworkUpdateManyInlineInput>;
  imageBlockAboutMe?: InputMaybe<AboutUpdateManyInlineInput>;
  imageProject?: InputMaybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  iconClient_every?: InputMaybe<ClientWhereInput>;
  iconClient_none?: InputMaybe<ClientWhereInput>;
  iconClient_some?: InputMaybe<ClientWhereInput>;
  iconSocialNetwork_every?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_none?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_some?: InputMaybe<SocialNetworkWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProject_every?: InputMaybe<ProjectWhereInput>;
  imageProject_none?: InputMaybe<ProjectWhereInput>;
  imageProject_some?: InputMaybe<ProjectWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Client = Entity & Node & {
  __typename?: 'Client';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Client>;
  /** List of Client versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  logo?: Maybe<Asset>;
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
};


export type ClientCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ClientDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ClientHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ClientLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type ClientPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ClientScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ClientUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ClientConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ClientWhereUniqueInput;
};

/** A connection to a list of items. */
export type ClientConnection = {
  __typename?: 'ClientConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ClientEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ClientCreateInput = {
  cldw4lnos1zmb01ul3cqgg2ij?: InputMaybe<JobCreateManyInlineInput>;
  cldyz363f1x3101uih5t194p0?: InputMaybe<ProjectCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type ClientCreateManyInlineInput = {
  /** Connect multiple existing Client documents */
  connect?: InputMaybe<Array<ClientWhereUniqueInput>>;
  /** Create and connect multiple existing Client documents */
  create?: InputMaybe<Array<ClientCreateInput>>;
};

export type ClientCreateOneInlineInput = {
  /** Connect one existing Client document */
  connect?: InputMaybe<ClientWhereUniqueInput>;
  /** Create and connect one Client document */
  create?: InputMaybe<ClientCreateInput>;
};

/** An edge in a connection. */
export type ClientEdge = {
  __typename?: 'ClientEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Client;
};

/** Identifies documents */
export type ClientManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClientWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClientWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClientWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ClientWhereStageInput>;
  documentInStages_none?: InputMaybe<ClientWhereStageInput>;
  documentInStages_some?: InputMaybe<ClientWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ClientOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ClientUpdateInput = {
  cldw4lnos1zmb01ul3cqgg2ij?: InputMaybe<JobUpdateManyInlineInput>;
  cldyz363f1x3101uih5t194p0?: InputMaybe<ProjectUpdateManyInlineInput>;
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ClientUpdateManyInlineInput = {
  /** Connect multiple existing Client documents */
  connect?: InputMaybe<Array<ClientConnectInput>>;
  /** Create and connect multiple Client documents */
  create?: InputMaybe<Array<ClientCreateInput>>;
  /** Delete multiple Client documents */
  delete?: InputMaybe<Array<ClientWhereUniqueInput>>;
  /** Disconnect multiple Client documents */
  disconnect?: InputMaybe<Array<ClientWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Client documents */
  set?: InputMaybe<Array<ClientWhereUniqueInput>>;
  /** Update multiple Client documents */
  update?: InputMaybe<Array<ClientUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Client documents */
  upsert?: InputMaybe<Array<ClientUpsertWithNestedWhereUniqueInput>>;
};

export type ClientUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ClientUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ClientUpdateManyInput;
  /** Document search */
  where: ClientWhereInput;
};

export type ClientUpdateOneInlineInput = {
  /** Connect existing Client document */
  connect?: InputMaybe<ClientWhereUniqueInput>;
  /** Create and connect one Client document */
  create?: InputMaybe<ClientCreateInput>;
  /** Delete currently connected Client document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Client document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Client document */
  update?: InputMaybe<ClientUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Client document */
  upsert?: InputMaybe<ClientUpsertWithNestedWhereUniqueInput>;
};

export type ClientUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ClientUpdateInput;
  /** Unique document search */
  where: ClientWhereUniqueInput;
};

export type ClientUpsertInput = {
  /** Create document if it didn't exist */
  create: ClientCreateInput;
  /** Update document if it exists */
  update: ClientUpdateInput;
};

export type ClientUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ClientUpsertInput;
  /** Unique document search */
  where: ClientWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ClientWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ClientWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClientWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClientWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClientWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ClientWhereStageInput>;
  documentInStages_none?: InputMaybe<ClientWhereStageInput>;
  documentInStages_some?: InputMaybe<ClientWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ClientWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClientWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClientWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClientWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ClientWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Client record uniquely */
export type ClientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ComponentsContainer = Entity & {
  __typename?: 'ComponentsContainer';
  content: Array<ComponentsContainercontentUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};


export type ComponentsContainerContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentsContainerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ComponentsContainerWhereUniqueInput;
};

/** A connection to a list of items. */
export type ComponentsContainerConnection = {
  __typename?: 'ComponentsContainerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ComponentsContainerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ComponentsContainerCreateInput = {
  content?: InputMaybe<ComponentsContainercontentUnionCreateManyInlineInput>;
};

export type ComponentsContainerCreateManyInlineInput = {
  /** Create and connect multiple existing ComponentsContainer documents */
  create?: InputMaybe<Array<ComponentsContainerCreateInput>>;
};

export type ComponentsContainerCreateOneInlineInput = {
  /** Create and connect one ComponentsContainer document */
  create?: InputMaybe<ComponentsContainerCreateInput>;
};

export type ComponentsContainerCreateWithPositionInput = {
  /** Document to create */
  data: ComponentsContainerCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ComponentsContainerEdge = {
  __typename?: 'ComponentsContainerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ComponentsContainer;
};

/** Identifies documents */
export type ComponentsContainerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<ComponentsContainercontentUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum ComponentsContainerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ComponentsContainerParent = Page;

export type ComponentsContainerParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ComponentsContainerParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ComponentsContainerParentCreateManyInlineInput = {
  /** Connect multiple existing ComponentsContainerParent documents */
  connect?: InputMaybe<Array<ComponentsContainerParentWhereUniqueInput>>;
  /** Create and connect multiple existing ComponentsContainerParent documents */
  create?: InputMaybe<Array<ComponentsContainerParentCreateInput>>;
};

export type ComponentsContainerParentCreateOneInlineInput = {
  /** Connect one existing ComponentsContainerParent document */
  connect?: InputMaybe<ComponentsContainerParentWhereUniqueInput>;
  /** Create and connect one ComponentsContainerParent document */
  create?: InputMaybe<ComponentsContainerParentCreateInput>;
};

export type ComponentsContainerParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ComponentsContainerParentUpdateManyInlineInput = {
  /** Connect multiple existing ComponentsContainerParent documents */
  connect?: InputMaybe<Array<ComponentsContainerParentConnectInput>>;
  /** Create and connect multiple ComponentsContainerParent documents */
  create?: InputMaybe<Array<ComponentsContainerParentCreateInput>>;
  /** Delete multiple ComponentsContainerParent documents */
  delete?: InputMaybe<Array<ComponentsContainerParentWhereUniqueInput>>;
  /** Disconnect multiple ComponentsContainerParent documents */
  disconnect?: InputMaybe<Array<ComponentsContainerParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ComponentsContainerParent documents */
  set?: InputMaybe<Array<ComponentsContainerParentWhereUniqueInput>>;
  /** Update multiple ComponentsContainerParent documents */
  update?: InputMaybe<Array<ComponentsContainerParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ComponentsContainerParent documents */
  upsert?: InputMaybe<Array<ComponentsContainerParentUpsertWithNestedWhereUniqueInput>>;
};

export type ComponentsContainerParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ComponentsContainerParentUpdateOneInlineInput = {
  /** Connect existing ComponentsContainerParent document */
  connect?: InputMaybe<ComponentsContainerParentWhereUniqueInput>;
  /** Create and connect one ComponentsContainerParent document */
  create?: InputMaybe<ComponentsContainerParentCreateInput>;
  /** Delete currently connected ComponentsContainerParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ComponentsContainerParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ComponentsContainerParent document */
  update?: InputMaybe<ComponentsContainerParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ComponentsContainerParent document */
  upsert?: InputMaybe<ComponentsContainerParentUpsertWithNestedWhereUniqueInput>;
};

export type ComponentsContainerParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ComponentsContainerParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ComponentsContainerParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ComponentsContainerParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ComponentsContainerUpdateInput = {
  content?: InputMaybe<ComponentsContainercontentUnionUpdateManyInlineInput>;
};

export type ComponentsContainerUpdateManyInlineInput = {
  /** Create and connect multiple ComponentsContainer component instances */
  create?: InputMaybe<Array<ComponentsContainerCreateWithPositionInput>>;
  /** Delete multiple ComponentsContainer documents */
  delete?: InputMaybe<Array<ComponentsContainerWhereUniqueInput>>;
  /** Update multiple ComponentsContainer component instances */
  update?: InputMaybe<Array<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ComponentsContainer component instances */
  upsert?: InputMaybe<Array<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ComponentsContainerUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentsContainerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ComponentsContainerUpdateManyInput;
  /** Document search */
  where: ComponentsContainerWhereInput;
};

export type ComponentsContainerUpdateOneInlineInput = {
  /** Create and connect one ComponentsContainer document */
  create?: InputMaybe<ComponentsContainerCreateInput>;
  /** Delete currently connected ComponentsContainer document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ComponentsContainer document */
  update?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ComponentsContainer document */
  upsert?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ComponentsContainerUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ComponentsContainerWhereUniqueInput;
};

export type ComponentsContainerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ComponentsContainerUpdateInput;
  /** Unique document search */
  where: ComponentsContainerWhereUniqueInput;
};

export type ComponentsContainerUpsertInput = {
  /** Create document if it didn't exist */
  create: ComponentsContainerCreateInput;
  /** Update document if it exists */
  update: ComponentsContainerUpdateInput;
};

export type ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ComponentsContainerUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ComponentsContainerWhereUniqueInput;
};

export type ComponentsContainerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ComponentsContainerUpsertInput;
  /** Unique document search */
  where: ComponentsContainerWhereUniqueInput;
};

/** Identifies documents */
export type ComponentsContainerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ComponentsContainerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<ComponentsContainercontentUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References ComponentsContainer record uniquely */
export type ComponentsContainerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentsContainercontentUnion = About | Contact | ContactForm | Footer | GitHubRepositories | Hero | Jobs | Navigation | Projects_IOs | Projects_Web | Seo | Statistics;

export type ComponentsContainercontentUnionConnectInput = {
  About?: InputMaybe<AboutConnectInput>;
  Contact?: InputMaybe<ContactConnectInput>;
  ContactForm?: InputMaybe<ContactFormConnectInput>;
  Footer?: InputMaybe<FooterConnectInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
  Jobs?: InputMaybe<JobsConnectInput>;
  Navigation?: InputMaybe<NavigationConnectInput>;
  Projects_iOS?: InputMaybe<Projects_IOsConnectInput>;
  Projects_web?: InputMaybe<Projects_WebConnectInput>;
  SEO?: InputMaybe<SeoConnectInput>;
  Statistics?: InputMaybe<StatisticsConnectInput>;
};

export type ComponentsContainercontentUnionCreateInput = {
  About?: InputMaybe<AboutCreateInput>;
  Contact?: InputMaybe<ContactCreateInput>;
  ContactForm?: InputMaybe<ContactFormCreateInput>;
  Footer?: InputMaybe<FooterCreateInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
  Jobs?: InputMaybe<JobsCreateInput>;
  Navigation?: InputMaybe<NavigationCreateInput>;
  Projects_iOS?: InputMaybe<Projects_IOsCreateInput>;
  Projects_web?: InputMaybe<Projects_WebCreateInput>;
  SEO?: InputMaybe<SeoCreateInput>;
  Statistics?: InputMaybe<StatisticsCreateInput>;
};

export type ComponentsContainercontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing ComponentsContainercontentUnion documents */
  create?: InputMaybe<Array<ComponentsContainercontentUnionCreateInput>>;
};

export type ComponentsContainercontentUnionCreateOneInlineInput = {
  /** Create and connect one ComponentsContainercontentUnion document */
  create?: InputMaybe<ComponentsContainercontentUnionCreateInput>;
};

export type ComponentsContainercontentUnionCreateWithPositionInput = {
  About?: InputMaybe<AboutCreateWithPositionInput>;
  Contact?: InputMaybe<ContactCreateWithPositionInput>;
  ContactForm?: InputMaybe<ContactFormCreateWithPositionInput>;
  Footer?: InputMaybe<FooterCreateWithPositionInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  Jobs?: InputMaybe<JobsCreateWithPositionInput>;
  Navigation?: InputMaybe<NavigationCreateWithPositionInput>;
  Projects_iOS?: InputMaybe<Projects_IOsCreateWithPositionInput>;
  Projects_web?: InputMaybe<Projects_WebCreateWithPositionInput>;
  SEO?: InputMaybe<SeoCreateWithPositionInput>;
  Statistics?: InputMaybe<StatisticsCreateWithPositionInput>;
};

export type ComponentsContainercontentUnionUpdateInput = {
  About?: InputMaybe<AboutUpdateInput>;
  Contact?: InputMaybe<ContactUpdateInput>;
  ContactForm?: InputMaybe<ContactFormUpdateInput>;
  Footer?: InputMaybe<FooterUpdateInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
  Jobs?: InputMaybe<JobsUpdateInput>;
  Navigation?: InputMaybe<NavigationUpdateInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpdateInput>;
  Projects_web?: InputMaybe<Projects_WebUpdateInput>;
  SEO?: InputMaybe<SeoUpdateInput>;
  Statistics?: InputMaybe<StatisticsUpdateInput>;
};

export type ComponentsContainercontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple ComponentsContainercontentUnion component instances */
  create?: InputMaybe<Array<ComponentsContainercontentUnionCreateWithPositionInput>>;
  /** Delete multiple ComponentsContainercontentUnion documents */
  delete?: InputMaybe<Array<ComponentsContainercontentUnionWhereUniqueInput>>;
  /** Update multiple ComponentsContainercontentUnion component instances */
  update?: InputMaybe<Array<ComponentsContainercontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ComponentsContainercontentUnion component instances */
  upsert?: InputMaybe<Array<ComponentsContainercontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ComponentsContainercontentUnionUpdateManyWithNestedWhereInput = {
  About?: InputMaybe<AboutUpdateManyWithNestedWhereInput>;
  Contact?: InputMaybe<ContactUpdateManyWithNestedWhereInput>;
  ContactForm?: InputMaybe<ContactFormUpdateManyWithNestedWhereInput>;
  Footer?: InputMaybe<FooterUpdateManyWithNestedWhereInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  Jobs?: InputMaybe<JobsUpdateManyWithNestedWhereInput>;
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpdateManyWithNestedWhereInput>;
  Projects_web?: InputMaybe<Projects_WebUpdateManyWithNestedWhereInput>;
  SEO?: InputMaybe<SeoUpdateManyWithNestedWhereInput>;
  Statistics?: InputMaybe<StatisticsUpdateManyWithNestedWhereInput>;
};

export type ComponentsContainercontentUnionUpdateOneInlineInput = {
  /** Create and connect one ComponentsContainercontentUnion document */
  create?: InputMaybe<ComponentsContainercontentUnionCreateInput>;
  /** Delete currently connected ComponentsContainercontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ComponentsContainercontentUnion document */
  update?: InputMaybe<ComponentsContainercontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ComponentsContainercontentUnion document */
  upsert?: InputMaybe<ComponentsContainercontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type ComponentsContainercontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  About?: InputMaybe<AboutUpdateWithNestedWhereUniqueAndPositionInput>;
  Contact?: InputMaybe<ContactUpdateWithNestedWhereUniqueAndPositionInput>;
  ContactForm?: InputMaybe<ContactFormUpdateWithNestedWhereUniqueAndPositionInput>;
  Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueAndPositionInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  Jobs?: InputMaybe<JobsUpdateWithNestedWhereUniqueAndPositionInput>;
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueAndPositionInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpdateWithNestedWhereUniqueAndPositionInput>;
  Projects_web?: InputMaybe<Projects_WebUpdateWithNestedWhereUniqueAndPositionInput>;
  SEO?: InputMaybe<SeoUpdateWithNestedWhereUniqueAndPositionInput>;
  Statistics?: InputMaybe<StatisticsUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ComponentsContainercontentUnionUpdateWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
  ContactForm?: InputMaybe<ContactFormUpdateWithNestedWhereUniqueInput>;
  Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  Jobs?: InputMaybe<JobsUpdateWithNestedWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpdateWithNestedWhereUniqueInput>;
  Projects_web?: InputMaybe<Projects_WebUpdateWithNestedWhereUniqueInput>;
  SEO?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  Statistics?: InputMaybe<StatisticsUpdateWithNestedWhereUniqueInput>;
};

export type ComponentsContainercontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  About?: InputMaybe<AboutUpsertWithNestedWhereUniqueAndPositionInput>;
  Contact?: InputMaybe<ContactUpsertWithNestedWhereUniqueAndPositionInput>;
  ContactForm?: InputMaybe<ContactFormUpsertWithNestedWhereUniqueAndPositionInput>;
  Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueAndPositionInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  Jobs?: InputMaybe<JobsUpsertWithNestedWhereUniqueAndPositionInput>;
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueAndPositionInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpsertWithNestedWhereUniqueAndPositionInput>;
  Projects_web?: InputMaybe<Projects_WebUpsertWithNestedWhereUniqueAndPositionInput>;
  SEO?: InputMaybe<SeoUpsertWithNestedWhereUniqueAndPositionInput>;
  Statistics?: InputMaybe<StatisticsUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ComponentsContainercontentUnionUpsertWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
  ContactForm?: InputMaybe<ContactFormUpsertWithNestedWhereUniqueInput>;
  Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  Jobs?: InputMaybe<JobsUpsertWithNestedWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
  Projects_iOS?: InputMaybe<Projects_IOsUpsertWithNestedWhereUniqueInput>;
  Projects_web?: InputMaybe<Projects_WebUpsertWithNestedWhereUniqueInput>;
  SEO?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
  Statistics?: InputMaybe<StatisticsUpsertWithNestedWhereUniqueInput>;
};

export type ComponentsContainercontentUnionWhereInput = {
  About?: InputMaybe<AboutWhereInput>;
  Contact?: InputMaybe<ContactWhereInput>;
  ContactForm?: InputMaybe<ContactFormWhereInput>;
  Footer?: InputMaybe<FooterWhereInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
  Jobs?: InputMaybe<JobsWhereInput>;
  Navigation?: InputMaybe<NavigationWhereInput>;
  Projects_iOS?: InputMaybe<Projects_IOsWhereInput>;
  Projects_web?: InputMaybe<Projects_WebWhereInput>;
  SEO?: InputMaybe<SeoWhereInput>;
  Statistics?: InputMaybe<StatisticsWhereInput>;
};

export type ComponentsContainercontentUnionWhereUniqueInput = {
  About?: InputMaybe<AboutWhereUniqueInput>;
  Contact?: InputMaybe<ContactWhereUniqueInput>;
  ContactForm?: InputMaybe<ContactFormWhereUniqueInput>;
  Footer?: InputMaybe<FooterWhereUniqueInput>;
  GitHubRepositories?: InputMaybe<GitHubRepositoriesWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  Jobs?: InputMaybe<JobsWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
  Projects_iOS?: InputMaybe<Projects_IOsWhereUniqueInput>;
  Projects_web?: InputMaybe<Projects_WebWhereUniqueInput>;
  SEO?: InputMaybe<SeoWhereUniqueInput>;
  Statistics?: InputMaybe<StatisticsWhereUniqueInput>;
};

export type Config = Entity & Node & {
  __typename?: 'Config';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Config>;
  emailAddress: Scalars['String']['output'];
  /** List of Config versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ConfigCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConfigDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ConfigHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ConfigPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConfigScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ConfigUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ConfigConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConfigWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConfigConnection = {
  __typename?: 'ConfigConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConfigEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConfigCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emailAddress: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConfigCreateManyInlineInput = {
  /** Connect multiple existing Config documents */
  connect?: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Create and connect multiple existing Config documents */
  create?: InputMaybe<Array<ConfigCreateInput>>;
};

export type ConfigCreateOneInlineInput = {
  /** Connect one existing Config document */
  connect?: InputMaybe<ConfigWhereUniqueInput>;
  /** Create and connect one Config document */
  create?: InputMaybe<ConfigCreateInput>;
};

/** An edge in a connection. */
export type ConfigEdge = {
  __typename?: 'ConfigEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Config;
};

/** Identifies documents */
export type ConfigManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ConfigWhereStageInput>;
  documentInStages_none?: InputMaybe<ConfigWhereStageInput>;
  documentInStages_some?: InputMaybe<ConfigWhereStageInput>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ConfigOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConfigUpdateInput = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigUpdateManyInlineInput = {
  /** Connect multiple existing Config documents */
  connect?: InputMaybe<Array<ConfigConnectInput>>;
  /** Create and connect multiple Config documents */
  create?: InputMaybe<Array<ConfigCreateInput>>;
  /** Delete multiple Config documents */
  delete?: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Disconnect multiple Config documents */
  disconnect?: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Config documents */
  set?: InputMaybe<Array<ConfigWhereUniqueInput>>;
  /** Update multiple Config documents */
  update?: InputMaybe<Array<ConfigUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Config documents */
  upsert?: InputMaybe<Array<ConfigUpsertWithNestedWhereUniqueInput>>;
};

export type ConfigUpdateManyInput = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConfigUpdateManyInput;
  /** Document search */
  where: ConfigWhereInput;
};

export type ConfigUpdateOneInlineInput = {
  /** Connect existing Config document */
  connect?: InputMaybe<ConfigWhereUniqueInput>;
  /** Create and connect one Config document */
  create?: InputMaybe<ConfigCreateInput>;
  /** Delete currently connected Config document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Config document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Config document */
  update?: InputMaybe<ConfigUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Config document */
  upsert?: InputMaybe<ConfigUpsertWithNestedWhereUniqueInput>;
};

export type ConfigUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConfigUpdateInput;
  /** Unique document search */
  where: ConfigWhereUniqueInput;
};

export type ConfigUpsertInput = {
  /** Create document if it didn't exist */
  create: ConfigCreateInput;
  /** Update document if it exists */
  update: ConfigUpdateInput;
};

export type ConfigUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConfigUpsertInput;
  /** Unique document search */
  where: ConfigWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ConfigWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ConfigWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ConfigWhereStageInput>;
  documentInStages_none?: InputMaybe<ConfigWhereStageInput>;
  documentInStages_some?: InputMaybe<ConfigWhereStageInput>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ConfigWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ConfigWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Config record uniquely */
export type ConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Contact = Entity & {
  __typename?: 'Contact';
  emailAddress?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
};

export type ContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactConnection = {
  __typename?: 'ContactConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactCreateInput = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCreateManyInlineInput = {
  /** Create and connect multiple existing Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>;
};

export type ContactCreateOneInlineInput = {
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>;
};

export type ContactCreateWithPositionInput = {
  /** Document to create */
  data: ContactCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Contact;
};

export type ContactForm = Entity & {
  __typename?: 'ContactForm';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type ContactFormConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactFormWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactFormConnection = {
  __typename?: 'ContactFormConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactFormEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactFormCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormCreateManyInlineInput = {
  /** Create and connect multiple existing ContactForm documents */
  create?: InputMaybe<Array<ContactFormCreateInput>>;
};

export type ContactFormCreateOneInlineInput = {
  /** Create and connect one ContactForm document */
  create?: InputMaybe<ContactFormCreateInput>;
};

export type ContactFormCreateWithPositionInput = {
  /** Document to create */
  data: ContactFormCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactFormEdge = {
  __typename?: 'ContactFormEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContactForm;
};

/** Identifies documents */
export type ContactFormManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum ContactFormOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ContactFormParent = ComponentsContainer;

export type ContactFormParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type ContactFormParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type ContactFormParentCreateManyInlineInput = {
  /** Create and connect multiple existing ContactFormParent documents */
  create?: InputMaybe<Array<ContactFormParentCreateInput>>;
};

export type ContactFormParentCreateOneInlineInput = {
  /** Create and connect one ContactFormParent document */
  create?: InputMaybe<ContactFormParentCreateInput>;
};

export type ContactFormParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type ContactFormParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type ContactFormParentUpdateManyInlineInput = {
  /** Create and connect multiple ContactFormParent component instances */
  create?: InputMaybe<Array<ContactFormParentCreateWithPositionInput>>;
  /** Delete multiple ContactFormParent documents */
  delete?: InputMaybe<Array<ContactFormParentWhereUniqueInput>>;
  /** Update multiple ContactFormParent component instances */
  update?: InputMaybe<Array<ContactFormParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactFormParent component instances */
  upsert?: InputMaybe<Array<ContactFormParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactFormParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type ContactFormParentUpdateOneInlineInput = {
  /** Create and connect one ContactFormParent document */
  create?: InputMaybe<ContactFormParentCreateInput>;
  /** Delete currently connected ContactFormParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactFormParent document */
  update?: InputMaybe<ContactFormParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactFormParent document */
  upsert?: InputMaybe<ContactFormParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContactFormParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type ContactFormParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContactFormParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type ContactFormParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type ContactFormUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormUpdateManyInlineInput = {
  /** Create and connect multiple ContactForm component instances */
  create?: InputMaybe<Array<ContactFormCreateWithPositionInput>>;
  /** Delete multiple ContactForm documents */
  delete?: InputMaybe<Array<ContactFormWhereUniqueInput>>;
  /** Update multiple ContactForm component instances */
  update?: InputMaybe<Array<ContactFormUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactForm component instances */
  upsert?: InputMaybe<Array<ContactFormUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactFormUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactFormUpdateManyInput;
  /** Document search */
  where: ContactFormWhereInput;
};

export type ContactFormUpdateOneInlineInput = {
  /** Create and connect one ContactForm document */
  create?: InputMaybe<ContactFormCreateInput>;
  /** Delete currently connected ContactForm document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactForm document */
  update?: InputMaybe<ContactFormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactForm document */
  upsert?: InputMaybe<ContactFormUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactFormUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactFormUpdateInput;
  /** Unique document search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactFormCreateInput;
  /** Update document if it exists */
  update: ContactFormUpdateInput;
};

export type ContactFormUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactFormUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactFormUpsertInput;
  /** Unique document search */
  where: ContactFormWhereUniqueInput;
};

/** Identifies documents */
export type ContactFormWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References ContactForm record uniquely */
export type ContactFormWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type ContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ContactOrderByInput {
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC'
}

export type ContactParent = ComponentsContainer;

export type ContactParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type ContactParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type ContactParentCreateManyInlineInput = {
  /** Create and connect multiple existing ContactParent documents */
  create?: InputMaybe<Array<ContactParentCreateInput>>;
};

export type ContactParentCreateOneInlineInput = {
  /** Create and connect one ContactParent document */
  create?: InputMaybe<ContactParentCreateInput>;
};

export type ContactParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type ContactParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type ContactParentUpdateManyInlineInput = {
  /** Create and connect multiple ContactParent component instances */
  create?: InputMaybe<Array<ContactParentCreateWithPositionInput>>;
  /** Delete multiple ContactParent documents */
  delete?: InputMaybe<Array<ContactParentWhereUniqueInput>>;
  /** Update multiple ContactParent component instances */
  update?: InputMaybe<Array<ContactParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactParent component instances */
  upsert?: InputMaybe<Array<ContactParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type ContactParentUpdateOneInlineInput = {
  /** Create and connect one ContactParent document */
  create?: InputMaybe<ContactParentCreateInput>;
  /** Delete currently connected ContactParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactParent document */
  update?: InputMaybe<ContactParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactParent document */
  upsert?: InputMaybe<ContactParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContactParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type ContactParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContactParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type ContactParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type ContactParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type ContactUpdateInput = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUpdateManyInlineInput = {
  /** Create and connect multiple Contact component instances */
  create?: InputMaybe<Array<ContactCreateWithPositionInput>>;
  /** Delete multiple Contact documents */
  delete?: InputMaybe<Array<ContactWhereUniqueInput>>;
  /** Update multiple Contact component instances */
  update?: InputMaybe<Array<ContactUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Contact component instances */
  upsert?: InputMaybe<Array<ContactUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactUpdateManyInput = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactUpdateManyInput;
  /** Document search */
  where: ContactWhereInput;
};

export type ContactUpdateOneInlineInput = {
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>;
  /** Delete currently connected Contact document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Contact document */
  update?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Contact document */
  upsert?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
};

export type ContactUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactWhereUniqueInput;
};

export type ContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactUpdateInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

export type ContactUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCreateInput;
  /** Update document if it exists */
  update: ContactUpdateInput;
};

export type ContactUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactWhereUniqueInput;
};

export type ContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactUpsertInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

/** Identifies documents */
export type ContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emailAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emailAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emailAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emailAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Contact record uniquely */
export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  About = 'About',
  /** Asset system model */
  Asset = 'Asset',
  Client = 'Client',
  ComponentsContainer = 'ComponentsContainer',
  Config = 'Config',
  Contact = 'Contact',
  ContactForm = 'ContactForm',
  Footer = 'Footer',
  GitHubRepositories = 'GitHubRepositories',
  Hero = 'Hero',
  Job = 'Job',
  Jobs = 'Jobs',
  Navigation = 'Navigation',
  Page = 'Page',
  Project = 'Project',
  ProjectsIOs = 'Projects_iOS',
  ProjectsWeb = 'Projects_web',
  Seo = 'SEO',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  SocialNetwork = 'SocialNetwork',
  Statistics = 'Statistics',
  StatisticsItem = 'StatisticsItem',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Footer = Entity & {
  __typename?: 'Footer';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  socialNetworks: Array<SocialNetwork>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']['output']>;
  yearFrom?: Maybe<Scalars['Date']['output']>;
};


export type FooterSocialNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialNetworkWhereInput>;
};

export type FooterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterConnection = {
  __typename?: 'FooterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FooterCreateInput = {
  socialNetworks?: InputMaybe<SocialNetworkCreateManyInlineInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  yearFrom?: InputMaybe<Scalars['Date']['input']>;
};

export type FooterCreateManyInlineInput = {
  /** Create and connect multiple existing Footer documents */
  create?: InputMaybe<Array<FooterCreateInput>>;
};

export type FooterCreateOneInlineInput = {
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>;
};

export type FooterCreateWithPositionInput = {
  /** Document to create */
  data: FooterCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FooterEdge = {
  __typename?: 'FooterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Footer;
};

/** Identifies documents */
export type FooterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  socialNetworks_every?: InputMaybe<SocialNetworkWhereInput>;
  socialNetworks_none?: InputMaybe<SocialNetworkWhereInput>;
  socialNetworks_some?: InputMaybe<SocialNetworkWhereInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
  yearFrom?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  yearFrom_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  yearFrom_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  yearFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  yearFrom_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  yearFrom_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  yearFrom_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  yearFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export enum FooterOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  YearFromAsc = 'yearFrom_ASC',
  YearFromDesc = 'yearFrom_DESC'
}

export type FooterParent = ComponentsContainer;

export type FooterParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type FooterParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type FooterParentCreateManyInlineInput = {
  /** Create and connect multiple existing FooterParent documents */
  create?: InputMaybe<Array<FooterParentCreateInput>>;
};

export type FooterParentCreateOneInlineInput = {
  /** Create and connect one FooterParent document */
  create?: InputMaybe<FooterParentCreateInput>;
};

export type FooterParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type FooterParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type FooterParentUpdateManyInlineInput = {
  /** Create and connect multiple FooterParent component instances */
  create?: InputMaybe<Array<FooterParentCreateWithPositionInput>>;
  /** Delete multiple FooterParent documents */
  delete?: InputMaybe<Array<FooterParentWhereUniqueInput>>;
  /** Update multiple FooterParent component instances */
  update?: InputMaybe<Array<FooterParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FooterParent component instances */
  upsert?: InputMaybe<Array<FooterParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type FooterParentUpdateOneInlineInput = {
  /** Create and connect one FooterParent document */
  create?: InputMaybe<FooterParentCreateInput>;
  /** Delete currently connected FooterParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FooterParent document */
  update?: InputMaybe<FooterParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterParent document */
  upsert?: InputMaybe<FooterParentUpsertWithNestedWhereUniqueInput>;
};

export type FooterParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FooterParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type FooterParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FooterParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type FooterParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type FooterParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type FooterUpdateInput = {
  socialNetworks?: InputMaybe<SocialNetworkUpdateManyInlineInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  yearFrom?: InputMaybe<Scalars['Date']['input']>;
};

export type FooterUpdateManyInlineInput = {
  /** Create and connect multiple Footer component instances */
  create?: InputMaybe<Array<FooterCreateWithPositionInput>>;
  /** Delete multiple Footer documents */
  delete?: InputMaybe<Array<FooterWhereUniqueInput>>;
  /** Update multiple Footer component instances */
  update?: InputMaybe<Array<FooterUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Footer component instances */
  upsert?: InputMaybe<Array<FooterUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterUpdateManyInput = {
  text?: InputMaybe<Scalars['String']['input']>;
  yearFrom?: InputMaybe<Scalars['Date']['input']>;
};

export type FooterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterUpdateManyInput;
  /** Document search */
  where: FooterWhereInput;
};

export type FooterUpdateOneInlineInput = {
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>;
  /** Delete currently connected Footer document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Footer document */
  update?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Footer document */
  upsert?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>;
};

export type FooterUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FooterUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterWhereUniqueInput;
};

export type FooterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterUpdateInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

export type FooterUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterCreateInput;
  /** Update document if it exists */
  update: FooterUpdateInput;
};

export type FooterUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FooterUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterWhereUniqueInput;
};

export type FooterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterUpsertInput;
  /** Unique document search */
  where: FooterWhereUniqueInput;
};

/** Identifies documents */
export type FooterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  socialNetworks_every?: InputMaybe<SocialNetworkWhereInput>;
  socialNetworks_none?: InputMaybe<SocialNetworkWhereInput>;
  socialNetworks_some?: InputMaybe<SocialNetworkWhereInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
  yearFrom?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  yearFrom_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  yearFrom_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  yearFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  yearFrom_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  yearFrom_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  yearFrom_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  yearFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GitHubRepositories = Entity & {
  __typename?: 'GitHubRepositories';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  limit: Scalars['Int']['output'];
  /** System stage field */
  stage: Stage;
};

export type GitHubRepositoriesConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GitHubRepositoriesWhereUniqueInput;
};

/** A connection to a list of items. */
export type GitHubRepositoriesConnection = {
  __typename?: 'GitHubRepositoriesConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GitHubRepositoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GitHubRepositoriesCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
};

export type GitHubRepositoriesCreateManyInlineInput = {
  /** Create and connect multiple existing GitHubRepositories documents */
  create?: InputMaybe<Array<GitHubRepositoriesCreateInput>>;
};

export type GitHubRepositoriesCreateOneInlineInput = {
  /** Create and connect one GitHubRepositories document */
  create?: InputMaybe<GitHubRepositoriesCreateInput>;
};

export type GitHubRepositoriesCreateWithPositionInput = {
  /** Document to create */
  data: GitHubRepositoriesCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type GitHubRepositoriesEdge = {
  __typename?: 'GitHubRepositoriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GitHubRepositories;
};

/** Identifies documents */
export type GitHubRepositoriesManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  limit_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  limit_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  limit_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  limit_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  limit_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  limit_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  limit_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum GitHubRepositoriesOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LimitAsc = 'limit_ASC',
  LimitDesc = 'limit_DESC'
}

export type GitHubRepositoriesParent = ComponentsContainer;

export type GitHubRepositoriesParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type GitHubRepositoriesParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type GitHubRepositoriesParentCreateManyInlineInput = {
  /** Create and connect multiple existing GitHubRepositoriesParent documents */
  create?: InputMaybe<Array<GitHubRepositoriesParentCreateInput>>;
};

export type GitHubRepositoriesParentCreateOneInlineInput = {
  /** Create and connect one GitHubRepositoriesParent document */
  create?: InputMaybe<GitHubRepositoriesParentCreateInput>;
};

export type GitHubRepositoriesParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type GitHubRepositoriesParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type GitHubRepositoriesParentUpdateManyInlineInput = {
  /** Create and connect multiple GitHubRepositoriesParent component instances */
  create?: InputMaybe<Array<GitHubRepositoriesParentCreateWithPositionInput>>;
  /** Delete multiple GitHubRepositoriesParent documents */
  delete?: InputMaybe<Array<GitHubRepositoriesParentWhereUniqueInput>>;
  /** Update multiple GitHubRepositoriesParent component instances */
  update?: InputMaybe<Array<GitHubRepositoriesParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GitHubRepositoriesParent component instances */
  upsert?: InputMaybe<Array<GitHubRepositoriesParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GitHubRepositoriesParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type GitHubRepositoriesParentUpdateOneInlineInput = {
  /** Create and connect one GitHubRepositoriesParent document */
  create?: InputMaybe<GitHubRepositoriesParentCreateInput>;
  /** Delete currently connected GitHubRepositoriesParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GitHubRepositoriesParent document */
  update?: InputMaybe<GitHubRepositoriesParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GitHubRepositoriesParent document */
  upsert?: InputMaybe<GitHubRepositoriesParentUpsertWithNestedWhereUniqueInput>;
};

export type GitHubRepositoriesParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type GitHubRepositoriesParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type GitHubRepositoriesParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type GitHubRepositoriesParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type GitHubRepositoriesParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type GitHubRepositoriesParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type GitHubRepositoriesUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type GitHubRepositoriesUpdateManyInlineInput = {
  /** Create and connect multiple GitHubRepositories component instances */
  create?: InputMaybe<Array<GitHubRepositoriesCreateWithPositionInput>>;
  /** Delete multiple GitHubRepositories documents */
  delete?: InputMaybe<Array<GitHubRepositoriesWhereUniqueInput>>;
  /** Update multiple GitHubRepositories component instances */
  update?: InputMaybe<Array<GitHubRepositoriesUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GitHubRepositories component instances */
  upsert?: InputMaybe<Array<GitHubRepositoriesUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GitHubRepositoriesUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type GitHubRepositoriesUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GitHubRepositoriesUpdateManyInput;
  /** Document search */
  where: GitHubRepositoriesWhereInput;
};

export type GitHubRepositoriesUpdateOneInlineInput = {
  /** Create and connect one GitHubRepositories document */
  create?: InputMaybe<GitHubRepositoriesCreateInput>;
  /** Delete currently connected GitHubRepositories document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GitHubRepositories document */
  update?: InputMaybe<GitHubRepositoriesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GitHubRepositories document */
  upsert?: InputMaybe<GitHubRepositoriesUpsertWithNestedWhereUniqueInput>;
};

export type GitHubRepositoriesUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<GitHubRepositoriesUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GitHubRepositoriesWhereUniqueInput;
};

export type GitHubRepositoriesUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GitHubRepositoriesUpdateInput;
  /** Unique document search */
  where: GitHubRepositoriesWhereUniqueInput;
};

export type GitHubRepositoriesUpsertInput = {
  /** Create document if it didn't exist */
  create: GitHubRepositoriesCreateInput;
  /** Update document if it exists */
  update: GitHubRepositoriesUpdateInput;
};

export type GitHubRepositoriesUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<GitHubRepositoriesUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GitHubRepositoriesWhereUniqueInput;
};

export type GitHubRepositoriesUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GitHubRepositoriesUpsertInput;
  /** Unique document search */
  where: GitHubRepositoriesWhereUniqueInput;
};

/** Identifies documents */
export type GitHubRepositoriesWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GitHubRepositoriesWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  limit_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  limit_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  limit_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  limit_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  limit_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  limit_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  limit_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** References GitHubRepositories record uniquely */
export type GitHubRepositoriesWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  content: RichText;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  content: Scalars['RichTextAST']['input'];
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum HeroOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeroParent = ComponentsContainer;

export type HeroParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type HeroParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type HeroParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Create and connect multiple HeroParent component instances */
  create?: InputMaybe<Array<HeroParentCreateWithPositionInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent component instances */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HeroParent component instances */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type HeroUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

export type Job = Entity & Node & {
  __typename?: 'Job';
  client?: Maybe<Client>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dateFrom: Scalars['Date']['output'];
  dateTo?: Maybe<Scalars['Date']['output']>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Job>;
  /** List of Job versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type JobClientArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type JobCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type JobDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type JobHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type JobPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type JobScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type JobUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type JobConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: JobWhereUniqueInput;
};

/** A connection to a list of items. */
export type JobConnection = {
  __typename?: 'JobConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<JobEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type JobCreateInput = {
  cldys9vib1p3z01uicxtlhbhm?: InputMaybe<JobsCreateManyInlineInput>;
  client?: InputMaybe<ClientCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateFrom: Scalars['Date']['input'];
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  description: Scalars['RichTextAST']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JobCreateManyInlineInput = {
  /** Connect multiple existing Job documents */
  connect?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Create and connect multiple existing Job documents */
  create?: InputMaybe<Array<JobCreateInput>>;
};

export type JobCreateOneInlineInput = {
  /** Connect one existing Job document */
  connect?: InputMaybe<JobWhereUniqueInput>;
  /** Create and connect one Job document */
  create?: InputMaybe<JobCreateInput>;
};

/** An edge in a connection. */
export type JobEdge = {
  __typename?: 'JobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Job;
};

/** Identifies documents */
export type JobManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<ClientWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateFrom_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateFrom_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateFrom_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateFrom_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateFrom_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateTo_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateTo_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateTo_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateTo_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateTo_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateTo_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<JobWhereStageInput>;
  documentInStages_none?: InputMaybe<JobWhereStageInput>;
  documentInStages_some?: InputMaybe<JobWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum JobOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateFromAsc = 'dateFrom_ASC',
  DateFromDesc = 'dateFrom_DESC',
  DateToAsc = 'dateTo_ASC',
  DateToDesc = 'dateTo_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type JobUpdateInput = {
  cldys9vib1p3z01uicxtlhbhm?: InputMaybe<JobsUpdateManyInlineInput>;
  client?: InputMaybe<ClientUpdateOneInlineInput>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobUpdateManyInlineInput = {
  /** Connect multiple existing Job documents */
  connect?: InputMaybe<Array<JobConnectInput>>;
  /** Create and connect multiple Job documents */
  create?: InputMaybe<Array<JobCreateInput>>;
  /** Delete multiple Job documents */
  delete?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Disconnect multiple Job documents */
  disconnect?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Job documents */
  set?: InputMaybe<Array<JobWhereUniqueInput>>;
  /** Update multiple Job documents */
  update?: InputMaybe<Array<JobUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Job documents */
  upsert?: InputMaybe<Array<JobUpsertWithNestedWhereUniqueInput>>;
};

export type JobUpdateManyInput = {
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: JobUpdateManyInput;
  /** Document search */
  where: JobWhereInput;
};

export type JobUpdateOneInlineInput = {
  /** Connect existing Job document */
  connect?: InputMaybe<JobWhereUniqueInput>;
  /** Create and connect one Job document */
  create?: InputMaybe<JobCreateInput>;
  /** Delete currently connected Job document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Job document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Job document */
  update?: InputMaybe<JobUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Job document */
  upsert?: InputMaybe<JobUpsertWithNestedWhereUniqueInput>;
};

export type JobUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: JobUpdateInput;
  /** Unique document search */
  where: JobWhereUniqueInput;
};

export type JobUpsertInput = {
  /** Create document if it didn't exist */
  create: JobCreateInput;
  /** Update document if it exists */
  update: JobUpdateInput;
};

export type JobUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: JobUpsertInput;
  /** Unique document search */
  where: JobWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type JobWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type JobWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<ClientWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateFrom_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateFrom_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateFrom_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateFrom_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateFrom_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateFrom_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateFrom_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateTo_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateTo_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateTo_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateTo_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateTo_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateTo_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<JobWhereStageInput>;
  documentInStages_none?: InputMaybe<JobWhereStageInput>;
  documentInStages_some?: InputMaybe<JobWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type JobWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<JobWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Job record uniquely */
export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Jobs = Entity & {
  __typename?: 'Jobs';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  jobs: Array<Job>;
  /** System stage field */
  stage: Stage;
};


export type JobsJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobWhereInput>;
};

export type JobsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: JobsWhereUniqueInput;
};

/** A connection to a list of items. */
export type JobsConnection = {
  __typename?: 'JobsConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<JobsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type JobsCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  jobs?: InputMaybe<JobCreateManyInlineInput>;
};

export type JobsCreateManyInlineInput = {
  /** Create and connect multiple existing Jobs documents */
  create?: InputMaybe<Array<JobsCreateInput>>;
};

export type JobsCreateOneInlineInput = {
  /** Create and connect one Jobs document */
  create?: InputMaybe<JobsCreateInput>;
};

export type JobsCreateWithPositionInput = {
  /** Document to create */
  data: JobsCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type JobsEdge = {
  __typename?: 'JobsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Jobs;
};

/** Identifies documents */
export type JobsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
};

export enum JobsOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type JobsParent = ComponentsContainer;

export type JobsParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type JobsParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type JobsParentCreateManyInlineInput = {
  /** Create and connect multiple existing JobsParent documents */
  create?: InputMaybe<Array<JobsParentCreateInput>>;
};

export type JobsParentCreateOneInlineInput = {
  /** Create and connect one JobsParent document */
  create?: InputMaybe<JobsParentCreateInput>;
};

export type JobsParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type JobsParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type JobsParentUpdateManyInlineInput = {
  /** Create and connect multiple JobsParent component instances */
  create?: InputMaybe<Array<JobsParentCreateWithPositionInput>>;
  /** Delete multiple JobsParent documents */
  delete?: InputMaybe<Array<JobsParentWhereUniqueInput>>;
  /** Update multiple JobsParent component instances */
  update?: InputMaybe<Array<JobsParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple JobsParent component instances */
  upsert?: InputMaybe<Array<JobsParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type JobsParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type JobsParentUpdateOneInlineInput = {
  /** Create and connect one JobsParent document */
  create?: InputMaybe<JobsParentCreateInput>;
  /** Delete currently connected JobsParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single JobsParent document */
  update?: InputMaybe<JobsParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single JobsParent document */
  upsert?: InputMaybe<JobsParentUpsertWithNestedWhereUniqueInput>;
};

export type JobsParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type JobsParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type JobsParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type JobsParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type JobsParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type JobsParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type JobsUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  jobs?: InputMaybe<JobUpdateManyInlineInput>;
};

export type JobsUpdateManyInlineInput = {
  /** Create and connect multiple Jobs component instances */
  create?: InputMaybe<Array<JobsCreateWithPositionInput>>;
  /** Delete multiple Jobs documents */
  delete?: InputMaybe<Array<JobsWhereUniqueInput>>;
  /** Update multiple Jobs component instances */
  update?: InputMaybe<Array<JobsUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Jobs component instances */
  upsert?: InputMaybe<Array<JobsUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type JobsUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type JobsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: JobsUpdateManyInput;
  /** Document search */
  where: JobsWhereInput;
};

export type JobsUpdateOneInlineInput = {
  /** Create and connect one Jobs document */
  create?: InputMaybe<JobsCreateInput>;
  /** Delete currently connected Jobs document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Jobs document */
  update?: InputMaybe<JobsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Jobs document */
  upsert?: InputMaybe<JobsUpsertWithNestedWhereUniqueInput>;
};

export type JobsUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<JobsUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: JobsWhereUniqueInput;
};

export type JobsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: JobsUpdateInput;
  /** Unique document search */
  where: JobsWhereUniqueInput;
};

export type JobsUpsertInput = {
  /** Create document if it didn't exist */
  create: JobsCreateInput;
  /** Update document if it exists */
  update: JobsUpdateInput;
};

export type JobsUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<JobsUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: JobsWhereUniqueInput;
};

export type JobsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: JobsUpsertInput;
  /** Unique document search */
  where: JobsWhereUniqueInput;
};

/** Identifies documents */
export type JobsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<JobsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<JobsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<JobsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
};

/** References Jobs record uniquely */
export type JobsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one client */
  createClient?: Maybe<Client>;
  /** Create one config */
  createConfig?: Maybe<Config>;
  /** Create one job */
  createJob?: Maybe<Job>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one socialNetwork */
  createSocialNetwork?: Maybe<SocialNetwork>;
  /** Create one statisticsItem */
  createStatisticsItem?: Maybe<StatisticsItem>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one client from _all_ existing stages. Returns deleted document. */
  deleteClient?: Maybe<Client>;
  /** Delete one config from _all_ existing stages. Returns deleted document. */
  deleteConfig?: Maybe<Config>;
  /** Delete one job from _all_ existing stages. Returns deleted document. */
  deleteJob?: Maybe<Job>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Client documents
   * @deprecated Please use the new paginated many mutation (deleteManyClientsConnection)
   */
  deleteManyClients: BatchPayload;
  /** Delete many Client documents, return deleted documents */
  deleteManyClientsConnection: ClientConnection;
  /**
   * Delete many Config documents
   * @deprecated Please use the new paginated many mutation (deleteManyConfigsConnection)
   */
  deleteManyConfigs: BatchPayload;
  /** Delete many Config documents, return deleted documents */
  deleteManyConfigsConnection: ConfigConnection;
  /**
   * Delete many Job documents
   * @deprecated Please use the new paginated many mutation (deleteManyJobsConnection)
   */
  deleteManyJobs: BatchPayload;
  /** Delete many Job documents, return deleted documents */
  deleteManyJobsConnection: JobConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialNetworksConnection)
   */
  deleteManySocialNetworks: BatchPayload;
  /** Delete many SocialNetwork documents, return deleted documents */
  deleteManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Delete many StatisticsItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyStatisticsItemsConnection)
   */
  deleteManyStatisticsItems: BatchPayload;
  /** Delete many StatisticsItem documents, return deleted documents */
  deleteManyStatisticsItemsConnection: StatisticsItemConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one socialNetwork from _all_ existing stages. Returns deleted document. */
  deleteSocialNetwork?: Maybe<SocialNetwork>;
  /** Delete one statisticsItem from _all_ existing stages. Returns deleted document. */
  deleteStatisticsItem?: Maybe<StatisticsItem>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one client */
  publishClient?: Maybe<Client>;
  /** Publish one config */
  publishConfig?: Maybe<Config>;
  /** Publish one job */
  publishJob?: Maybe<Job>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Client documents
   * @deprecated Please use the new paginated many mutation (publishManyClientsConnection)
   */
  publishManyClients: BatchPayload;
  /** Publish many Client documents */
  publishManyClientsConnection: ClientConnection;
  /**
   * Publish many Config documents
   * @deprecated Please use the new paginated many mutation (publishManyConfigsConnection)
   */
  publishManyConfigs: BatchPayload;
  /** Publish many Config documents */
  publishManyConfigsConnection: ConfigConnection;
  /**
   * Publish many Job documents
   * @deprecated Please use the new paginated many mutation (publishManyJobsConnection)
   */
  publishManyJobs: BatchPayload;
  /** Publish many Job documents */
  publishManyJobsConnection: JobConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (publishManySocialNetworksConnection)
   */
  publishManySocialNetworks: BatchPayload;
  /** Publish many SocialNetwork documents */
  publishManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Publish many StatisticsItem documents
   * @deprecated Please use the new paginated many mutation (publishManyStatisticsItemsConnection)
   */
  publishManyStatisticsItems: BatchPayload;
  /** Publish many StatisticsItem documents */
  publishManyStatisticsItemsConnection: StatisticsItemConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one socialNetwork */
  publishSocialNetwork?: Maybe<SocialNetwork>;
  /** Publish one statisticsItem */
  publishStatisticsItem?: Maybe<StatisticsItem>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one client */
  schedulePublishClient?: Maybe<Client>;
  /** Schedule to publish one config */
  schedulePublishConfig?: Maybe<Config>;
  /** Schedule to publish one job */
  schedulePublishJob?: Maybe<Job>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one socialNetwork */
  schedulePublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Schedule to publish one statisticsItem */
  schedulePublishStatisticsItem?: Maybe<StatisticsItem>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one client from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishClient?: Maybe<Client>;
  /** Unpublish one config from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConfig?: Maybe<Config>;
  /** Unpublish one job from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishJob?: Maybe<Job>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one socialNetwork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Unpublish one statisticsItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStatisticsItem?: Maybe<StatisticsItem>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one client from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishClient?: Maybe<Client>;
  /** Unpublish one config from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConfig?: Maybe<Config>;
  /** Unpublish one job from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishJob?: Maybe<Job>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Client documents
   * @deprecated Please use the new paginated many mutation (unpublishManyClientsConnection)
   */
  unpublishManyClients: BatchPayload;
  /** Find many Client documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyClientsConnection: ClientConnection;
  /**
   * Unpublish many Config documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConfigsConnection)
   */
  unpublishManyConfigs: BatchPayload;
  /** Find many Config documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConfigsConnection: ConfigConnection;
  /**
   * Unpublish many Job documents
   * @deprecated Please use the new paginated many mutation (unpublishManyJobsConnection)
   */
  unpublishManyJobs: BatchPayload;
  /** Find many Job documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyJobsConnection: JobConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialNetworksConnection)
   */
  unpublishManySocialNetworks: BatchPayload;
  /** Find many SocialNetwork documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Unpublish many StatisticsItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStatisticsItemsConnection)
   */
  unpublishManyStatisticsItems: BatchPayload;
  /** Find many StatisticsItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStatisticsItemsConnection: StatisticsItemConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one socialNetwork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Unpublish one statisticsItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStatisticsItem?: Maybe<StatisticsItem>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one client */
  updateClient?: Maybe<Client>;
  /** Update one config */
  updateConfig?: Maybe<Config>;
  /** Update one job */
  updateJob?: Maybe<Job>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many clients
   * @deprecated Please use the new paginated many mutation (updateManyClientsConnection)
   */
  updateManyClients: BatchPayload;
  /** Update many Client documents */
  updateManyClientsConnection: ClientConnection;
  /**
   * Update many configs
   * @deprecated Please use the new paginated many mutation (updateManyConfigsConnection)
   */
  updateManyConfigs: BatchPayload;
  /** Update many Config documents */
  updateManyConfigsConnection: ConfigConnection;
  /**
   * Update many jobs
   * @deprecated Please use the new paginated many mutation (updateManyJobsConnection)
   */
  updateManyJobs: BatchPayload;
  /** Update many Job documents */
  updateManyJobsConnection: JobConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many socialNetworks
   * @deprecated Please use the new paginated many mutation (updateManySocialNetworksConnection)
   */
  updateManySocialNetworks: BatchPayload;
  /** Update many SocialNetwork documents */
  updateManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Update many statisticsItems
   * @deprecated Please use the new paginated many mutation (updateManyStatisticsItemsConnection)
   */
  updateManyStatisticsItems: BatchPayload;
  /** Update many StatisticsItem documents */
  updateManyStatisticsItemsConnection: StatisticsItemConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one socialNetwork */
  updateSocialNetwork?: Maybe<SocialNetwork>;
  /** Update one statisticsItem */
  updateStatisticsItem?: Maybe<StatisticsItem>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one client */
  upsertClient?: Maybe<Client>;
  /** Upsert one config */
  upsertConfig?: Maybe<Config>;
  /** Upsert one job */
  upsertJob?: Maybe<Job>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one socialNetwork */
  upsertSocialNetwork?: Maybe<SocialNetwork>;
  /** Upsert one statisticsItem */
  upsertStatisticsItem?: Maybe<StatisticsItem>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateClientArgs = {
  data: ClientCreateInput;
};


export type MutationCreateConfigArgs = {
  data: ConfigCreateInput;
};


export type MutationCreateJobArgs = {
  data: JobCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSocialNetworkArgs = {
  data: SocialNetworkCreateInput;
};


export type MutationCreateStatisticsItemArgs = {
  data: StatisticsItemCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteClientArgs = {
  where: ClientWhereUniqueInput;
};


export type MutationDeleteConfigArgs = {
  where: ConfigWhereUniqueInput;
};


export type MutationDeleteJobArgs = {
  where: JobWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyClientsArgs = {
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationDeleteManyClientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationDeleteManyConfigsArgs = {
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationDeleteManyConfigsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationDeleteManyJobsArgs = {
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationDeleteManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManySocialNetworksArgs = {
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationDeleteManySocialNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationDeleteManyStatisticsItemsArgs = {
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationDeleteManyStatisticsItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSocialNetworkArgs = {
  where: SocialNetworkWhereUniqueInput;
};


export type MutationDeleteStatisticsItemArgs = {
  where: StatisticsItemWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishClientArgs = {
  to?: Array<Stage>;
  where: ClientWhereUniqueInput;
};


export type MutationPublishConfigArgs = {
  to?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationPublishJobArgs = {
  to?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyClientsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationPublishManyClientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationPublishManyConfigsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationPublishManyConfigsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationPublishManyJobsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationPublishManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManySocialNetworksArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationPublishManySocialNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationPublishManyStatisticsItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationPublishManyStatisticsItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationPublishSocialNetworkArgs = {
  to?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationPublishStatisticsItemArgs = {
  to?: Array<Stage>;
  where: StatisticsItemWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishClientArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ClientWhereUniqueInput;
};


export type MutationSchedulePublishConfigArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationSchedulePublishJobArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishSocialNetworkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationSchedulePublishStatisticsItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: StatisticsItemWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishClientArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ClientWhereUniqueInput;
};


export type MutationScheduleUnpublishConfigArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ConfigWhereUniqueInput;
};


export type MutationScheduleUnpublishJobArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: JobWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishSocialNetworkArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationScheduleUnpublishStatisticsItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: StatisticsItemWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishClientArgs = {
  from?: Array<Stage>;
  where: ClientWhereUniqueInput;
};


export type MutationUnpublishConfigArgs = {
  from?: Array<Stage>;
  where: ConfigWhereUniqueInput;
};


export type MutationUnpublishJobArgs = {
  from?: Array<Stage>;
  where: JobWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyClientsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationUnpublishManyClientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationUnpublishManyConfigsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUnpublishManyConfigsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUnpublishManyJobsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUnpublishManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManySocialNetworksArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationUnpublishManySocialNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationUnpublishManyStatisticsItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationUnpublishManyStatisticsItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishSocialNetworkArgs = {
  from?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationUnpublishStatisticsItemArgs = {
  from?: Array<Stage>;
  where: StatisticsItemWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateClientArgs = {
  data: ClientUpdateInput;
  where: ClientWhereUniqueInput;
};


export type MutationUpdateConfigArgs = {
  data: ConfigUpdateInput;
  where: ConfigWhereUniqueInput;
};


export type MutationUpdateJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyClientsArgs = {
  data: ClientUpdateManyInput;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationUpdateManyClientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ClientUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClientManyWhereInput>;
};


export type MutationUpdateManyConfigsArgs = {
  data: ConfigUpdateManyInput;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUpdateManyConfigsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ConfigUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfigManyWhereInput>;
};


export type MutationUpdateManyJobsArgs = {
  data: JobUpdateManyInput;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUpdateManyJobsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: JobUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManySocialNetworksArgs = {
  data: SocialNetworkUpdateManyInput;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationUpdateManySocialNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SocialNetworkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
};


export type MutationUpdateManyStatisticsItemsArgs = {
  data: StatisticsItemUpdateManyInput;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationUpdateManyStatisticsItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: StatisticsItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatisticsItemManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSocialNetworkArgs = {
  data: SocialNetworkUpdateInput;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationUpdateStatisticsItemArgs = {
  data: StatisticsItemUpdateInput;
  where: StatisticsItemWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertClientArgs = {
  upsert: ClientUpsertInput;
  where: ClientWhereUniqueInput;
};


export type MutationUpsertConfigArgs = {
  upsert: ConfigUpsertInput;
  where: ConfigWhereUniqueInput;
};


export type MutationUpsertJobArgs = {
  upsert: JobUpsertInput;
  where: JobWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertSocialNetworkArgs = {
  upsert: SocialNetworkUpsertInput;
  where: SocialNetworkWhereUniqueInput;
};


export type MutationUpsertStatisticsItemArgs = {
  upsert: StatisticsItemUpsertInput;
  where: StatisticsItemWhereUniqueInput;
};

export type Navigation = Entity & {
  __typename?: 'Navigation';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  indexTitleFallback?: Maybe<Scalars['String']['output']>;
  isLanguageSelectorVisible: Scalars['Boolean']['output'];
  pages: Array<Page>;
  /** System stage field */
  stage: Stage;
};


export type NavigationPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  indexTitleFallback?: InputMaybe<Scalars['String']['input']>;
  isLanguageSelectorVisible: Scalars['Boolean']['input'];
  pages?: InputMaybe<PageCreateManyInlineInput>;
};

export type NavigationCreateManyInlineInput = {
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

export type NavigationCreateWithPositionInput = {
  /** Document to create */
  data: NavigationCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  indexTitleFallback?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  indexTitleFallback_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  indexTitleFallback_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  indexTitleFallback_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  indexTitleFallback_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  indexTitleFallback_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  indexTitleFallback_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  indexTitleFallback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  indexTitleFallback_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  indexTitleFallback_starts_with?: InputMaybe<Scalars['String']['input']>;
  isLanguageSelectorVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isLanguageSelectorVisible_not?: InputMaybe<Scalars['Boolean']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
};

export enum NavigationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexTitleFallbackAsc = 'indexTitleFallback_ASC',
  IndexTitleFallbackDesc = 'indexTitleFallback_DESC',
  IsLanguageSelectorVisibleAsc = 'isLanguageSelectorVisible_ASC',
  IsLanguageSelectorVisibleDesc = 'isLanguageSelectorVisible_DESC'
}

export type NavigationParent = ComponentsContainer;

export type NavigationParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type NavigationParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type NavigationParentCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationParent documents */
  create?: InputMaybe<Array<NavigationParentCreateInput>>;
};

export type NavigationParentCreateOneInlineInput = {
  /** Create and connect one NavigationParent document */
  create?: InputMaybe<NavigationParentCreateInput>;
};

export type NavigationParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type NavigationParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type NavigationParentUpdateManyInlineInput = {
  /** Create and connect multiple NavigationParent component instances */
  create?: InputMaybe<Array<NavigationParentCreateWithPositionInput>>;
  /** Delete multiple NavigationParent documents */
  delete?: InputMaybe<Array<NavigationParentWhereUniqueInput>>;
  /** Update multiple NavigationParent component instances */
  update?: InputMaybe<Array<NavigationParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavigationParent component instances */
  upsert?: InputMaybe<Array<NavigationParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type NavigationParentUpdateOneInlineInput = {
  /** Create and connect one NavigationParent document */
  create?: InputMaybe<NavigationParentCreateInput>;
  /** Delete currently connected NavigationParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationParent document */
  update?: InputMaybe<NavigationParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationParent document */
  upsert?: InputMaybe<NavigationParentUpsertWithNestedWhereUniqueInput>;
};

export type NavigationParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type NavigationParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type NavigationParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type NavigationParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type NavigationParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type NavigationUpdateInput = {
  indexTitleFallback?: InputMaybe<Scalars['String']['input']>;
  isLanguageSelectorVisible?: InputMaybe<Scalars['Boolean']['input']>;
  pages?: InputMaybe<PageUpdateManyInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Create and connect multiple Navigation component instances */
  create?: InputMaybe<Array<NavigationCreateWithPositionInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation component instances */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Navigation component instances */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationUpdateManyInput = {
  indexTitleFallback?: InputMaybe<Scalars['String']['input']>;
  isLanguageSelectorVisible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavigationUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavigationUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  indexTitleFallback?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  indexTitleFallback_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  indexTitleFallback_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  indexTitleFallback_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  indexTitleFallback_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  indexTitleFallback_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  indexTitleFallback_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  indexTitleFallback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  indexTitleFallback_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  indexTitleFallback_starts_with?: InputMaybe<Scalars['String']['input']>;
  isLanguageSelectorVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isLanguageSelectorVisible_not?: InputMaybe<Scalars['Boolean']['input']>;
  pages_every?: InputMaybe<PageWhereInput>;
  pages_none?: InputMaybe<PageWhereInput>;
  pages_some?: InputMaybe<PageWhereInput>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  components: ComponentsContainer;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  nestedPages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageComponentsArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageNestedPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  cle1ru7u13t4y01uf2npoa8jk?: InputMaybe<NavigationCreateManyInlineInput>;
  cm8aivdhh0s2s07vwe17p17h8?: InputMaybe<PageCreateManyInlineInput>;
  components: ComponentsContainerCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  nestedPages?: InputMaybe<PageCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<ComponentsContainerWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isHidden_not?: InputMaybe<Scalars['Boolean']['input']>;
  nestedPages_every?: InputMaybe<PageWhereInput>;
  nestedPages_none?: InputMaybe<PageWhereInput>;
  nestedPages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsHiddenAsc = 'isHidden_ASC',
  IsHiddenDesc = 'isHidden_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  cle1ru7u13t4y01uf2npoa8jk?: InputMaybe<NavigationUpdateManyInlineInput>;
  cm8aivdhh0s2s07vwe17p17h8?: InputMaybe<PageUpdateManyInlineInput>;
  components?: InputMaybe<ComponentsContainerUpdateOneInlineInput>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  nestedPages?: InputMaybe<PageUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<ComponentsContainerWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isHidden_not?: InputMaybe<Scalars['Boolean']['input']>;
  nestedPages_every?: InputMaybe<PageWhereInput>;
  nestedPages_none?: InputMaybe<PageWhereInput>;
  nestedPages_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum Platforms {
  IOs = 'iOS',
  Web = 'web'
}

export type Project = Entity & Node & {
  __typename?: 'Project';
  client?: Maybe<Client>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  name: Scalars['String']['output'];
  platform: Array<Platforms>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slogan?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  topics: Scalars['Json']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ProjectClientArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProjectImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  cldyzbl1l1xpg01rr0navgb9u?: InputMaybe<Projects_WebCreateManyInlineInput>;
  client?: InputMaybe<ClientCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String']['input'];
  platform?: InputMaybe<Array<Platforms>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  topics: Scalars['Json']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<ClientWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  platform?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array contains *all* items provided to the filter */
  platform_contains_all?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  platform_contains_none?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array contains at least one item provided to the filter */
  platform_contains_some?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  platform_not?: InputMaybe<Array<Platforms>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slogan_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slogan_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slogan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slogan_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slogan_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slogan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slogan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slogan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slogan_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  topics_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  topics_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlatformAsc = 'platform_ASC',
  PlatformDesc = 'platform_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SloganAsc = 'slogan_ASC',
  SloganDesc = 'slogan_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ProjectUpdateInput = {
  cldyzbl1l1xpg01rr0navgb9u?: InputMaybe<Projects_WebUpdateManyInlineInput>;
  client?: InputMaybe<ClientUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Platforms>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Scalars['Json']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Platforms>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Scalars['Json']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<ClientWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  platform?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array contains *all* items provided to the filter */
  platform_contains_all?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  platform_contains_none?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array contains at least one item provided to the filter */
  platform_contains_some?: InputMaybe<Array<Platforms>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  platform_not?: InputMaybe<Array<Platforms>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slogan_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slogan_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slogan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slogan_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slogan_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slogan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slogan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slogan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slogan_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  topics_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  topics_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Projects_IOs = Entity & {
  __typename?: 'Projects_iOS';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type Projects_IOsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: Projects_IOsWhereUniqueInput;
};

/** A connection to a list of items. */
export type Projects_IOsConnection = {
  __typename?: 'Projects_iOSConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<Projects_IOsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Projects_IOsCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type Projects_IOsCreateManyInlineInput = {
  /** Create and connect multiple existing Projects_iOS documents */
  create?: InputMaybe<Array<Projects_IOsCreateInput>>;
};

export type Projects_IOsCreateOneInlineInput = {
  /** Create and connect one Projects_iOS document */
  create?: InputMaybe<Projects_IOsCreateInput>;
};

export type Projects_IOsCreateWithPositionInput = {
  /** Document to create */
  data: Projects_IOsCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type Projects_IOsEdge = {
  __typename?: 'Projects_iOSEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Projects_IOs;
};

/** Identifies documents */
export type Projects_IOsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum Projects_IOsOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type Projects_IOsParent = ComponentsContainer;

export type Projects_IOsParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type Projects_IOsParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type Projects_IOsParentCreateManyInlineInput = {
  /** Create and connect multiple existing Projects_iOSParent documents */
  create?: InputMaybe<Array<Projects_IOsParentCreateInput>>;
};

export type Projects_IOsParentCreateOneInlineInput = {
  /** Create and connect one Projects_iOSParent document */
  create?: InputMaybe<Projects_IOsParentCreateInput>;
};

export type Projects_IOsParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type Projects_IOsParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type Projects_IOsParentUpdateManyInlineInput = {
  /** Create and connect multiple Projects_iOSParent component instances */
  create?: InputMaybe<Array<Projects_IOsParentCreateWithPositionInput>>;
  /** Delete multiple Projects_iOSParent documents */
  delete?: InputMaybe<Array<Projects_IOsParentWhereUniqueInput>>;
  /** Update multiple Projects_iOSParent component instances */
  update?: InputMaybe<Array<Projects_IOsParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Projects_iOSParent component instances */
  upsert?: InputMaybe<Array<Projects_IOsParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type Projects_IOsParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type Projects_IOsParentUpdateOneInlineInput = {
  /** Create and connect one Projects_iOSParent document */
  create?: InputMaybe<Projects_IOsParentCreateInput>;
  /** Delete currently connected Projects_iOSParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Projects_iOSParent document */
  update?: InputMaybe<Projects_IOsParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Projects_iOSParent document */
  upsert?: InputMaybe<Projects_IOsParentUpsertWithNestedWhereUniqueInput>;
};

export type Projects_IOsParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type Projects_IOsParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type Projects_IOsParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type Projects_IOsParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type Projects_IOsParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type Projects_IOsParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type Projects_IOsUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type Projects_IOsUpdateManyInlineInput = {
  /** Create and connect multiple Projects_iOS component instances */
  create?: InputMaybe<Array<Projects_IOsCreateWithPositionInput>>;
  /** Delete multiple Projects_iOS documents */
  delete?: InputMaybe<Array<Projects_IOsWhereUniqueInput>>;
  /** Update multiple Projects_iOS component instances */
  update?: InputMaybe<Array<Projects_IOsUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Projects_iOS component instances */
  upsert?: InputMaybe<Array<Projects_IOsUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type Projects_IOsUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type Projects_IOsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: Projects_IOsUpdateManyInput;
  /** Document search */
  where: Projects_IOsWhereInput;
};

export type Projects_IOsUpdateOneInlineInput = {
  /** Create and connect one Projects_iOS document */
  create?: InputMaybe<Projects_IOsCreateInput>;
  /** Delete currently connected Projects_iOS document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Projects_iOS document */
  update?: InputMaybe<Projects_IOsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Projects_iOS document */
  upsert?: InputMaybe<Projects_IOsUpsertWithNestedWhereUniqueInput>;
};

export type Projects_IOsUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<Projects_IOsUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: Projects_IOsWhereUniqueInput;
};

export type Projects_IOsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: Projects_IOsUpdateInput;
  /** Unique document search */
  where: Projects_IOsWhereUniqueInput;
};

export type Projects_IOsUpsertInput = {
  /** Create document if it didn't exist */
  create: Projects_IOsCreateInput;
  /** Update document if it exists */
  update: Projects_IOsUpdateInput;
};

export type Projects_IOsUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<Projects_IOsUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: Projects_IOsWhereUniqueInput;
};

export type Projects_IOsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: Projects_IOsUpsertInput;
  /** Unique document search */
  where: Projects_IOsWhereUniqueInput;
};

/** Identifies documents */
export type Projects_IOsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Projects_IOsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Projects_iOS record uniquely */
export type Projects_IOsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Projects_Web = Entity & {
  __typename?: 'Projects_web';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  projects: Array<Project>;
  /** System stage field */
  stage: Stage;
};


export type Projects_WebProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type Projects_WebConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: Projects_WebWhereUniqueInput;
};

/** A connection to a list of items. */
export type Projects_WebConnection = {
  __typename?: 'Projects_webConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<Projects_WebEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Projects_WebCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
};

export type Projects_WebCreateManyInlineInput = {
  /** Create and connect multiple existing Projects_web documents */
  create?: InputMaybe<Array<Projects_WebCreateInput>>;
};

export type Projects_WebCreateOneInlineInput = {
  /** Create and connect one Projects_web document */
  create?: InputMaybe<Projects_WebCreateInput>;
};

export type Projects_WebCreateWithPositionInput = {
  /** Document to create */
  data: Projects_WebCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type Projects_WebEdge = {
  __typename?: 'Projects_webEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Projects_Web;
};

/** Identifies documents */
export type Projects_WebManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
};

export enum Projects_WebOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type Projects_WebParent = ComponentsContainer;

export type Projects_WebParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type Projects_WebParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type Projects_WebParentCreateManyInlineInput = {
  /** Create and connect multiple existing Projects_webParent documents */
  create?: InputMaybe<Array<Projects_WebParentCreateInput>>;
};

export type Projects_WebParentCreateOneInlineInput = {
  /** Create and connect one Projects_webParent document */
  create?: InputMaybe<Projects_WebParentCreateInput>;
};

export type Projects_WebParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type Projects_WebParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type Projects_WebParentUpdateManyInlineInput = {
  /** Create and connect multiple Projects_webParent component instances */
  create?: InputMaybe<Array<Projects_WebParentCreateWithPositionInput>>;
  /** Delete multiple Projects_webParent documents */
  delete?: InputMaybe<Array<Projects_WebParentWhereUniqueInput>>;
  /** Update multiple Projects_webParent component instances */
  update?: InputMaybe<Array<Projects_WebParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Projects_webParent component instances */
  upsert?: InputMaybe<Array<Projects_WebParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type Projects_WebParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type Projects_WebParentUpdateOneInlineInput = {
  /** Create and connect one Projects_webParent document */
  create?: InputMaybe<Projects_WebParentCreateInput>;
  /** Delete currently connected Projects_webParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Projects_webParent document */
  update?: InputMaybe<Projects_WebParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Projects_webParent document */
  upsert?: InputMaybe<Projects_WebParentUpsertWithNestedWhereUniqueInput>;
};

export type Projects_WebParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type Projects_WebParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type Projects_WebParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type Projects_WebParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type Projects_WebParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type Projects_WebParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type Projects_WebUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
};

export type Projects_WebUpdateManyInlineInput = {
  /** Create and connect multiple Projects_web component instances */
  create?: InputMaybe<Array<Projects_WebCreateWithPositionInput>>;
  /** Delete multiple Projects_web documents */
  delete?: InputMaybe<Array<Projects_WebWhereUniqueInput>>;
  /** Update multiple Projects_web component instances */
  update?: InputMaybe<Array<Projects_WebUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Projects_web component instances */
  upsert?: InputMaybe<Array<Projects_WebUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type Projects_WebUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type Projects_WebUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: Projects_WebUpdateManyInput;
  /** Document search */
  where: Projects_WebWhereInput;
};

export type Projects_WebUpdateOneInlineInput = {
  /** Create and connect one Projects_web document */
  create?: InputMaybe<Projects_WebCreateInput>;
  /** Delete currently connected Projects_web document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Projects_web document */
  update?: InputMaybe<Projects_WebUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Projects_web document */
  upsert?: InputMaybe<Projects_WebUpsertWithNestedWhereUniqueInput>;
};

export type Projects_WebUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<Projects_WebUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: Projects_WebWhereUniqueInput;
};

export type Projects_WebUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: Projects_WebUpdateInput;
  /** Unique document search */
  where: Projects_WebWhereUniqueInput;
};

export type Projects_WebUpsertInput = {
  /** Create document if it didn't exist */
  create: Projects_WebCreateInput;
  /** Update document if it exists */
  update: Projects_WebUpdateInput;
};

export type Projects_WebUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<Projects_WebUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: Projects_WebWhereUniqueInput;
};

export type Projects_WebUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: Projects_WebUpsertInput;
  /** Unique document search */
  where: Projects_WebWhereUniqueInput;
};

/** Identifies documents */
export type Projects_WebWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Projects_WebWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
};

/** References Projects_web record uniquely */
export type Projects_WebWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single client */
  client?: Maybe<Client>;
  /** Retrieve document version */
  clientVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple clients */
  clients: Array<Client>;
  /** Retrieve multiple clients using the Relay connection interface */
  clientsConnection: ClientConnection;
  /** Retrieve a single config */
  config?: Maybe<Config>;
  /** Retrieve document version */
  configVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple configs */
  configs: Array<Config>;
  /** Retrieve multiple configs using the Relay connection interface */
  configsConnection: ConfigConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single job */
  job?: Maybe<Job>;
  /** Retrieve document version */
  jobVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple jobs */
  jobs: Array<Job>;
  /** Retrieve multiple jobs using the Relay connection interface */
  jobsConnection: JobConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single socialNetwork */
  socialNetwork?: Maybe<SocialNetwork>;
  /** Retrieve document version */
  socialNetworkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socialNetworks */
  socialNetworks: Array<SocialNetwork>;
  /** Retrieve multiple socialNetworks using the Relay connection interface */
  socialNetworksConnection: SocialNetworkConnection;
  /** Retrieve a single statisticsItem */
  statisticsItem?: Maybe<StatisticsItem>;
  /** Retrieve document version */
  statisticsItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple statisticsItems */
  statisticsItems: Array<StatisticsItem>;
  /** Retrieve multiple statisticsItems using the Relay connection interface */
  statisticsItemsConnection: StatisticsItemConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryClientArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ClientWhereUniqueInput;
};


export type QueryClientVersionArgs = {
  where: VersionWhereInput;
};


export type QueryClientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ClientWhereInput>;
};


export type QueryClientsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ClientWhereInput>;
};


export type QueryConfigArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConfigWhereUniqueInput;
};


export type QueryConfigVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConfigsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConfigOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConfigWhereInput>;
};


export type QueryConfigsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConfigOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConfigWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryJobArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: JobWhereUniqueInput;
};


export type QueryJobVersionArgs = {
  where: VersionWhereInput;
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryJobsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySocialNetworkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SocialNetworkWhereUniqueInput;
};


export type QuerySocialNetworkVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySocialNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SocialNetworkWhereInput>;
};


export type QuerySocialNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SocialNetworkWhereInput>;
};


export type QueryStatisticsItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StatisticsItemWhereUniqueInput;
};


export type QueryStatisticsItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStatisticsItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StatisticsItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StatisticsItemWhereInput>;
};


export type QueryStatisticsItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StatisticsItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<StatisticsItemWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

export type Seo = Entity & {
  __typename?: 'SEO';
  description: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  keywords: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
};

export type SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: 'SEOConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeoCreateInput = {
  description: Scalars['String']['input'];
  keywords: Scalars['String']['input'];
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing SEO documents */
  create?: InputMaybe<Array<SeoCreateInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
};

export type SeoCreateWithPositionInput = {
  /** Document to create */
  data: SeoCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: 'SEOEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Seo;
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  keywords_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  keywords_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  keywords_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  keywords_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SeoOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC'
}

export type SeoParent = ComponentsContainer;

export type SeoParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type SeoParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type SeoParentCreateManyInlineInput = {
  /** Create and connect multiple existing SEOParent documents */
  create?: InputMaybe<Array<SeoParentCreateInput>>;
};

export type SeoParentCreateOneInlineInput = {
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
};

export type SeoParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type SeoParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type SeoParentUpdateManyInlineInput = {
  /** Create and connect multiple SEOParent component instances */
  create?: InputMaybe<Array<SeoParentCreateWithPositionInput>>;
  /** Delete multiple SEOParent documents */
  delete?: InputMaybe<Array<SeoParentWhereUniqueInput>>;
  /** Update multiple SEOParent component instances */
  update?: InputMaybe<Array<SeoParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEOParent component instances */
  upsert?: InputMaybe<Array<SeoParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type SeoParentUpdateOneInlineInput = {
  /** Create and connect one SEOParent document */
  create?: InputMaybe<SeoParentCreateInput>;
  /** Delete currently connected SEOParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEOParent document */
  update?: InputMaybe<SeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEOParent document */
  upsert?: InputMaybe<SeoParentUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SeoParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type SeoParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SeoParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type SeoParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type SeoParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type SeoUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple SEO component instances */
  create?: InputMaybe<Array<SeoCreateWithPositionInput>>;
  /** Delete multiple SEO documents */
  delete?: InputMaybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple SEO component instances */
  update?: InputMaybe<Array<SeoUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SEO component instances */
  upsert?: InputMaybe<Array<SeoUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SeoUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeoUpdateManyInput;
  /** Document search */
  where: SeoWhereInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one SEO document */
  create?: InputMaybe<SeoCreateInput>;
  /** Delete currently connected SEO document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SEO document */
  update?: InputMaybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SEO document */
  upsert?: InputMaybe<SeoUpsertWithNestedWhereUniqueInput>;
};

export type SeoUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SeoUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeoUpdateInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SeoUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SeoWhereUniqueInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeoUpsertInput;
  /** Unique document search */
  where: SeoWhereUniqueInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  keywords_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  keywords_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  keywords_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  keywords_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References SEO record uniquely */
export type SeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Client | Config | Job | Page | Project | SocialNetwork | StatisticsItem;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SocialNetwork = Entity & Node & {
  __typename?: 'SocialNetwork';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SocialNetwork>;
  /** List of SocialNetwork versions */
  history: Array<Version>;
  icon: Asset;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
};


export type SocialNetworkCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SocialNetworkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SocialNetworkHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SocialNetworkIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type SocialNetworkPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SocialNetworkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SocialNetworkUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SocialNetworkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialNetworkWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialNetworkConnection = {
  __typename?: 'SocialNetworkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialNetworkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialNetworkCreateInput = {
  cle1jvs993n9k01rreciqgy3j?: InputMaybe<FooterCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  icon: AssetCreateOneInlineInput;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type SocialNetworkCreateManyInlineInput = {
  /** Connect multiple existing SocialNetwork documents */
  connect?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Create and connect multiple existing SocialNetwork documents */
  create?: InputMaybe<Array<SocialNetworkCreateInput>>;
};

export type SocialNetworkCreateOneInlineInput = {
  /** Connect one existing SocialNetwork document */
  connect?: InputMaybe<SocialNetworkWhereUniqueInput>;
  /** Create and connect one SocialNetwork document */
  create?: InputMaybe<SocialNetworkCreateInput>;
};

/** An edge in a connection. */
export type SocialNetworkEdge = {
  __typename?: 'SocialNetworkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SocialNetwork;
};

/** Identifies documents */
export type SocialNetworkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialNetworkWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialNetworkWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialNetworkWhereStageInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SocialNetworkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type SocialNetworkUpdateInput = {
  cle1jvs993n9k01rreciqgy3j?: InputMaybe<FooterUpdateManyInlineInput>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialNetworkUpdateManyInlineInput = {
  /** Connect multiple existing SocialNetwork documents */
  connect?: InputMaybe<Array<SocialNetworkConnectInput>>;
  /** Create and connect multiple SocialNetwork documents */
  create?: InputMaybe<Array<SocialNetworkCreateInput>>;
  /** Delete multiple SocialNetwork documents */
  delete?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Disconnect multiple SocialNetwork documents */
  disconnect?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialNetwork documents */
  set?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Update multiple SocialNetwork documents */
  update?: InputMaybe<Array<SocialNetworkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialNetwork documents */
  upsert?: InputMaybe<Array<SocialNetworkUpsertWithNestedWhereUniqueInput>>;
};

export type SocialNetworkUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialNetworkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialNetworkUpdateManyInput;
  /** Document search */
  where: SocialNetworkWhereInput;
};

export type SocialNetworkUpdateOneInlineInput = {
  /** Connect existing SocialNetwork document */
  connect?: InputMaybe<SocialNetworkWhereUniqueInput>;
  /** Create and connect one SocialNetwork document */
  create?: InputMaybe<SocialNetworkCreateInput>;
  /** Delete currently connected SocialNetwork document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SocialNetwork document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SocialNetwork document */
  update?: InputMaybe<SocialNetworkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialNetwork document */
  upsert?: InputMaybe<SocialNetworkUpsertWithNestedWhereUniqueInput>;
};

export type SocialNetworkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialNetworkUpdateInput;
  /** Unique document search */
  where: SocialNetworkWhereUniqueInput;
};

export type SocialNetworkUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialNetworkCreateInput;
  /** Update document if it exists */
  update: SocialNetworkUpdateInput;
};

export type SocialNetworkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialNetworkUpsertInput;
  /** Unique document search */
  where: SocialNetworkWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SocialNetworkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SocialNetworkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialNetworkWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialNetworkWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialNetworkWhereStageInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SocialNetworkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialNetworkWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialNetworkWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialNetworkWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SocialNetworkWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References SocialNetwork record uniquely */
export type SocialNetworkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Statistics = Entity & {
  __typename?: 'Statistics';
  headline?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  items: Array<StatisticsItem>;
  /** System stage field */
  stage: Stage;
};


export type StatisticsItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<StatisticsItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StatisticsItemWhereInput>;
};

export type StatisticsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StatisticsWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatisticsConnection = {
  __typename?: 'StatisticsConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StatisticsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StatisticsCreateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<StatisticsItemCreateManyInlineInput>;
};

export type StatisticsCreateManyInlineInput = {
  /** Create and connect multiple existing Statistics documents */
  create?: InputMaybe<Array<StatisticsCreateInput>>;
};

export type StatisticsCreateOneInlineInput = {
  /** Create and connect one Statistics document */
  create?: InputMaybe<StatisticsCreateInput>;
};

export type StatisticsCreateWithPositionInput = {
  /** Document to create */
  data: StatisticsCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type StatisticsEdge = {
  __typename?: 'StatisticsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Statistics;
};

export type StatisticsItem = Entity & Node & {
  __typename?: 'StatisticsItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<StatisticsItem>;
  /** List of StatisticsItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** Can contain {value} to insert the value */
  tooltipDescription?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StatisticsItemCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StatisticsItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type StatisticsItemHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type StatisticsItemPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StatisticsItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StatisticsItemUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StatisticsItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StatisticsItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type StatisticsItemConnection = {
  __typename?: 'StatisticsItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StatisticsItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StatisticsItemCreateInput = {
  cm8boibh10wzl07uscddi7hos?: InputMaybe<StatisticsCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  tooltipDescription?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StatisticsItemCreateManyInlineInput = {
  /** Connect multiple existing StatisticsItem documents */
  connect?: InputMaybe<Array<StatisticsItemWhereUniqueInput>>;
  /** Create and connect multiple existing StatisticsItem documents */
  create?: InputMaybe<Array<StatisticsItemCreateInput>>;
};

export type StatisticsItemCreateOneInlineInput = {
  /** Connect one existing StatisticsItem document */
  connect?: InputMaybe<StatisticsItemWhereUniqueInput>;
  /** Create and connect one StatisticsItem document */
  create?: InputMaybe<StatisticsItemCreateInput>;
};

/** An edge in a connection. */
export type StatisticsItemEdge = {
  __typename?: 'StatisticsItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: StatisticsItem;
};

/** Identifies documents */
export type StatisticsItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<StatisticsItemWhereStageInput>;
  documentInStages_none?: InputMaybe<StatisticsItemWhereStageInput>;
  documentInStages_some?: InputMaybe<StatisticsItemWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  key_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tooltipDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tooltipDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tooltipDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tooltipDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tooltipDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tooltipDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tooltipDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tooltipDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tooltipDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tooltipDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  unit_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  unit_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  unit_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  unit_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  unit_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  unit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  unit_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  unit_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StatisticsItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TooltipDescriptionAsc = 'tooltipDescription_ASC',
  TooltipDescriptionDesc = 'tooltipDescription_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StatisticsItemUpdateInput = {
  cm8boibh10wzl07uscddi7hos?: InputMaybe<StatisticsUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  tooltipDescription?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type StatisticsItemUpdateManyInlineInput = {
  /** Connect multiple existing StatisticsItem documents */
  connect?: InputMaybe<Array<StatisticsItemConnectInput>>;
  /** Create and connect multiple StatisticsItem documents */
  create?: InputMaybe<Array<StatisticsItemCreateInput>>;
  /** Delete multiple StatisticsItem documents */
  delete?: InputMaybe<Array<StatisticsItemWhereUniqueInput>>;
  /** Disconnect multiple StatisticsItem documents */
  disconnect?: InputMaybe<Array<StatisticsItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StatisticsItem documents */
  set?: InputMaybe<Array<StatisticsItemWhereUniqueInput>>;
  /** Update multiple StatisticsItem documents */
  update?: InputMaybe<Array<StatisticsItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StatisticsItem documents */
  upsert?: InputMaybe<Array<StatisticsItemUpsertWithNestedWhereUniqueInput>>;
};

export type StatisticsItemUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  tooltipDescription?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type StatisticsItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StatisticsItemUpdateManyInput;
  /** Document search */
  where: StatisticsItemWhereInput;
};

export type StatisticsItemUpdateOneInlineInput = {
  /** Connect existing StatisticsItem document */
  connect?: InputMaybe<StatisticsItemWhereUniqueInput>;
  /** Create and connect one StatisticsItem document */
  create?: InputMaybe<StatisticsItemCreateInput>;
  /** Delete currently connected StatisticsItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected StatisticsItem document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StatisticsItem document */
  update?: InputMaybe<StatisticsItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StatisticsItem document */
  upsert?: InputMaybe<StatisticsItemUpsertWithNestedWhereUniqueInput>;
};

export type StatisticsItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StatisticsItemUpdateInput;
  /** Unique document search */
  where: StatisticsItemWhereUniqueInput;
};

export type StatisticsItemUpsertInput = {
  /** Create document if it didn't exist */
  create: StatisticsItemCreateInput;
  /** Update document if it exists */
  update: StatisticsItemUpdateInput;
};

export type StatisticsItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StatisticsItemUpsertInput;
  /** Unique document search */
  where: StatisticsItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StatisticsItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type StatisticsItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatisticsItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<StatisticsItemWhereStageInput>;
  documentInStages_none?: InputMaybe<StatisticsItemWhereStageInput>;
  documentInStages_some?: InputMaybe<StatisticsItemWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  key_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tooltipDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tooltipDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tooltipDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tooltipDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tooltipDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tooltipDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tooltipDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tooltipDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tooltipDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tooltipDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  unit_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  unit_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  unit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  unit_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  unit_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  unit_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  unit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  unit_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  unit_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StatisticsItemWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatisticsItemWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatisticsItemWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatisticsItemWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StatisticsItemWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StatisticsItem record uniquely */
export type StatisticsItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type StatisticsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  items_every?: InputMaybe<StatisticsItemWhereInput>;
  items_none?: InputMaybe<StatisticsItemWhereInput>;
  items_some?: InputMaybe<StatisticsItemWhereInput>;
};

export enum StatisticsOrderByInput {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type StatisticsParent = ComponentsContainer;

export type StatisticsParentConnectInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerConnectInput>;
};

export type StatisticsParentCreateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateInput>;
};

export type StatisticsParentCreateManyInlineInput = {
  /** Create and connect multiple existing StatisticsParent documents */
  create?: InputMaybe<Array<StatisticsParentCreateInput>>;
};

export type StatisticsParentCreateOneInlineInput = {
  /** Create and connect one StatisticsParent document */
  create?: InputMaybe<StatisticsParentCreateInput>;
};

export type StatisticsParentCreateWithPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerCreateWithPositionInput>;
};

export type StatisticsParentUpdateInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateInput>;
};

export type StatisticsParentUpdateManyInlineInput = {
  /** Create and connect multiple StatisticsParent component instances */
  create?: InputMaybe<Array<StatisticsParentCreateWithPositionInput>>;
  /** Delete multiple StatisticsParent documents */
  delete?: InputMaybe<Array<StatisticsParentWhereUniqueInput>>;
  /** Update multiple StatisticsParent component instances */
  update?: InputMaybe<Array<StatisticsParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StatisticsParent component instances */
  upsert?: InputMaybe<Array<StatisticsParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatisticsParentUpdateManyWithNestedWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateManyWithNestedWhereInput>;
};

export type StatisticsParentUpdateOneInlineInput = {
  /** Create and connect one StatisticsParent document */
  create?: InputMaybe<StatisticsParentCreateInput>;
  /** Delete currently connected StatisticsParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single StatisticsParent document */
  update?: InputMaybe<StatisticsParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StatisticsParent document */
  upsert?: InputMaybe<StatisticsParentUpsertWithNestedWhereUniqueInput>;
};

export type StatisticsParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type StatisticsParentUpdateWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpdateWithNestedWhereUniqueInput>;
};

export type StatisticsParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type StatisticsParentUpsertWithNestedWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerUpsertWithNestedWhereUniqueInput>;
};

export type StatisticsParentWhereInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereInput>;
};

export type StatisticsParentWhereUniqueInput = {
  ComponentsContainer?: InputMaybe<ComponentsContainerWhereUniqueInput>;
};

export type StatisticsUpdateInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<StatisticsItemUpdateManyInlineInput>;
};

export type StatisticsUpdateManyInlineInput = {
  /** Create and connect multiple Statistics component instances */
  create?: InputMaybe<Array<StatisticsCreateWithPositionInput>>;
  /** Delete multiple Statistics documents */
  delete?: InputMaybe<Array<StatisticsWhereUniqueInput>>;
  /** Update multiple Statistics component instances */
  update?: InputMaybe<Array<StatisticsUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Statistics component instances */
  upsert?: InputMaybe<Array<StatisticsUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StatisticsUpdateManyInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type StatisticsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StatisticsUpdateManyInput;
  /** Document search */
  where: StatisticsWhereInput;
};

export type StatisticsUpdateOneInlineInput = {
  /** Create and connect one Statistics document */
  create?: InputMaybe<StatisticsCreateInput>;
  /** Delete currently connected Statistics document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Statistics document */
  update?: InputMaybe<StatisticsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Statistics document */
  upsert?: InputMaybe<StatisticsUpsertWithNestedWhereUniqueInput>;
};

export type StatisticsUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StatisticsUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatisticsWhereUniqueInput;
};

export type StatisticsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StatisticsUpdateInput;
  /** Unique document search */
  where: StatisticsWhereUniqueInput;
};

export type StatisticsUpsertInput = {
  /** Create document if it didn't exist */
  create: StatisticsCreateInput;
  /** Update document if it exists */
  update: StatisticsUpdateInput;
};

export type StatisticsUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StatisticsUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: StatisticsWhereUniqueInput;
};

export type StatisticsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StatisticsUpsertInput;
  /** Unique document search */
  where: StatisticsWhereUniqueInput;
};

/** Identifies documents */
export type StatisticsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StatisticsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  headline_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  items_every?: InputMaybe<StatisticsItemWhereInput>;
  items_none?: InputMaybe<StatisticsItemWhereInput>;
  items_some?: InputMaybe<StatisticsItemWhereInput>;
};

/** References Statistics record uniquely */
export type StatisticsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

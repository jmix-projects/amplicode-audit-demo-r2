/* eslint-disable */
export type Maybe<T> = T | null;
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
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
};

export type ConfigInputDtoInput = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigNodeDto = {
  __typename?: 'ConfigNodeDto';
  children?: Maybe<Array<Maybe<ConfigNodeDto>>>;
  groupRemainder?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<ConfigNodeDto>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigOutputDto = {
  __typename?: 'ConfigOutputDto';
  defaultValue?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateTs?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  update_Config?: Maybe<ConfigOutputDto>;
};


/** Mutation root */
export type MutationUpdate_ConfigArgs = {
  dto: ConfigInputDtoInput;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  list_Config?: Maybe<Array<Maybe<ConfigNodeDto>>>;
  loadByName_Config?: Maybe<ConfigOutputDto>;
};


/** Query root */
export type QueryLoadByName_ConfigArgs = {
  configName: Scalars['String'];
};

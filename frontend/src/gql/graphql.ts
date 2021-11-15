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
  /** Long type */
  Long: any;
  /** Built-in scalar for map-like structures */
  Map_String_StringScalar: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
};

export type AllowedRevisionFiltersDto = {
  __typename?: 'AllowedRevisionFiltersDto';
  entitiesFullNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  revisionTypes?: Maybe<Array<Maybe<RevisionTypeDto>>>;
  usernames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuditPolicyDto = {
  __typename?: 'AuditPolicyDto';
  audited: Scalars['Boolean'];
  entityFullName?: Maybe<Scalars['String']>;
};

export type AuditPolicyDtoInput = {
  audited: Scalars['Boolean'];
  entityFullName: Scalars['String'];
};

export type EntityChangesDto = {
  __typename?: 'EntityChangesDto';
  earlierRevisionValues?: Maybe<Scalars['Map_String_StringScalar']>;
  entityFullName?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  targetRevisionType?: Maybe<RevisionTypeDto>;
  targetRevisionValues?: Maybe<Scalars['Map_String_StringScalar']>;
};

export type EntityRevisionDto = {
  __typename?: 'EntityRevisionDto';
  entityFullName?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  revisionType?: Maybe<RevisionTypeDto>;
  username?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
};

export type EntityRevisionFilterDtoInput = {
  entityFullName: Scalars['String'];
  entityId: Scalars['String'];
  revisionId: Scalars['Int'];
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  modifyAuditPolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  registerUserAction?: Maybe<Scalars['String']>;
};


/** Mutation root */
export type MutationModifyAuditPoliciesArgs = {
  policiesNewStates: Array<AuditPolicyDtoInput>;
};


/** Mutation root */
export type MutationRegisterUserActionArgs = {
  input: UserActionInputDtoInput;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  allowedRevisionFilters?: Maybe<AllowedRevisionFiltersDto>;
  auditPolicyList?: Maybe<Array<Maybe<AuditPolicyDto>>>;
  compareSnapshots?: Maybe<EntityChangesDto>;
  entityRevisionChanges?: Maybe<EntityChangesDto>;
  entityRevisionInfoList?: Maybe<Array<Maybe<EntityRevisionDto>>>;
  entitySnapshot?: Maybe<Scalars['Map_String_StringScalar']>;
  snapshotIdsToCompare?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userActions?: Maybe<Array<Maybe<UserActionOutputDto>>>;
  userActionsCount: Scalars['Long'];
};


/** Query root */
export type QueryCompareSnapshotsArgs = {
  snapshotIdToCompare: Scalars['Int'];
  targetSnapshotParams: EntityRevisionFilterDtoInput;
};


/** Query root */
export type QueryEntityRevisionChangesArgs = {
  changesFilter: EntityRevisionFilterDtoInput;
};


/** Query root */
export type QueryEntityRevisionInfoListArgs = {
  revisionFilter: RevisionFilterDtoInput;
};


/** Query root */
export type QueryEntitySnapshotArgs = {
  snapshotFilter: EntityRevisionFilterDtoInput;
};


/** Query root */
export type QuerySnapshotIdsToCompareArgs = {
  sourceSnapshotParams: EntityRevisionFilterDtoInput;
};


/** Query root */
export type QueryUserActionsArgs = {
  filter?: Maybe<UserActionsFilterInput>;
};


/** Query root */
export type QueryUserActionsCountArgs = {
  filter?: Maybe<UserActionsFilterInput>;
};

export type RevisionFilterDtoInput = {
  entityFullName?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  revisionType?: Maybe<RevisionTypeDto>;
  to?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export enum RevisionTypeDto {
  Delete = 'Delete',
  Insert = 'Insert',
  Update = 'Update'
}

export type UserActionInputDtoInput = {
  actionDateTime?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  componentId?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
};

export type UserActionOutputDto = {
  __typename?: 'UserActionOutputDto';
  actionDateTime?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  componentId?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserActionsFilterInput = {
  componentId?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

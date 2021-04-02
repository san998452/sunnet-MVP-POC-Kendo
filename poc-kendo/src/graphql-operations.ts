import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};








/** #### Input Objects ##################################################### */
export type CreateUserInput = {
  enableFlag: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  loginAttempts?: Maybe<Scalars['Int']>;
  loginName: Scalars['String'];
  loginPwd: Scalars['String'];
};

export type MenuEntry = {
  __typename?: 'MenuEntry';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MenuResponse = {
  __typename?: 'MenuResponse';
  id: Scalars['ID'];
  itemList?: Maybe<Array<Maybe<MenuEntry>>>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson: Person;
  createUser: UserResponse;
  saveRole?: Maybe<Role>;
  saveRoleGroup?: Maybe<RoleGroupResponse>;
  updatePerson?: Maybe<Person>;
  updateRole?: Maybe<Role>;
};


export type MutationCreatePersonArgs = {
  input?: Maybe<PersonInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationSaveRoleArgs = {
  input?: Maybe<RoleInput>;
};


export type MutationSaveRoleGroupArgs = {
  input?: Maybe<SaveRoleGroupInput>;
};


export type MutationUpdatePersonArgs = {
  input?: Maybe<PersonUpdateInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<RoleUpdateInput>;
};

export type Person = {
  __typename?: 'Person';
  cellPhone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  empId?: Maybe<Scalars['String']>;
  enabledFlag?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  faxPhone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  limited?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  memberCode?: Maybe<Scalars['String']>;
  pagerNational?: Maybe<Scalars['String']>;
  pagerNumber?: Maybe<Scalars['String']>;
  pagerNumberPin?: Maybe<Scalars['String']>;
  pagerPhone?: Maybe<Scalars['String']>;
  personId: Scalars['ID'];
  radioTruck?: Maybe<Scalars['String']>;
  supervisor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userOrgList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  workPhone?: Maybe<Scalars['String']>;
};

export type PersonInput = {
  cellPhone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  empId?: Maybe<Scalars['String']>;
  enabledFlag?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  faxPhone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  limited?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  memberCode?: Maybe<Scalars['String']>;
  pagerNational?: Maybe<Scalars['String']>;
  pagerNumber?: Maybe<Scalars['String']>;
  pagerNumberPin?: Maybe<Scalars['String']>;
  pagerPhone?: Maybe<Scalars['String']>;
  radioTruck?: Maybe<Scalars['String']>;
  supervisor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userOrgList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  workPhone?: Maybe<Scalars['String']>;
};

export type PersonUpdateInput = {
  cellPhone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  empId?: Maybe<Scalars['String']>;
  enabledFlag?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  faxPhone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  homePhone?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  memberCode?: Maybe<Scalars['String']>;
  pagerNational?: Maybe<Scalars['String']>;
  pagerNumber?: Maybe<Scalars['String']>;
  pagerNumberPin?: Maybe<Scalars['String']>;
  pagerPhone?: Maybe<Scalars['String']>;
  personId: Scalars['ID'];
  radioTruck?: Maybe<Scalars['String']>;
  supervisor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userOrgList?: Maybe<Array<Maybe<Scalars['Int']>>>;
  workPhone?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getMenu?: Maybe<MenuResponse>;
  getRoleGroupById: RoleGroupResponse;
  getRoleGroups?: Maybe<Array<Maybe<RoleGroup>>>;
  getRoles?: Maybe<Array<Maybe<Role>>>;
  getStationsByPersonId?: Maybe<Array<Maybe<StationCalloutResponse>>>;
  getUserByName: UserResponse;
  gtRoleById?: Maybe<Role>;
  listPerson?: Maybe<Array<Maybe<Person>>>;
  personById?: Maybe<Person>;
};


export type QueryGetMenuArgs = {
  menuId?: Maybe<Scalars['Int']>;
};


export type QueryGetRoleGroupByIdArgs = {
  roleGroupId: Scalars['ID'];
};


export type QueryGetStationsByPersonIdArgs = {
  personId?: Maybe<Scalars['Int']>;
};


export type QueryGetUserByNameArgs = {
  userName: Scalars['String'];
};


export type QueryGtRoleByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPersonByIdArgs = {
  Id?: Maybe<Scalars['ID']>;
};

export type Role = {
  __typename?: 'Role';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  permissions?: Maybe<Array<Maybe<RoleGrant>>>;
  roleName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type RoleGrant = {
  __typename?: 'RoleGrant';
  applicationType?: Maybe<Scalars['String']>;
  granted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  inStatus?: Maybe<Scalars['String']>;
  outageType?: Maybe<Scalars['String']>;
};

export type RoleGrantInput = {
  applicationType?: Maybe<Scalars['String']>;
  granted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  inStatus?: Maybe<Scalars['String']>;
  outageType?: Maybe<Scalars['String']>;
};

export type RoleGroup = {
  __typename?: 'RoleGroup';
  adminViewOnly?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roleGroupId: Scalars['ID'];
};

export type RoleGroupResponse = {
  __typename?: 'RoleGroupResponse';
  adminViewOnly: Scalars['Boolean'];
  displayName: Scalars['String'];
  fullName: Scalars['String'];
  name: Scalars['String'];
  roleGroupId: Scalars['ID'];
};

export type RoleInput = {
  displayName?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<RoleGrantInput>>>;
  roleName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type RoleUpdateInput = {
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  permissions?: Maybe<Array<Maybe<RoleGrantInput>>>;
  roleName?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type SaveRoleGroupInput = {
  adminViewOnly?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StationCalloutResponse = {
  __typename?: 'StationCalloutResponse';
  associateId?: Maybe<Scalars['Int']>;
  group?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  stationName?: Maybe<Scalars['String']>;
};

/** #### Object ##################################################### */
export type User = {
  __typename?: 'User';
  enableFlag: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  loginAttempts?: Maybe<Scalars['Int']>;
  loginName: Scalars['String'];
  loginPwd: Scalars['String'];
  userId: Scalars['ID'];
  userRoles?: Maybe<Array<Maybe<UserRole>>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  enableFlag: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  loginAttempts?: Maybe<Scalars['Int']>;
  loginName: Scalars['String'];
  userId: Scalars['ID'];
  userRoles?: Maybe<Array<Maybe<UserRole>>>;
};

export type UserRole = {
  __typename?: 'UserRole';
  enableFlag?: Maybe<Scalars['String']>;
  /** user : User */
  role: Scalars['String'];
  userRoleId: Scalars['ID'];
};

export type CreatePersonMutationVariables = Exact<{
  input: PersonInput;
}>;


export type CreatePersonMutation = (
  { __typename?: 'Mutation' }
  & { createPerson: (
    { __typename?: 'Person' }
    & Pick<Person, 'cellPhone' | 'email' | 'empId' | 'enabledFlag' | 'ext' | 'faxPhone' | 'firstName' | 'groupName' | 'homePhone' | 'lastName' | 'limited' | 'location' | 'memberCode' | 'pagerNational' | 'pagerNumber' | 'pagerNumberPin' | 'pagerPhone' | 'radioTruck' | 'supervisor' | 'title' | 'userOrgList' | 'workPhone'>
  ) }
);

export type ListPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPersonQuery = (
  { __typename?: 'Query' }
  & { listPerson?: Maybe<Array<Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'personId' | 'empId' | 'firstName' | 'lastName' | 'workPhone' | 'homePhone' | 'email' | 'location' | 'cellPhone' | 'faxPhone' | 'ext' | 'title' | 'pagerPhone' | 'pagerNumber' | 'pagerNumberPin' | 'pagerNational' | 'supervisor' | 'radioTruck' | 'memberCode' | 'groupName' | 'limited' | 'enabledFlag'>
  )>>> }
);


export const CreatePersonDocument: DocumentNode<CreatePersonMutation, CreatePersonMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPerson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"empId"}},{"kind":"Field","name":{"kind":"Name","value":"enabledFlag"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"faxPhone"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"groupName"}},{"kind":"Field","name":{"kind":"Name","value":"homePhone"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"limited"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"memberCode"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNational"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNumberPin"}},{"kind":"Field","name":{"kind":"Name","value":"pagerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"radioTruck"}},{"kind":"Field","name":{"kind":"Name","value":"supervisor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"userOrgList"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}}]}}]}}]};
export const ListPersonDocument: DocumentNode<ListPersonQuery, ListPersonQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personId"}},{"kind":"Field","name":{"kind":"Name","value":"empId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"workPhone"}},{"kind":"Field","name":{"kind":"Name","value":"homePhone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"cellPhone"}},{"kind":"Field","name":{"kind":"Name","value":"faxPhone"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"pagerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNumberPin"}},{"kind":"Field","name":{"kind":"Name","value":"pagerNational"}},{"kind":"Field","name":{"kind":"Name","value":"supervisor"}},{"kind":"Field","name":{"kind":"Name","value":"radioTruck"}},{"kind":"Field","name":{"kind":"Name","value":"memberCode"}},{"kind":"Field","name":{"kind":"Name","value":"groupName"}},{"kind":"Field","name":{"kind":"Name","value":"limited"}},{"kind":"Field","name":{"kind":"Name","value":"enabledFlag"}}]}}]}}]};
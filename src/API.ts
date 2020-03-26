/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CastVoteInput = {
  id: string,
};

export type CreateCandidateInput = {
  id?: string | null,
  name: string,
  votes: number,
};

export type ModelCandidateConditionInput = {
  name?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelCandidateConditionInput | null > | null,
  or?: Array< ModelCandidateConditionInput | null > | null,
  not?: ModelCandidateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCandidateInput = {
  id: string,
  name?: string | null,
  votes?: number | null,
};

export type DeleteCandidateInput = {
  id?: string | null,
};

export type ModelCandidateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelCandidateFilterInput | null > | null,
  or?: Array< ModelCandidateFilterInput | null > | null,
  not?: ModelCandidateFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CastVoteMutationVariables = {
  input: CastVoteInput,
};

export type CastVoteMutation = {
  castVote:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type CreateCandidateMutationVariables = {
  input: CreateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type CreateCandidateMutation = {
  createCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type UpdateCandidateMutationVariables = {
  input: UpdateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type UpdateCandidateMutation = {
  updateCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type DeleteCandidateMutationVariables = {
  input: DeleteCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type DeleteCandidateMutation = {
  deleteCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type GetCandidateQueryVariables = {
  id: string,
};

export type GetCandidateQuery = {
  getCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type ListCandidatesQueryVariables = {
  filter?: ModelCandidateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandidatesQuery = {
  listCandidates:  {
    __typename: "ModelCandidateConnection",
    items:  Array< {
      __typename: "Candidate",
      id: string,
      name: string,
      votes: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCastVoteSubscription = {
  onCastVote:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type OnCreateCandidateSubscription = {
  onCreateCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type OnUpdateCandidateSubscription = {
  onUpdateCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

export type OnDeleteCandidateSubscription = {
  onDeleteCandidate:  {
    __typename: "Candidate",
    id: string,
    name: string,
    votes: number,
  } | null,
};

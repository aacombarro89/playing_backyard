/* eslint-disable */
/// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Comment = {
  __typename?: 'Comment';
  Post?: Maybe<Post>;
  body: Scalars['String'];
  date: Scalars['Date'];
  id: Scalars['ID'];
  post_id: Scalars['ID'];
};

export type CommentFilter = {
  body?: InputMaybe<Scalars['String']>;
  body_neq?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  date_gt?: InputMaybe<Scalars['Date']>;
  date_gte?: InputMaybe<Scalars['Date']>;
  date_lt?: InputMaybe<Scalars['Date']>;
  date_lte?: InputMaybe<Scalars['Date']>;
  date_neq?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  post_id?: InputMaybe<Scalars['ID']>;
  post_id_neq?: InputMaybe<Scalars['ID']>;
  q?: InputMaybe<Scalars['String']>;
};

export type CommentInput = {
  body: Scalars['String'];
  date: Scalars['Date'];
  post_id: Scalars['ID'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  removeComment?: Maybe<Comment>;
  removePost?: Maybe<Post>;
  removeUser?: Maybe<User>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  date: Scalars['Date'];
  post_id: Scalars['ID'];
};


export type MutationCreateManyCommentArgs = {
  data?: InputMaybe<Array<InputMaybe<CommentInput>>>;
};


export type MutationCreateManyPostArgs = {
  data?: InputMaybe<Array<InputMaybe<PostInput>>>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  id: Scalars['ID'];
  post_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
  views?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  Comments?: Maybe<Array<Maybe<Comment>>>;
  User?: Maybe<User>;
  id: Scalars['ID'];
  title: Scalars['String'];
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};

export type PostFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  q?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
  user_id_neq?: InputMaybe<Scalars['ID']>;
  views?: InputMaybe<Scalars['Int']>;
  views_gt?: InputMaybe<Scalars['Int']>;
  views_gte?: InputMaybe<Scalars['Int']>;
  views_lt?: InputMaybe<Scalars['Int']>;
  views_lte?: InputMaybe<Scalars['Int']>;
  views_neq?: InputMaybe<Scalars['Int']>;
};

export type PostInput = {
  title: Scalars['String'];
  user_id: Scalars['ID'];
  views: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  Comment?: Maybe<Comment>;
  Post?: Maybe<Post>;
  User?: Maybe<User>;
  _allCommentsMeta?: Maybe<ListMetadata>;
  _allPostsMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type Query_AllCommentsMetaArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllPostsArgs = {
  filter?: InputMaybe<PostFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Posts?: Maybe<Array<Maybe<Post>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  name: Scalars['String'];
};

export type GetPostsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', allPosts?: Array<{ __typename?: 'Post', id: string, title: string, views: number, user_id: string, User?: { __typename?: 'User', id: string, name: string } | null } | null> | null };


export const GetPostsDocument = `
    query getPosts($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: PostFilter) {
  allPosts(
    page: $page
    perPage: $perPage
    sortField: $sortField
    sortOrder: $sortOrder
    filter: $filter
  ) {
    id
    title
    views
    user_id
    User {
      id
      name
    }
  }
}
    `;
export const useGetPostsQuery = <
      TData = GetPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetPostsQueryVariables,
      options?: UseQueryOptions<GetPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostsQuery, TError, TData>(
      variables === undefined ? ['getPosts'] : ['getPosts', variables],
      fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers),
      options
    );

useGetPostsQuery.getKey = (variables?: GetPostsQueryVariables) => variables === undefined ? ['getPosts'] : ['getPosts', variables];
;

useGetPostsQuery.fetcher = (client: GraphQLClient, variables?: GetPostsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetPostsQuery, GetPostsQueryVariables>(client, GetPostsDocument, variables, headers);
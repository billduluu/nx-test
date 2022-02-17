import { ApolloClient, NormalizedCacheObject, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'cross-fetch'
import { useMemo } from 'react'
import { IncomingMessage } from 'node:http'
import { getServerSecretConfig } from './serverSecretConfig'

let apolloClient: ApolloClient<NormalizedCacheObject>

export const initializeApollo = (initialState = {}): ApolloClient<NormalizedCacheObject> => {
  const temporaryApolloClient: ApolloClient<NormalizedCacheObject> = apolloClient ?? getApolloClient()

  if (initialState) {
    const existingCache = temporaryApolloClient.extract()

    temporaryApolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return temporaryApolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = temporaryApolloClient
  return temporaryApolloClient
}

// useMemo to memioze and cache to be used.
export function useApollo(initialState = {}): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: object
  }
}

export const getApolloClient = (
  context?: ApolloClientContext,
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> => {
  if (context && context.req) {
    const { req } = context
    req.cookies
  }

  const contentful = getServerSecretConfig('contentful')

  const uri = `https://countries.trevorblades.com`
  const TOKEN = contentful?.access_token || ''

  const httpLink = createHttpLink({
    uri,
    fetch,
    // headers: {
    //   authorization: `Bearer ${TOKEN}` || '',
    // },
  })

  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({
    link: httpLink,
    cache,
  })
}

import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/apolloClient';
export async function getServerPageExample
    (options: Omit<Apollo.QueryOptions<Types.ExampleQueryQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ExampleQueryQuery>({ ...options, query: Operations.ExampleQueryDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useExample = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ExampleQueryQuery, Types.ExampleQueryQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ExampleQueryDocument, options);
};
export type PageExampleComp = React.FC<{data?: Types.ExampleQueryQuery, error?: Apollo.ApolloError}>;
export const withPageExample = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ExampleQueryQuery, Types.ExampleQueryQueryVariables>) => (WrappedComponent:PageExampleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ExampleQueryDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrExample = {
      getServerPage: getServerPageExample,
      withPage: withPageExample,
      usePage: useExample,
    }
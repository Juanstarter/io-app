import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import * as React from "react";
import { useIOSelector } from "./store/hooks";
import { sessionTokenSelector } from "./store/reducers/authentication";

const httpLink = new HttpLink({ uri: "https://pagopagraphql.loca.lt/graphql" });

const authMiddleware = (authToken: string | undefined) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext(
        authToken
          ? {
              headers: {
                authorization: `Bearer ${authToken}`
              }
            }
          : {}
      );
    }

    return forward(operation);
  });

const cache = new InMemoryCache();

// eslint-disable-next-line @typescript-eslint/ban-types
const IOApolloProvider: React.FunctionComponent<React.PropsWithChildren<{}>> =
  ({ children }) => {
    const sessionToken = useIOSelector(sessionTokenSelector);

    const apolloClient = new ApolloClient({
      link: authMiddleware(sessionToken).concat(httpLink),
      cache
    });

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  };

export default IOApolloProvider;

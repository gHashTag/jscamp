---
id: amplify-02
title: What is GraphQL?
sidebar_label: GraphQL
---

Data modeling in AWS Amplify is done using the GraphQL query language, which is an API specification, a query language for APIs, and a runtime for executing those queries against your data. It shares some similarities with REST and is the best replacement for REST.

![GraphQL](https://miro.medium.com/max/4800/1*CC4lauyfn1b2MdxqPrv1SA.png)

GraphQL was introduced by Facebook in 2015, although it has been used internally since 2012. GraphQL allows clients to define the structure of the data they require, and it is this structure that is returned from the server. Querying data in this manner provides a much more efficient way for client-side applications to interact with APIs, reducing the number of underfetching and preventing overfetching.

# Main advantages:

## Efficient and flexible sampling

Only the requested data is returned in the response.

## Faster

You can shorten your query by selecting only the fields you want to query.

## Useful analytics

Since the client is obliged to specify the fields explicitly in the request, the server knows exactly which fields are really needed. And this is important information for the deprecation policy.

## Works on top of any data source and transport

It is important that GraphQL allows you to work on top of any data source and any transport. In this case, HTTP is not a panacea, GraphQL can also work over WebSocket.

## Fetching data with one API call

The main difference between GraphQL and REST is that the latter are centered around individual endpoints, so a developer must combine multiple endpoints to collect all the data needed. While GraphQL focuses on the task itself, in this case the developer can request the required data with just one API call.

## No problem with over and under retrieval

REST responses are known to contain too much or insufficient data, which creates the need for another request. GraphQL solves this efficiency problem by fetching accurate data in a single request.

## Out of the box type check

GraphQL's introspection feature allows you to traverse types and define schema so that applications only request what is possible and in the appropriate format. However, developers can see what the schema can query and how the data is set there. Based on this, they can easily add new fields to existing queries through the GraphQL IDE. There is no need to validate the data format as GraphQL does it for you. Developers only need to write resolvers - how the data will be retrieved.

## Auto-generating API documentation

GraphQL syncs documentation with API changes. Because the GraphQL API is tightly coupled with code, when a field, type, or query changes, so do the documents. This benefits the developers directly as they spend less time documenting the API.

## API evolution without version control

API development entails the problem of keeping the old version until the developers move to the new one. So, with REST, it's customary to offer multiple versions of the API. However, GraphQL removes the need for version control by ditching the field-level API. Obsolete fields can later be removed from the schema without affecting existing queries. GraphQL makes this possible by creating a single API for the entire application that is not limited to a specific storage engine.

## Using a single development version

GraphQL APIs provide applications with consistent access to new functionality and help create cleaner, more maintainable server-side code.

## Code Sharing

In GraphQL, fields used in multiple queries can be shared at a higher level of components for reuse. This feature, called chunks, allows you to get different data while keeping the same schema field.

## Detailed error messages

In REST, we simply check the HTTP headers for the response status, based on which we can determine what went wrong and how to deal with it. Conversely, if an error occurs while processing GraphQL queries, the back-end will provide a detailed error message that includes all recognizers and referencing the specific part of the query on error.
GraphQL error messages are not standardized, so you can choose whether it's a stack trace, an application-specific error code, or just plain text.

## Access rights

When you create a GraphQL schema, you choose which functions to expose and how they work. In turn, REST views are usually all or nothing. Thus, each view should have an idea of ​​what can and cannot be revealed in different circumstances, which is not so easy to do. Otherwise, if the request contains some personal information, the REST architecture won't even expose the public parts of the requested data.

## Additional operation

In REST APIs perform CRUD operations with the following HTTP requests:

- CREATE: generate new records using POST
- READ: get data based on input parameters using GET
- UPDATE: change records from PUT
- DELETE: erase the specified data with DELETE.

Thus, GraphQL adds a new operation to the table - subscriptions - that allows clients to receive messages from the server in real time. GraphQL subscriptions can be used to automatically send notifications to the client when a new comment or data is added or a message is received.

## Rapid application prototyping

If the goal is to provide a prototype, CRUD operations can be time consuming. GraphQL accelerates this process by providing a single API endpoint that serves as a data proxy between the user interface and the data store. In addition, development speed is closely tied to the improved developer experience that GraphQL offers: easier coding with data - next to the UI, reusable fragments, less attention to error handling.

## References:

https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/

https://engineering.fb.com/core-data/graphql-a-data-query-language/

https://graphql.org/learn

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

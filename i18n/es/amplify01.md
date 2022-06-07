---
id: amplify-01
title: Serverless
sidebar_label: Serverless
---

Building a backend on AWS Amplify (DataStore + AppSync) is about working with serverless technology, so before continuing to write the code, we'll figure out what serverless computing is and what are its advantages over server-side computing.

Predictions by University of Berkeley pundits on how backend technology will evolve:

> By providing a simplified programming environment, Serverless Computing makes the cloud much easier to use, thereby attracting more people who can and will use it. Serverless computing includes FaaS and BaaS offerings and marks an important milestone in the evolution of cloud programming. This eliminates the need for manual resource management and optimization that today's server-side computing imposes on application developers, which is like moving from assembly language to high-level languages ​​over four decades ago.

> We forecast serverless usage to skyrocket. We also predict that on-premises hybrid cloud applications will shrink over time, although some deployments may persist due to regulatory and data governance constraints.

> Serverless computing will become the standard computing paradigm in the cloud age, largely replacing server-side computing and thus ending the client-server era.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

## Serverless computing

Cloud-native architecture that allows you to delegate most of your operational responsibility to AWS and thereby gain more flexibility and innovation. Serverless Computing allows you to build and run applications and services without worrying about servers. They eliminate the need to deal with infrastructure management issues such as provisioning servers or clusters, resources required, and operating system patching and maintenance. They can be used for virtually any type of application or back-end service, and everything that is required to run and scale a highly available application is done without client intervention.

> In our definition, for a service to be considered serverless, it must scale automatically without the need for explicit initialization and be billed based on usage.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

To put it very simply, Serverless means not the physical absence of servers, but the absence of the headache of infrastructure management and maintenance.

# Advantages of serverless architecture:

There are many ways to create an application these days. Decisions made at an early stage can and will affect not only the lifecycle of an application, but also development teams and, ultimately, a company or organization. In this article, I advocate and outline ways to build your applications using serverless technologies and methodologies. But what are the benefits of building an application this way, and why is serverless becoming so popular?

## One programming language

With modern tools and methodologies like AWS Amplify, a single developer can leverage their existing set of skills and knowledge of a unified platform and ecosystem (like JavaScript) to build scalable applications, complete with all the features that would have required highly skilled backend teams in the past. programmers and DevOps engineers for assembly and maintenance.

## Less code

The only thing that has value is the function that the code provides, not the code itself. When you find ways to provide these functionality while limiting the amount of code you support and even ditching code entirely, you reduce the overall complexity of your application.
Less complexities mean fewer bugs, easier for new engineers, and overall less cognitive load for those supporting and adding new features.
A developer can connect to these services and implement functions without knowing the actual internal implementation and having little or no internal code.

## No need to manage servers

No need to provision or maintain servers. No software or runtime installation, maintenance or administration required.

## Scalability

One of the main advantages of not having a server is scalability out of the box. When building an application, you don't have to worry about what happens if your application becomes extremely popular and you connect more new users and the cloud provider can handle it for you.
The cloud provider automatically scales your application by executing code in response to each interaction. In a serverless function, your code runs in parallel and handles each trigger individually (in turn, scales with the size of the workload).
No need to worry about scaling your servers and databases.

## Development speed

With fewer features, development speed increases. The ability to quickly deploy the types of functions that are typical of most applications (databases, authentication, storage, APIs), and with much less upfront time, allows you to quickly get started writing the core functions and business logic for the function you want to deliver to the end to the client.

## Experiments

If you don't spend a lot of time creating repetitive features, you can experiment more easily and with less risk.
When submitting a new feature, you often assess the risk (time and money involved in creating that feature) with a possible return on investment (ROI). As the risk associated with trying new things decreases, you may experience ideas that may not have seen the light of day in the past.
We can also test different ideas much easier.

## Security and stability

Since the services you subscribe to are the core competence of the service provider, you get something much more polished and usually more secure than you could create yourself.
Imagine a company whose core business model is focused on providing primary authentication services and has been using it for many years, solving and fixing problems for thousands of companies and customers.
Now, imagine that you are trying to replicate such a service in your own team or organization. While it is entirely possible and feasible, the chances are that choosing a service created and maintained by people whose only job is to create and maintain this exact thing is a safer and more reliable bet.
Another primary concern of these service providers is simply to minimize downtime. This means that they take on the burden of not only building, deploying and maintaining these services, but also do their best to ensure their stability and resilience.

## Automatic availability control

Serverless computing provides built-in high availability and fault tolerance. These capabilities do not need to be specially designed because the services that run the application provide them by default.

## Cost

With the traditional approach, you often pay for computing resources whether they are being used or not. This means that if you want to ensure that your application will scale, you need to prepare for the largest workload you could see, regardless of whether it reaches that level. After all, this traditional approach meant that you pay for unused resources for most of your application's lifespan.
With serverless technologies, you only pay for what you use. With FaaS (Function-as-a-Service), you are billed based on the number of requests for your functions and the time it takes to execute your function code. With managed services like Amazon Rekognition, you only pay for rendered images, minutes for video processing, and more, again, paying only for what you use.
The bill from your cloud provider is only a fraction of the total cost of your cloud infrastructure, as well as salary. This cost decreases if you have fewer operational resources.
There are also development costs. Building applications this way speeds time-to-market, reducing overall development time and therefore development costs.
Basically, you pay for stable bandwidth or execution time, not for the number of servers used.

More about pricing [here](https://aws.amazon.com/ru/appsync/pricing/)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

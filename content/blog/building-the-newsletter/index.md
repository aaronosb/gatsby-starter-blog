---
title: Building the newsletter signup
date: "2015-05-01T22:12:03.284Z"
description: "A walkthrough of the technical implementation of the newsletter signup functionality. Implemented using Amplify, API Gateway, Lambda, DynamoDB, SES, and the Serverless Framework."
---

[Insert architecture diagram.]


Like all blogs I figured I would need the functionality of signing readers up to a newsletter. 

## SES 
- Used for verifying the email
- Used for sending out emails

## Dynamo
- Used for storing the subscribers emails

## Lambda 
- For the business logic of creating the dynamodb record and triggering SES

## Amplify & API Gateway
- Amplify for providing the client side JS library to post to the API Gateway endpoint. (Note here not super necessary, but when using Coginto or a custom auth token this is very helpful)

[Insert Amplify config]

- API Gateway really just the API Gateway endpoint that invokes the lambda function

## Serverless Framework
- The serverless framework is what I use to package all this together and deploy this service. [Check out more on the serverless framework.](https:/serverless.com)

[Insert serverless.yml]
- Explain the roles
- Explain the resources
- Anything else?


## Conclusion 
That's it, if you are creating your own blog feel free to reuse this code and save yourself some time [github link](). Also go ahead and try out the functionality live on this site by signing up for the newsletter! (Button)






---
title: Overview
id: overview
sidebar_position: 1
---

Serverless Functions lets you execute custom code in cloud environments.
This platform eliminates the complexity of server management, enabling you to focus solely on developing and running your code.

## What are Serverless Functions?

Serverless Functions allow you to run custom code snippets or entire applications without the overhead of managing servers.
When you upload your code to RunPod, it's executed in a fully managed environment, scaled automatically to meet demand.
This means you're free from the constraints of server capacity planning and maintenance.

### Key characteristics

- **Fully Managed Execution**: RunPod takes care of the underlying infrastructure, so your code runs whenever it's triggered, without any server setup or maintenance.
- **Automatic Scaling**: The platform scales your functions up or down based on the workload, ensuring efficient resource usage.
- **Flexible Language Support**: RunPod SDK supports various programming languages, allowing you to write functions in the language you're most comfortable with.
- **Seamless Integration**: Once your code is uploaded, RunPod provides an Endpoint, making it easy to integrate your serverless functions into any part of your application.

## Why use Serverless Functions?

Serverless Functions offer a paradigm shift in how you approach backend code execution:

- **Efficiency**: Focus on writing code that matters without worrying about the server lifecycle.
- **Cost-Effective**: You only pay for the time your functions are running, not idle server time.
- **Rapid Deployment**: Quickly update and deploy functions, enabling faster iteration and response to changes.

Your Serverless Function only accepts requests using your own account's API key, not any RunPod API key.

## Get started

To start using Serverless Functions:

1. **Write Your Function**: Code your function in a supported language.
2. **Deploy to RunPod**: Upload your function to RunPod.
3. **Integrate and Execute**: Use the provided Endpoint to integrate with your application.

:::note

You can also pass in a webhook URL when invoking `run` within the JSON body.

For more information, see [Use your Endpoint](/serverless/serverless-functions/serverless-usage#webhook).
:::

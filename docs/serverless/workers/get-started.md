---
title: "Get started"
sidebar_position: 2
---

## Overview

You'll have an understanding of building a Docker image, deploying a Serverless endpoint, and sending a request.
You'll also have a basic understanding of how to customize the handler for your use case.

## Prerequisites

This tutorial presumes you have an understanding of the terminal and can execute commands from your terminal.

### RunPod

To continue with this quick start, you'll need the following from RunPod:

- RunPod account
- RunPod API Key

### Docker

To build your Docker image, you'll need the following:

- Docker installed
- Docker account

### GitHub

To clone the `worker-template` repo, you'll need access to the following:

- Git Installed
- Permissions to clone GitHub repos

## Build and push your Docker image

This step will walk you through building and pushing your Docker image to your container registry.
This is useful to building custom images for your use case.

1. Clone the [worker-template](https://github.com/runpod-workers/worker-template):

```command
gh repo clone runpod-workers/worker-template
```

2. Navigate to the root of the cloned repo:

```command
cd worker/template
```

3. Build the Docker image:

```command
docker build --tag <username>/<repo>:<tag> .
```

4. Push your container registry:

```command
docker push <username>/<repo>:<tag>
```

Now that you've pushed your container registry, you're ready to deploy your Serverless Endpoint to RunPod.

## Deploy a serverless endpoint

This step will walk you through deploying a Serverless Endpoint to RunPod.
You can refer to this walkthrough to deploy your own custom Docker image.

1. Login to the [RunPod Serverless console](https://www.runpod.io/console/serverless).
2. Select **+ New Endpoint**.
3. Provide the following:
   1. Endpoint name.
   2. Select a GPU.
   3. Configure the number of workers.
   4. (optional) Select **FlashBoot**.
   5. (optional) Select a template.
   6. Enter the name of your Docker image.
      - For example `<username>/<repo>:<tag>`.
   7. Specify enough memory for your Docker image.
4. Select **Deploy**.

Now, let's test your Endpoint.
We will do this from the console.

## Send a test request

Now that your Endpoint is deployed, send a test.
This is a great way to test your Endpoint before sending a request from your application.

1. From the Endpoint's page, select **Requests**.
2. Choose **Run**.
3. You should see a successful response with the following:

```json
{
  "id": "6de99fd1-4474-4565-9243-694ffeb65218-u1",
  "status": "IN_QUEUE"
}
```

After a few minutes, the stream will show the full response.

You can now begin sending requests to your Endpoint from your terminal and an application.

## Send a request using cURL

Once your Endpoint is deployed, you can send a request.
This example sends a response to the Endpoint using cURL; however, you can use any HTTP client.

```curl
curl --request POST \
     --url https://api.runpod.ai/v2/<YOUR_ENDPOINT>/runsync \
     --header 'accept: application/json' \
     --header 'authorization: <YOUR_API_KEY>' \
     --header 'content-type: application/json' \
     --data '
{
  "input": {
    "prompt": "A coffee cup.",
    "height": 512,
    "width": 512,
    "num_outputs": 1,
    "num_inference_steps": 50,
    "guidance_scale": 7.5,
    "scheduler": "KLMS"
  }
}
'
```

Where `YOUR_ENDPOINT` is the name of your Endpoint and `YOUR_API_KEY` is your API Key.

:::note

Depending on any modifications you made to your handler, you may need to modify the request.

:::

## Next steps

Now that you have successfully launched an endpoint using our template, you can:

- [Customize the handler](/serverless/handlers/overview)
- [Send requests to the Endpoint](/serverless/serverless-functions/serverless-usage)

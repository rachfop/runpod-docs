---
title: "Run your first AI API with Stable Diffusion"
description: "Interact with your favorite models without managing the pods yourself."
sidebar_position: 1
---

Job endpoints in RunPod are URLs that provide standard functionality for submitting jobs and retrieving the output from job requests.

To use these endpoints, you will need to have your endpoint ID.

The constructed URL will start with `https://api.runpod.ai/v2/{endpoint_id}`.

## Runsync

Runsync is a synchronous endpoint that runs your model and returns the result. It is useful for testing your model and debugging.
Recommended for jobs that take less than 15 seconds.

For example, if you are using the Stable Diffusion v1 inference endpoint, you would make a request like the following:

```bash
curl -X POST https://api.runpod.ai/v2/stable-diffusion-v1/runsync \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {Your_API_KEY}' \
    -d '{"input": {"prompt": "a cute magical flying dog, fantasy art drawn by disney concept artists"}}'
```

You would get an immediate response that includes a unique job ID.
You can then query the status endpoint and pass it your job ID. The status endpoint will give you the job results when completed.

## Run

Run is an asynchronous endpoint that runs your model and returns a job ID. It is useful for running your model in the background.
Recommended for jobs that take more than 15 seconds.

For example, if you are using the Stable Diffusion v1 inference endpoint, you would make a request like the following:

```bash
curl -X POST https://api.runpod.ai/v2/stable-diffusion-v1/run \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {Your_API_KEY}' \
    -d '{"input": {"prompt": "a cute magical flying dog, fantasy art drawn by disney concept artists"}}'
```

## Status

Status is an endpoint that returns the status of your job.

For checking the status of your job, you would make a request like the following:

```bash
curl https://api.runpod.ai/v2/stable-diffusion-v1/status/c80ffee4-f315-4e25-a146-0f3d98cf024b \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {Your_API_KEY}'
```

## Cancel

Cancel is an endpoint that cancels your job.
It is useful for cancelling your job.

## Health

Health is an endpoint that returns the health of your serverless worker. It is useful for checking the health of your serverless worker.
The health check is a utility function that can be called on any endpoint to provide worker and queue metrics.

```bash
curl --request GET \
     --url https://api.runpod.ai/v2/stable-diffusion-v1/health \
     --header 'accept: application/json' \
     --header 'authorization: Bearer {Your_API_KEY}'
```

:::note

You must retrieve your results via the status endpoint within 30 minutes as RunPod does not keep your inputs or outputs longer than that to protect your privacy.

:::

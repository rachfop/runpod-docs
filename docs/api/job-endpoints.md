---
title: "Job endpoints"
description: "Interact with your favorite models by sending a request to the endpoints below."
sidebar_position: 3
---

## Runsync

Runsync is a synchronous endpoint that runs your model and returns the result. It is useful for testing your model and debugging.
Recommended for jobs that take less than 15 seconds.

## Run

Run is an asynchronous endpoint that runs your model and returns a job ID. It is useful for running your model in the background.
Recommended for jobs that take more than 15 seconds.

## Status

Status is an endpoint that returns the status of your job. It is useful for checking the status of your job.

## Cancel

Cancel is an endpoint that cancels your job. It is useful for cancelling your job.

## Health

Health is an endpoint that returns the health of your serverless worker. It is useful for checking the health of your serverless worker.
The health check is a utility function that can be called on any endpoint to provide worker and queue metrics.

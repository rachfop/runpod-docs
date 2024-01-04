---
title: Overview
description: Learn what goes into choosing a Pod based on your needs.
sidebar_position: 1
---

Pods are running container instances pulled from a container registry such as Docker Hub, GitHub Container Registry, Amazon Elastic Container Registry, or another compatible registry. Pods can be created from a template or deployed directly via the API and CLI tools.

On RunPod you can configure the following:

- GPU Type and Quantity
- System Disk Size
- Start Command
- Environment Variables
- Open/Expose HTTP/TCP ports
- Persistent Storage Options

> 🚧 When building a docker image for RunPod be sure to use the flag `--platform linux/amd64,linux/arm64` to ensure it is compatible with the platform.

## Terminating a Pod

1. Click the dropdown arrow to expand the pod page.\
   ![](https://files.readme.io/b56d880-image.png)
2. Click the stop/terminate button. A pod that is connected to network storage can not be paused and will have a terminate button in place of a stop button.\
   ![](https://files.readme.io/6d9fe46-image.png)

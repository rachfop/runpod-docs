---
title: Templates
description: "A RunPod template is a Docker container image paired with a configuration."
sidebar_position: 7
---

A Template in RunPod is used to launch images as a pod. Within a template, you define the required container disk size, volume, volume path, and ports needed. Templates also allow you to set environment variables that are accessible within your pod. You define a variable by setting a name with the key and then what it should contain with value.

You can choose how deep you want to get into template customization, depending on your skill level. The easiest is to simply start with a RunPod official template or community template and use it as-is. If you want better control over what gets done at pod start, you can modify the "Docker Command" field.

Templates also define basic configurations for deploying workers. After logging into RunPod, you can create a new template and provide a name for your template, specify the location to the container image, link container credentials for private repositories, specify the command to run on container startup, define the amount of disk required to run your worker, and use environment variables to pass config and secrets to your container.

## Create a template

You can also create or modify a template using the RunPod API.

```curl
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { saveTemplate(input: { containerDiskInGb: 5, dockerArgs: \"sleep infinity\", env: [ { key: \"key1\", value: \"value1\" }, { key: \"key2\", value: \"value2\" } ], imageName: \"ubuntu:latest\", name: \"Generated Template\", ports: \"8888/http,22/tcp\", readme: \"## Hello, World!\", volumeInGb: 15, volumeMountPath: \"/workspace\" }) { containerDiskInGb dockerArgs env { key value } id imageName name ports readme volumeInGb volumeMountPath } }"}'
```

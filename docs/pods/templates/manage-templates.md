---
title: Manage Pod Templates
description: Manage Pod Templates.
sidebar_position: 3
---

## Explore Templates

You can explore Templates managed by RunPod and Community Templates in the **[Explore](https://www.runpod.io/console/explore)** section of the Web interface.

You can explore Templates managed by you or your team in the **[Templates](https://www.runpod.io/console/user/templates)** section of the Web interface.

Learn to create your own Template in the following section.

## Creating a Template

Templates are used to launch images as a Pod: within a template, you define the required container disk size, volume, volume path, and ports needed.

### Web interface

![](/img/docs/8418b2b-image.png)

### cURL

You can also create or modify a template using the RunPod API.

```curl
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://api.runpod.io/graphql?api_key=${YOUR_API_KEY}' \
  --data '{"query": "mutation { saveTemplate(input: { containerDiskInGb: 5, dockerArgs: \"sleep infinity\", env: [ { key: \"key1\", value: \"value1\" }, { key: \"key2\", value: \"value2\" } ], imageName: \"ubuntu:latest\", name: \"Generated Template\", ports: \"8888/http,22/tcp\", readme: \"## Hello, World!\", volumeInGb: 15, volumeMountPath: \"/workspace\" }) { containerDiskInGb dockerArgs env { key value } id imageName name ports readme volumeInGb volumeMountPath } }"}'
```

### Environment variables

Environment variables in RunPod templates are key-value pairs that are accessible within your pod. Define a variable by setting a name with the `key` and then what it should contain with the `value`.

Use environment variables to pass configuration settings and secrets to your container. For example, environment variables can store the path to a database or API keys used by your application.

![](/img/docs/b7670dd-image.png)


RunPod also provides a set of predefined [environment variables](/pods/references/environment-variables) that provide information about the pod, such as the unique identifier for your pod (`RUNPOD_POD_ID`), the API key used to make RunPod API calls to the specific pod (`RUNPOD_API_KEY`), the name of the host server the pod is running on (`RUNPOD_POD_HOSTNAME`), and more.

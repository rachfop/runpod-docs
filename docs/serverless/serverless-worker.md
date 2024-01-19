---
title: " The Worker"
id: "serverless-worker"
description: "Packaged code that will be receive and execute API submitted requests."
---

Once you have a functional handler, the next step will be to package it into a Docker image that can be deployed as a scalable serverless worker. This is accomplished by defining a docker file to import everything required to run your handler. Example docker files are in the [repos of our runpod-workers](https://github.com/orgs/runpod-workers/repositories).

_Unfamiliar with Docker? Check out their [overview page](https://docs.docker.com/get-started/overview/)._

## Docker File

Let's say we have a directory that looks like the following:

```
project_directory
├── dockerfile
├── src
│   └── handler.py
└── builder
    └── requirements.txt
```

Your dockerfile would look something like this:

```Text Docker
from python:3.11.1-buster

WORKDIR /

COPY builder/requirements.txt .
RUN pip install -r requirements.txt

ADD handler.py .

CMD [ "python", "-u", "/handler.py" ]
```

> 🚧 If your handler requires external files such as model weights, be sure to cache them into your docker image. You are striving for a completly self contained worker that does not need to download or fetch external files to run.

## Other Considerations

While we do not impose a limit on the docker image size your container registry might have, be sure to review any limitations they may have. Ideally, you want to keep your final docker image as small as possible and only container the absolute minimum to run your handler.

We also highly recommend the use of tags for docker images and not relying on the default `:latest` tag label, this will make version tracking and releasing updates significantly easier.

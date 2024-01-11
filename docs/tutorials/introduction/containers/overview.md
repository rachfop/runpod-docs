---
title: Containers overview
sidebar_position: 1
---

## What are containers?

> A container is an isolated environment for your code. This means that a container has no knowledge of your operating system, or your files. It runs on the environment provided to you by Docker Desktop. Containers have everything that your code needs in order to run, down to a base operating system.

[From Docker's website](https://docs.docker.com/guides/walkthroughs/what-is-a-container/#:~:text=A%20container%20is%20an%20isolated,to%20a%20base%20operating%20system)

Developers package their applications, frameworks, and libraries into a Docker container and ship those containers to be run outside their developement enviroment.

### Why use containers?

> Build, ship, and run anywhere.

Containers are self-contained and can run anywhere Docker can run. This means, you can run a container on-premises or in the cloud, as well as in hybrid environments.
Containers contain not only the application, but the dependencies; libraries and frameworks, configuration data, and certificates needed to run your application.

## Installing Docker

For the best installation experience, consult Docker's [official documentation](https://docs.docker.com/get-docker/).

### Running your first command

Now that Docker is installed, open a terminal window and run the following command:

```command
docker version
```

You should see something similar to the following output.

```text
docker version
Client: Docker Engine - Community
 Version:           24.0.7
 API version:       1.43
 Go version:        go1.21.3
 Git commit:        afdd53b4e3
 Built:             Thu Oct 26 07:06:42 2023
 OS/Arch:           darwin/arm64
 Context:           desktop-linux

Server: Docker Desktop 4.26.1 (131620)
 Engine:
  Version:          24.0.7
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.10
  Git commit:       311b9ff
  Built:            Thu Oct 26 09:08:15 2023
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.25
  GitCommit:       abcd
 runc:
  Version:          1.1.10
  GitCommit:        v1.1.10-0-g18a0cb0
 docker-init:
  Version:          0.19.0
```

If at any point you need help with a command, you can use the `--help` flag to provide documentation on the command you're running.

```command
docker --help
```

Let's run `busybox` from the command line to print out today's date.

```command
docker run busybox sh -c 'echo "The time is: $(date)"'
# The time is: Thu Jan 11 06:35:39 UTC 2024
```

- `busybox` is a lightweight Docker image with bare minimum Linux utilities installed, including `echo`
- The `echo` command prints the container's uptime.

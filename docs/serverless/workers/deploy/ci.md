---
title: Continuous integration
description: Learn to test your Handler Functions through continuous integration.
sidebar_position: 3
---

Integrate your Handler Functions through continuous integration.

The [Test Runner](https://github.com/runpod/test-runner) GitHub Action is used to test and integrate your Handler Functions into your applications.

:::note

Running any Action that sends requests to RunPod occurs a cost.

:::

You can add the following to your workflow file:

```yaml
- uses: actions/checkout@v3
- name: Run Tests
  uses: runpod/runpod-test-runner@v1
  with:
    image-tag: [tag of image to test]
    runpod-api-key: [a valid Runpod API key]
    test-filename: [path for a json file containing a list of tests, defaults to .github/tests.json]
    request-timeout: [number of seconds to wait on each request before timing out, defaults to 300]
```

If `test-filename` is omitted, the Test Runner Action attempts to look for a test file at `.github/tests.json`.

You can find a working example in the [Worker Template repository](https://github.com/runpod-workers/worker-template/tree/main/.github).

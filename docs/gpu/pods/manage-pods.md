---
title: Manage Pods
description: Manage your Pod.
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Start a Pod

### Web interface

<!-- instructions for Web interface -->

### CLI

You can pass the enviroment variable `RUNPOD_POD_ID` to identify each Pod.

```bash
runpodctl start pod $RUNPOD_POD_ID
```

You can also start a Pods in bulk.

To start 10 pods with name `my-bulk-task`.

```
runpodctl create pods --name my-bulk-task --gpuType "NVIDIA GeForce RTX 3070,NVIDIA GeForce RTX 3080" --imageName "runpod/cool-stuff" --containerDiskSize 10 --volumeSize 0 --mem 1 --args "bash -c 'bash command I want to run; runpodctl remove pod \$RUNPOD_POD_ID;'" --env "KEY1=VAL1" --env "KEY2=VAL2" --podCount 10
```

This will create up to 10 pods on 3070 and 3080 GPUs that will run a bash command and then terminate themselves automatically when the bash command is done running.

## Stop a Pod

### Web interface

<!-- instructions for Web interface -->

### CLI

```bash
runpodctl stop pod $RUNPOD_POD_ID
```

You can also stop a Pod after a specific amount of time.

<Tabs>
  <TabItem value="ssh" label="SSH">
    ```bash
    sleep 2h; runpodctl stop pod $RUNPOD_POD_ID &
    ```
  </TabItem>
  <TabItem value="web-terminal" label="Web Terminal">
    ```bash
    nohup bash -c "sleep 2h; runpodctl stop pod $RUNPOD_POD_ID" &
    ```
  </TabItem>
</Tabs>

This command sleeps for 2 hours (change `2h` to whatever you want), and then stops the Pod. `nohup` ensures the process won't terminate if you close the web terminal window.
Keep in mind that you will still incur disk fees on a stopped Pod.

## Terminate a Pod

### Web interface

<!-- instructions for Web interface -->

### CLI

```bash
runpodctl remove pod $RUNPOD_POD_ID
```

You can also remove Pods in bulk.

```bash
runpodctl remove pods my-bulk-task --podCount 40
```

This command will terminate up to 40 pods with the name "my-bulk-task".

## List Pods

### Web interface

<!-- instructions for Web interface -->

### CLI

```bash
runpodctl get pod
```

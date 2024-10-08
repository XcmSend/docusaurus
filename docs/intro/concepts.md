---
sidebar_position: 1
---

# Concepts

It is worth quickly browsing over the concepts as they will give you an idea of what you can do with Bagpipes. 

## Nodes

In Bagpipes, nodes are objects you can drag on to the canvass. A node can be connected to other nodes to form a workflow of nodes. 

## Edges 

Edges are what connect nodes together. Nodes can be connected to each other with edges to form a workflow. 

## Scenario

A Scenario is a workflow of nodes and edges. You can have multiple scenarios, that are saved for you in `Lab`. "Workflow", "flow" or "scenario" can be used interchangably, the official term is `scenario`, as each scenario has a `scenario_id`.

## Executions

An execution is a single run-through of operations within a scenario. A scenario can have more than one execution. An execution can be a complete run through or it may be a single node execution. Executions are saved in Lab. Just click on a scenario and it will show you its respective executions. 

## Pills

Pills are small draggable elements you can drop into a field of a form. There are different kinds of [pills](../pills/pills.md)



### Variable Pills
One of the main uses of pills are as variables to represent key values. So instead of hardcoding a form with a fixed number or string, you can make it dynamic. When you receive data from an upstream node you can use pills that will represent a value that is yet to be known, but its purpose is known. For example: an address pill, which is a variable that will contain an address that changes. 


### Function Pills 
Function pills are pills you can drop into a field that let you add inputs which will produce an output. There are different types of function pills. 

#### Format Conversion Pills
If you have some data and you want to convert it to a different form. You can drop in a format conversion pill. For example, you have a string that you want to convert to bytes. You can just drop a `stringToBytes()` pill into an input field, and then that will convert the format of the data (or variable pills) you add inside the brackets of this pill at execution time, from string to bytes. 

There are also: 

  ...logicFunctionPills,
  ...mathFunctionPills,
  ...textBinaryFunctionPills,
  ...encodeFunctionPills,
  ...formatConversionPills,
  ...cryptographicHashFunctionPills,
  ...arrayFunctionPills,
  ...collectionFunctionPills,
  ...dateTimeFunctionPills,

There are various other pills as well, such as  `operands`, `keywords` and `math`.








## Persist a Scenario

You can persist your scenario, which then turns it into an app that is always running. The persisted scenario can be scheduled to run periodically or it triggers based on a webhook trigger and some other conditions that you may set. 

## Node Types

Here are a list of nodes, which each have a different purpose. 

### 1. [Chain Node](/nodes/chain.md)

A chain node is an object that represents a blockchain. A chain node needs to be used in conjuction with an Action Node. A chain node represents either the source or the destination in relation to an action. 

[learn more](/nodes/chain.md)


### 2. [Action Node](/nodes/action.md)   
You can drag in an action node between two chains, the action is either xTransfer or Swap.

[learn more](/nodes/action.md)

#### Actions

Actions are otherwise referred to as blockchain transactions or extrinsics, which is something that is signed by a user and put on-chain. 



##### xTransfer 

xTransfer = Cross chain transfer

`xTransfer` is an action that represents transferring assets across chains. xTransfer can be a teleport, or a reserve asset transfer, etc.   

##### Swap   

Swap = Selling on asset for another asset on a decentralized exchange.  

_Note: we currently only support HydraDx to HydraDx swaps at the moment._  

### 3. [Chain Query Node](nodes/chainQuery.md)

A webhook node allows you to receive data. A webhook can only be used at the beginning of the workflow. Just generate a webhook endpoint URL, send some data there (via an http request using cURL, or Postman, etc), then when the event object data is received it can be and used your workflow. The event can also trigger you workflow to activate. 

[learn more](/nodes/chainQuery.md)

### 4. [Chain Tx Node](nodes/chainTx.md)

A webhook node allows you to receive data. A webhook can only be used at the beginning of the workflow. Just generate a webhook endpoint URL, send some data there (via an http request using cURL, or Postman, etc), then when the event object data is received it can be and used your workflow. The event can also trigger you workflow to activate. 

[learn more](/nodes/chainTx.md)



### 5. [Webhook Node](nodes/webhook.md)

A webhook node allows you to receive data. A webhook can only be used at the beginning of the workflow. Just generate a webhook endpoint URL, send some data there (via an http request using cURL, or Postman, etc), then when the event object data is received it can be and used your workflow. The event can also trigger you workflow to activate. 

[learn more](/nodes/webhook.md)

### 6. [HTTP Node](nodes/webhook.md)

A HTTP allows you to make almost any kind of HTTP(s) request on the internet! When you use this node to make an HTTP request, the response data (or event data) can be used in your workflow. It's a very powerful node that unlocks a lot of possibilities. 

[learn more](/nodes/http.md)


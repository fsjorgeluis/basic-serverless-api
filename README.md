# Serverless Framework AWS NodeJS Example

This template demonstrates how to create an deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework and express. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying basic-serverless-api to stage dev (us-east-1)

✔ Service deployed to stack basic-serverless-api-dev (112s)

functions:
  app-api: basic-serverless-api-dev-app-api  (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function app-api
```

Which should result in response similar to the following:

```json
{
	"statusCode": 200,
	"message": "Your function executed successfully!"
}
```

### Purpose

Educative

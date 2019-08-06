import cdk = require('@aws-cdk/core');
import {IKey} from "@aws-cdk/aws-kms";
import {Code, Function, Runtime} from "@aws-cdk/aws-lambda";

interface LambdaStackProps extends cdk.StackProps{
    key: IKey
}

export class LambdaStack extends cdk.Stack {

    constructor(scope: cdk.App, id: string, props: LambdaStackProps) {
        super(scope, id, props);

        const lambdaFn = new Function(this, "lambda", {
            code: Code.asset('lambda'),
            runtime: Runtime.NODEJS_8_10,
            handler: 'index.handler'
        })

        props.key.grant(lambdaFn)
    }
}

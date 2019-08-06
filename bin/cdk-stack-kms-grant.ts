#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { KmsStack } from '../lib/kms-stack';
import {LambdaStack} from "../lib/lambda-stack";

const app = new cdk.App();
const kmsStack = new KmsStack(app, 'Kms');
new LambdaStack(app, 'Lambda', {
    key: kmsStack.key
});

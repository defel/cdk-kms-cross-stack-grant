#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkStackKmsGrantStack } from '../lib/cdk-stack-kms-grant-stack';

const app = new cdk.App();
new CdkStackKmsGrantStack(app, 'CdkStackKmsGrantStack');
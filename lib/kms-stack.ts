import kms = require('@aws-cdk/aws-kms');
import cdk = require('@aws-cdk/core');

export class KmsStack extends cdk.Stack {
  public key: kms.Key;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.key = new kms.Key(this, "Key", {
      description: "The KMS Key used by the services"
    })
  }
}

const AWS = require('aws-sdk');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1'
});

// Create an S3 instance
const s3 = new AWS.S3();

// List Buckets
s3.listBuckets((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('S3 Buckets:');
    data.Buckets.forEach(bucket => {
      console.log(bucket.Name);
    });
  }
});

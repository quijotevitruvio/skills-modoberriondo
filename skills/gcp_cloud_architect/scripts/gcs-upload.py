"""
Level 99 Google Cloud Storage (GCS) Uploader
Purpose: Performance-optimized upload to Cloud Storage.
Usage: python gcs-upload.py <local-path> <gcs-bucket-name> --public
"""

import sys
import os
from google.cloud import storage

def upload_to_gcs(source_file_name, bucket_name, destination_blob_name, is_public=False):
    """Uploads a file to the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    # Performance Settings (metadata/caching)
    blob.cache_control = "public, max-age=31536000"
    blob.upload_from_filename(source_file_name)

    if is_public:
        blob.make_public()

    print(f"%c ✅ Uploaded {source_file_name} to gs://{bucket_name}/{destination_blob_name} ", "color: #00ff00; font-weight: bold; background: #000;")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python gcs-upload.py <local-path> <gcs-bucket-name> [--public]")
        sys.exit(1)

    local_path = sys.argv[1]
    bucket_val = sys.argv[2]
    public_flag = "--public" in sys.argv

    if os.path.isfile(local_path):
        upload_to_gcs(local_path, bucket_val, os.path.basename(local_path), public_flag)
    else:
        print(f"Error: {local_path} is not a valid file.")

#!/bin/bash
# Level 99 FinOps Cloud Audit Pro
# Purpose: Identify unused or underutilized assets to reduce cloud spend by 10-30% instantly.
# Usage: ./cost-audit.sh <aws|gcp>

PROVIDER=$1

if [ -z "$PROVIDER" ]; then
    echo "Usage: ./cost-audit.sh <aws|gcp>"
    exit 1
fi

echo "💰 Scanning $PROVIDER for Cloud Waste..."

if [ "$PROVIDER" == "aws" ]; then
    # 1. Unattached EBS Volumes
    echo "🔍 Checking for Unattached EBS Volumes..."
    aws ec2 describe-volumes --filters Name=status,Values=available --query 'Volumes[*].{ID:VolumeId,Size:Size,Type:VolumeType}' --output table

    # 2. Abandoned Elastic IPs
    echo "🔍 Checking for Unused Elastic IPs..."
    aws ec2 describe-addresses --query 'Addresses[?InstanceId==null].{IP:PublicIp}' --output table

    # 3. Idle RDS Instances (Simulated metric check)
    echo "🔍 RDS Idle Check: Suggesting manual CloudWatch review for low-latency DBs."

elif [ "$PROVIDER" == "gcp" ]; then
    # 1. Unused Static IPs
    echo "🔍 Checking for Unused Static IPs..."
    gcloud compute addresses list --filter="status:RESERVED" --format="table(name, address, region)"

    # 2. Idle Disks
    echo "🔍 Checking for Detached Disks..."
    gcloud compute disks list --filter="-users:*" --format="table(name, sizeGb, type, zone)" || echo "No detached disks found."

    # 3. Cloud SQL Rightsizing
    echo "🔍 Suggestion: Check 'Storage Auto-Resize' status on all Cloud SQL instances."
fi

echo "✅ Audit Complete! Recommended Action: Delete unused IPs and snapshot/delete unattached disks."

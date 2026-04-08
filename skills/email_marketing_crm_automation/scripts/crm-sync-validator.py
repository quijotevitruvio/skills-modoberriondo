# Level 99 CRM Sync Validator Pro
# Purpose: Cross-reference ActiveCampaign/Klaviyo lists with local DB records.

import requests
import os

# 1. CRM Settings (Replace with env vars or secrets)
API_URL = "https://api.activecampaign.com/api/3"
API_TOKEN = os.getenv("CRM_API_TOKEN", "YOUR_TOKEN")

def get_crm_count():
    print("🔍 Fetching CRM contact count...")
    headers = {"Api-Token": API_TOKEN}
    response = requests.get(f"{API_URL}/contacts?limit=1", headers=headers)
    if response.status_code == 200:
        data = response.json()
        return int(data["meta"]["total"])
    else:
        print(f"❌ Error fetching CRM count: {response.text}")
        return 0

def get_db_count():
    # Simulated Local Database Check
    print("🔍 Fetching Local DB contact count...")
    # In production, replace with: cursor.execute("SELECT COUNT(*) FROM contacts")
    return 1500 # Simulated value

def validate_sync():
    crm_count = get_crm_count()
    db_count = get_db_count()
    diff = abs(crm_count - db_count)

    print("-" * 30)
    print(f"📊 Result: {crm_count} (CRM) vs {db_count} (Local DB)")
    
    if diff == 0:
        print("✅ Sync Status: PERFECT (100% Match)")
    elif diff < (db_count * 0.05):
        print(f"⚠️ Sync Status: TOLERABLE (Difference: {diff} - 5% Margin)")
    else:
        print(f"🛑 Sync Status: CRITICAL (Difference: {diff} - Check logs!)")
    print("-" * 30)

if __name__ == "__main__":
    validate_sync()

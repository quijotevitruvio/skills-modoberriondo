"""
Level 99 Python Data Worker
Purpose: Flexible, multi-threaded scraping and data formatting.
Dependencies: requests, beautifulsoup4, csv, json
"""

import requests
from bs4 import BeautifulSoup
import csv
import json
import logging
from concurrent.futures import ThreadPoolExecutor

# 1. Setup Logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

def scrape_url(url):
    """Deep scraping logic for any given URL."""
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Example logic: extract title and all meta description
        data = {
            "url": url,
            "title": soup.title.string if soup.title else "N/A",
            "description": soup.find('meta', attrs={'name': 'description'})['content'] if soup.find('meta', attrs={'name': 'description'}) else "N/A"
        }
        return data
    except Exception as e:
        logging.error(f"Failed to scrape {url}: {e}")
        return None

def process_batch(urls, max_workers=5):
    """Multi-threaded processing for thousands of URLs."""
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(scrape_url, urls))
    return [r for r in results if r]

def save_to_json(data, filename="output.json"):
    """Export to enterprise-grade JSON format."""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    logging.info(f"Successfully saved {len(data)} records to {filename}")

if __name__ == "__main__":
    test_urls = ["https://www.google.com", "https://www.github.com", "https://www.n8n.io"]
    logging.info("Starting Level 99 Data Worker...")
    scraped_data = process_batch(test_urls)
    save_to_json(scraped_data)

#!/usr/bin/env node

/**
 * Technical SEO Audit Script (Expert Edition)
 * Version: 1.0 (Advanced Schema Check)
 *
 * This script runs a basic check for Lighthouse scores and Schema availability.
 */

const axios = require('axios');
const fs = require('fs');

async function auditSEO(url) {
    console.log(`--- Auditing SEO for: ${url} ---`);

    try {
        const response = await axios.get(url);
        const html = response.data;

        // 1. Check for Meta Title & Description
        const hasTitle = html.includes('<title>');
        const hasDesc = html.includes('name="description"');
        console.log(`- Meta Title Found: ${hasTitle ? '✅' : '❌'}`);
        console.log(`- Meta Description Found: ${hasDesc ? '✅' : '❌'}`);

        // 2. Check for RankMath or Schema
        const hasRankMath = html.includes('Rank Math');
        const hasJsonLd = html.includes('application/ld+json');
        console.log(`- RankMath Plugin Active: ${hasRankMath ? '✅' : '❌'}`);
        console.log(`- JSON-LD Schema Found: ${hasJsonLd ? '✅' : '❌'}`);

        // 3. Performance Check: Lighthouse (Simulated with PageSpeed Insight API)
        const psURL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&category=performance&category=seo`;
        const psRes = await axios.get(psURL);
        const perfScore = psRes.data.lighthouseResult.categories.performance.score * 100;
        const seoScore = psRes.data.lighthouseResult.categories.seo.score * 100;

        console.log(`- Performance Score: ${perfScore}%`);
        console.log(`- SEO Score: ${seoScore}%`);

    } catch (err) {
        console.error(`Error auditing ${url}: ${err.message}`);
    }
}

// Example Usage: Audit Homepage
const targetUrl = process.argv[2] || 'https://example.com';
auditSEO(targetUrl);

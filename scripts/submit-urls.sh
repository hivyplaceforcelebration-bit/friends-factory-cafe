#!/bin/bash
# Submit URLs to Google Indexing API
# Usage: ./scripts/submit-urls.sh [base_url] [api_key]

BASE_URL="${1:-http://localhost:3000}"
API_KEY="${2:-17d430e7c72e13be0ab1ef38e6b732e4710a7152158176090e3e3b5728f55cf1}"

echo "🚀 Submitting URLs to Google Indexing API..."
echo "Base URL: $BASE_URL"
echo ""

# Key pages to index
URLS=(
  "https://friendsfactorycafe.com"
  "https://friendsfactorycafe.com/about"
  "https://friendsfactorycafe.com/contact"
  "https://friendsfactorycafe.com/services"
  "https://friendsfactorycafe.com/packages"
  "https://friendsfactorycafe.com/menu"
  "https://friendsfactorycafe.com/areas"
  "https://friendsfactorycafe.com/blog"
  "https://friendsfactorycafe.com/book-now"
)

# Submit batch
echo "📤 Submitting ${#URLS[@]} URLs in batch..."
curl -X POST "$BASE_URL/api/indexing/batch" \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -d "{\"urls\": [$(printf '"%s",' "${URLS[@]}" | sed 's/,$//')], \"type\": \"URL_UPDATED\"}" \
  -s | jq '.'

echo ""
echo "✅ Submission complete!"
echo ""
echo "📊 Check status with:"
echo "curl -X GET $BASE_URL/api/indexing/status -H 'x-api-key: $API_KEY' | jq '.'"

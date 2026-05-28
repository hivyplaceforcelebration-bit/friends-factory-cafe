import { getAllExpandedKeywords } from "../lib/keyword-expansion";
import { serviceCategories } from "../lib/ffc-config";
import { generateExpandedContent } from "../lib/expanded-content";

// Helper to calculate Jaccard similarity of 3-grams
function getNGrams(text: string, n = 3): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  const ngrams = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(" "));
  }
  return ngrams;
}

function JaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return intersection / union;
}

function runAnalysis() {
  console.log("Starting Content Uniqueness Analysis...");
  
  const keywords = getAllExpandedKeywords();
  console.log(`Total expanded keywords found: ${keywords.length}`);
  
  // Sample 100 random pages to keep execution quick
  const sampleSize = 100;
  const sampledKeywords = [];
  const step = Math.floor(keywords.length / sampleSize);
  for (let i = 0; i < sampleSize; i++) {
    sampledKeywords.push(keywords[i * step]);
  }
  
  console.log(`Analyzing a sample of ${sampledKeywords.length} pages...`);
  
  const pageContents = sampledKeywords.map((ek) => {
    const service = serviceCategories.find((s) => s.slug === ek.parentServiceSlug);
    if (!service) return null;
    
    // Create virtual keyword
    const virtualKeyword = {
      slug: ek.slug,
      title: ek.title,
      h1: ek.h1,
      metaTitle: ek.metaTitle,
      metaDescription: ek.metaDescription,
    };
    
    try {
      const content = generateExpandedContent(ek, service, virtualKeyword);
      
      // Combine all main textual output to compare
      let fullText = content.introduction + " \n ";
      content.sections.forEach((s) => {
        fullText += s.heading + " \n " + s.content + " \n ";
      });
      content.whyChooseUs.forEach((w) => {
        fullText += w + " \n ";
      });
      content.faqContent.forEach((faq) => {
        fullText += faq.question + " \n " + faq.answer + " \n ";
      });
      
      return {
        slug: ek.slug,
        dimension: ek.dimension,
        text: fullText,
        ngrams: getNGrams(fullText, 3)
      };
    } catch (e) {
      return null;
    }
  }).filter(Boolean);
  
  console.log(`Successfully generated contents for ${pageContents.length} sample pages.`);
  
  let totalSimilarity = 0;
  let maxSimilarity = 0;
  let maxSimPair = "";
  let comparisons = 0;
  let highSimCount = 0;
  
  for (let i = 0; i < pageContents.length; i++) {
    for (let j = i + 1; j < pageContents.length; j++) {
      const sim = JaccardSimilarity(pageContents[i]!.ngrams, pageContents[j]!.ngrams);
      totalSimilarity += sim;
      comparisons++;
      
      if (sim > maxSimilarity) {
        maxSimilarity = sim;
        maxSimPair = `${pageContents[i]!.slug} vs ${pageContents[j]!.slug}`;
      }
      
      if (sim > 0.4) {
        highSimCount++;
        if (highSimCount <= 10) {
          console.log(`High Similarity Warning: [${(sim * 100).toFixed(1)}%] between:`);
          console.log(`  - ${pageContents[i]!.slug} (Dimension: ${pageContents[i]!.dimension})`);
          console.log(`  - ${pageContents[j]!.slug} (Dimension: ${pageContents[j]!.dimension})`);
        }
      }
    }
  }
  
  const avgSimilarity = totalSimilarity / comparisons;
  console.log("\n================ RESULTS ================");
  console.log(`Average Similarity (Jaccard 3-grams): ${(avgSimilarity * 100).toFixed(2)}%`);
  console.log(`Max Similarity: ${(maxSimilarity * 100).toFixed(2)}% (${maxSimPair})`);
  console.log(`Comparisons with >40% similarity: ${highSimCount} / ${comparisons} (${((highSimCount / comparisons) * 100).toFixed(2)}%)`);
  console.log("=========================================\n");
}

runAnalysis();

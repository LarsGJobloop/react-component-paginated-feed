import response from "./articlesData.json";

/**
 * Get slice of pageSize from the articles list
 * @param {number} pageNumber
 * The wanted page
 * @param {number} pageSize
 * The size of the pages
 * @returns 
 */
export function getFeedPage(pageNumber, pageSize) {
  const start = pageNumber * pageSize;
  const end = start + pageSize;

  console.log(`Fetching articles: ${start + 1} through ${end}`);

  return response.articles.slice(start, end);
}

/**
 * Returns the total number of articles
 * @returns
 */
export function getArticleCount() {
  console.log("Querrying for total article count");

  return response.articles.length;
}

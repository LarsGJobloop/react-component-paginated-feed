import response from "./articlesData.json";

/**
 * Get a slice from the articles array
 * @param {*} pageNumber
 * @returns
 */
export function getFeedPage(pageNumber) {
  // Sets the amount of articles returned
  const sliceSize = 10;

  const start = pageNumber * sliceSize;
  const end = start + sliceSize;

  return response.articles.slice(start, end);
}

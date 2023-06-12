import response from "./articlesData.json";

/**
 * Get a slice from the articles array
 * @param {*} pageNumber 
 * @returns 
 */
export function getFeedPage(pageNumber) {
  // Handle negative pageNumber
  if (pageNumber < 0) {
    pageNumber = 0
  }
  
  const sliceSize = 10;

  // Handle overflowing pageNumber
  if (pageNumber > (response.articles.length / sliceSize)) {
    pageNumber = (response.articles.length / sliceSize)
  }


  const start = pageNumber * sliceSize;
  const end = start + sliceSize;

  console.log(`Fetching article set: ${start} - ${end}`)

  return response.articles.slice(start, end);
}

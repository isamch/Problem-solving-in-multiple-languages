// Exercise: Fetch JSON Data (Async)

// Description: Fetch data from an API endpoint using async/await.

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// Test the function
fetchData('https://jsonplaceholder.typicode.com/posts/1').then(console.log);

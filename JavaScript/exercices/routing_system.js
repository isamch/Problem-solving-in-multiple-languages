// Exercise: Routing System

// Description: Create a simple SPA router.

function router(path) {
  const routes = { '/': 'Home', '/about': 'About' };
  return routes[path] || '404';
}

// Test the function
console.log(router('/about'));

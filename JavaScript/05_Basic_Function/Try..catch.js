try {
  throw new Error('Something went wrong!');
} catch (error) {
  console.log('Error caught:', error.message);
} finally {
  console.log('Cleanup code here');
}
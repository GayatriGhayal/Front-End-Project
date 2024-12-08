// JavaScript for handling search button
document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-bar').value;
    if (query.trim() !== '') {
      alert("Searching for: " + query);
    } else {
      alert("Please enter a search term.");
    }
  });
  
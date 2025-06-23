// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('searchResults');
    
    // Sample search data (in a real app, this would come from an API)
    const sampleResults = [
        { type: 'song', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
        { type: 'artist', name: 'Drake', followers: '60M' },
        { type: 'album', title: 'Future Nostalgia', artist: 'Dua Lipa', year: '2020' },
        { type: 'playlist', title: 'Today\'s Top Hits', curator: 'RilMusic' }
    ];
    
    // Show search results on input focus
    searchInput.addEventListener('focus', function() {
        searchResults.style.display = 'block';
        // In a real app, you might show recent searches here
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Handle search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        
        if (query) {
            // In a real app, you would fetch results from your backend
            displaySearchResults(query);
        }
    });
    
    // Display search results (mock implementation)
    function displaySearchResults(query) {
        if (!query) {
            searchResults.innerHTML = '<p>Start typing to search</p>';
            return;
        }
        
        // Filter sample results (in real app, this would be API call)
        const filtered = sampleResults.filter(item => {
            const searchStr = JSON.stringify(item).toLowerCase();
            return searchStr.includes(query.toLowerCase());
        });
        
        if (filtered.length === 0) {
            searchResults.innerHTML = `<p>No results found for "${query}"</p>`;
            return;
        }
        
        let html = '<div class="results-header">';
        html += `<h3>Results for "${query}"</h3>`;
        html += '</div><div class="results-list">';
        
        filtered.forEach(item => {
            html += '<div class="result-item">';
            if (item.type === 'song') {
                html += `<i class="bi bi-music-note"></i>`;
                html += `<div><strong>${item.title}</strong><br>`;
                html += `<span>${item.artist} • ${item.album}</span></div>`;
            } else if (item.type === 'artist') {
                html += `<i class="bi bi-person"></i>`;
                html += `<div><strong>${item.name}</strong><br>`;
                html += `<span>Artist • ${item.followers} followers</span></div>`;
            } else if (item.type === 'album') {
                html += `<i class="bi bi-collection"></i>`;
                html += `<div><strong>${item.title}</strong><br>`;
                html += `<span>${item.artist} • ${item.year}</span></div>`;
            } else if (item.type === 'playlist') {
                html += `<i class="bi bi-music-player"></i>`;
                html += `<div><strong>${item.title}</strong><br>`;
                html += `<span>Playlist • By ${item.curator}</span></div>`;
            }
            html += '</div>';
        });
        
        html += '</div>';
        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
    }
    
    // Live search as user types
    searchInput.addEventListener('input', function() {
        displaySearchResults(this.value);
    });
});
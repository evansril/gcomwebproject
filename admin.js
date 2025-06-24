document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const addMusicBtn = document.getElementById('addMusicBtn');
    const addMusicModal = document.getElementById('addMusicModal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.btn-cancel');
    
    // Show modal
    addMusicBtn.addEventListener('click', function() {
        addMusicModal.style.display = 'flex';
    });
    
    // Hide modal
    function hideModal() {
        addMusicModal.style.display = 'none';
    }
    
    closeModal.addEventListener('click', hideModal);
    cancelBtn.addEventListener('click', hideModal);
    
    // Hide modal when clicking outside
    addMusicModal.addEventListener('click', function(e) {
        if (e.target === addMusicModal) {
            hideModal();
        }
    });
    
    // Form submission
    const musicUploadForm = document.getElementById('musicUploadForm');
    musicUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, you would handle file upload here
        alert('Music upload functionality would be implemented here');
        hideModal();
        musicUploadForm.reset();
    });
    
    // Initialize chart
    const ctx = document.getElementById('downloadsChart').getContext('2d');
    const downloadsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Downloads',
                data: [1250, 1900, 1700, 2100, 2400, 2800, 3100],
                borderColor: '#1DB954',
                backgroundColor: 'rgba(29, 185, 84, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b3b3b3'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b3b3b3'
                    }
                }
            }
        }
    });
    
    // Delete confirmation
    document.querySelectorAll('.btn-action.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this item?')) {
                // In a real app, you would make an API call to delete
                const row = this.closest('tr');
                row.style.opacity = '0.5';
                setTimeout(() => {
                    row.remove();
                }, 300);
            }
        });
    });
    
    // Simulate loading data
    setTimeout(() => {
        document.querySelectorAll('.admin-table tbody tr').forEach(row => {
            row.style.animation = 'fadeIn 0.5s forwards';
        });
    }, 500);
});
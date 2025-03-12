document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('hamburger-active');
    });

    // Skills Graph Toggle
    const toggleCheckbox = document.getElementById('skills-toggle');
    const skillsList = document.querySelector('.skills-list');
    const graphContainer = document.querySelector('.skills-graph-container');
    let skillsChart = null;

    // Reset toggle state on page load
    toggleCheckbox.checked = false;
    skillsList.style.display = 'block';
    graphContainer.style.display = 'none';

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            skillsList.style.display = 'none';
            graphContainer.style.display = 'block';

            // Destroy existing chart if it exists
            if (skillsChart) {
                skillsChart.destroy();
                skillsChart = null;
            }

            // Initialize new chart
            const ctx = document.getElementById('skillsChart').getContext('2d');
            skillsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['SQL', 'PySpark', 'Azure ADF', 'Hadoop', 'AWS', 'Airflow'],
                    datasets: [{
                        label: 'Proficiency (0-10)',
                        data: [9, 8, 7, 6, 7, 5],
                        backgroundColor: '#007BFF',
                        borderColor: '#0056b3',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            title: {
                                display: true,
                                text: 'Proficiency Rating'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Skills'
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        } else {
            skillsList.style.display = 'block';
            graphContainer.style.display = 'none';
            if (skillsChart) {
                skillsChart.destroy();
                skillsChart = null;
            }
        }
    });
});

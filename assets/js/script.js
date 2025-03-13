document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('hamburger-active');
    });

    // About Me Toggle
    const runQueryButton = document.getElementById('runQuery');
    const output = document.getElementById('output');
    if (runQueryButton && output) {
        runQueryButton.addEventListener('click', function() {
            if (output.style.display === 'none' || output.style.display === '') {
                output.textContent = "Data Engineer with more than 2.8 years of experience in designing, developing, and managing large-scale data pipelines. Skilled in SQL, Python, Spark, Hadoop, and ELT processes, with experience using Azure, AWS, and Databricks platforms. Contributed to the Digital Twin project, integrating multiple data sources to improve business operations, which won the Economic Times DataCon Award 2024. Focused on applying technology to solve data challenges.";
                output.style.display = 'block';
            } else {
                output.style.display = 'none';
            }
        });
    }

    // Key Competencies Pie Chart
    const competenciesChart = document.getElementById('competenciesChart').getContext('2d');
    let keyCompetenciesChart = null;

    // Define your percentages here (total must equal 100%)
    const competenciesData = {
        labels: ['Data Pipeline Development', 'Data Warehousing', 'Data Modeling', 'Performance & Cost Optimization'],
        datasets: [{
            data: [40, 30, 20, 10], // Replace with your desired percentages (e.g., [30, 25, 20, 25])
            backgroundColor: ['#054a91', '#3e7cb1', '#81a4cd', '#dbe4ee'],
            borderWidth: 1,
            borderColor: '#ffffff'
        }]
    };

    // Initialize the pie chart
    keyCompetenciesChart = new Chart(competenciesChart, {
        type: 'pie',
        data: competenciesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#4A4A4A',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
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
                    labels: ['SQL', 'Python', 'Spark', 'Hadoop', 'Azure', 'AWS', 'DWH/MDW', 'Databricks','Snowflake'],
                    datasets: [{
                        label: 'Proficiency (0-10)',
                        data: [8.5,8,8,9,8,5,9,7,5],
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

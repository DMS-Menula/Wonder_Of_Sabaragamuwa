AOS.init({
      duration: 1000,
      once: true
    });
    
    document.getElementById('year').textContent = new Date().getFullYear();
    
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('loadMore').addEventListener('click', function() {
      const morePlaces = document.getElementById('morePlaces');
      if (morePlaces.style.display === 'none' || morePlaces.style.display === '') {
        morePlaces.style.display = 'flex';
        this.textContent = 'Show Less';
      } else {
        morePlaces.style.display = 'none';
        this.textContent = 'Load More Places';
      }
    });
    
    const subscribeForm = document.querySelector('.subscribe-form');
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
      this.reset();
    });
  
    const populationCtx = document.getElementById('populationChart').getContext('2d');
    const populationChart = new Chart(populationCtx, {
      type: 'bar',
      data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
        datasets: [{
          label: 'Population Growth',
          data: [145000, 149000, 153000, 157000, 160000, 163000, 166000],
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(54, 162, 235, 0.7)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: 140000
          }
        }
      }
    });
    
    const climateCtx = document.getElementById('climateChart').getContext('2d');
    const climateChart = new Chart(climateCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Temperature (°C)',
          data: [27, 28, 29, 30, 30, 29, 28, 28, 28, 28, 27, 27],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          yAxisID: 'y'
        }, {
          label: 'Rainfall (mm)',
          data: [150, 120, 180, 300, 350, 300, 250, 250, 300, 350, 300, 200],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 2,
          yAxisID: 'y1'
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Temperature (°C)'
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Rainfall (mm)'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      });
    });
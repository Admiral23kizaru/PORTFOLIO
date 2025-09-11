// =======================
// 1. Dynamic Hero Section Animation
// =======================
const names = ["Your Name", "A Coder", "A Designer", "A Creator"];
const roles = ["A Passionate Web Developer", "A Creative Thinker", "A Problem Solver", "A Team Player"];
let nameIndex = 0, roleIndex = 0;

function animateHero() {
  const nameEl = document.getElementById('dynamic-name');
  const roleEl = document.getElementById('dynamic-role');
  if (!nameEl || !roleEl) return;
  nameEl.textContent = names[nameIndex];
  roleEl.textContent = roles[roleIndex];
  nameIndex = (nameIndex + 1) % names.length;
  roleIndex = (roleIndex + 1) % roles.length;
}
setInterval(animateHero, 2000);

// =======================
// 2. Skills Chart
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('skillsChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'UI/UX', 'Problem Solving'],
        datasets: [{
          label: 'Skill Level',
          data: [90, 85, 80, 75, 85, 90],
          backgroundColor: 'rgba(13, 110, 253, 0.2)',
          borderColor: 'rgba(13, 110, 253, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(13, 110, 253, 1)',
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 20 }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
});

// =======================
// 3. Counter Animation
// =======================
const counters = document.querySelectorAll('.counter');
const speed = 200;

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const increment = target / speed;

  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => animateCounter(counter), 1);
  } else {
    counter.innerText = target;
  }
}

// =======================
// 4. Scroll Animation (still works inside each page)
// =======================
function checkScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
}

// =======================
// 5. Dynamic Projects Section
// =======================
const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website to showcase my work and skills.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "E-commerce App",
    desc: "A modern e-commerce web application with shopping cart and payment integration.",
    img: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=2340&q=80",
    link: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Blog Platform",
    desc: "A responsive blog platform with user authentication and content management.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2340&q=80",
    link: "#",
    tags: ["React", "Firebase", "Material UI"]
  },
  {
    title: "Task Management App",
    desc: "A collaborative task management application with real-time updates.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2340&q=80",
    link: "#",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    title: "Weather Dashboard",
    desc: "A weather application with real-time data and interactive maps.",
    img: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=2340&q=80",
    link: "#",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"]
  },
  {
    title: "Social Media Dashboard",
    desc: "A comprehensive social media analytics dashboard with data visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2340&q=80",
    link: "#",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"]
  }
];

function loadProjects() {
  const projectsList = document.getElementById('projects-list');
  if (!projectsList) return;
  projects.forEach(project => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4 animate-on-scroll';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${project.img}" class="card-img-top" alt="${project.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.desc}</p>
          <div class="tags mb-3">
            ${project.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
          </div>
          <a href="${project.link}" class="btn btn-primary mt-auto" target="_blank">View Project</a>
        </div>
      </div>
    `;
    projectsList.appendChild(col);
  });
}

// =======================
// 6. Contact Form Handler
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formAlert = document.getElementById('form-alert');
      formAlert.innerHTML = '<div class="alert alert-success">Thank you for reaching out! I will get back to you soon.</div>';
      contactForm.reset();
      
      // Remove alert after 5 seconds
      setTimeout(() => {
        formAlert.innerHTML = '';
      }, 5000);
    });
  }
});

// =======================
// 7. Initialize All Animations AFTER window load
// =======================
window.addEventListener('load', () => {
  // counters animation
  counters.forEach(counter => animateCounter(counter));
  // load projects
  loadProjects();
  // initial scroll check
  checkScroll();
});

// Keep scroll-based animations working
window.addEventListener('scroll', checkScroll);

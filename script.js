// =======================
// Elements
// =======================
const journeyBtn = document.getElementById('journeyBtn');
const modal = document.getElementById('modal');
const exploreBtn = document.querySelector('.explore-btn');
const projectModal = document.getElementById('projectModal');
const projectTitle = document.getElementById('projectTitle');
const projectDesc = document.getElementById('projectDesc');
const projectLink = document.getElementById('projectLink');
const projectRepo = document.getElementById('projectRepo');
const projectImg = document.getElementById('projectImg');
const projectTech = document.getElementById('projectTech');
const journeyCloseBtn = document.querySelector('.journey-close');
const projectCloseBtn = document.querySelector('.project-close');

const certModal = document.getElementById('certModal');
const certTitle = document.getElementById('certTitle');
const certImg = document.getElementById('certImg');
const certDownload = document.getElementById('certDownload');
const certCloseBtn = document.querySelector('.cert-close');

// =======================
// Data
// =======================
const projectData = {
  "Weather App": {
    desc: "A weather forecasting app with real-time data.",
    link: "https://humiweather.netlify.app",
    repo: "https://github.com/stavanpathare/weather",
    tech: ["HTML", "JS", "CSS"],
    img: "assets/images/project3.png"
  },
  "College Finder": {
    desc: "Tool to help students find suitable colleges.",
    link: "https://collegefind.netlify.app",
    repo: "https://github.com/stavanpathare/collegefind",
    tech: ["HTML", "JS", "CSS"],
    img: "assets/images/project2.png"
  },
  "To-Do list": {
    desc: "An app that can help you to write your daily tasks.",
    link: "https://planitlist.netlify.app",
    repo: "https://github.com/stavanpathare/To-Do-list",
    tech: ["HTML", "JS", "CSS"],
    img: "assets/images/project1.png"
  }
};

const certData = {
  "HTML": {
    img: "assets/certificatesImg/cert_html.jpg",
    download: "assets/certificatesPdf/html.pdf"
  },
  "C++": {
    img: "assets/certificatesImg/cert_cpp.jpg",
    download: "assets/certificatesPdf/cpp.pdf"
  },
  "Full Stack": {
    img: "assets/certificatesImg/cert_fullstack.jpg",
    download: "assets/certificatesPdf/coursera.pdf"
  },
  "CSS": {
    img: "assets/certificatesImg/cert_css.jpg",
    download: "assets/certificatesPdf/css.pdf"
  }
};

// =======================
// Modal Functions
// =======================
function openModal(modalElement) {
  modalElement.style.display = 'flex';
  modalElement.style.animation = 'fadeIn 0.3s ease forwards';
  const content = modalElement.querySelector('.modal-content');
  if (content) content.style.animation = 'popIn 0.3s ease forwards';
}

function closeModal(modalElement) {
  const content = modalElement.querySelector('.modal-content');
  modalElement.style.animation = 'fadeOut 0.3s ease forwards';
  if (content) content.style.animation = 'popOut 0.3s ease forwards';
  setTimeout(() => {
    modalElement.style.display = 'none';
    modalElement.style.animation = '';
    if (content) content.style.animation = '';
  }, 300);
}

// =======================
// Journey Modal Events
// =======================
journeyBtn.addEventListener('click', () => openModal(modal));

exploreBtn.addEventListener('click', () => {
  closeModal(modal);
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

journeyCloseBtn.addEventListener('click', () => closeModal(modal));

// =======================
// Project Modal Events
// =======================
projectCloseBtn.addEventListener('click', () => closeModal(projectModal));

document.querySelectorAll('.project').forEach(proj => {
  proj.addEventListener('click', () => {
    const data = projectData[proj.dataset.name];
    if (data) {
      projectTitle.textContent = proj.dataset.name;
      projectDesc.textContent = data.desc;
      projectLink.href = data.link || '#';

      if (data.repo) {
        projectRepo.href = data.repo;
        projectRepo.style.display = 'inline-block';
      } else {
        projectRepo.style.display = 'none';
      }

      projectImg.src = data.img;

      projectTech.innerHTML = '';
      data.tech.forEach(tech => {
        const badge = document.createElement('span');
        badge.textContent = tech;
        badge.className = 'tech-badge';
        projectTech.appendChild(badge);
      });

      openModal(projectModal);
    }
  });
});

// =======================
// Certificate Modal Events
// =======================
document.querySelectorAll('.certificate').forEach(cert => {
  cert.addEventListener('click', () => {
    const data = certData[cert.dataset.name];
    if (data) {
      certTitle.textContent = cert.dataset.name + " Certificate";
      certImg.src = data.img;
      certDownload.href = data.download;
      openModal(certModal);
    }
  });
});

certCloseBtn.addEventListener('click', () => closeModal(certModal));

// =======================
// Global Close Events
// =======================
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal(modal);
  if (e.target === projectModal) closeModal(projectModal);
  if (e.target === certModal) closeModal(certModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal(modal);
    closeModal(projectModal);
    closeModal(certModal);
  }
});

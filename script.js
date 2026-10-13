/* ==========================================================================
   SUMAYA BINTE SADAT - PORTFOLIO DATA & INTERACTIVE LOGIC
   ========================================================================== */

// 1. GITHUB PROJECTS DATA
const githubProjects = [
    {
        name: "Scientific-Calculator",
        description: "A functional scientific calculator built for precise mathematical operations and calculations.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        repoUrl: "https://github.com/sumaya-sadat07/Scientific-Calculator"
    },
    {
        name: "To-do-list",
        description: "An organized task management application to track daily tasks and boost productivity.",
        technologies: ["JavaScript", "DOM Manipulation"],
        repoUrl: "https://github.com/sumaya-sadat07/To-do-list"
    },
    {
        name: "Unit-converter",
        description: "A handy utility application for seamlessly converting between various scientific and everyday units.",
        technologies: ["JavaScript", "Web Utilities"],
        repoUrl: "https://github.com/sumaya-sadat07/Unit-converter"
    },
    {
        name: "Angry-Birds-Cannon-Simulator",
        description: "A physics-based projectile motion simulation inspired by classic mechanics principles.",
        technologies: ["JavaScript", "Physics Logic"],
        repoUrl: "https://github.com/sumaya-sadat07/Angry-Birds-Cannon-Simulator"
    },
    {
        name: "Studio-Canvas-Pro",
        description: "A creative digital canvas application for sketching, designing, and visual ideation.",
        technologies: ["JavaScript", "HTML Canvas"],
        repoUrl: "https://github.com/sumaya-sadat07/Studio-Canvas-Pro"
    },
    {
        name: "Biomedical-ECG-Monitor",
        description: "A biomedical engineering project designed to simulate and analyze ECG signal monitoring.",
        technologies: ["Engineering", "Healthcare Tech", "Data Visualization"],
        repoUrl: "https://github.com/sumaya-sadat07/Biomedical-ECG-Monitor"
    }
];

// 2. INTERNSHIPS DATA
const internshipsData = [
    {
        organization: "AP Classroom BD",
        role: "Content Writer & Resource Developer",
        description: "Wrote resourceful, relevant educational content related to AP subjects and student guides.",
        skills: ["Content Development", "Educational Writing", "AP Curriculum Research"]
    },
    {
        organization: "Aureve",
        role: "Skincare Content Writer",
        description: "Researched and wrote engaging content regarding various skincare components, ingredients, and related wellness topics.",
        skills: ["Skincare Science", "Technical Writing", "Component Research"]
    }
];

// 3. VOLUNTEERING DATA
const volunteeringData = [
    {
        organization: "ICNA Relief, USA",
        activity: "Community Events & Translator",
        role: "Volunteer",
        description: "Served as a translator at events, volunteered across different community initiatives, and assisted with food distribution for underprivileged community members."
    }
];

// 4. CREATIVE PAGES DATA (With correct functional Instagram links)
const creativeData = {
    photography: {
        title: "Solistice Frames",
        description: "Explore my photography gallery capturing candid moments, natural light, and urban perspectives.",
        instagramUrl: "https://www.instagram.com/_solisticeframes_?cplk=MWpteWU4cml0djM1Zw=="
    },
    cooking: {
        title: "The Savora",
        description: "Discover culinary creations, recipe experiments, plating, and food artistry.",
        instagramUrl: "https://www.instagram.com/_the_savora_?obrf=MXhwdDJlcWlqd3hobQ=="
    },
    art: {
        title: "L'Atelier de Sumaya Sadat",
        description: "Browse through my sketchbook studies, canvas paintings, and visual art pieces.",
        instagramUrl: "https://www.instagram.com/latelierdesumaya.s?exln=aml3OW03a3o2aHo2"
    }
};

/* ==========================================================================
   RENDER FUNCTIONS & INTERACTIVITY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Render GitHub Projects
    const projectsGrid = document.getElementById("projects-grid");
    if (projectsGrid) {
        projectsGrid.innerHTML = githubProjects.map(p => `
            <div class="card">
                <div>
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-desc">${p.description}</p>
                    <div class="tech-tags">
                        ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="card-actions">
                    <a href="${p.repoUrl}" target="_blank" rel="noopener" class="card-link">GitHub Repository &rarr;</a>
                </div>
            </div>
        `).join('');
    }

    // Render Internships
    const internshipsGrid = document.getElementById("internships-grid");
    if (internshipsGrid) {
        internshipsGrid.innerHTML = internshipsData.map(i => `
            <div class="card">
                <div>
                    <span class="card-subtitle">${i.organization}</span>
                    <h3 class="card-title">${i.role}</h3>
                    <p class="card-desc">${i.description}</p>
                    <div class="tech-tags">
                        ${i.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Volunteering
    const volunteeringGrid = document.getElementById("volunteering-grid");
    if (volunteeringGrid) {
        volunteeringGrid.innerHTML = volunteeringData.map(v => `
            <div class="card">
                <div>
                    <span class="card-subtitle">${v.organization}</span>
                    <h3 class="card-title">${v.activity}</h3>
                    <p class="card-meta"><strong>Role:</strong> ${v.role}</p>
                    <p class="card-desc">${v.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Creative Pages Renderer
    const creativeArea = document.getElementById("creative-content-area");
    const tabButtons = document.querySelectorAll(".tab-btn");

    function renderGallery(categoryKey) {
        const cat = creativeData[categoryKey];
        if (!cat || !creativeArea) return;

        creativeArea.innerHTML = `
            <div class="gallery-container active">
                <div class="creative-showcase-box">
                    <h3>${cat.title}</h3>
                    <p>${cat.description}</p>
                    <a href="${cat.instagramUrl}" target="_blank" rel="noopener" class="btn btn-primary">Visit Instagram Page &rarr;</a>
                </div>
            </div>
        `;
    }

    renderGallery('photography');

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const targetKey = btn.getAttribute("data-target");
            renderGallery(targetKey);
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            siteNav.classList.toggle("active");
        });

        siteNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("active");
            });
        });
    }
});
/* ==========================================================================
   SUMAYA BINTE SADAT - PORTFOLIO DATA & INTERACTIVE LOGIC
   ========================================================================== */

// 1. GITHUB PROJECTS DATA
// To add a new project, copy an existing block {} and fill in your details.
const githubProjects = [
    {
        name: "Scientific-Calculator",
        description: "A functional scientific calculator built for precise mathematical operations and calculations.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        repoUrl: "https://github.com/sumaya-sadat07/Scientific-Calculator",
        liveUrl: "" // Leave empty if live demo is not available
    },
    {
        name: "To-do-list",
        description: "An organized task management application to track daily tasks and boost productivity.",
        technologies: ["JavaScript", "DOM Manipulation"],
        repoUrl: "https://github.com/sumaya-sadat07/To-do-list",
        liveUrl: ""
    },
    {
        name: "Unit-converter",
        description: "A handy utility application for seamlessly converting between various scientific and everyday units.",
        technologies: ["JavaScript", "Web Utilities"],
        repoUrl: "https://github.com/sumaya-sadat07/Unit-converter",
        liveUrl: ""
    },
    {
        name: "Angry-Birds-Cannon-Simulator",
        description: "A physics-based projectile motion simulation inspired by classic mechanics principles.",
        technologies: ["JavaScript", "Physics Logic"],
        repoUrl: "https://github.com/sumaya-sadat07/Angry-Birds-Cannon-Simulator",
        liveUrl: ""
    },
    {
        name: "Studio-Canvas-Pro",
        description: "A creative digital canvas application for sketching, designing, and visual ideation.",
        technologies: ["JavaScript", "HTML Canvas"],
        repoUrl: "https://github.com/sumaya-sadat07/Studio-Canvas-Pro",
        liveUrl: ""
    },
    {
        name: "Biomedical-ECG-Monitor",
        description: "A biomedical engineering project designed to simulate and analyze ECG signal monitoring.",
        technologies: ["Engineering", "Healthcare Tech", "Data Visualization"],
        repoUrl: "https://github.com/sumaya-sadat07/Biomedical-ECG-Monitor",
        liveUrl: ""
    }
];

// 2. INTERNSHIPS DATA
const internshipsData = [
    {
        organization: "AP Classroom BD",
        role: "Content Writer & Resource Developer",
        dates: "Editable Date / Present",
        description: "Wrote resourceful, relevant educational content related to AP subjects and student guides.",
        skills: ["Content Development", "Educational Writing", "AP Curriculum Research"]
    },
    {
        organization: "Aureve",
        role: "Skincare Content Writer",
        dates: "Editable Date / Present",
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
        description: "Served as a translator at events, volunteered across different community initiatives, and assisted with food distribution for underprivileged community members.",
        date: "Ongoing Community Service"
    }
];

// 4. CREATIVE GALLERIES DATA
const creativeData = {
    photography: {
        title: "Solistice Frames",
        instagramUrl: "https://www.instagram.com/solisticeframes/?hl=en",
        items: [
            { title: "Composition I", caption: "A study in natural light and shadow.", placeholder: "Replace with photo file path" },
            { title: "Urban Geometry", caption: "Lines and perspectives captured in the city.", placeholder: "Replace with photo file path" },
            { title: "Silent Horizon", caption: "Stillness captured during evening twilight.", placeholder: "Replace with photo file path" }
        ]
    },
    cooking: {
        title: "The Savora",
        instagramUrl: "https://www.instagram.com/the_savora/?hl=en",
        items: [
            { title: "Artisan Dish I", caption: "Experimenting with flavor profiles and plating.", placeholder: "Replace with recipe photo" },
            { title: "Culinary Exploration", caption: "Baking and culinary craft in progress.", placeholder: "Replace with recipe photo" }
        ]
    },
    art: {
        title: "L'Atelier de Sumaya Sadat",
        instagramUrl: "https://www.instagram.com/latelierdesumaya.s/?hl=en",
        items: [
            { title: "Sketchbook Study", caption: "Pencil and ink experimentation.", placeholder: "Replace with artwork photo" },
            { title: "Canvas Painting", caption: "Exploring color tones and textures.", placeholder: "Replace with artwork photo" }
        ]
    }
};

/* ==========================================================================
   RENDER FUNCTIONS (Injects Data into HTML automatically)
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
                    <a href="${p.liveUrl || '#'}" target="_blank" rel="noopener" class="card-link ${p.liveUrl ? '' : 'disabled'}">
                        ${p.liveUrl ? 'Live Demo &rarr;' : 'Awaiting URL'}
                    </a>
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
                    <p class="card-meta"><strong>Timeline:</strong> ${i.dates}</p>
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
                    <p class="card-meta"><strong>Role:</strong> ${v.role} | <strong>Duration:</strong> ${v.date}</p>
                    <p class="card-desc">${v.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Creative Tabs and Gallery Rendering Logic
    const creativeArea = document.getElementById("creative-content-area");
    const tabButtons = document.querySelectorAll(".tab-btn");

    function renderGallery(categoryKey) {
        const cat = creativeData[categoryKey];
        if (!cat || !creativeArea) return;

        creativeArea.innerHTML = `
            <div class="gallery-container active">
                <div class="gallery-header-bar">
                    <h3>${cat.title}</h3>
                    <a href="${cat.instagramUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Visit Instagram Page</a>
                </div>
                <div class="gallery-grid">
                    ${cat.items.map(item => `
                        <div class="gallery-item">
                            <div class="image-placeholder">[ ${item.placeholder} ]</div>
                            <div class="gallery-caption">
                                <h4>${item.title}</h4>
                                <p>${item.caption}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Initial render for photography
    renderGallery('photography');

    // Tab button click listeners
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

        // Close menu when clicking a link on mobile
        siteNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("active");
            });
        });
    }
});
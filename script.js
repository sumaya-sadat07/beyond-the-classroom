// ============================================================
// BEYOND THE CLASSROOM
// Personal ECA Portfolio — Sumaya Binte Sadat
//
// BEGINNER EDITING GUIDE:
// 1. Edit your information inside the EDITABLE WEBSITE DATA area.
// 2. Add projects to the projects array.
// 3. Add internships to the internships array.
// 4. Add volunteering experiences to the volunteering array.
// 5. Add photographs to the appropriate gallery array.
// 6. Save this file and refresh your browser.
//
// No frameworks or extra libraries are required.
// ============================================================


"use strict";


// ============================================================
// PART 1: EDITABLE WEBSITE DATA
// This is the main place to change your website's content.
// ============================================================

const portfolioData = {

  // ----------------------------------------------------------
  // PERSONAL INFORMATION
  // ----------------------------------------------------------

  personal: {
    name: "Sumaya Binte Sadat",
    portfolioTitle: "Beyond the Classroom",
    subtitle: "Projects, Perspectives & Pursuits",

    github: "https://github.com/sumaya-sadat07",

    email: "sumayabintesadat@gmail.com",

    linkedin:
      "https://www.linkedin.com/in/sumaya-binte-sadat-0920/"
  },


  // ----------------------------------------------------------
  // GITHUB PROJECTS
  //
  // To add a project, copy one complete project object,
  // paste it inside this array, and edit its information.
  //
  // tech: Add technologies only after verifying them.
  // demo: Leave as an empty string until a real live demo exists.
  // description: Replace the editable placeholder with verified
  // information about the actual project.
  // ----------------------------------------------------------

  projects: [

    {
      name: "Scientific-Calculator",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/Scientific-Calculator",

      demo: "",

      symbol: "∑"
    },

    {
      name: "To-do-list",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/To-do-list",

      demo: "",

      symbol: "✓"
    },

    {
      name: "Unit-converter",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/Unit-converter",

      demo: "",

      symbol: "↔"
    },

    {
      name: "Angry-Birds-Cannon-Simulator",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/Angry-Birds-Cannon-Simulator",

      demo: "",

      symbol: "↗"
    },

    {
      name: "Studio-Canvas-Pro",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/Studio-Canvas-Pro",

      demo: "",

      symbol: "✳"
    },

    {
      name: "Biomedical-ECG-Monitor",

      description:
        "Project description to be added after reviewing the repository and verifying its functionality.",

      tech: [],

      repository:
        "https://github.com/sumaya-sadat07/Biomedical-ECG-Monitor",

      demo: "",

      symbol: "♡"
    }

  ],


  // ----------------------------------------------------------
  // INTERNSHIPS
  //
  // Dates and skills remain unfilled until you provide them.
  // Do not add skills or achievements you cannot verify.
  // ----------------------------------------------------------

  internships: [

    {
      organization: "AP Classroom BD",

      role: "Content Writing & Resource Development",

      dates: "",

      description:
        "Wrote relevant, resourceful content related to AP. Further details can be added as the work and responsibilities are documented.",

      skills: [],

      link: "",

      symbol: "A"
    },

    {
      organization: "Aureve",

      role: "Content Writing",

      dates: "",

      description:
        "Write content about skincare ingredients, components, and related topics. Additional details can be added as the experience develops.",

      skills: [],

      link: "",

      symbol: "A"
    }

  ],


  // ----------------------------------------------------------
  // VOLUNTEERING
  //
  // Each activity is a separate entry so you can add details
  // without changing the page layout.
  // ----------------------------------------------------------

  volunteering: [

    {
      organization: "ICNA Relief, USA",

      activity: "Translation Support",

      role: "Volunteer",

      description:
        "Supported communication by serving as a translator at community events.",

      dates: "",

      photos: []
    },

    {
      organization: "ICNA Relief, USA",

      activity: "Community Events",

      role: "Volunteer",

      description:
        "Participated in community events and helped with activities as needed.",

      dates: "",

      photos: []
    },

    {
      organization: "ICNA Relief, USA",

      activity: "Food Distribution",

      role: "Volunteer",

      description:
        "Helped distribute food to members of underprivileged communities.",

      dates: "",

      photos: []
    }

  ],


  // ----------------------------------------------------------
  // CREATIVE COLLECTIONS
  //
  // HOW TO ADD AN IMAGE:
  // 1. Create an "images" folder beside index.html.
  // 2. Put your image inside the appropriate subfolder.
  // 3. Enter its relative path in image.
  //
  // Example:
  // image: "images/photography/sunset.jpg"
  //
  // Keep image empty until you add your actual photograph.
  // No fictional photographs or artworks are included.
  // ----------------------------------------------------------

  galleries: {

    photography: {
      name: "Solistice Frames",

      instagram:
        "https://www.instagram.com/solisticeframes/?hl=en",

      items: [
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        }
      ]
    },


    cooking: {
      name: "The Savora",

      instagram:
        "https://www.instagram.com/the_savora/?hl=en",

      items: [
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        }
      ]
    },


    art: {
      name: "L'Atelier de Sumaya Sadat",

      instagram:
        "https://www.instagram.com/latelierdesumaya.s/?hl=en",

      items: [
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        },
        {
          image: "",
          title: "",
          caption: "",
          date: "",
          alt: ""
        }
      ]
    }

  }

};


// ============================================================
// PART 2: HELPER FUNCTIONS
// You normally do not need to edit this section.
// ============================================================


// Find an element by its HTML ID.
function getElement(id) {
  return document.getElementById(id);
}


// Escape text before placing it into HTML.
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}


// Allow only safe external web links.
function safeWebURL(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }

    return url.href;
  } catch {
    return "";
  }
}


// Create a link only when a valid URL is provided.
function externalLink(url, label, className = "") {
  const safeURL = safeWebURL(url);

  if (!safeURL) {
    return "";
  }

  return `
    <a
      class="${escapeHTML(className)}"
      href="${escapeHTML(safeURL)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${escapeHTML(label)}
    </a>
  `;
}


// Display text only when a value exists.
function optionalText(value, className = "") {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  return `
    <p class="${escapeHTML(className)}">
      ${escapeHTML(value)}
    </p>
  `;
}


// ============================================================
// PART 3: GITHUB PROJECT CARDS
// ============================================================

function renderProjects() {
  const container = getElement("project-grid");

  if (!container) {
    return;
  }

  if (!portfolioData.projects.length) {
    container.innerHTML = `
      <p class="empty-message">
        Projects will appear here when they are added.
      </p>
    `;
    return;
  }

  container.innerHTML = portfolioData.projects.map(function (project) {
    const technologies = Array.isArray(project.tech)
      ? project.tech.filter(function (item) {
          return typeof item === "string" && item.trim();
        })
      : [];

    const techHTML = technologies.length
      ? technologies.map(function (tech) {
          return `<span class="tech-tag">${escapeHTML(tech)}</span>`;
        }).join("")
      : `<span class="tech-tag">Technologies to be verified</span>`;

    const demoHTML = project.demo
      ? externalLink(project.demo, "Live Demo ↗")
      : "";

    const repositoryHTML = externalLink(
      project.repository,
      "GitHub Repository ↗"
    );

    return `
      <article class="project-card">

        <div class="project-card-top">
          <span class="project-icon" aria-hidden="true">
            ${escapeHTML(project.symbol || "↗")}
          </span>

          <span class="project-label">GitHub Project</span>
        </div>

        <h3>${escapeHTML(project.name)}</h3>

        <p class="project-description">
          ${escapeHTML(
            project.description ||
            "Project description to be added."
          )}
        </p>

        <div class="project-tech" aria-label="Technologies">
          ${techHTML}
        </div>

        <div class="project-actions">
          ${repositoryHTML}
          ${demoHTML}
        </div>

      </article>
    `;
  }).join("");
}


// ============================================================
// PART 4: INTERNSHIP CARDS
// ============================================================

function renderInternships() {
  const container = getElement("internship-grid");

  if (!container) {
    return;
  }

  if (!portfolioData.internships.length) {
    container.innerHTML = `
      <p class="empty-message">
        Internship experiences will appear here when added.
      </p>
    `;
    return;
  }

  container.innerHTML = portfolioData.internships.map(function (item) {
    const skills = Array.isArray(item.skills)
      ? item.skills.filter(function (skill) {
          return typeof skill === "string" && skill.trim();
        })
      : [];

    const skillsHTML = skills.length
      ? `
        <h4 class="experience-subheading">Skills developed</h4>
        <ul class="skills-list">
          ${skills.map(function (skill) {
            return `<li>${escapeHTML(skill)}</li>`;
          }).join("")}
        </ul>
      `
      : "";

    const organizationLink = item.link
      ? externalLink(item.link, "Visit organization ↗", "experience-link")
      : "";

    return `
      <article class="experience-card">

        <div class="experience-topline">
          <span class="experience-symbol" aria-hidden="true">
            ${escapeHTML(item.symbol || "I")}
          </span>

          <span class="experience-dates">
            ${escapeHTML(item.dates || "Dates to be added")}
          </span>
        </div>

        <h3>${escapeHTML(item.organization)}</h3>

        <p class="experience-role">
          ${escapeHTML(item.role || "Role to be added")}
        </p>

        <p class="experience-description">
          ${escapeHTML(item.description || "Description to be added.")}
        </p>

        ${skillsHTML}
        ${organizationLink}

      </article>
    `;
  }).join("");
}


// ============================================================
// PART 5: VOLUNTEERING CARDS
// ============================================================

function renderVolunteering() {
  const container = getElement("volunteering-grid");

  if (!container) {
    return;
  }

  if (!portfolioData.volunteering.length) {
    container.innerHTML = `
      <p class="empty-message">
        Volunteering experiences will appear here when added.
      </p>
    `;
    return;
  }

  container.innerHTML = portfolioData.volunteering.map(function (item) {
    return `
      <article class="volunteer-card">

        <p class="collection-number">
          ${escapeHTML(item.organization)}
        </p>

        <h3>${escapeHTML(item.activity)}</h3>

        <p class="volunteer-role">
          ${escapeHTML(item.role || "Volunteer")}
        </p>

        <p class="volunteer-description">
          ${escapeHTML(item.description || "Details to be added.")}
        </p>

        ${item.dates ? `
          <span class="volunteer-date">
            ${escapeHTML(item.dates)}
          </span>
        ` : ""}

      </article>
    `;
  }).join("");
}


// ============================================================
// PART 6: CREATIVE GALLERIES
// ============================================================


// Generate a single gallery item.
// Empty image fields display an editable placeholder instead.
function renderGalleryItem(item, category, index) {
  const imageURL = typeof item.image === "string"
    ? item.image.trim()
    : "";

  const hasImage = imageURL.length > 0;

  const title = item.title || "";
  const caption = item.caption || "";
  const date = item.date || "";

  let imageHTML = "";

  if (hasImage) {
    const safeImage = escapeHTML(imageURL);

    const altText = item.alt || title || "Portfolio photograph";

    imageHTML = `
      <img
        src="${safeImage}"
        alt="${escapeHTML(altText)}"
        loading="lazy"
        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
      >

      <div class="gallery-placeholder" hidden>
        <span class="gallery-placeholder-symbol" aria-hidden="true">
          ✳
        </span>
        <p>Replace with your image</p>
      </div>
    `;
  } else {
    imageHTML = `
      <div class="gallery-placeholder">
        <span class="gallery-placeholder-symbol" aria-hidden="true">
          ${category === "cooking" ? "◇" : category === "art" ? "✳" : "○"}
        </span>

        <p>
          Add your ${escapeHTML(category)} image here
        </p>
      </div>
    `;
  }

  let captionHTML = "";

  if (title || caption || date) {
    captionHTML = `
      <div class="gallery-caption">

        ${title ? `<h4>${escapeHTML(title)}</h4>` : ""}

        ${caption ? `<p>${escapeHTML(caption)}</p>` : ""}

        ${date ? `
          <span class="gallery-date">${escapeHTML(date)}</span>
        ` : ""}

      </div>
    `;
  } else {
    captionHTML = `
      <div class="gallery-caption">
        <p>Add your caption in script.js.</p>
      </div>
    `;
  }

  return `
    <article class="gallery-item">

      <div class="gallery-image-wrap">
        ${imageHTML}
      </div>

      ${captionHTML}

    </article>
  `;
}


// Render one creative collection.
function renderGallery(category, containerId) {
  const container = getElement(containerId);

  if (!container) {
    return;
  }

  const gallery = portfolioData.galleries[category];

  if (!gallery || !Array.isArray(gallery.items) || !gallery.items.length) {
    container.innerHTML = `
      <p class="empty-message">
        Add your own content to this gallery in script.js.
      </p>
    `;
    return;
  }

  container.innerHTML = gallery.items.map(function (item, index) {
    return renderGalleryItem(item, category, index);
  }).join("");
}


// ============================================================
// PART 7: CONTACT INFORMATION
// ============================================================

function renderContact() {
  const container = getElement("contact-links");

  if (!container) {
    return;
  }

  const personal = portfolioData.personal;

  const contactItems = [
    {
      label: "Email",
      value: personal.email,
      href: personal.email ? "mailto:" + personal.email : ""
    },
    {
      label: "LinkedIn",
      value: "Visit my LinkedIn profile",
      href: personal.linkedin
    },
    {
      label: "GitHub",
      value: "Explore my repositories",
      href: personal.github
    }
  ];

  container.innerHTML = contactItems.map(function (item) {
    let href = "";

    if (item.label === "Email") {
      // Only use a valid, basic email address for the mailto link.
      const email = String(item.value || "").trim();

      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        href = "mailto:" + email;
      }
    } else {
      href = safeWebURL(item.href);
    }

    if (!href) {
      return "";
    }

    return `
      <div class="contact-item">

        <div>
          <span class="contact-item-label">
            ${escapeHTML(item.label)}
          </span>

          <a
            href="${escapeHTML(href)}"
            ${item.label === "Email" ? "" : 'target="_blank" rel="noopener noreferrer"'}
          >
            ${escapeHTML(item.value)}
          </a>
        </div>

        <span class="contact-arrow" aria-hidden="true">↗</span>

      </div>
    `;
  }).join("");
}


// ============================================================
// PART 8: MOBILE NAVIGATION
// ============================================================

function setupMobileNavigation() {
  const menuButton = getElement("menu-toggle");
  const navLinks = getElement("nav-links");

  if (!menuButton || !navLinks) {
    return;
  }

  function closeMenu() {
    navLinks.classList.remove("is-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the mobile menu after choosing a navigation link.
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when Escape is pressed.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  // Reset the menu when switching back to desktop width.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}


// ============================================================
// PART 9: FOOTER YEAR
// ============================================================

function renderCurrentYear() {
  const yearElement = getElement("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


// ============================================================
// PART 10: INITIALIZE THE WEBSITE
// ============================================================

function initializePortfolio() {
  renderProjects();

  renderInternships();

  renderVolunteering();

  renderGallery("photography", "photography-gallery");

  renderGallery("cooking", "cooking-gallery");

  renderGallery("art", "art-gallery");

  renderContact();

  renderCurrentYear();

  setupMobileNavigation();
}


// Run after the HTML document has been parsed.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePortfolio);
} else {
  initializePortfolio();
}
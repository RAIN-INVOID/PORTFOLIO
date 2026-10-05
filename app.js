// Devendra Sharma Portfolio - Red, Black, White, and Blue Cinematic Animations

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. REAL-TIME LIVE SMPTE TIMECODE TICKER
  const timecodeEl = document.getElementById("timecode-display");
  if (timecodeEl) {
    let hours = 1;
    let minutes = 14;
    let seconds = 32;
    let frames = 18;

    setInterval(() => {
      frames++;
      if (frames >= 60) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      const pad = (n) => String(n).padStart(2, "0");
      timecodeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }, 1000 / 60); // 60 FPS timecode increment
  }

  // 2. MOBILE MENU
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // 3. RENDER PROJECTS (RED & BLUE ACCENTS)
  const projectsGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderProjects(category = "all") {
    if (!projectsGrid) return;

    const filtered = category === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    projectsGrid.innerHTML = filtered.map(project => {
      const isReel = project.format.includes("9:16");
      const badgeClass = isReel 
        ? "bg-red-500/20 text-red-300 border-red-500/40" 
        : "bg-blue-500/20 text-blue-300 border-blue-500/40";

      return `
        <article class="cine-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer project-trigger reveal active" data-id="${project.id}">
          
          <!-- Media Container -->
          <div class="relative overflow-hidden ${isReel ? 'aspect-[4/5]' : 'aspect-video'} bg-zinc-950">
            <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/30 to-black/20"></div>

            <!-- Top Tag HUD -->
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono z-10">
              <span class="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border ${badgeClass} uppercase font-bold tracking-wider">
                ${project.categoryLabel}
              </span>
              <span class="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono">
                ${project.year}
              </span>
            </div>

            <!-- Red Play Button Hover Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
              <div class="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-600/50 play-trigger-circle">
                <i data-lucide="play" class="w-6 h-6 fill-white translate-x-0.5"></i>
              </div>
            </div>

            <!-- Aspect Format -->
            <div class="absolute bottom-3 left-3 z-10">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-slate-300 border border-white/10 uppercase">
                ${project.format}
              </span>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
            <div>
              <div class="flex items-center justify-between text-xs font-mono text-blue-400">
                <span>${project.client}</span>
              </div>
              <h3 class="text-base font-bold text-white group-hover:text-blue-300 transition-colors mt-1">${project.title}</h3>
              <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">${project.description}</p>
            </div>

            <!-- Footer Tools -->
            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <div class="flex flex-wrap gap-1 text-slate-400">
                ${project.tools.slice(0, 2).map(t => `<span class="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px]">${t}</span>`).join('')}
              </div>
              <span class="text-red-400 group-hover:text-red-300 font-semibold flex items-center gap-1">
                Play <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>

        </article>
      `;
    }).join("");

    if (window.lucide) lucide.createIcons();

    // Attach click listeners to cards
    document.querySelectorAll(".project-trigger").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openVideoModal(id);
      });
    });
  }

  // Filter Button Interactions
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active", "bg-blue-600", "text-white", "shadow-lg", "shadow-blue-600/30");
        b.classList.add("text-slate-400");
      });
      btn.classList.add("active", "bg-blue-600", "text-white", "shadow-lg", "shadow-blue-600/30");
      btn.classList.remove("text-slate-400");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  // 4. RENDER CAPABILITIES (RED & BLUE GROUPS)
  function renderCapabilities() {
    const container = document.getElementById("capabilities-grid");
    if (!container) return;

    const accentStyles = [
      { border: "border-red-500/30", title: "text-red-400", dot: "bg-red-500", icon: "film" },
      { border: "border-blue-500/30", title: "text-blue-400", dot: "bg-blue-500", icon: "palette" },
      { border: "border-cyan-500/30", title: "text-cyan-400", dot: "bg-cyan-500", icon: "trending-up" }
    ];

    container.innerHTML = PORTFOLIO_DATA.capabilities.map((group, idx) => {
      const style = accentStyles[idx % accentStyles.length];
      return `
        <div class="cine-card p-6 sm:p-7 rounded-2xl border ${style.border} space-y-5">
          <div class="flex items-center gap-3 border-b border-white/10 pb-4">
            <div class="w-9 h-9 rounded-xl bg-white/5 border ${style.border} flex items-center justify-center ${style.title}">
              <i data-lucide="${style.icon}" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm sm:text-base font-bold text-white tracking-wide">${group.group}</h3>
            </div>
          </div>

          <ul class="space-y-3.5">
            ${group.items.map(item => `
              <li class="space-y-0.5">
                <div class="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full ${style.dot}"></span>
                  ${item.name}
                </div>
                <p class="text-[11px] text-slate-400 pl-3.5 leading-relaxed">${item.detail}</p>
              </li>
            `).join("")}
          </ul>
        </div>
      `;
    }).join("");
  }

  // 5. RENDER EXPERIENCE TIMELINE
  function renderExperience() {
    const list = document.getElementById("experience-list");
    if (!list) return;

    list.innerHTML = PORTFOLIO_DATA.experience.map((item, idx) => {
      const isRed = idx % 2 === 0;
      const borderAccent = isRed ? "border-red-500/40 hover:border-red-500" : "border-blue-500/40 hover:border-blue-500";
      const tagAccent = isRed ? "text-red-400 bg-red-500/10 border-red-500/30" : "text-blue-400 bg-blue-500/10 border-blue-500/30";

      return `
        <div class="cine-card p-6 sm:p-8 rounded-2xl border ${borderAccent} space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-white tracking-wide">${item.role}</h3>
              <p class="text-xs font-semibold text-slate-300 mt-0.5">${item.company}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-mono px-2.5 py-1 rounded-md border ${tagAccent}">
                ${item.period}
              </span>
              <span class="text-xs font-mono text-slate-400">${item.location}</span>
            </div>
          </div>

          <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
            ${item.highlights.map(h => `
              <li class="flex items-start gap-2.5">
                <i data-lucide="check" class="w-4 h-4 text-${isRed ? 'red' : 'blue'}-400 flex-shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">${h}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `;
    }).join("");
  }

  // 6. RENDER PROCESS
  function renderProcess() {
    const container = document.getElementById("process-grid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.process.map(p => `
      <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all space-y-2 group">
        <div class="text-xs font-mono text-red-500 font-bold tracking-widest">${p.step}</div>
        <h3 class="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">${p.title}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">${p.detail}</p>
      </div>
    `).join("");
  }

  // 7. VIDEO PLAYER MODAL LOGIC
  const videoModal = document.getElementById("video-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalVideo = document.getElementById("modal-video-element");
  const modalTitle = document.getElementById("modal-title");
  const modalClient = document.getElementById("modal-client");
  const modalDesc = document.getElementById("modal-description");
  const modalTools = document.getElementById("modal-tools");
  const modalFormat = document.getElementById("modal-format");

  function openVideoModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId) || PORTFOLIO_DATA.projects[0];
    if (!project || !videoModal) return;

    modalTitle.textContent = project.title;
    modalClient.textContent = `Client: ${project.client} (${project.year})`;
    modalDesc.textContent = project.description;
    if (modalFormat) modalFormat.textContent = `Format: ${project.format}`;

    if (modalTools) {
      modalTools.innerHTML = project.tools.map(t => `
        <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">${t}</span>
      `).join("");
    }

    if (modalVideo) {
      modalVideo.src = project.videoUrl;
      modalVideo.load();
      modalVideo.play().catch(() => {});
    }

    videoModal.classList.remove("hidden");
    videoModal.classList.add("modal-active");
    document.body.style.overflow = "hidden";
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.add("hidden");
    videoModal.classList.remove("modal-active");
    document.body.style.overflow = "";
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = "";
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // Hero watch triggers
  const heroWatchBtn = document.getElementById("hero-watch-btn");
  const heroCardTrigger = document.getElementById("hero-card-trigger");
  if (heroWatchBtn) heroWatchBtn.addEventListener("click", () => openVideoModal("meta-ad-campaign"));
  if (heroCardTrigger) heroCardTrigger.addEventListener("click", () => openVideoModal("meta-ad-campaign"));

  // 8. RESUME MODAL HANDLERS
  const resumeModal = document.getElementById("resume-modal");
  const heroResumeBtn = document.getElementById("hero-resume-btn");
  const viewResumeBtn2 = document.getElementById("view-resume-btn-2");
  const resumeCloseBtn = document.getElementById("resume-close-btn");

  const openResume = () => {
    if (!resumeModal) return;
    resumeModal.classList.remove("hidden");
    resumeModal.classList.add("modal-active");
    document.body.style.overflow = "hidden";
  };

  const closeResume = () => {
    if (!resumeModal) return;
    resumeModal.classList.add("hidden");
    resumeModal.classList.remove("modal-active");
    document.body.style.overflow = "";
  };

  if (heroResumeBtn) heroResumeBtn.addEventListener("click", openResume);
  if (viewResumeBtn2) viewResumeBtn2.addEventListener("click", openResume);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener("click", closeResume);
  if (resumeModal) {
    resumeModal.addEventListener("click", (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal();
      closeResume();
    }
  });

  // 9. DAVINCI COLOR GRADING COMPARISON SLIDER
  const sliderBox = document.getElementById("color-slider-box");
  const sliderBefore = document.getElementById("slider-before");
  const sliderHandle = document.getElementById("slider-handle");

  if (sliderBox && sliderBefore && sliderHandle) {
    let isDragging = false;

    const setSliderPos = (clientX) => {
      const rect = sliderBox.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const pct = (offsetX / rect.width) * 100;
      sliderBefore.style.width = `${pct}%`;
      sliderHandle.style.left = `${pct}%`;
    };

    sliderBox.addEventListener("mousedown", (e) => {
      isDragging = true;
      setSliderPos(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) setSliderPos(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // Touch support for phones & tablets
    sliderBox.addEventListener("touchstart", (e) => {
      isDragging = true;
      if (e.touches.length > 0) setSliderPos(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches.length > 0) setSliderPos(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
      isDragging = false;
    });
  }

  // 10. ANIMATED METRICS COUNTER
  const counters = document.querySelectorAll(".counter");
  let animated = false;

  const animateCounters = () => {
    if (animated) return;
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = `${target}+`;
          clearInterval(timer);
        } else {
          counter.textContent = `${count}+`;
        }
      }, 30);
    });
    animated = true;
  };

  // IntersectionObserver to trigger counter on scroll
  const metricsSection = document.querySelector(".counter");
  if (metricsSection && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    }, { threshold: 0.3 });
    observer.observe(metricsSection);
  } else {
    animateCounters();
  }

  // 11. TOAST HELPER
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  // 12. CONTACT FORM DISPATCH
  const contactForm = document.getElementById("contact-form");
  const sendEmailBtn = document.getElementById("send-email-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value.trim();
      const phone = document.getElementById("form-phone").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const service = document.getElementById("form-service").value;
      const message = document.getElementById("form-message").value.trim();

      const text = `Hi Devendra! I want to commission a video project:%0A%0A• Name: ${encodeURIComponent(name)}%0A• Contact: ${encodeURIComponent(phone)} (${encodeURIComponent(email || 'N/A')})%0A• Scope: ${encodeURIComponent(service)}%0A• Brief: ${encodeURIComponent(message)}`;
      const waUrl = `https://wa.me/919516727000?text=${text}`;

      showToast("Redirecting to WhatsApp to send project brief...");
      window.open(waUrl, "_blank");
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener("click", () => {
      const name = document.getElementById("form-name").value.trim() || "Client";
      const phone = document.getElementById("form-phone").value.trim();
      const service = document.getElementById("form-service").value;
      const message = document.getElementById("form-message").value.trim();

      const subject = encodeURIComponent(`Project Brief: ${service} — from ${name}`);
      const body = encodeURIComponent(`Hello Devendra,\n\nI would like to discuss a video project.\n\nClient: ${name}\nPhone/WhatsApp: ${phone}\nService: ${service}\n\nProject Brief:\n${message}\n\nLooking forward to collaborating!`);

      window.location.href = `mailto:shdevendra48@gmail.com?subject=${subject}&body=${body}`;
      showToast("Opening default email client...");
    });
  }

  // Initial renders
  renderProjects("all");
  renderCapabilities();
  renderExperience();
  renderProcess();
});

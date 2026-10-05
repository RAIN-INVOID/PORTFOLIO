// Professional Portfolio Data for Devendra Sharma
const PORTFOLIO_DATA = {
  personal: {
    name: "Devendra Sharma",
    title: "Video Editor & Post-Production Specialist",
    tagline: "Editing high-retention commercial campaigns, short-form digital content, and live event documentaries with precision and creative discipline.",
    location: "Bhilai, Chhattisgarh, India",
    email: "shdevendra48@gmail.com",
    phone: "+91 9516727000",
    phoneFormatted: "+91 95167 27000",
    availability: "Available for freelance projects & contract roles",
    socials: {
      whatsapp: "https://wa.me/919516727000?text=Hi%20Devendra,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      email: "mailto:shdevendra48@gmail.com",
      phone: "tel:+919516727000"
    }
  },

  metrics: [
    { value: "100+", label: "Projects Delivered", detail: "Short-form reels, commercial cuts & brand assets" },
    { value: "60+", label: "Live Events Captured", detail: "Concerts, stage performances & corporate events" },
    { value: "2024", label: "Professional Inception", detail: "Active across agency, brand & freelance productions" },
    { value: "Full-Stack", label: "Post-Production", detail: "Assembly, sound design, grading & delivery" }
  ],

  projects: [
    {
      id: "meta-ad-campaign",
      title: "Commercial Lead-Generation Campaign",
      client: "Dream Careers",
      year: "2026",
      category: "commercial",
      categoryLabel: "Commercial / Ads",
      format: "16:9 Landscape",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42866-large.mp4",
      description: "Direct-response video creative built for Meta Ads campaigns. Designed to maximize 3-second hook retention, deliver clean value propositions, and reduce customer acquisition costs through targeted visual storytelling.",
      tools: ["Adobe Premiere Pro", "Adobe Photoshop", "Meta Ads Manager"]
    },
    {
      id: "lifestyle-retention-reel",
      title: "High-Retention Short-Form Edit",
      client: "Digital Brand Campaign",
      year: "2025",
      category: "shortform",
      categoryLabel: "Short-Form / Reels",
      format: "9:16 Vertical",
      thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-43288-large.mp4",
      description: "Engineered for algorithmic performance on Instagram Reels and YouTube Shorts. Incorporates dynamic pacing, micro-transitions, precise sound layering, and kinetic typography for maximum completion rates.",
      tools: ["Adobe Premiere Pro", "CapCut", "Sound Design"]
    },
    {
      id: "live-performance-film",
      title: "Live Performance & Event Aftermovie",
      client: "JaaduGhar.CO",
      year: "2025",
      category: "events",
      categoryLabel: "Live Events & Shoots",
      format: "16:9 Landscape",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-in-a-party-with-lights-42828-large.mp4",
      description: "On-location cinematography and post-production for live performance events. Multi-angle synchronization, rhythmic cutting to music, and natural color correction reproducing the stage energy.",
      tools: ["DaVinci Resolve", "Adobe Premiere Pro", "Camera Direction"]
    },
    {
      id: "athletic-motion-cut",
      title: "Dynamic Brand & Motion Vignette",
      client: "Freelance Production",
      year: "2024",
      category: "shortform",
      categoryLabel: "Short-Form / Reels",
      format: "9:16 Vertical",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-dumbbells-41443-large.mp4",
      description: "Fast-cadence athletic edit highlighting speed ramps, directional sound effects, and contrast-driven color grading.",
      tools: ["Adobe Premiere Pro", "CapCut", "Audio Mastering"]
    },
    {
      id: "brand-collateral-keyart",
      title: "Key Art & Commercial Display Assets",
      client: "Startups & Emerging Brands",
      year: "2024 - 2026",
      category: "design",
      categoryLabel: "Graphic Design",
      format: "Display Art",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41713-large.mp4",
      description: "High-CTR advertising posters, YouTube key visuals, and marketing collateral designed with clean typographical hierarchy and intentional contrast.",
      tools: ["Adobe Photoshop", "Canva Pro"]
    },
    {
      id: "jaadughar-social-sprint",
      title: "100+ Asset Social Media Production Sprint",
      client: "JaaduGhar.CO",
      year: "2025",
      category: "shortform",
      categoryLabel: "Short-Form / Reels",
      format: "9:16 Vertical",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-skater-moving-forward-in-the-city-43285-large.mp4",
      description: "High-volume asset pipeline delivering 100+ edited videos and short-form pieces on strict publication deadlines, sustaining consistent organic growth.",
      tools: ["Adobe Premiere Pro", "CapCut", "Workflow Automation"]
    }
  ],

  capabilities: [
    {
      group: "Video Editing & Post-Production",
      items: [
        { name: "Adobe Premiere Pro", detail: "Timeline assembly, multi-camera syncing, keyframing & pacing" },
        { name: "DaVinci Resolve", detail: "Color correction, Rec.709 normalization & shot matching" },
        { name: "CapCut Pro", detail: "Rapid short-form iteration, kinetic subtitles & social formats" },
        { name: "Audio & Sound Design", detail: "Audio cleaning, foley layering, SFX syncing & vocal leveling" }
      ]
    },
    {
      group: "Visual Design & Creative Collateral",
      items: [
        { name: "Adobe Photoshop", detail: "Display advertising, high-CTR YouTube thumbnails & promotional posters" },
        { name: "Canva Pro", detail: "Rapid marketing assets, social media branding & slide collateral" },
        { name: "Typography & Layout", detail: "Clear visual hierarchy, kinetic caption design & graphic composition" }
      ]
    },
    {
      group: "Production & Growth Strategy",
      items: [
        { name: "Videography & Camera Ops", detail: "On-site framing, live event coverage & stage cinematography" },
        { name: "Meta Ads Strategy", detail: "Creative testing, retention hook design & lead generation assets" },
        { name: "Social Channel Management", detail: "Content scheduling, audience engagement & publication workflows" },
        { name: "Script & Narrative Structure", detail: "Storyboarding, hook construction & retention pacing blueprints" }
      ]
    }
  ],

  experience: [
    {
      role: "Video Editor & Social Media Handling",
      company: "Dream Careers",
      period: "April 2026 — Present",
      location: "Active Engagement",
      highlights: [
        "Overseeing multi-platform social media distribution, ensuring consistent branding and high publication frequency.",
        "Editing high-retention reels, brand introduction videos, and direct-response Meta advertising creatives.",
        "Designing graphic banners and ad collateral optimized specifically for candidate lead generation and lower CPL.",
        "Analyzing hook retention curves and iteratively refining cut timing to increase audience engagement."
      ]
    },
    {
      role: "Video Editor & Videographer / Photographer",
      company: "JaaduGhar.CO",
      period: "July 2025 — July 2025",
      location: "Production Contract",
      highlights: [
        "Edited over 100+ short-form videos and reels within strict production deadlines.",
        "Filmed and captured live coverage across 60+ stage performances, concerts, and cultural events.",
        "Managed Instagram content publishing and social media operations resulting in measurable audience growth."
      ]
    },
    {
      role: "Video Editor, Graphic Designer & Content Specialist",
      company: "Independent Freelance Practice",
      period: "April 2024 — Present",
      location: "Client Engagements",
      highlights: [
        "Delivered full-cycle video production and graphic design services for emerging brands, creators, and startups.",
        "Produced commercial promotional cuts, product teasers, and social-first video campaigns.",
        "Designed promotional posters, marketing key art, and social media collateral tailored to brand guidelines."
      ]
    },
    {
      role: "Senior Secondary Education (Class 12)",
      company: "PCM + Computer Science",
      period: "Completed 2025",
      location: "Academic Foundation",
      highlights: [
        "Core coursework in Physics, Chemistry, Mathematics, and Computer Science.",
        "Technical foundation supporting structured problem-solving, digital media workflows, and modern software tools."
      ]
    }
  ],

  process: [
    {
      step: "01",
      title: "Brief & Objective",
      detail: "Clarifying target audience, core messaging, distribution platform, and key conversion metrics."
    },
    {
      step: "02",
      title: "Assembly & Retention Cut",
      detail: "Removing dead air, establishing rhythmic pacing, and engineering an immediate visual hook."
    },
    {
      step: "03",
      title: "Sound Design & Motion",
      detail: "Integrating nuanced sound effects, clean audio equalization, subtle kinetic graphics, and typography."
    },
    {
      step: "04",
      title: "Color & Final Master",
      detail: "Professional color grading, contrast balancing, and high-fidelity rendering optimized for platform standards."
    }
  ]
};

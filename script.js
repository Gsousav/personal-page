// ============================================
// Translations (keeping existing)
// ============================================
const translations = {
    en: {
        nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills", contact: "Get in Touch" },
        hero: {
            badge: "Available for Opportunities", title1: "Gabriel Sousa", title2: "Automation & Intelligence",
            subtitle: "Business Administration Professional specializing in Finance, Data Science & AI. I transform complex processes into efficient, automated solutions that drive measurable results.",
            stat1: "Faster Processing", stat2: "Response Rate", stat3: "Min Saved/Doc",
            cta1: "Let's Connect", cta2: "View My Work", scroll: "Scroll to explore"
        },
        about: {
            label: "Who I Am", title: "About Me",
            lead: "I'm a curious, self-taught professional with a background in business administration, specialization in finance, and a complementary focus on artificial intelligence and data analysis.",
            description: "Passionate about understanding the 'why' behind processes and continuously improving operational efficiency through technical solutions. I bring hands-on experience in automation, financial analysis, and process optimization.",
            highlight1: "Process Automation", highlight1desc: "Building systems that work smarter, not harder",
            highlight2: "Data-Driven Decisions", highlight2desc: "Turning numbers into actionable insights",
            highlight3: "Efficiency Focus", highlight3desc: "Optimizing every step of the journey"
        },
        experience: {
            label: "My Journey", title: "Professional Experience",
            job1: {
                date: "Feb 2025 – Aug 2025", title: "Office Administrator & Data Transfer", location: "Amsterdam, Netherlands",
                detail1: "Provided customer service for document preparation and USB delivery",
                detail2: "Automated compliance letter generation, eliminating errors and saving 10+ minutes per document",
                detail3: "Created a document validator that's 500× faster than the previous manual process",
                detail4: "Optimized USB transfer workflows through automation, reducing errors and operational time"
            },
            job2: {
                date: "Dec 2021 - Feb 2022", title: "Operations Intern", location: "Lima, Peru",
                detail1: "Increased customer response rate by 4× through WhatsApp automation",
                detail2: "Co-designed a chatbot and optimized Excel reports, improving internal data management",
                detail3: "Enhanced operational communication, accelerating customer response times"
            },
            job3: {
                date: "Jun 2020 - Apr 2021", title: "Fuel Logistics Trainee", location: "Callao, Peru",
                detail1: "Coordinated fuel delivery logistics to vessels, ensuring port operational efficiency",
                detail2: "Conducted real-time inventory tracking and processed purchase orders without delays",
                detail3: "Organized tenders and negotiated supplier pricing to reduce costs",
                detail4: "Proposed supply and inventory flow improvements, optimizing the logistics chain"
            }
        },
        education: {
            label: "Academic Background", title: "Education",
            degree1: "Bachelor's in Business Administration", specialization1: "Finance Specialization • Minor in Data Science & AI",
            date1: "Aug 2022 - Jul 2025", badge1: "Cum Laude",
            degree2: "Bachelor's in Industrial Engineering", incomplete: "(Incomplete)",
            date2: "Apr - Dec 2021", badge2: "Top 10%"
        },
        skills: {
            label: "What I Bring", title: "Skills & Expertise",
            category1: "Technical Skills", category2: "Core Competencies", category3: "Languages",
            competency1: "Process Automation", competency2: "Financial Analysis", competency3: "Data Visualization",
            competency4: "Critical Thinking", competency5: "Problem Solving", competency6: "System Design",
            lang1: "Spanish", lang1level: "Native", lang2: "English", lang2level: "Fluent",
            lang3: "Dutch", lang3level: "Basic", lang4: "French", lang4level: "Basic"
        },
        contact: {
            title: "Let's Work Together",
            subtitle: "Ready to discuss how I can help automate and optimize your business processes.",
            email: "Email", phone: "Phone", linkedin: "LinkedIn", location: "Location"
        },
        footer: { copyright: "© 2025 Gabriel Sousa. Crafted with precision and passion." },
        meta: {
            description: "Gabriel Sousa - Business Administration Professional specializing in Finance, Data Science & AI. Transforming businesses through automation and data intelligence.",
            title: "Gabriel Sousa - Business Automation & Data Intelligence"
        }
    },
    es: {
        nav: { about: "Sobre Mí", experience: "Experiencia", education: "Educación", skills: "Habilidades", contact: "Contacto" },
        hero: {
            badge: "Disponible para Oportunidades", title1: "Gabriel Sousa", title2: "Automatización e Inteligencia",
            subtitle: "Profesional en Administración de Empresas especializado en Finanzas, Ciencia de Datos e IA. Transformo procesos complejos en soluciones eficientes y automatizadas que generan resultados medibles.",
            stat1: "Procesamiento Más Rápido", stat2: "Tasa de Respuesta", stat3: "Min Ahorrados/Doc",
            cta1: "Conectemos", cta2: "Ver Mi Trabajo", scroll: "Desplázate para explorar"
        },
        about: {
            label: "Quién Soy", title: "Sobre Mí",
            lead: "Soy un profesional curioso, autodidacta, con formación en administración de empresas, especialización en finanzas y un enfoque complementario en inteligencia artificial y análisis de datos.",
            description: "Apasionado por entender el 'por qué' detrás de los procesos y mejorar continuamente la eficiencia operativa mediante soluciones técnicas. Aporto experiencia práctica en automatización, análisis financiero y optimización de procesos.",
            highlight1: "Automatización de Procesos", highlight1desc: "Construyendo sistemas que trabajan más inteligentemente",
            highlight2: "Decisiones Basadas en Datos", highlight2desc: "Convirtiendo números en insights accionables",
            highlight3: "Enfoque en Eficiencia", highlight3desc: "Optimizando cada paso del recorrido"
        },
        experience: {
            label: "Mi Trayectoria", title: "Experiencia Profesional",
            job1: {
                date: "Feb 2025 – Ago 2025", title: "Administrador de Oficina y Transferencia de Datos", location: "Amsterdam, Países Bajos",
                detail1: "Brindé servicio al cliente en preparación de documentos y entrega de USB",
                detail2: "Automaticé la generación de cartas de conformidad, eliminando errores y ahorrando más de 10 minutos por documento",
                detail3: "Creé un validador de documentos 500× más rápido que el proceso manual anterior",
                detail4: "Optimicé los flujos de transferencia de USB mediante automatización, reduciendo errores y tiempo operativo"
            },
            job2: {
                date: "Dic 2021 - Feb 2022", title: "Practicante de Operaciones", location: "Lima, Perú",
                detail1: "Aumenté la tasa de respuesta de clientes en 4× mediante automatización por WhatsApp",
                detail2: "Codiseñé un chatbot y optimicé reportes en Excel, mejorando la gestión de datos internos",
                detail3: "Mejoré la comunicación operativa, acelerando los tiempos de respuesta con clientes"
            },
            job3: {
                date: "Jun 2020 - Abr 2021", title: "Trainee de Logística de Combustibles", location: "Callao, Perú",
                detail1: "Coordiné la logística de entrega de combustibles a embarcaciones, asegurando eficiencia operativa portuaria",
                detail2: "Realicé seguimiento de inventarios en tiempo real y procesé órdenes de compra sin demoras",
                detail3: "Organicé licitaciones y negocié precios con proveedores para reducir costos",
                detail4: "Propuse mejoras en flujos de abastecimiento e inventario, optimizando la cadena logística"
            }
        },
        education: {
            label: "Formación Académica", title: "Educación",
            degree1: "Pregrado en Administración de Empresas", specialization1: "Especialización en Finanzas • Minor en Ciencia de Datos e IA",
            date1: "Ago 2022 - Jul 2025", badge1: "Cum Laude",
            degree2: "Pregrado en Ingeniería Industrial", incomplete: "(Incompleto)",
            date2: "Abr - Dic 2021", badge2: "Décimo Superior"
        },
        skills: {
            label: "Lo Que Aporto", title: "Habilidades y Experiencia",
            category1: "Habilidades Técnicas", category2: "Competencias Principales", category3: "Idiomas",
            competency1: "Automatización de Procesos", competency2: "Análisis Financiero", competency3: "Visualización de Datos",
            competency4: "Pensamiento Crítico", competency5: "Resolución de Problemas", competency6: "Diseño de Sistemas",
            lang1: "Español", lang1level: "Nativo", lang2: "Inglés", lang2level: "Fluido",
            lang3: "Holandés", lang3level: "Básico", lang4: "Francés", lang4level: "Básico"
        },
        contact: {
            title: "Trabajemos Juntos",
            subtitle: "Listo para discutir cómo puedo ayudar a automatizar y optimizar los procesos de tu negocio.",
            email: "Correo", phone: "Teléfono", linkedin: "LinkedIn", location: "Ubicación"
        },
        footer: { copyright: "© 2025 Gabriel Sousa. Creado con precisión y pasión." },
        meta: {
            description: "Gabriel Sousa - Profesional en Administración de Empresas especializado en Finanzas, Ciencia de Datos e IA. Transformando negocios mediante automatización e inteligencia de datos.",
            title: "Gabriel Sousa - Automatización e Inteligencia de Negocios"
        }
    }
};

// ============================================
// Language Management
// ============================================
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (let k of keys) {
            translation = translation?.[k];
        }
        
        if (translation) {
            if (element.querySelector('strong') || translation.includes('<strong>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.querySelector('.lang-code').textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    const metaDesc = document.getElementById('metaDescription');
    const pageTitle = document.getElementById('pageTitle');
    if (metaDesc && translations[lang]?.meta?.description) {
        metaDesc.setAttribute('content', translations[lang].meta.description);
    }
    if (pageTitle && translations[lang]?.meta?.title) {
        pageTitle.textContent = translations[lang].meta.title;
    }
}

setLanguage(currentLang);

document.getElementById('langSwitcher').addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

// ============================================
// Custom Cursor (Premium Feature - Fixed)
// ============================================
if (window.innerWidth > 1024 && matchMedia('(hover: hover)').matches) {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    cursor.style.cssText = `
        position: fixed; width: 40px; height: 40px;
        border: 2px solid #2DD4BF; border-radius: 50%;
        pointer-events: none; z-index: 10000;
        transition: transform 0.15s ease, border-color 0.3s ease;
        opacity: 0;
        will-change: transform;
    `;
    
    cursorDot.style.cssText = `
        position: fixed; width: 8px; height: 8px;
        background: #2DD4BF; border-radius: 50%;
        pointer-events: none; z-index: 10001;
        transition: transform 0.1s ease, background-color 0.3s ease;
        opacity: 0;
        will-change: transform;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    let isHovering = false;
    let rafId = null;
    
    // Show cursor immediately on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Make visible on first move
        if (cursor.style.opacity === '0') {
            cursor.style.opacity = '1';
            cursorDot.style.opacity = '1';
        }
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
    
    // Show cursor when entering window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
    
    function animateCursor() {
        // Smooth follow effect
        const speed = isHovering ? 0.15 : 0.1;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        
        const baseScale = isHovering ? 1.5 : 1;
        const dotScale = isHovering ? 0.5 : 1;
        
        cursor.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0) scale(${baseScale})`;
        cursorDot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0) scale(${dotScale})`;
        
        rafId = requestAnimationFrame(animateCursor);
    }
    
    // Start animation loop
    animateCursor();
    
    // Scale cursor on interactive elements
    const interactiveElements = 'a, button, .contact-item, .about-card, .timeline-content, .education-card, .tag, .competency-item, .language-item';
    
    const addCursorListeners = () => {
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                cursor.style.borderColor = '#14B8A6';
                cursorDot.style.backgroundColor = '#14B8A6';
            });
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                cursor.style.borderColor = '#2DD4BF';
                cursorDot.style.backgroundColor = '#2DD4BF';
            });
        });
    };
    
    // Add listeners initially
    addCursorListeners();
    
    // Re-add listeners after potential DOM changes
    setTimeout(addCursorListeners, 1000);
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (rafId) cancelAnimationFrame(rafId);
    });
}

// ============================================
// Smooth Scrolling with Momentum
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Enhanced Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Mobile Navigation
// ============================================
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-links a');

const closeNav = () => {
    navbar.classList.remove('open');
    document.body.classList.remove('no-scroll');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
};

const toggleNav = () => {
    const isOpen = navbar.classList.toggle('open');
    document.body.classList.toggle('no-scroll', isOpen);
    if (navToggle) navToggle.setAttribute('aria-expanded', String(isOpen));
};

navToggle?.addEventListener('click', toggleNav);
navOverlay?.addEventListener('click', closeNav);
navLinks.forEach(link => link.addEventListener('click', closeNav));
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbar.classList.contains('open')) {
        closeNav();
    }
});

// ============================================
// Scroll-Triggered Animations (Lando-style)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when visible
            if (entry.target.classList.contains('skill-item')) {
                const skillFill = entry.target.querySelector('.skill-fill');
                if (skillFill && !skillFill.dataset.animated) {
                    const targetWidth = skillFill.style.width;
                    skillFill.style.width = '0';
                    setTimeout(() => {
                        skillFill.style.width = targetWidth;
                        skillFill.dataset.animated = 'true';
                    }, 200);
                }
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.section-header, .timeline-item, .education-card, .about-card, .skill-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// 3D Card Lift Effect (Premium Touch)
// ============================================
const liftCards = document.querySelectorAll('.about-card, .education-card, .timeline-content');

if (matchMedia('(hover: hover)').matches) {
    liftCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) translateZ(40px)';
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update CSS custom properties for gradient effect
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        });
    });
} else {
    liftCards.forEach(card => {
        card.style.transform = '';
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
    });
}

// ============================================
// Magnetic Button Effect
// ============================================
const magneticElements = document.querySelectorAll('.btn, .nav-cta, .lang-switcher');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.max(rect.width, rect.height);
        
        if (distance < maxDistance) {
            const pullX = x * 0.3;
            const pullY = y * 0.3;
            el.style.transform = `translate(${pullX}px, ${pullY}px)`;
        }
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
    });
});

// ============================================
// Parallax Effect on Hero
// ============================================
const heroGrid = document.querySelector('.hero-grid');
const heroContent = document.querySelector('.hero-content');

if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroGrid) {
            heroGrid.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ============================================
// Smooth Number Counter Animation
// ============================================
const animateNumber = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '×';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '×';
        }
    }, 16);
};

// Trigger number animation when metrics are visible
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const value = entry.target.textContent;
            const number = parseInt(value);
            if (!isNaN(number)) {
                entry.target.dataset.animated = 'true';
                animateNumber(entry.target, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-value').forEach(el => {
    metricsObserver.observe(el);
});

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// Console Easter Egg
// ============================================
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2DD4BF;');
console.log('%c🚀 Looking under the hood? I like your style!', 'font-size: 14px; color: #64748B;');
console.log('%c💼 Let\'s connect: gssousav@gmail.com', 'font-size: 12px; color: #0A1F1F; font-weight: bold;');
console.log('%c✨ This page was crafted with precision and passion', 'font-size: 11px; color: #94A3B8; font-style: italic;');
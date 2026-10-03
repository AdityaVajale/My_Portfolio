import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Code2,
  Server,
  Palette,
  Brain,
  ExternalLink,
  X,
  MessageCircle,
  FileText,
  Laptop,
  CheckCircle2,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import profileImg from "./assets/profile.jpg";
import unitrackImg from "./assets/unitrack.jpg";
import dashiveImg from "./assets/dashive.jpg";
import todoImg from "./assets/todo.jpg";
import cakeImg from "./assets/cake.png";

import salonImg from "./assets/salon.jpg";
import cafeImg from "./assets/cafe.jpg";
import clinicImg from "./assets/clinic.jpg";
import portfolioImg from "./assets/portfolio.jpg";
import landingImg from "./assets/landing-page.jpg";
import businessImg from "./assets/business.jpg";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Aditya Vajale — Full Stack Developer" },
//       { name: "description", content: "Portfolio of Aditya Vajale — Full Stack Developer crafting modern web experiences with Java, Spring Boot & Angular." },
//       { property: "og:title", content: "Aditya Vajale — Full Stack Developer" },
//       { property: "og:description", content: "Full Stack Developer crafting modern web experiences." },
//     ],
//   }),
//   component: Portfolio,
// });
const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const values = [
  { emoji: "💡", label: "Creativity" },
  { emoji: "🚀", label: "Growth" },
  { emoji: "🤝", label: "Collaboration" },
  { emoji: "🔥", label: "Passion" },
];

const services = [
  {
    icon: Code2,
    title: "Business Website Development",
    desc: "Professional websites for salons, cafes, clinics and local businesses.",
  },
  {
    icon: Server,
    title: "Custom Web Applications",
    desc: "Spring Boot and Angular applications for business automation.",
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    desc: "Modern portfolio and personal branding websites.",
  },
  {
    icon: Brain,
    title: "SEO Optimized Websites",
    desc: "Fast loading websites designed to rank on Google.",
  },
];
const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["Angular", "ReactJS", "Figma"] },
  {
    group: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js", "Hibernate"],
  },
  { group: "Tools", items: ["Git", "VS Code", "Postman"] },
];

const projects = [
  {
    emoji: "🍰",
    title: "SweetCrumbs",
    desc: "Online cake ordering platform",
    tags: ["ReactJS"],
    img: cakeImg,
    live: "https://demo-cake-store-eight.vercel.app/",
  },
  {
    emoji: "🚀",
    title: "UniTrack",
    desc: "Student management system with full stack architecture.",
    tags: ["Spring Boot", "Angular", "MySQL"],
    img: unitrackImg,
  },
  {
    emoji: "📊",
    title: "Dashive",
    desc: "Employee task tracker with clean UI & performance.",
    tags: ["Angular", "TypeScript"],
    img: dashiveImg,
  },
  {
    emoji: "✅",
    title: "To-Do List",
    desc: "To-Do list for managing your day to day tasks.",
    tags: ["HTML", "JavaScript"],
    img: todoImg,
  },
];

function ProcessTimeline() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      desc: "Tell me about your business, your customers and what you want your website to do. No cost, no pressure.",
    },
    {
      icon: FileText,
      title: "Quote & Timeline",
      desc: "You get a fixed price and a delivery date before any work starts, so there are no surprises.",
    },
    {
      icon: Laptop,
      title: "Design & Development",
      desc: "I build your mobile-friendly, SEO-ready website using your logo, photos and content.",
    },
    {
      icon: CheckCircle2,
      title: "Review & Changes",
      desc: "You check the website and I make the changes you ask for until you are fully happy.",
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "Your website goes live with domain and hosting set up, and your Google Business profile connected.",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      desc: "I stay available after launch for updates, fixes and any help you need.",
    },
  ];

  const [visible, setVisible] = useState([]);
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.dataset.i);
            setVisible((v) => (v.includes(i) ? v : [...v, i]));
          }
        });
      },
      { threshold: 0.35 },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="process" className="py-24 px-6">
      <style>{`
        @keyframes ptLeft{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}
        @keyframes ptRight{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:none}}
        @keyframes ptPop{0%{transform:scale(0)}70%{transform:scale(1.25)}100%{transform:scale(1)}}
        @keyframes ptRing{0%{box-shadow:0 0 0 0 rgba(120,120,255,.5)}100%{box-shadow:0 0 0 18px rgba(120,120,255,0)}}
        .pt-l{animation:ptLeft .7s ease-out both}
        .pt-r{animation:ptRight .7s ease-out both}
        .pt-pop{animation:ptPop .5s ease-out both, ptRing 1.2s ease-out .4s 2}
        @media (max-width:767px){.pt-l{animation-name:ptRight}}
        @media (prefers-reduced-motion:reduce){.pt-l,.pt-r,.pt-pop{animation:none}}
      `}</style>

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            How I Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            From first call to{" "}
            <span className="text-gradient">live website</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            A simple, clear process so you always know what happens next.
          </p>
        </div>

        <div ref={wrapRef} className="relative">
          {/* line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border" />
          <div
            className="absolute left-6 md:left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-primary"
            style={{ height: `${progress * 100}%` }}
          />

          <div className="space-y-12">
            {steps.map((s, i) => {
              const show = visible.includes(i);
              const left = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  ref={(el) => (stepRefs.current[i] = el)}
                  data-i={i}
                  className={`relative flex ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* number circle */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <div
                      className={`size-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground ${show ? "pt-pop" : "scale-0"}`}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[45%] glass rounded-2xl p-6 ${show ? (left ? "pt-l" : "pt-r") : "opacity-0"}`}
                  >
                    <div className="size-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <s.icon className="size-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-glow hover:scale-[1.02] transition-transform"
          >
            Start with a free call <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  // Call popup: opens on page load, closes with the X
  const [showCall, setShowCall] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCall(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Call popup */}
      {showCall && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/60"
          onClick={() => setShowCall(false)}
        >
          <div
            className="glass relative w-full max-w-sm rounded-3xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCall(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div className="size-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
              <Phone className="size-7 text-primary-foreground" />
            </div>

            <h3 className="font-display font-bold text-2xl mb-2">
              Need a website for your business?
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Call me now for a free quote.
            </p>

            <a
              href="tel:+917972503835"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Phone className="size-4" /> Call +91 7972503835
            </a>
          </div>
        </div>
      )}

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg">
            <span className="text-gradient">Aditya</span>.dev
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground glass px-3 py-1.5 rounded-full mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />{" "}
              Available for work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Aditya Vajale</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              Freelance Full Stack Developer based in Pune helping salons,
              cafes, clinics and local businesses build modern, SEO-friendly
              websites that attract more customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-glow hover:scale-[1.02] transition-transform"
              >
                Explore Work <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass font-medium px-6 py-3 rounded-lg hover:border-primary/40 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end image-3d">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <div className="image-3d-inner relative size-72 md:size-96 rounded-3xl overflow-hidden border-4 border-card">
              <img
                src={profileImg}
                alt="Aditya Vajale"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
              />
              <div className="image-3d-shine" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <style>{`
          @keyframes aboutReveal {
            0% {
              opacity: 0;
              transform: translateX(-100px);
              filter: blur(8px);
            }

            70% {
              opacity: 1;
              transform: translateX(8px);
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }

          @keyframes aboutLine {
            0% {
              transform: scaleY(0);
              transform-origin: top;
            }

            100% {
              transform: scaleY(1);
              transform-origin: top;
            }
          }

          @keyframes aboutNumber {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes aboutAccent {
            0%, 100% {
              opacity: .25;
              transform: translateX(0);
            }

            50% {
              opacity: .8;
              transform: translateX(8px);
            }
          }

          .about-main {
            animation:
              aboutReveal
              .9s
              cubic-bezier(.22,1,.36,1)
              both;
          }

          .about-line {
            animation:
              aboutLine
              1s
              cubic-bezier(.22,1,.36,1)
              .15s
              both;
          }

          .about-number {
            animation:
              aboutNumber
              .5s
              cubic-bezier(.22,1,.36,1)
              both;
          }

          .about-accent {
            animation:
              aboutAccent
              3s
              ease-in-out
              infinite;
          }

          .about-value {
            opacity: 0;
            transform: translateX(-70px);
            animation:
              aboutReveal
              .7s
              cubic-bezier(.22,1,.36,1)
              forwards;
          }

          .about-value:hover {
            transform: translateX(10px);
          }

          .about-value:hover .about-arrow {
            transform: translateX(6px);
          }

          .about-arrow {
            transition: transform .3s ease;
          }

          @media (prefers-reduced-motion: reduce) {
            .about-main,
            .about-line,
            .about-number,
            .about-accent,
            .about-value {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }
          }

          @media (max-width: 767px) {
            .about-value:hover {
              transform: translateX(4px);
            }
          }
        `}</style>

        <div className="mx-auto max-w-6xl">
          {/* Main About Layout */}
          <div className="grid lg:grid-cols-[120px_1fr] gap-10 lg:gap-16">
            {/* Editorial Side Marker */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="about-line w-px h-32 bg-gradient-primary" />

              <span
                className="
                  about-number
                  mt-6
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-muted-foreground
                  [writing-mode:vertical-rl]
                "
              >
                About Me
              </span>

              <span className="mt-6 text-xs font-mono text-primary">01</span>
            </div>

            {/* Main Content */}
            <div className="about-main">
              {/* Heading */}
              <div className="max-w-4xl">
                <p className="lg:hidden text-sm uppercase tracking-widest text-primary mb-3">
                  About Me
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Building things,
                  <br />
                  <span className="text-gradient">one line at a time.</span>
                </h2>
              </div>

              {/* About Text */}
              <div className="mt-8 max-w-4xl">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I'm a{" "}
                  <b className="text-foreground">
                    Freelance Full Stack Developer
                  </b>{" "}
                  based in <b className="text-foreground">Thergaon, Pune.</b> I
                  help salons, cafes, clinics, restaurants and local businesses
                  build professional websites that strengthen their online
                  presence and generate more customer inquiries.
                </p>

                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  From business websites and landing pages to custom web
                  applications, I focus on building{" "}
                  <b className="text-foreground">fast, mobile-friendly</b> and{" "}
                  <b className="text-foreground">SEO-optimized solutions</b>{" "}
                  with a clean and practical user experience.
                </p>
              </div>

              {/* Values / Principles */}
              <div className="mt-14">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    What drives my work
                  </span>

                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="border-t border-border">
                  {values.map((v, index) => (
                    <div
                      key={v.label}
                      className="
                        about-value
                        group
                        relative
                        flex
                        items-center
                        justify-between
                        py-5
                        border-b
                        border-border
                        cursor-default
                        transition-all
                        duration-300
                      "
                      style={{
                        animationDelay: `${index * 160 + 450}ms`,
                      }}
                    >
                      {/* Left */}
                      <div className="flex items-center gap-5">
                        <span
                          className="
                            text-xs
                            font-mono
                            text-muted-foreground
                            w-8
                          "
                        >
                          0{index + 1}
                        </span>

                        <span
                          className="
                            text-lg
                            md:text-xl
                            font-display
                            font-semibold
                            transition-colors
                            duration-300
                            group-hover:text-primary
                          "
                        >
                          {v.label}
                        </span>
                      </div>

                      {/* Right */}
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            hidden
                            sm:block
                            text-xs
                            uppercase
                            tracking-widest
                            text-muted-foreground
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                          "
                        >
                          principle
                        </span>

                        <ArrowRight
                          className="
                            about-arrow
                            size-4
                            text-muted-foreground
                            group-hover:text-primary
                          "
                        />
                      </div>

                      {/* Moving accent */}
                      <div
                        className="
                          about-accent
                          absolute
                          left-0
                          bottom-0
                          h-px
                          w-16
                          bg-gradient-primary
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Small developer statement */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span>Clean interfaces</span>

                <span className="size-1 rounded-full bg-primary" />

                <span>Practical solutions</span>

                <span className="size-1 rounded-full bg-primary" />

                <span>Built for real users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">
              What I Do Best
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Turning ideas into scalable apps
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass card-hover rounded-2xl p-6">
                <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <style>{`
          @keyframes techNotebookReveal {
            0% {
              opacity: 0;
              transform: translateY(120px) scale(.88) rotate(-3deg);
              filter: blur(8px);
            }

            60% {
              opacity: 1;
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1) rotate(0deg);
              filter: blur(0);
            }
          }

          @keyframes techLeft {
            0% {
              opacity: 0;
              transform: translateX(-150px) rotate(-8deg) scale(.85);
            }

            70% {
              opacity: 1;
              transform: translateX(15px) rotate(2deg) scale(1.02);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(-1deg) scale(1);
            }
          }

          @keyframes techRight {
            0% {
              opacity: 0;
              transform: translateX(150px) rotate(8deg) scale(.85);
            }

            70% {
              opacity: 1;
              transform: translateX(-15px) rotate(-2deg) scale(1.02);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(1deg) scale(1);
            }
          }

          @keyframes techTop {
            0% {
              opacity: 0;
              transform: translateY(-120px) rotate(6deg) scale(.85);
            }

            70% {
              opacity: 1;
              transform: translateY(12px) rotate(-2deg) scale(1.02);
            }

            100% {
              opacity: 1;
              transform: translateY(0) rotate(-1deg) scale(1);
            }
          }

          @keyframes techBottom {
            0% {
              opacity: 0;
              transform: translateY(130px) rotate(-7deg) scale(.85);
            }

            70% {
              opacity: 1;
              transform: translateY(-10px) rotate(2deg) scale(1.02);
            }

            100% {
              opacity: 1;
              transform: translateY(0) rotate(1deg) scale(1);
            }
          }

          @keyframes techChip {
            0% {
              opacity: 0;
              transform: translateY(12px) scale(.7);
            }

            70% {
              transform: translateY(-3px) scale(1.06);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes techPin {
            0% {
              transform: scale(0) rotate(-90deg);
              opacity: 0;
            }

            70% {
              transform: scale(1.2) rotate(15deg);
              opacity: 1;
            }

            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes notebookFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes notebookGlow {
            0%, 100% {
              opacity: .15;
              transform: scale(.95);
            }

            50% {
              opacity: .3;
              transform: scale(1.05);
            }
          }

          .tech-notebook {
            animation:
              techNotebookReveal
              1s
              cubic-bezier(.22,1,.36,1)
              both,
              notebookFloat
              7s
              ease-in-out
              1.2s
              infinite;
          }

          .tech-glow {
            animation: notebookGlow 5s ease-in-out infinite;
          }

          .tech-note {
            opacity: 0;
            transition:
              transform .4s cubic-bezier(.22,1,.36,1),
              box-shadow .4s ease,
              border-color .3s ease;
          }

          .tech-note-1 {
            animation:
              techLeft
              .9s
              cubic-bezier(.22,1,.36,1)
              .35s
              forwards;
          }

          .tech-note-2 {
            animation:
              techRight
              .9s
              cubic-bezier(.22,1,.36,1)
              .6s
              forwards;
          }

          .tech-note-3 {
            animation:
              techTop
              .9s
              cubic-bezier(.22,1,.36,1)
              .85s
              forwards;
          }

          .tech-note-4 {
            animation:
              techBottom
              .9s
              cubic-bezier(.22,1,.36,1)
              1.1s
              forwards;
          }

          .tech-note:hover {
            transform:
              translateY(-12px)
              rotate(0deg)
              scale(1.035);

            box-shadow:
              0 25px 55px rgba(0,0,0,.25),
              0 0 35px rgba(120,120,255,.12);

            border-color: hsl(var(--primary) / .45);
            z-index: 30;
          }

          .tech-pin {
            animation:
              techPin
              .5s
              cubic-bezier(.22,1,.36,1)
              both;
          }

          .tech-chip {
            opacity: 0;
            animation:
              techChip
              .45s
              cubic-bezier(.22,1,.36,1)
              forwards;
          }

          .tech-chip:hover {
            transform: translateY(-4px) scale(1.05);
          }

          .tech-paper-line {
            background-image:
              linear-gradient(
                to bottom,
                transparent 0,
                transparent 31px,
                hsl(var(--border) / .35) 32px
              );

            background-size: 100% 32px;
          }

          @media (max-width: 767px) {

            .tech-notebook {
              animation:
                techNotebookReveal
                .8s
                cubic-bezier(.22,1,.36,1)
                both;
            }

            .tech-note-1,
            .tech-note-2,
            .tech-note-3,
            .tech-note-4 {
              animation:
                techNotebookReveal
                .7s
                cubic-bezier(.22,1,.36,1)
                forwards;
            }

            .tech-note:hover {
              transform:
                translateY(-6px)
                scale(1.015);
            }
          }

          @media (prefers-reduced-motion: reduce) {

            .tech-notebook,
            .tech-glow,
            .tech-note,
            .tech-pin,
            .tech-chip {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
            }
          }
        `}</style>

        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">
              My Skills
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Technologies I work with
            </h2>

            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              A practical toolkit I use to build modern, responsive and scalable
              web applications.
            </p>
          </div>

          {/* Notebook scene */}
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient glow */}
            <div
              className="
                tech-glow
                absolute
                -inset-10
                rounded-[4rem]
                bg-gradient-primary
                blur-3xl
                pointer-events-none
              "
            />

            {/* Notebook */}
            <div
              className="
                tech-notebook
                relative
                rounded-[2rem]
                border
                border-border
                bg-card/60
                backdrop-blur-xl
                shadow-2xl
                overflow-hidden
              "
            >
              {/* Notebook header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-6
                  md:px-8
                  py-4
                  border-b
                  border-border
                  bg-secondary/50
                "
              >
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-primary/70" />
                    <span className="size-2.5 rounded-full bg-primary/40" />
                    <span className="size-2.5 rounded-full bg-primary/20" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    developer-toolkit.txt
                  </span>
                </div>

                <span className="hidden sm:block text-xs font-mono text-muted-foreground">
                  04 technologies
                </span>
              </div>

              {/* Notebook paper */}
              <div className="relative p-5 md:p-10 tech-paper-line">
                {/* Notebook holes */}
                <div className="hidden md:flex absolute left-3 top-0 bottom-0 w-4 flex-col justify-around py-8">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <span
                      key={n}
                      className="
                        size-2
                        rounded-full
                        border
                        border-border
                        bg-background
                      "
                    />
                  ))}
                </div>

                {/* Notes */}
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => {
                    const noteClasses = [
                      "tech-note-1 rotate-[-1deg]",
                      "tech-note-2 rotate-[1deg]",
                      "tech-note-3 rotate-[-1deg]",
                      "tech-note-4 rotate-[1deg]",
                    ];

                    const noteBackgrounds = [
                      "bg-primary/10",
                      "bg-secondary",
                      "bg-primary/5",
                      "bg-secondary/70",
                    ];

                    return (
                      <div
                        key={skill.group}
                        className={`
                          tech-note
                          ${noteClasses[index]}
                          ${noteBackgrounds[index]}
                          relative
                          min-h-[230px]
                          rounded-2xl
                          border
                          border-border
                          p-7
                          shadow-xl
                          overflow-hidden
                          cursor-default
                        `}
                      >
                        {/* Paper shine */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white/[.08]
                            via-transparent
                            to-transparent
                            pointer-events-none
                          "
                        />

                        {/* Pin */}
                        <div
                          className="
                            tech-pin
                            absolute
                            top-5
                            right-6
                            size-4
                            rounded-full
                            bg-primary
                            shadow-[0_3px_8px_rgba(0,0,0,.25)]
                          "
                          style={{
                            animationDelay: `${index * 120 + 500}ms`,
                          }}
                        />

                        {/* Number */}
                        <span className="absolute top-5 left-7 text-xs font-mono text-muted-foreground">
                          0{index + 1}
                        </span>

                        {/* Content */}
                        <div className="relative pt-8">
                          <h3 className="font-display font-bold text-2xl mb-6">
                            {skill.group}
                          </h3>

                          <div className="flex flex-wrap gap-2.5">
                            {skill.items.map((technology, techIndex) => (
                              <span
                                key={technology}
                                className="
                                  tech-chip
                                  px-3.5
                                  py-2
                                  rounded-lg
                                  border
                                  border-border
                                  bg-background/70
                                  text-sm
                                  font-medium
                                  shadow-sm
                                  transition-all
                                  duration-200
                                  hover:border-primary/50
                                  hover:text-primary
                                  hover:shadow-md
                                  cursor-default
                                "
                                style={{
                                  animationDelay: `
                                    ${index * 180 + techIndex * 90 + 900}ms
                                  `,
                                }}
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom metadata */}
                        <div className="absolute bottom-5 left-7 right-7">
                          <div className="h-px bg-border/60" />

                          <div className="flex items-center justify-between mt-2">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                              {index === 0 && "Core foundations"}
                              {index === 1 && "User interfaces"}
                              {index === 2 && "Application logic"}
                              {index === 3 && "Development tools"}
                            </p>

                            <span className="text-[10px] font-mono text-muted-foreground">
                              {skill.items.length.toString().padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notebook footer */}
              <div
                className="
                  px-6
                  md:px-8
                  py-4
                  border-t
                  border-border
                  flex
                  items-center
                  justify-between
                  text-xs
                  text-muted-foreground
                  bg-secondary/30
                "
              >
                <span>Built with curiosity.</span>

                <span className="font-mono">// always learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Services Section */}

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">
              Website Development Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Website Developer in Pune
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Helping salons, cafes, clinics, restaurants, local stores and
              startups establish a strong online presence with modern,
              responsive and SEO-friendly websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // { icon: "💇", title: "Salon Website Development" },
              // { icon: "☕", title: "Cafe Website Development" },
              // { icon: "🩺", title: "Clinic Website Development" },
              // { icon: "🧑‍💼", title: "Portfolio Website Development" },
              // { icon: "🚀", title: "Landing Page Development" },
              // { icon: "🏬", title: "Business Website Development" },
              { img: salonImg, title: "Salon Website Development" },
              { img: cafeImg, title: "Cafe Website Development" },
              { img: clinicImg, title: "Clinic Website Development" },
              { img: portfolioImg, title: "Portfolio Website Development" },
              { img: landingImg, title: "Landing Page Development" },
              { img: businessImg, title: "Business Website Development" },
            ].map((service) => (
              <div
                key={service.title}
                className="glass card-hover rounded-2xl overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professional, mobile-friendly and SEO-optimized websites
                    designed to help businesses grow and attract more customers
                    online.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-4xl glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />

          <div className="relative">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-widest text-primary mb-3">
                Get in Touch
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's <span className="text-gradient">connect</span> & build
                something amazing 🚀
              </h2>

              <p className="text-muted-foreground">
                Have a project in mind? Send me a message and I'll get back to
                you.
              </p>
            </div>

            <form
              action="https://formsubmit.co/adityavajale6@gmail.com"
              method="POST"
              className="max-w-2xl mx-auto space-y-5"
            >
              {/* FormSubmit settings */}
              <input
                type="hidden"
                name="_subject"
                value="New Website Inquiry - Aditya Vajale Portfolio"
              />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />

              <input
                type="hidden"
                name="_next"
                value="https://adityavajale.netlify.app/#contact"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>

            {/* Direct contact */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              <a
                href="mailto:adityavajale6@gmail.com"
                className="glass card-hover rounded-xl p-4 flex items-center gap-3"
              >
                <Mail className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium truncate">
                    adityavajale6@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+917972503835"
                className="glass card-hover rounded-xl p-4 flex items-center gap-3"
              >
                <Phone className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">+91 7972503835</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-vajale-376416294"
                target="_blank"
                rel="noreferrer"
                className="glass card-hover rounded-xl p-4 flex items-center gap-3"
              >
                <Linkedin className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm font-medium">aditya-vajale</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Aditya Vajale | Full Stack Developer in
        Pune, Maharashtra
      </footer>
    </div>
  );
}
export default App;

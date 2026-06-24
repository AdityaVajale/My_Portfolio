
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
} from "lucide-react"; 
import profileImg from "./assets/profile.jpg";
import unitrackImg from "./assets/unitrack.jpg";
import dashiveImg from "./assets/dashive.jpg";
import todoImg from "./assets/todo.jpg";


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


// const Github = () => <span>Github</span>;
// const Linkedin = () => <span>LinkedIn</span>;
// const Mail = () => <span>📧</span>;
// const Phone = () => <span>📱</span>;
// const ArrowRight = () => <span>→</span>;
// const Code2 = () => <span>💻</span>;
// const Server = () => <span>🖥️</span>;
// const Palette = () => <span>🎨</span>;
// const Brain = () => <span>🧠</span>;
// const ExternalLink = () => <span>🔗</span>;
const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
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
    desc: "Professional websites for salons, cafes, clinics and local businesses."
  },
  {
    icon: Server,
    title: "Custom Web Applications",
    desc: "Spring Boot and Angular applications for business automation."
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    desc: "Modern portfolio and personal branding websites."
  },
  {
    icon: Brain,
    title: "SEO Optimized Websites",
    desc: "Fast loading websites designed to rank on Google."
  }
];
const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["Angular", "ReactJS", "Figma"] },
  { group: "Backend", items: ["Spring Boot", "Node.js", "Express.js", "Hibernate"] },
  { group: "Tools", items: ["Git", "VS Code", "Postman"] },
];

const projects = [
  { emoji: "🚀", title: "UniTrack", desc: "Student management system with full stack architecture.", tags: ["Spring Boot", "Angular", "MySQL"], img: unitrackImg },
  { emoji: "📊", title: "Dashive", desc: "Employee task tracker with clean UI & performance.", tags: ["Angular", "TypeScript"], img: dashiveImg },
  { emoji: "✅", title: "To-Do List", desc: "To-Do list for managing your day to day tasks.", tags: ["HTML", "JavaScript"], img: todoImg },
];

function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-lg">
            <span className="text-gradient">Aditya</span>.dev
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground glass px-3 py-1.5 rounded-full mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" /> Available for work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Aditya Vajale</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg">
              Full Stack Developer crafting modern web experiences 🚀
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-glow hover:scale-[1.02] transition-transform">
                Explore Work <ArrowRight className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 glass font-medium px-6 py-3 rounded-lg hover:border-primary/40 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end image-3d">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <div className="image-3d-inner relative size-72 md:size-96 rounded-3xl overflow-hidden border-4 border-card">
              <img src={profileImg} alt="Aditya Vajale" className="w-full h-full object-cover" width={1024} height={1024} />
              <div className="image-3d-shine" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building things, <span className="text-gradient">one line at a time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
Passionate Full Stack Developer based in Thergaon, Pune. I help local businesses, salons, cafes, clinics, and startups build modern websites and web applications using Java, Spring Boot, Angular, and React.          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.label} className="glass card-hover rounded-2xl p-6">
                <div className="text-4xl mb-3">{v.emoji}</div>
                <div className="font-semibold">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">What I Do Best</p>
            <h2 className="text-4xl md:text-5xl font-bold">Turning ideas into scalable apps 🚀</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass card-hover rounded-2xl p-6">
                <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">My Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold">Technologies I work with</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.group} className="glass rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-gradient">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-secondary border border-border">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">My Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold">Selected work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="glass card-hover rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={576} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">{p.emoji} {p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3 text-sm">
                    <a href="#" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                      <ExternalLink className="size-4" /> Live
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                      <Github className="size-4" /> Github
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
        Helping salons, cafes, clinics, restaurants, local stores and startups
        establish a strong online presence with modern, responsive and
        SEO-friendly websites.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "💇", title: "Salon Website Development" },
        { icon: "☕", title: "Cafe Website Development" },
        { icon: "🩺", title: "Clinic Website Development" },
        { icon: "🧑‍💼", title: "Portfolio Website Development" },
        { icon: "🚀", title: "Landing Page Development" },
        { icon: "🏬", title: "Business Website Development" },
      ].map((service) => (
        <div
          key={service.title}
          className="glass card-hover rounded-2xl p-6"
        >
          <div className="text-4xl mb-4">
            {service.icon}
          </div>

          <h3 className="font-display font-bold text-xl mb-3">
            {service.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Professional, mobile-friendly and SEO-optimized websites designed
            to help businesses grow and attract more customers online.
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-4xl glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">connect</span> & build something amazing 🚀
            </h2>
            <p className="text-muted-foreground mb-10">Open to opportunities, collaborations, and chats over coffee.</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              <a href="mailto:adityavajale6@gmail.com" className="glass card-hover rounded-xl p-4 flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium truncate">adityavajale6@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917972503835" className="glass card-hover rounded-xl p-4 flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">+91 7972503835</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/aditya-vajale-376416294" target="_blank" rel="noreferrer" className="glass card-hover rounded-xl p-4 flex items-center gap-3">
                <Linkedin className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm font-medium">aditya-vajale</div>
                </div>
              </a>
              <a href="https://Github.com/AdityaVajale" target="_blank" rel="noreferrer" className="glass card-hover rounded-xl p-4 flex items-center gap-3">
                <Github className="size-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Github</div>
                  <div className="text-sm font-medium">AdityaVajale</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Aditya Vajale |
Full Stack Developer in Pune, Maharashtra
      </footer>
    </div>
  );
}
export default App;
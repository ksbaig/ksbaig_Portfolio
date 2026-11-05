import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, ArrowRight, MapPin, Phone, Linkedin, FolderOpen, Globe2, Layers, Code2, Database, Box, Satellite, Award } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import cv from "@/assets/Khuram_Baig_CV.pdf";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khuram Shehzad Baig — GIS Specialist & GIS Developer, Riyadh" },
      { name: "description", content: "Enterprise GIS, Web GIS and geospatial automation specialist in Riyadh with ArcGIS Enterprise, ArcPy, Angular, React and 3D GIS experience." },
      { property: "og:title", content: "Khuram Shehzad Baig — GIS Specialist & Developer" },
      { property: "og:description", content: "Enterprise GIS, Web GIS, 3D digital twins and spatial automation portfolio." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "khuram.s.baig@gmail.com";
const LINKEDIN = "http://www.linkedin.com/in/khuram-shehzad-baig-21272996";
const DRIVE = "https://drive.google.com/drive/folders/1o3xqR_AN4ZAI8xzeiCTUtLvDEXIV0Knb?usp=sharing";

const nav = ["About", "Skills", "Projects", "Experience", "Contact"];

const skills = [
  { icon: Globe2, t: "Esri Platforms", d: "ArcGIS Enterprise, Server, Portal, ArcGIS Pro, ArcGIS Online" },
  { icon: Code2, t: "Web GIS", d: "ArcGIS Maps SDK for JS, Angular, React, Experience Builder widgets" },
  { icon: Layers, t: "Automation", d: "Python, ArcPy, ArcGIS API for Python, ModelBuilder, FME" },
  { icon: Database, t: "Spatial Data", d: "SQL Server, Oracle, PostgreSQL/PostGIS, ArcSDE, geodatabases" },
  { icon: Box, t: "3D & GeoAI", d: "3D WebScenes, CesiumJS, digital twins, BIM-GIS, GeoAI change detection" },
  { icon: Satellite, t: "Field & Remote Sensing", d: "Survey123, GPS/GNSS, ERDAS Imagine, QGIS, raster analysis" },
];

const projects = [
  { img: p1, t: "Enterprise Web GIS Dashboards", d: "Operational dashboards and decision-support tools on ArcGIS Enterprise, integrated with Angular apps and REST services.", tags: ["ArcGIS Enterprise", "Angular", "REST"] },
  { img: p2, t: "3D Digital Twin & WebScenes", d: "Advanced 3D visualization with CesiumJS and ArcGIS WebScenes, plus 360° panoramic viewers.", tags: ["CesiumJS", "3D", "Digital Twin"] },
  { img: p3, t: "Mining GIS — Ministry of Industry", d: "Migrated legacy GIS apps to Portal and Experience Builder; automated geoprocessing and reporting.", tags: ["Experience Builder", "Python", "Oracle"] },
];

const jobs = [
  { r: "GIS Specialist", c: "GeoConsult — Riyadh", y: "Current" },
  { r: "GIS Full Stack Developer / Lead", c: "Atheeb Integrated Solutions", y: "2024 – 2026" },
  { r: "GIS Specialist & Developer", c: "Geotech — Riyadh", y: "2023 – 2024" },
  { r: "GIS Development & Automation", c: "Ministry of Industry and Mineral Resources", y: "2017 – 2023" },
  { r: "GIS Developer & Analyst", c: "Dar AlTanmiyat", y: "2016 – 2017" },
  { r: "GIS Developer", c: "Riyadh Municipality", y: "2008 – 2011" },
  { r: "GIS Business Analyst & Programmer", c: "Riyad Bank", y: "2007 – 2008" },
  { r: "Cartographic Mapping Specialist", c: "MOMRA / Aero Map", y: "2003 – 2006" },
];

const certs = ["PMP®", "PMI-ACP®", "Professional Scrum Master (PSM I)", "Esri: ArcGIS Pro Basics", "Esri: ArcGIS Maps for Office", "Esri: Telling Stories with GIS Maps"];

function Section({ id, title, accent, sub, children }: { id: string; title: string; accent: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-4xl font-extrabold md:text-5xl">
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">{sub}</p>}
      <div className="mt-14">{children}</div>
    </section>
  );
}

const btnBrand = "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105";
const btnGhost = "inline-flex items-center gap-2 rounded-full glass px-7 py-3 font-semibold transition hover:bg-accent";

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground"><Globe2 size={18} /></span>
            KHURAM.
          </a>
          <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-foreground">{n}</a>)}
          </div>
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Hire me</a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-20 pt-20">
        <div className="map-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground"><MapPin size={14} className="text-primary" /> Riyadh, Saudi Arabia · Available immediately</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Khuram Shehzad Baig
              <span className="mt-2 block text-gradient">GIS Specialist & Developer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I build enterprise GIS, Web GIS and 3D geospatial solutions with ArcGIS Enterprise, ArcPy, Angular, React and CesiumJS — turning spatial data into decisions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className={btnBrand}>View Projects <ArrowRight size={18} /></a>
              <a href={cv.url} download="Khuram_Shehzad_Baig_CV.pdf" className={btnGhost}><Download size={18} /> Download CV</a>
              <a href="#contact" className={btnGhost}><Mail size={18} /> Contact</a>
            </div>
          </div>
          <div className="relative mx-auto w-72 md:w-full">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-60 blur-2xl" />
            <img src={portrait.url} alt="Khuram Shehzad Baig" className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover" />
          </div>
        </div>
        <div className="relative mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[["20+", "Years in GIS"], ["8", "Organizations"], ["PMP", "Certified"], ["3D", "Digital Twins"]].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-bold text-gradient">{n}</div>
              <div className="text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <Section id="about" title="About" accent="Me">
        <div className="glass mx-auto max-w-3xl rounded-3xl p-8 text-lg leading-relaxed text-muted-foreground">
          GIS Specialist and GIS Full-Stack Developer delivering enterprise GIS, web mapping, spatial analysis and geospatial automation. Hands-on with ArcGIS Enterprise, ArcGIS Pro, Server/Portal, ArcPy, REST services and enterprise geodatabases. I've migrated legacy GIS solutions to modern web platforms, improved geodatabase workflows, and integrated spatial services with enterprise systems for ministries, municipalities and banks across Saudi Arabia.
          <p className="mt-4 text-base">Languages: English (fluent), Urdu (native), Arabic (basic) · MCS, University of Lahore</p>
        </div>
      </Section>

      <Section id="skills" title="Core" accent="Skills">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: I, t, d }) => (
            <div key={t} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <I className="text-primary" size={28} />
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Recent" accent="Projects" sub="Selected work combining GIS, programming and spatial data into interactive maps and enterprise geospatial solutions.">
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.t} className="glass overflow-hidden rounded-3xl">
              <img src={p.img} alt={p.t} loading="lazy" width={1280} height={800} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-primary">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={DRIVE} target="_blank" rel="noreferrer" className={btnGhost}><FolderOpen size={18} /> See full portfolio files</a>
        </div>
      </Section>

      <Section id="experience" title="Work" accent="Experience">
        <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
          {jobs.map((j) => (
            <li key={j.c} className="relative mb-6">
              <span className="absolute -left-[41px] top-5 h-4 w-4 rounded-full bg-gradient-brand ring-4 ring-background" />
              <div className="glass flex flex-wrap items-center justify-between gap-2 rounded-2xl p-5">
                <div>
                  <h3 className="font-bold">{j.r}</h3>
                  <p className="text-sm text-muted-foreground">{j.c}</p>
                </div>
                <span className="text-sm font-medium text-gold">{j.y}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold"><Award className="text-gold" /> Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => <span key={c} className="glass rounded-full px-4 py-2 text-sm">{c}</span>)}
          </div>
        </div>
      </Section>

      <Section id="contact" title="Let's" accent="Connect" sub="Open to GIS Specialist and GIS Developer roles in Saudi Arabia. Immediate joining, transferable Iqama.">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { i: Mail, l: EMAIL, h: `mailto:${EMAIL}` },
            { i: Phone, l: "+966 578 069 153", h: "tel:+966578069153" },
            { i: Linkedin, l: "LinkedIn profile", h: LINKEDIN },
            { i: MapPin, l: "Riyadh, Saudi Arabia", h: "#contact" },
          ].map(({ i: I, l, h }) => (
            <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:shadow-glow">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-primary-foreground"><I size={20} /></span>
              <span className="break-all">{l}</span>
            </a>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Khuram Shehzad Baig · GIS Specialist & Developer
      </footer>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } }),
};

const NAV_LINKS = [
  { label: "Product",    href: "#features"  },
  { label: "Solutions",  href: "#solutions" },
  { label: "Enterprise", href: "#security"  },
  { label: "Pricing",    href: "#pricing"   },
  { label: "Docs",       href: "#faq"       },
];
const STATS = [
  { num: "40K+", label: "Companies worldwide" },
  { num: "99.9%", label: "Uptime SLA" },
  { num: "3x", label: "Faster deployment" },
  { num: "$2B+", label: "Revenue processed" },
];
const FEATURES = [
  { icon: "ti-shield-check", title: "Enterprise-grade security", desc: "SOC 2, ISO 27001, GDPR compliant. SSO, MFA, and role-based access built in." },
  { icon: "ti-chart-bar", title: "Advanced analytics", desc: "Real-time dashboards and custom reports across every team and workflow." },
  { icon: "ti-puzzle", title: "200+ integrations", desc: "Connect Salesforce, Slack, SAP, and every tool your team already relies on." },
  { icon: "ti-users", title: "Team collaboration", desc: "Shared workspaces, approvals, and audit logs across unlimited team members." },
  { icon: "ti-cloud", title: "Multi-cloud deployment", desc: "Deploy on AWS, GCP, or Azure — or on-premise. Your choice, always." },
  { icon: "ti-headset", title: "Dedicated support", desc: "24/7 enterprise support with a named success manager and 4-hour SLA." },
];
const LOGOS = ["Stripe", "Notion", "Figma", "Shopify", "Twilio", "Atlassian"];

export default function EnterpriseLanding() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[60px] bg-white border-b border-gray-100">
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[18px] font-extrabold tracking-tight text-gray-950">
          nexus<span className="text-blue-600">.</span>
        </span>
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
  <a key={l.label} href={l.href}
    onClick={(e) => { e.preventDefault(); const el = document.querySelector(l.href); if(el) el.scrollIntoView({ behavior: "smooth" }); }}
    className="text-[13px] font-medium text-gray-500 hover:text-blue-600 transition-colors no-underline cursor-pointer"
  >{l.label}</a>
))}
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[13px] font-medium text-gray-800 border border-gray-200 hover:border-blue-500 hover:text-blue-600 rounded-lg px-4 py-1.5 transition-colors bg-transparent cursor-pointer">Sign in</button>
          <button className="text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-1.5 transition-all border-none cursor-pointer">Request a demo</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16" style={{ background: "linear-gradient(180deg,#eff6ff 0%,#fff 100%)", borderBottom: "1px solid #f3f4f6" }}>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-[11px] font-medium text-gray-500 shadow-sm mb-7">
          <span className="bg-blue-600 text-white text-[9px] font-bold rounded-full px-2 py-0.5">NEW</span>
          Nexus Enterprise 3.0 is here — SOC 2 Type II certified
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className="text-[52px] font-extrabold leading-[1.1] tracking-tight text-gray-950 max-w-[620px] mb-4">
          The platform built for <span className="text-blue-600">enterprise scale</span>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="text-[16px] text-gray-400 leading-relaxed max-w-[460px] mb-9">
          Nexus unifies your operations, data, and teams on a single secure platform — trusted by Fortune 500 companies across 40 countries.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap items-center justify-center gap-3">
          <button className="text-[14px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-7 py-3.5 transition-all border-none cursor-pointer">Start free trial</button>
          <button className="text-[14px] font-medium text-gray-800 bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 rounded-xl px-7 py-3.5 transition-all cursor-pointer">▶ Watch demo</button>
        </motion.div>
      </section>

      {/* LOGOS */}
      <div className="px-12 py-9 border-b border-gray-100">
        <p className="text-center text-[11px] font-medium text-gray-400 tracking-[1.5px] uppercase mb-5">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {LOGOS.map((l) => <span key={l} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[14px] font-bold text-gray-300 tracking-tight">{l}</span>)}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
        {STATS.map((s, i) => (
          <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
            className="flex flex-col items-center py-8 px-6 bg-white border-r border-gray-100 last:border-r-0">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] font-extrabold text-gray-950 tracking-tight leading-none">{s.num}</span>
            <span className="text-[12px] font-medium text-gray-400 mt-2">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* FEATURES */}
      <section className="px-12 py-20">
        <p className="text-center text-[11px] font-semibold text-blue-600 tracking-[2px] uppercase mb-3">Platform</p>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[36px] font-extrabold text-gray-950 text-center tracking-tight max-w-[500px] mx-auto mb-3">Everything your enterprise needs</h2>
        <p className="text-[15px] text-gray-400 text-center max-w-[400px] mx-auto mb-12 leading-relaxed">From security and compliance to integrations and analytics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.5}
              className="bg-blue-50/40 border border-gray-100 hover:border-blue-500 rounded-2xl p-6 transition-colors">
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <i className={`ti ${f.icon} text-blue-600`} style={{ fontSize: 18 }} />
              </div>
              <p className="text-[14px] font-semibold text-gray-900 mb-1.5">{f.title}</p>
              <p className="text-[12px] text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div className="px-6 py-16 text-center border-y border-gray-100" style={{ background: "#eff6ff50" }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[22px] font-semibold text-gray-900 max-w-[580px] mx-auto mb-6 leading-snug">
          "Nexus cut our onboarding time by 60% and gave our security team complete visibility across every workflow."
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">SR</div>
          <div className="text-left">
            <p className="text-[13px] font-semibold text-gray-900">Sarah Reyes</p>
            <p className="text-[12px] text-gray-400">VP of Engineering, Stripe</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-950 px-6 py-20 text-center">
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-[34px] font-extrabold text-white tracking-tight mb-3">Ready to scale with confidence?</h2>
        <p className="text-[15px] text-gray-500 mb-8">Join 40,000+ companies already running on Nexus.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="text-[14px] font-semibold text-gray-950 bg-white hover:opacity-90 rounded-xl px-7 py-3.5 transition-all border-none cursor-pointer">Start free trial</button>
          <button className="text-[14px] font-medium text-white border border-white/20 hover:border-white/50 rounded-xl px-7 py-3.5 transition-all bg-transparent cursor-pointer">Talk to sales</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-12 py-5 border-t border-gray-100 text-[11px] text-gray-300 bg-white">
        <span>© 2025 Nexus, Inc. All rights reserved.</span>
        <div className="flex gap-5">{["Privacy","Security","Terms","Status"].map((l) => <a key={l} href="#" className="hover:text-gray-500 transition no-underline text-gray-300">{l}</a>)}</div>
      </footer>
    </div>
  );
}

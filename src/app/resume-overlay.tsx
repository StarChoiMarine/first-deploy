"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  project_name: string;
  project_introduction: string;
  project_period: string;
  project_github: string;
};

type GeneralInfo = {
  name: string;
  introduction: string;
  email: string;
  github: string;
};

const EDUCATION = [
  { title: "경기대학교 컴퓨터공학부", sub: "GPA 4.26 / 4.5", period: "2020.03 – 2026.08 (졸업예정)" },
  { title: "LG CNS AM Inspire Camp 3기", sub: "수료", period: "2025.07 – 2026.01" },
];

const AWARDS = [
  { year: "2026", name: "LG CNS 부트캠프 3기 최종프로젝트 대상" },
  { year: "2025", name: "경기대학교 SW중심대학 상상기업 대상" },
  { year: "2025", name: "경희대학교 SW 페스티벌 최우수상" },
  { year: "2025", name: "경기대학교 심화캡스톤 은상" },
  { year: "2025", name: "한국정보기술학회 우수논문상 금상" },
  { year: "2024", name: "한국정보기술학회 우수논문상 은상" },
];

const ACTIVITIES = [
  { title: "CES 2026 연수 및 실리콘밸리 견학", period: "2026.01 (12일)" },
  { title: "2025 캄보디아 컴퓨터 교육 봉사", period: "2025.07 – 2025.08 (7일)" },
  { title: "경기대학교 탁구동아리 홍보부장", period: "2024.08 – 2025.02" },
  { title: "대한민국 해병대 兵1262期", period: "2020.09 – 2022.03 (만기전역)" },
];

const SKILLS = [
  { cat: "Infra / DB", tools: "AWS, Docker, PostgreSQL, GitHub Actions", score: 90 },
  { cat: "Data / AI", tools: "Python, RAG, AI Agent, KcBERT, PostgreDB", score: 85 },
  { cat: "Backend", tools: "Java, Spring Boot, Flask", score: 75 },
  { cat: "Frontend", tools: "React, React Native, TypeScript, Vite", score: 60 },
];

const PROJECTS_META = [
  {
    slug: "tape",
    name: "TAPE",
    subtitle: "센서 기반 AI 러닝 헬스케어 앱",
    period: "2025.04 ~ 2025.11",
    awards: ["SW 경진대회 대상", "SW페스티벌 최우수상"],
    tags: ["React Native", "Arduino", "AI/ML", "Firebase"],
    accent: "#2563EB",
    accentBg: "#EFF6FF",
  },
  {
    slug: "hai",
    name: "H.AI",
    subtitle: "Gen AI 기반 디지털 역사 교과서",
    period: "2025.10 ~ 2026.01",
    awards: ["LG CNS 부트캠프 대상"],
    tags: ["AWS Bedrock", "Claude Sonnet", "RAG", "Tool Calling"],
    accent: "#16A34A",
    accentBg: "#F0FDF4",
  },
  {
    slug: "newsbalance",
    name: "NEWSBALANCE",
    subtitle: "AI 기반 유튜브 정치 콘텐츠 분석 플랫폼",
    period: "2025.03 ~ 2026.06",
    awards: ["학술대회 금상 (제1저자)", "SW 저작권 등록"],
    tags: ["KcBERT", "Flask", "Elasticsearch", "Python"],
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
  },
];

export default function ResumeOverlay({
  onClose,
  generalInfo,
}: {
  onClose: () => void;
  generalInfo: GeneralInfo;
  portfolio: Project[];
}) {
  return (
    <div className="relative w-[92%] max-w-4xl mx-auto py-10 sm:py-16 px-6 sm:px-10">
      {/* 돌아가기 */}
      <button
        onClick={onClose}
        className="group flex items-center gap-2 mb-10 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="메인으로 돌아가기"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
        <span className="text-sm font-medium">돌아가기</span>
      </button>

      {/* 헤더 */}
      <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">RESUME</h1>
        <div className="mt-4 h-[1px] w-24 bg-white/40 mx-auto" />
      </header>

      {/* 프로필 카드 */}
      <section className="mb-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-40 h-52 sm:w-48 sm:h-64 flex-shrink-0">
          <Image src="/choi-seong.jpeg" alt="Profile" fill className="object-cover" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{generalInfo.name}</h2>
          <p className="text-white/50 text-sm mb-4">2001.10.09 · 서울특별시 성동구</p>
          <p className="text-white/80 mb-5 leading-relaxed text-sm">
            사용자에게 공감하여 문제를 정의하고,<br />
            신뢰도 있는 AI 서비스를 개발하는 SW엔지니어입니다.
          </p>
          <div className="flex flex-col gap-1.5 text-sm">
            <p className="text-white/70">
              <span className="text-white/90 font-semibold">Tel.</span>
              <span className="ml-2">010-9601-5846</span>
            </p>
            <p className="text-white/70">
              <span className="text-white/90 font-semibold">Email.</span>
              <span className="ml-2">{generalInfo.email}</span>
            </p>
            <p className="text-white/70">
              <span className="text-white/90 font-semibold">GitHub.</span>
              <a href={generalInfo.github} target="_blank" rel="noopener noreferrer"
                className="ml-2 underline underline-offset-4 hover:text-white transition-colors">
                {generalInfo.github}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Education + Awards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {/* Education */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/20">Education</h3>
          <div className="space-y-5">
            {EDUCATION.map((e, i) => (
              <div key={i}>
                <p className="font-semibold text-white text-sm">{e.title}</p>
                <p className="text-green-300 text-xs font-medium mt-0.5">{e.sub}</p>
                <p className="text-white/50 text-xs mt-0.5">{e.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/20">Awards</h3>
          <div className="space-y-3">
            {AWARDS.map((a, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-white/40 text-xs font-mono pt-0.5 w-8 flex-shrink-0">{a.year}</span>
                <p className="text-white/80 text-xs leading-relaxed">{a.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Activities */}
      <section className="mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/20">Activities</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {ACTIVITIES.map((a, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">{a.title}</p>
                <p className="text-white/50 text-xs mt-0.5">{a.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/20">Skills</h3>
        <div className="space-y-4">
          {SKILLS.map((s) => (
            <div key={s.cat}>
              <div className="flex justify-between mb-1.5">
                <div>
                  <span className="text-white text-sm font-semibold">{s.cat}</span>
                  <span className="text-white/50 text-xs ml-2">{s.tools}</span>
                </div>
                <span className="text-white/60 text-xs font-mono">{s.score}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full"
                  style={{ width: `${s.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6 pb-3 border-b border-white/20">Key Projects</h3>
        <div className="space-y-4">
          {PROJECTS_META.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}
              className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-200 hover:translate-x-1">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-xl font-bold text-white">{p.name}</h4>
                    <span className="text-white/40 text-sm">/</span>
                    <p className="text-white/70 text-sm">{p.subtitle}</p>
                  </div>
                  <p className="text-white/40 text-xs mb-3">{p.period} · 팀장</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.awards.map((a) => (
                      <span key={a}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: p.accentBg + "22", color: p.accent, border: `1px solid ${p.accent}44` }}>
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-white/40 group-hover:text-white/80 transition-colors text-lg mt-1 flex-shrink-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

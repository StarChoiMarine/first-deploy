"use client";

import Image from "next/image";
import { useState } from "react";

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

const PROJECTS = [
  {
    id: "tape",
    name: "TAPE",
    subtitle: "센서 기반 AI 러닝 헬스케어 앱",
    period: "2025.04 ~ 2025.11 · 팀장 / 6인",
    accent: "#2563EB",
    awards: ["SW 경진대회 대상", "SW페스티벌 최우수상", "CES 2026"],
  },
  {
    id: "hai",
    name: "H.AI",
    subtitle: "Gen AI 기반 디지털 역사 교과서",
    period: "2025.10 ~ 2026.01 · 팀장 / 7인",
    accent: "#16A34A",
    awards: ["LG CNS 부트캠프 대상"],
  },
  {
    id: "newsbalance",
    name: "NEWSBALANCE",
    subtitle: "AI 기반 유튜브 정치 콘텐츠 분석 플랫폼",
    period: "2025.03 ~ 2026.06 · 팀장 / 7인",
    accent: "#7C3AED",
    awards: ["학술대회 금상 (제1저자)", "SW 저작권 등록"],
  },
];

// ── 각 프로젝트 상세 콘텐츠 ─────────────────────────────
function TapeContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <div className="rounded-xl overflow-hidden shadow-sm">
        <Image src="/images/tape/tape-app-mockup.jpg" alt="TAPE 앱 목업" width={1200} height={800} className="w-full h-auto" />
      </div>

      <div className="p-4 bg-blue-50 rounded-xl text-sm text-gray-700 leading-relaxed">
        압력센서가 부착된 인솔로 러닝 데이터를 수집하고, AI 모델로 자세와 위험성을 분석하여
        <strong> 맞춤형 테이핑 솔루션</strong>을 제공하는 헬스케어 서비스 앱입니다.
        전체 러너의 85%가 달리기 상해를 경험하지만, 기존 앱은 기록 측정 위주라 관절 관리 기능이 없다는 문제에서 출발했습니다.
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "앱 풀스택 개발", contrib: 95, items: ["React Native 기반 앱 구현", "센서 연결 및 실시간 데이터 시각화", "서비스 아키텍처 설계"] },
          { label: "AI 모델 파인튜닝", contrib: 70, items: ["보행 패턴 분류 모델 구축", "모델 성능 개선 및 정확도 향상", "AI Agent 기능 추가"] },
          { label: "프로젝트 리딩", contrib: 95, items: ["기획 및 방향 설정", "다학과 팀 모집·조율", "예선·결선 발표 담당"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-mono text-blue-500">{r.contrib}</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${r.contrib}%` }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span className="text-blue-300">·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
        <Image src="/images/tape/tape-architecture.jpg" alt="시스템 아키텍처" width={1200} height={900} className="w-full h-auto" />
        <p className="text-xs text-center text-gray-400 py-1.5">시스템 아키텍처</p>
      </div>

      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">발표 · 전시 현장</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { src: "/images/tape/tape-presentation.jpg", alt: "전시 부스" },
            { src: "/images/tape/tape-presntation2.jpg", alt: "팀원 전시" },
            { src: "/images/tape/tape-presntation3.jpeg", alt: "팀원 단체" },
          ].map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} width={400} height={400} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">수상</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/tape/tape-award-kgu.jpeg" alt="경기대 대상" width={600} height={800} className="w-full h-auto" />
            <p className="text-xs text-center text-gray-400 py-1.5">경기대 SW 상상기업 대상</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/tape/tape-award-sw-festival.jpg" alt="SW페스티벌 최우수상" width={600} height={800} className="w-full h-auto" />
            <p className="text-xs text-center text-gray-400 py-1.5">SW 페스티벌 최우수상</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/tape/tape-celebration.jpg" alt="수상 순간" width={1200} height={675} className="w-full h-auto" />
        </div>
      </div>

      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">CES 2026 라스베이거스</p>
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/tape/tape-ces2026.jpg" alt="CES 2026" width={1200} height={800} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function HaiContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <div className="p-4 bg-green-50 rounded-xl text-sm text-gray-700 leading-relaxed">
        Gen AI 기술과 다양한 시각적 요소들을 기반으로 학생들의 참여를 유도하는
        <strong> AI 역사 디지털 교과서</strong>입니다. 기존 텍스트 중심·단방향 역사 수업의 한계를 해결합니다.
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs">
        {[
          { icon: "🗺", label: "지도 기반 시각화", desc: "시대에 따라 변하는 국경 지도 위 캐릭터 이동" },
          { icon: "💬", label: "AI 인물 대화", desc: "LLM 기반 역사 인물과 실시간 채팅 · Tool Calling" },
          { icon: "🤝", label: "실시간 온라인 토론", desc: "AI 사회자 · 토론 결과 자동 요약" },
        ].map((s) => (
          <div key={s.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xl mb-1">{s.icon}</p>
            <p className="font-bold text-gray-700 mb-1">{s.label}</p>
            <p className="text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "프로젝트 리딩", contrib: 70, items: ["서비스 방향 및 핵심 기능 정의", "GitHub Projects 기반 일정 관리", "최종 발표 주도"] },
          { label: "RAG 구축 및 테스트", contrib: 50, items: ["Bedrock + OpenSearch RAG 환경 구성", "환각 감소 검색 품질 테스트", "실제 질문 시나리오 응답 검증"] },
          { label: "AI Agent 구현", contrib: 60, items: ["Tool Calling 구조 설계", "내부 API 호출 로직 구현", "대화형 Agent 흐름 정의"] },
          { label: "사용자 테스트 주도", contrib: 80, items: ["초등학생 12명 시범 사용 기획", "진입장벽·불편 요소 파악", "우선순위 재조정"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-mono text-green-600">{r.contrib}</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${r.contrib}%` }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span className="text-green-300">·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
        <p className="text-xs font-bold text-green-700 mb-1">🏆 LG CNS AM Inspire 3기 최종프로젝트 대상</p>
        <p className="text-xs text-gray-600">초등학생 12명 대상 현장 테스트 완료 · 울산 호연초등학교</p>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center h-32 text-gray-400 text-xs">
        사진 업로드 후 반영됩니다 (hai 폴더)
      </div>
    </div>
  );
}

function NewsbalanceContent() {
  return (
    <div className="space-y-6 text-gray-800">
      <div className="p-4 bg-purple-50 rounded-xl text-sm text-gray-700 leading-relaxed">
        유튜브 공공 이슈 콘텐츠의 <strong>정확도와 편향도를 분석</strong>하여 사용자에게 균형감있는 콘텐츠와 근거기사를 제공하는 플랫폼입니다.
        국내 유튜브 뉴스 소비율 53%, 알고리즘 특성으로 인한 확증편향 심화 문제를 해결합니다.
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "프로젝트 리딩", contrib: 90, items: ["기획 및 개발과정 주도", "논문 작성 및 투고 (제1저자)", "최종 발표"] },
          { label: "데이터 수집 · 모델 학습", contrib: 90, items: ["KcBERT 편향도 분류 모델 파인튜닝", "yt-dlp 자막 자동 수집 구조", "GPT Assistant 1차 라벨링"] },
          { label: "시범 배포 주도", contrib: 70, items: ["시범 배포 일정과 사용자 모집", "AWS 기반 서비스 배포"] },
          { label: "문제 해결", contrib: 90, items: ["데이터 구축 속도 5배 개선", "모델 정확도 기존 대비 +9%"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-mono text-purple-600">{r.contrib}</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full mb-2">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${r.contrib}%` }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span className="text-purple-300">·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-center">
          <p className="text-xl font-black text-purple-600">금상</p>
          <p className="text-gray-500 mt-1">한국정보기술학회 논문경진대회 (제1저자)</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-center">
          <p className="text-xl font-black text-purple-600">은상</p>
          <p className="text-gray-500 mt-1">경기대 심화캡스톤 디자인</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-center">
          <p className="text-xl font-black text-purple-600">등록</p>
          <p className="text-gray-500 mt-1">SW 저작권 (NewsBalance, 2025.07)</p>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center h-32 text-gray-400 text-xs">
        사진 업로드 후 반영됩니다 (newsbalance 폴더)
      </div>
    </div>
  );
}

// ── 메인 컴포넌트 ────────────────────────────────────────
export default function ResumeOverlay({
  onClose,
  generalInfo,
}: {
  onClose: () => void;
  generalInfo: GeneralInfo;
  portfolio: Project[];
}) {
  const [selectedProject, setSelectedProject] = useState("tape");
  const selected = PROJECTS.find((p) => p.id === selectedProject)!;

  return (
    <div className="relative w-[92%] max-w-7xl mx-auto py-10 sm:py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">

      {/* 돌아가기 */}
      <button
        onClick={onClose}
        className="group flex items-center gap-2 mb-10 text-white/70 hover:text-white transition-colors cursor-pointer"
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
            <p className="text-white/70"><span className="text-white/90 font-semibold">Tel.</span><span className="ml-2">010-9601-5846</span></p>
            <p className="text-white/70"><span className="text-white/90 font-semibold">Email.</span><span className="ml-2">{generalInfo.email}</span></p>
            <p className="text-white/70">
              <span className="text-white/90 font-semibold">GitHub.</span>
              <a href={generalInfo.github} target="_blank" rel="noopener noreferrer" className="ml-2 underline underline-offset-4 hover:text-white transition-colors">
                {generalInfo.github}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Education + Awards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
                <div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full" style={{ width: `${s.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>

      {/* ── Key Projects 2-panel 카드 ── */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-4 pb-3 border-b border-white/20">Key Projects</h3>

        {/* 카드 — 흰 배경, 좌우 분할 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex" style={{ minHeight: "520px" }}>

          {/* LEFT: 프로젝트 목록 */}
          <div className="w-56 flex-shrink-0 border-r border-gray-100 bg-gray-50/80 flex flex-col">
            <div className="p-5 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects</p>
            </div>
            <nav className="flex-1 p-3 space-y-1">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 ${
                    selectedProject === p.id
                      ? "bg-white shadow-sm border border-gray-200"
                      : "hover:bg-white/70"
                  }`}
                >
                  <p className={`text-sm font-bold ${selectedProject === p.id ? "text-gray-900" : "text-gray-500"}`}
                     style={selectedProject === p.id ? { color: p.accent } : undefined}>
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">{p.subtitle}</p>
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT: 선택된 프로젝트 상세 */}
          <div className="flex-1 overflow-y-auto">
            {/* 상단 헤더 */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-8 py-4 flex items-center justify-between z-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: selected.accent }}>
                  KEY PROJECT
                </p>
                <h4 className="text-xl font-black text-gray-900">{selected.name}
                  <span className="text-sm font-normal text-gray-400 ml-2">{selected.subtitle}</span>
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">{selected.period}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end max-w-xs">
                {selected.awards.map((a) => (
                  <span key={a} className="text-xs px-2.5 py-1 rounded-full font-medium border"
                    style={{ color: selected.accent, borderColor: selected.accent + "44", background: selected.accent + "11" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="px-8 py-6">
              {selectedProject === "tape" && <TapeContent />}
              {selectedProject === "hai" && <HaiContent />}
              {selectedProject === "newsbalance" && <NewsbalanceContent />}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

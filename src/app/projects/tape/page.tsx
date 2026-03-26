"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "overview", label: "개요",      sublabel: "프로젝트 소개" },
  { id: "problem",  label: "Problem",   sublabel: "해결하려는 문제" },
  { id: "solution", label: "Solution",  sublabel: "아키텍처 & 구현" },
  { id: "role",     label: "나의 역할", sublabel: "기여 & 현장 사진" },
  { id: "results",  label: "성과",      sublabel: "수상 & CES 2026" },
];

const ROLE_ITEMS = [
  { title: "앱 풀스택 개발", contribution: 95,
    items: ["React Native 기반 앱 구현", "센서 연결 및 실시간 데이터 시각화", "서비스 아키텍처 설계", "UI/UX 흐름 개선"] },
  { title: "AI 모델 파인튜닝", contribution: 70,
    items: ["오픈 데이터를 활용한 보행 패턴 분류 모델 구축", "모델 성능 개선 및 정확도 향상", "AI Agent 기능 추가"] },
  { title: "프로젝트 리딩", contribution: 95,
    items: ["프로젝트 기획 및 방향 설정", "개발-AI-센서-운동학 간 역할 조율", "예선·결선 발표 담당"] },
];

const TECH = ["React Native", "Arduino", "Firebase", "Android Studio", "Amazon S3", "Python", "AI/ML"];

export default function TapePage() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex flex-col h-screen bg-white text-gray-900">

      {/* ── 상단 네비 ── */}
      <header className="fixed inset-x-0 top-0 z-50 h-14 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">
          ← 돌아가기
        </Link>
        <span className="text-xs text-gray-400 font-mono">PROJECT.1 / 3</span>
      </header>

      {/* ── 2-column body ── */}
      <div className="flex flex-1 pt-14 overflow-hidden">

        {/* ── LEFT sidebar (desktop) ── */}
        <aside className="hidden md:flex flex-col w-64 flex-shrink-0 border-r border-gray-100 bg-gray-50/50 overflow-y-auto">
          {/* 프로젝트 헤더 */}
          <div className="p-6 border-b border-gray-100">
            <span className="text-blue-500 text-[10px] font-bold tracking-widest uppercase">PROJECT.1</span>
            <h1 className="text-2xl font-black mt-1 tracking-tight">TAPE</h1>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">센서 기반 AI 러닝 헬스케어 앱</p>
          </div>

          {/* 섹션 목록 */}
          <nav className="flex-1 p-3 space-y-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 ${
                  active === s.id
                    ? "bg-blue-600 shadow-sm text-white"
                    : "text-gray-700 hover:bg-white hover:shadow-sm"
                }`}
              >
                <p className="font-semibold text-sm">{s.label}</p>
                <p className={`text-xs mt-0.5 ${active === s.id ? "text-blue-200" : "text-gray-400"}`}>
                  {s.sublabel}
                </p>
              </button>
            ))}
          </nav>

          {/* 다음 프로젝트 링크 */}
          <div className="p-5 border-t border-gray-100">
            <Link href="/projects/hai" className="flex items-center justify-between text-xs text-gray-400 hover:text-blue-500 transition-colors group">
              <span>다음 프로젝트</span>
              <span className="font-semibold group-hover:translate-x-0.5 transition-transform">H.AI →</span>
            </Link>
          </div>
        </aside>

        {/* ── TOP tabs (mobile) ── */}
        <div className="md:hidden fixed top-14 inset-x-0 z-40 bg-white border-b border-gray-100">
          <div className="flex overflow-x-auto gap-1 p-2 scrollbar-none">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  active === s.id ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT content ── */}
        <main className="flex-1 overflow-y-auto md:pt-0 pt-10 bg-white">
          <div className="max-w-2xl mx-auto px-6 md:px-12 py-10">

            {/* 개요 */}
            {active === "overview" && (
              <section className="space-y-6">
                <div>
                  <SectionLabel>개요</SectionLabel>
                  <h2 className="text-3xl font-black mb-2">센서 기반 AI 러닝 헬스케어 앱</h2>
                  <p className="text-gray-500 text-sm">2025.04 ~ 2025.11 · 팀장 / 6인</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TECH.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image src="/images/tape/tape-app-mockup.jpg" alt="TAPE 앱 목업" width={1200} height={800} className="w-full h-auto" priority />
                </div>
                <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    압력센서가 부착된 인솔로 사용자의 러닝 데이터를 수집하고,
                    AI 모델로 자세와 위험성을 분석해서 <strong>맞춤형 테이핑 솔루션</strong>을 제공하는 헬스케어 서비스 앱입니다.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-2xl font-black text-blue-600">1위</p>
                    <p className="text-xs text-gray-500 mt-1">SW 상상기업 대회</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-2xl font-black text-blue-600">1위</p>
                    <p className="text-xs text-gray-500 mt-1">SW 페스티벌</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-2xl font-black text-blue-600">CES</p>
                    <p className="text-xs text-gray-500 mt-1">2026 라스베이거스</p>
                  </div>
                </div>
              </section>
            )}

            {/* Problem */}
            {active === "problem" && (
              <section className="space-y-6">
                <div>
                  <SectionLabel>Problem</SectionLabel>
                  <h2 className="text-3xl font-black mb-2">러너의 85%가 달리기 상해를 겪고 있습니다</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                    <p className="text-4xl font-black text-blue-700">1,000만+</p>
                    <p className="text-sm text-gray-600 mt-1">국내 러닝 인구</p>
                  </div>
                  <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                    <p className="text-4xl font-black text-red-600">85%</p>
                    <p className="text-sm text-gray-600 mt-1">달리기 상해 경험 비율</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p>기존 러닝 앱들은 <strong>기록 측정 위주</strong>의 기능만 제공하고, 사용자의 관절을 관리하는 기능이 없습니다.</p>
                  <p>관절부상 예방에 가장 좋은 방법 중 하나는 <strong>테이핑</strong>이지만, 올바른 테이핑을 위해서는 사용자의 관절 상태와 운동 습관을 정확히 파악해야 합니다.</p>
                  <p>센서가 달린 인솔로 발에 가해지는 압력을 분석하면 <strong>사용자의 무릎 질환을 예측</strong>할 수 있습니다.</p>
                </div>
              </section>
            )}

            {/* Solution */}
            {active === "solution" && (
              <section className="space-y-6">
                <div>
                  <SectionLabel>Solution</SectionLabel>
                  <h2 className="text-3xl font-black mb-2">인솔 센서 → AI 분석 → 맞춤형 테이핑</h2>
                </div>
                <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-gray-700 leading-relaxed">
                  압력센서가 부착된 인솔로 러닝 데이터를 수집하고, AI 모델로 자세와 위험성을 분석하여 <strong>맞춤형 테이핑 솔루션</strong>을 제공합니다.
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { step: "01", label: "데이터 수집", desc: "Arduino 압력 센서 → 시계열 러닝 데이터 전송" },
                    { step: "02", label: "AI 분석", desc: "21가지 보행 패턴 분류 · 위험도 판별" },
                    { step: "03", label: "솔루션 제공", desc: "맞춤형 테이핑 영상 자동 생성" },
                  ].map((c) => (
                    <div key={c.step} className="p-4 bg-white border border-gray-200 rounded-2xl">
                      <p className="text-xs font-mono text-gray-400 mb-1">{c.step}</p>
                      <p className="font-bold text-sm text-gray-900 mb-1">{c.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">시스템 아키텍처</p>
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                    <Image src="/images/tape/tape-architecture.jpg" alt="TAPE 시스템 아키텍처" width={1200} height={900} className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">센서 하드웨어 개발</p>
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <Image src="/images/tape/tape-analysis2.jpg" alt="센서 하드웨어 개발" width={800} height={600} className="w-full h-64 object-cover" />
                  </div>
                </div>
              </section>
            )}

            {/* 나의 역할 */}
            {active === "role" && (
              <section className="space-y-6">
                <div>
                  <SectionLabel>나의 역할</SectionLabel>
                  <h2 className="text-3xl font-black mb-2">팀장으로서 기획부터 발표까지</h2>
                  <p className="text-sm text-gray-500">조기 풋살 모임에서 스포츠건강학과 친구에게 경험한 테이핑 경험을 서비스화하고 싶다는 생각에서 출발, 다학과 팀을 직접 모집했습니다.</p>
                </div>
                <div className="space-y-3">
                  {ROLE_ITEMS.map((r) => (
                    <div key={r.title} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-900">{r.title}</h4>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${r.contribution}%` }} />
                          </div>
                          <span className="text-xs text-gray-500 font-mono w-6">{r.contribution}</span>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {r.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-gray-600">
                            <span className="text-blue-400 mt-0.5 flex-shrink-0">·</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">앱 AI 분석 화면</p>
                  <div className="flex justify-center">
                    <div className="w-52 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                      <Image src="/images/tape/tape-app-analysis.jpg" alt="앱 AI 분석 화면" width={400} height={800} className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">발표 · 전시 현장</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { src: "/images/tape/tape-presentation.jpg", alt: "전시 부스" },
                      { src: "/images/tape/tape-presntation2.jpg", alt: "팀원 전시" },
                      { src: "/images/tape/tape-presntation3.jpeg", alt: "팀원 단체" },
                    ].map((img) => (
                      <div key={img.src} className="aspect-square rounded-xl overflow-hidden shadow-sm">
                        <Image src={img.src} alt={img.alt} width={400} height={400} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 성과 */}
            {active === "results" && (
              <section className="space-y-6">
                <div>
                  <SectionLabel>성과</SectionLabel>
                  <h2 className="text-3xl font-black mb-2">대내외 수상 2관왕 + CES 2026</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "2025 경기대학교 SW 상상기업 대회", value: "우승 (대상)" },
                    { label: "2025 경희대학교 SW 페스티벌", value: "최우수상 (앱 분야 1등)" },
                    { label: "2026 CES 라스베이거스", value: "연수 참가" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl">
                      <p className="text-sm text-gray-700 font-medium">{r.label}</p>
                      <span className="text-blue-600 font-bold text-xs bg-blue-50 px-3 py-1 rounded-full flex-shrink-0 ml-3">{r.value}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">수상 상장</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: "/images/tape/tape-award-kgu.jpeg", label: "경기대 SW 상상기업 대상" },
                      { src: "/images/tape/tape-award-sw-festival.jpg", label: "SW 페스티벌 최우수상" },
                    ].map((img) => (
                      <div key={img.src} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <Image src={img.src} alt={img.label} width={600} height={800} className="w-full h-auto" />
                        <p className="text-xs text-center text-gray-400 py-2">{img.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">수상 순간</p>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image src="/images/tape/tape-celebration.jpg" alt="TAPE 팀 대상 수상 순간" width={1200} height={675} className="w-full h-auto" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">CES 2026 라스베이거스</p>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image src="/images/tape/tape-ces2026.jpg" alt="CES 2026" width={1200} height={800} className="w-full h-auto" />
                  </div>
                </div>
              </section>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2">{children}</p>;
}

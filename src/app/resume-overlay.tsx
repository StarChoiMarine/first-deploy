"use client";

import Image from "next/image";
import { useState, useRef } from "react";

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
    sections: [
      { label: "개요", id: "tape-hero" },
      { label: "문제", id: "tape-problem" },
      { label: "솔루션", id: "tape-solution" },
      { label: "내가 한 일", id: "tape-role" },
      { label: "성과", id: "tape-result" },
    ],
  },
  {
    id: "hai",
    name: "H.AI",
    subtitle: "Gen AI 기반 디지털 역사 교과서",
    period: "2025.10 ~ 2026.01 · 팀장 / 7인",
    accent: "#16A34A",
    awards: ["LG CNS 부트캠프 대상"],
    sections: [
      { label: "개요", id: "hai-hero" },
      { label: "시연영상", id: "hai-demo" },
      { label: "문제", id: "hai-problem" },
      { label: "솔루션", id: "hai-solution" },
      { label: "내가 한 일", id: "hai-role" },
      { label: "문제 해결", id: "hai-case" },
      { label: "성과", id: "hai-result" },
    ],
  },
  {
    id: "newsbalance",
    name: "NEWSBALANCE",
    subtitle: "AI 기반 유튜브 정치 콘텐츠 분석 플랫폼",
    period: "2025.03 ~ 2026.06 · 팀장 / 7인",
    accent: "#7C3AED",
    awards: ["학술대회 금상 (제1저자)", "SW 저작권 등록"],
    sections: [
      { label: "개요", id: "nb-hero" },
      { label: "문제", id: "nb-problem" },
      { label: "솔루션", id: "nb-solution" },
      { label: "내가 한 일", id: "nb-role" },
      { label: "문제 해결", id: "nb-case" },
      { label: "성과", id: "nb-result" },
    ],
  },
];

// ── 섹션 레이블 헬퍼 ─────────────────────────────────────
function SectionLabel({ label, color, letter, id }: { label: string; color: string; letter: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mt-8 mb-4">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
        style={{ background: color }}
      >
        {letter}
      </div>
      <span className="text-base font-bold text-gray-900">{label}</span>
    </div>
  );
}

// ── 각 프로젝트 상세 콘텐츠 ─────────────────────────────
function TapeContent() {
  const accent = "#2563EB";
  return (
    <div className="text-gray-800 pb-4">

      {/* 프로젝트 히어로 */}
      <div id="tape-hero" className="relative mb-6 pb-5 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-6 items-stretch">
          {/* 왼쪽: 텍스트 */}
          <div className="flex flex-col justify-between relative z-10">
            <div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase mb-3" style={{ color: accent }}>PROJECT 01</p>
              <h3 className="text-5xl font-black text-gray-900 mb-2 leading-tight">TAPE</h3>
              <p className="text-sm text-gray-400 mb-6">2025.04 ~ 2025.11 · 팀장 / 6인</p>
              <p className="text-lg text-gray-600 leading-relaxed border-l-[3px] pl-5" style={{ borderColor: accent }}>
                압력센서 인솔로 러닝 데이터를 수집하고 AI로 자세·위험도를 분석해
                <strong className="text-gray-800"> 맞춤형 테이핑 솔루션</strong>을 제공하는 헬스케어 앱.
                React Native 기반 풀스택 개발 + AI 파인튜닝을 팀장으로 주도했습니다.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2 mt-5">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["React Native", "Arduino", "Firebase", "Amazon S3", "AI Model (21-class)"].map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md border border-gray-200 text-gray-600 bg-gray-50">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["SW 경진대회 대상", "SW페스티벌 최우수상", "CES 2026"].map((a) => (
                  <span key={a} className="text-[11px] px-3 py-1 rounded-full font-semibold text-white" style={{ background: accent }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
          {/* 오른쪽: 이미지 */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <Image src="/images/tape/tape-app-mockup.jpg" alt="TAPE 앱 목업" width={400} height={700} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* 문제 */}
      <SectionLabel label="문제" color={accent} letter="P" id="tape-problem" />
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-red-50 border border-red-100">
          <p className="text-3xl font-black text-red-500 mb-1">85<span className="text-lg">%</span></p>
          <p className="text-sm font-semibold text-gray-700">러너가 달리기 상해 경험</p>
          <p className="text-xs text-gray-500 mt-1">반복되는 부상에도 예방·관리 수단 부재</p>
        </div>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
          <p className="text-3xl font-black text-orange-500 mb-1">0<span className="text-lg">개</span></p>
          <p className="text-sm font-semibold text-gray-700">기존 앱의 관절 보호 기능</p>
          <p className="text-xs text-gray-500 mt-1">기록 측정에만 집중, 부상 예방 기능 없음</p>
        </div>
      </div>

      {/* 솔루션 */}
      <SectionLabel label="솔루션" color={accent} letter="S" id="tape-solution" />
      <p className="text-xl leading-relaxed text-gray-700 mb-5">
        <span style={{ color: accent }} className="font-bold">압력센서 인솔</span>로 실시간 족압 데이터를 수집하고,{" "}
        <span style={{ color: accent }} className="font-bold">AI 보행 패턴 분류 모델</span>이 위험도를 분석해{" "}
        사용자에게 <span style={{ color: accent }} className="font-bold">맞춤형 테이핑 솔루션</span>을 제안합니다.
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
        <Image src="/images/tape/tape-architecture.jpg" alt="시스템 아키텍처" width={1200} height={900} className="w-full h-auto" />
        <p className="text-xs text-center text-gray-400 py-1.5">시스템 아키텍처</p>
      </div>

      {/* 내가 한 것 */}
      <SectionLabel label="내가 한 것" color={accent} letter="R" id="tape-role" />
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "앱 풀스택 개발", contrib: 95, items: ["React Native 앱 구현", "센서 연결 · 데이터 시각화", "서비스 아키텍처 설계"] },
          { label: "AI 모델 파인튜닝", contrib: 70, items: ["보행 패턴 분류 모델 구축", "모델 성능 개선", "AI Agent 기능 추가"] },
          { label: "프로젝트 리딩", contrib: 95, items: ["기획 및 방향 설정", "다학과 팀 모집·조율", "예선·결선 발표 담당"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-black" style={{ color: accent }}>{r.contrib}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full mb-2">
              <div className="h-full rounded-full" style={{ width: `${r.contrib}%`, background: accent }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span style={{ color: accent }}>·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      {/* 활동 사진: 세로2장(좌,중) + 가로1장(우) */}
      <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr 2fr", height: "300px" }}>
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
          <Image src="/images/tape/tape-app-analysis.jpg" alt="앱 분석 결과" width={400} height={800} className="w-full h-full object-contain" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
          <Image src="/images/tape/tape-app-live.jpeg" alt="노트북 센서 연결" width={400} height={800} className="w-full h-full object-contain" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <Image src="/images/tape/tape-analysis2.jpg" alt="현장 시연" width={900} height={600} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 성과 */}
      <SectionLabel label="성과" color={accent} letter="🏆" id="tape-result" />
      {/* 각 상 이름 + 상장 사진 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <div className="p-3 rounded-xl border text-center bg-blue-50 border-blue-200 mb-2">
            <p className="text-xs font-black text-gray-800">SW 상상기업 대상</p>
            <p className="text-[10px] text-gray-500 mt-0.5">경기대학교 SW중심대학</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/tape/tape-award-kgu.jpeg" alt="경기대 대상" width={600} height={800} className="w-full h-auto" />
          </div>
        </div>
        <div>
          <div className="p-3 rounded-xl border text-center bg-blue-50 border-blue-200 mb-2">
            <p className="text-xs font-black text-gray-800">SW페스티벌 최우수상</p>
            <p className="text-[10px] text-gray-500 mt-0.5">경희대학교 SW 페스티벌</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/tape/tape-award-sw-festival.jpg" alt="SW페스티벌 최우수상" width={600} height={800} className="w-full h-auto" />
          </div>
        </div>
        <div>
          <div className="p-3 rounded-xl border text-center bg-sky-50 border-sky-200 mb-2">
            <p className="text-xs font-black text-gray-800">CES 2026 연수</p>
            <p className="text-[10px] text-gray-500 mt-0.5">라스베이거스 현지 연수</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <Image src="/images/tape/tape-ces2026.jpg" alt="CES 2026" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* 전시/발표 현장 */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { src: "/images/tape/tape-presentation.jpg", alt: "전시 부스" },
          { src: "/images/tape/tape-presntation2.jpg", alt: "팀원 전시" },
          { src: "/images/tape/tape-presntation3.jpeg", alt: "팀원 단체" },
        ].map((img) => (
          <div key={img.src} className="aspect-video rounded-xl overflow-hidden">
            <Image src={img.src} alt={img.alt} width={400} height={300} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/tape/tape-swfestival-celebration.jpg" alt="SW페스티벌 수상" width={800} height={600} className="w-full h-auto" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/tape/tape-celebration.jpg" alt="수상 순간" width={800} height={600} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

function HaiContent() {
  const accent = "#16A34A";
  return (
    <div className="text-gray-800 pb-4">

      {/* 프로젝트 히어로 */}
      <div id="hai-hero" className="relative mb-6 pb-5 border-b border-gray-100">
        {/* 제목 영역 */}
        <div className="grid grid-cols-2 gap-6 items-stretch mb-4">
          <div className="flex flex-col">
            <p className="text-xs font-mono tracking-[0.25em] uppercase mb-3" style={{ color: accent }}>PROJECT 02</p>
            <h3 className="text-5xl font-black text-gray-900 mb-2 leading-tight">H.AI</h3>
            <p className="text-sm text-gray-400 mb-4">2025.10 ~ 2026.01 · 팀장 / 7인 · LG CNS AM Inspire 3기</p>
            <p className="text-lg text-gray-600 leading-relaxed border-l-[3px] pl-5 mb-4" style={{ borderColor: accent }}>
              지도 위를 움직이는 캐릭터, 역사 인물과의 AI 대화, 실시간 토론까지 —
              <strong className="text-gray-800"> 학생 참여 중심</strong>의 역사 수업을 만드는 Gen AI 플랫폼.
              팀장으로 기획·개발을 주도했습니다.
            </p>
            {/* 앱 목업 — 설명 바로 아래 */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-1">
              <Image src="/images/hai/hai-app-mockup.png" alt="AI 인물 대화 · 지도 시각화" width={900} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
          {/* 오른쪽: 일러스트 */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-[#0d2b2b] flex items-center">
            <Image src="/images/hai/hai-hero-illustration.png" alt="H.AI 일러스트" width={400} height={400} className="w-full h-auto" />
          </div>
        </div>
        {/* 기술스택 + 수상 */}
        <div>
          <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["AWS Bedrock", "OpenSearch", "RAG", "Django", "React", "STT/TTS", "Tool Calling"].map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md border border-gray-200 text-gray-600 bg-gray-50">{t}</span>
            ))}
          </div>
          <span className="text-[11px] px-3 py-1 rounded-full font-semibold text-white" style={{ background: accent }}>LG CNS 부트캠프 대상</span>
        </div>
      </div>

      {/* 시연 영상 */}
      <SectionLabel label="시연 영상" color={accent} letter="▶" id="hai-demo" />
      <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100" style={{ aspectRatio: "16/9" }}>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/zCJwSDtwSm8"
          title="H.AI 시연 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* 문제 */}
      <SectionLabel label="문제" color={accent} letter="P" id="hai-problem" />
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { stat: "텍스트", unit: "중심", desc: "단방향 강의식 수업", color: "bg-red-50 border-red-100 text-red-500" },
          { stat: "낮은", unit: "참여도", desc: "수업 집중력 저하", color: "bg-orange-50 border-orange-100 text-orange-500" },
          { stat: "부재", unit: "한 상호작용", desc: "학생 간 토론·협력 기회 없음", color: "bg-yellow-50 border-yellow-100 text-yellow-600" },
        ].map((p) => (
          <div key={p.stat} className={`p-3 rounded-xl border ${p.color.split(" ")[0]} ${p.color.split(" ")[1]}`}>
            <p className={`text-xl font-black ${p.color.split(" ")[2]}`}>{p.stat}<span className="text-sm"> {p.unit}</span></p>
            <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
      {/* 솔루션 */}
      <SectionLabel label="솔루션" color={accent} letter="S" id="hai-solution" />
      <p className="text-xl leading-relaxed text-gray-700 mb-5">
        교과서 내용을 <span style={{ color: accent }} className="font-bold">지도 위에서 동적으로 시각화</span>하고,{" "}
        Gen AI로 역사 인물과 <span style={{ color: accent }} className="font-bold">직접 대화하며</span> 배울 수 있습니다.{" "}
        AI 사회자가 진행하는 <span style={{ color: accent }} className="font-bold">실시간 토론방</span>에서 자유롭게 토론하고 결과를 자동 요약합니다.
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-3">
        <Image src="/images/hai/hai-features.png" alt="핵심 기능 3가지" width={1200} height={500} className="w-full h-auto" />
      </div>
      {/* 실시간 토론 다이어그램 */}
      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
        <Image src="/images/hai/hai-debate-diagram.png" alt="실시간 온라인 토론" width={1200} height={500} className="w-full h-auto" />
        <p className="text-xs text-center text-gray-400 py-1">실시간 온라인 토론 — AI 사회자 · 결과 자동 요약</p>
      </div>

      {/* 내가 한 것 */}
      <SectionLabel label="내가 한 것" color={accent} letter="R" id="hai-role" />
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "프로젝트 리딩", contrib: 70, items: ["서비스 방향 및 핵심 기능 정의", "GitHub Projects 일정 관리", "최종 발표 주도"] },
          { label: "AI Agent 구현", contrib: 60, items: ["Tool Calling 구조 설계", "내부 API 호출 로직", "대화형 Agent 흐름 정의"] },
          { label: "RAG 구축 및 테스트", contrib: 50, items: ["Bedrock + OpenSearch 구성", "환각 감소 품질 테스트", "시나리오 응답 검증"] },
          { label: "사용자 테스트 주도", contrib: 80, items: ["초등학생 12명 시범 기획", "진입장벽 파악", "우선순위 재조정"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-black" style={{ color: accent }}>{r.contrib}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full mb-2">
              <div className="h-full rounded-full" style={{ width: `${r.contrib}%`, background: accent }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span style={{ color: accent }}>·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { src: "/images/hai/hai-app-screen.png", alt: "AI Agent 구현", label: "AI Agent 구현" },
          { src: "/images/hai/hai-rag-diagram.png", alt: "RAG 파이프라인", label: "RAG 파이프라인" },
          { src: "/images/hai/hai-presentation.png", alt: "최종 발표", label: "최종 발표" },
        ].map((img) => (
          <div key={img.label} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3 flex flex-col">
            <div className="aspect-video overflow-hidden rounded-lg flex-1">
              <Image src={img.src} alt={img.alt} width={600} height={338} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-center text-gray-400 mt-2">{img.label}</p>
          </div>
        ))}
      </div>

      {/* 문제 해결 사례 */}
      <SectionLabel label="문제 해결 사례" color={accent} letter="💡" id="hai-case" />
      {/* 상황 + 학생 사진 */}
      <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 mb-4">
        <p className="text-sm font-black uppercase tracking-wider mb-3" style={{ color: accent }}>🔍 상황</p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          마지막 스프린트를 앞두고 초등학교 저학년 <strong className="text-gray-900">12명을 대상으로 시범 배포</strong>를 진행했을 때,
          UI/UX가 익숙하지 않아 기능 호출이 어렵고 <strong className="text-gray-900">타자 입력에 불편함</strong>을 겪는 두 가지 문제가 발생했습니다.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
            <Image src="/images/hai/hai-usertest-classroom.png" alt="호연초 수업 현장" width={600} height={400} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
            <Image src="/images/hai/hai-usertest-group.png" alt="호연초 단체사진" width={600} height={400} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* 해결 1: Tool-calling */}
      <div className="flex gap-3 items-start mb-3">
        <span className="font-black flex-shrink-0 text-xl leading-tight" style={{ color: accent }}>→</span>
        <p className="text-base font-semibold text-gray-800 leading-snug">
          Tool-calling을 활용해 <span style={{ color: accent }}>자연어 명령으로 시스템 기능 호출</span>이 가능하도록 개선
        </p>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3 mb-4">
        <Image src="/images/hai/hai-tool-calling.png" alt="Tool Calling 구조" width={600} height={300} className="w-full h-auto" />
        <p className="text-xs text-center text-gray-400 mt-1">Tool Calling 구조</p>
      </div>
      {/* 해결 2: STT/TTS */}
      <div className="flex gap-3 items-start mb-3">
        <span className="font-black flex-shrink-0 text-xl leading-tight" style={{ color: accent }}>→</span>
        <p className="text-base font-semibold text-gray-800 leading-snug">
          AI 인물과의 대화에 <span style={{ color: accent }}>STT/TTS 도입</span>으로 타자 없이 말로 대화할 수 있게 함
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
          <Image src="/images/hai/hai-stt-diagram.png" alt="STT 음성 인식" width={600} height={300} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 mt-1">STT 음성 인식</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
          <Image src="/images/hai/hai-tts-diagram.png" alt="TTS 음성 출력" width={600} height={300} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 mt-1">TTS 음성 출력</p>
        </div>
      </div>

      {/* 성과 */}
      <SectionLabel label="성과" color={accent} letter="🏆" id="hai-result" />
      <div className="grid grid-cols-2 gap-4 items-start">
        {/* 왼쪽: 상장 */}
        <div>
          <div className="p-3 rounded-xl border text-center bg-green-50 border-green-200 mb-2">
            <p className="text-sm font-black text-green-700">LG CNS AM Inspire 3기 대상</p>
            <p className="text-xs text-gray-500 mt-0.5">울산 호연초등학교 · 현장 테스트 완료</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/hai/hai-award-certificate.png" alt="대상 상장" width={600} height={800} className="w-full h-auto" />
          </div>
        </div>
        {/* 오른쪽: 팀 단체사진 */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/hai/hai-award-team.png" alt="수상 팀" width={1200} height={800} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 py-1">LG CNS AM Inspire 3기 최종프로젝트 대상 팀 🏆</p>
        </div>
      </div>
    </div>
  );
}

function NewsbalanceContent() {
  const accent = "#7C3AED";
  return (
    <div className="text-gray-800 pb-4">

      {/* 프로젝트 히어로 */}
      <div id="nb-hero" className="relative mb-6 pb-5 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-6 items-stretch">
          {/* 왼쪽: 텍스트 */}
          <div className="flex flex-col justify-between relative z-10">
            <div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase mb-3" style={{ color: accent }}>PROJECT 03</p>
              <h3 className="text-4xl font-black text-gray-900 mb-2 leading-tight">NEWSBALANCE</h3>
              <p className="text-sm text-gray-400 mb-6">2025.03 ~ 2026.06 · 팀장 / 7인 · 논문 제1저자</p>
              <p className="text-lg text-gray-600 leading-relaxed border-l-[3px] pl-5" style={{ borderColor: accent }}>
                유튜브 영상의 <strong className="text-gray-800">편향도와 정확도를 AI로 분석</strong>하고
                균형잡힌 콘텐츠와 근거 기사를 함께 제공합니다.
                논문 제1저자 · 팀장으로 기획부터 배포까지 주도했습니다.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2 mt-5">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Flask", "KcBERT", "Elasticsearch", "PostgreSQL", "Spring Boot", "React", "AWS", "yt-dlp"].map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-md border border-gray-200 text-gray-600 bg-gray-50">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["학술대회 금상 (제1저자)", "SW 저작권 등록"].map((a) => (
                  <span key={a} className="text-[11px] px-3 py-1 rounded-full font-semibold text-white" style={{ background: accent }}>{a}</span>
                ))}
              </div>
            </div>
          </div>
          {/* 오른쪽: 일러스트 + 앱 화면 세로 배치 */}
          <div className="flex flex-col gap-3">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Image src="/images/newsbalance/nb-concept-illustration.png" alt="NEWSBALANCE 컨셉 일러스트" width={600} height={400} className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Image src="/images/newsbalance/nb-screen.png" alt="NEWSBALANCE 앱 화면" width={600} height={400} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* 문제 */}
      <SectionLabel label="문제" color={accent} letter="P" id="nb-problem" />
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-red-50 border border-red-100">
          <p className="text-3xl font-black text-red-500 mb-1">53<span className="text-lg">%</span></p>
          <p className="text-sm font-semibold text-gray-700">유튜브로 뉴스를 소비</p>
          <p className="text-xs text-gray-500 mt-1">국내 유튜브 뉴스 소비율 (2023년 기준)</p>
        </div>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
          <p className="text-xl font-black text-orange-500 mb-1">확증편향 심화</p>
          <p className="text-sm font-semibold text-gray-700">알고리즘 기반 추천</p>
          <p className="text-xs text-gray-500 mt-1">편향된 콘텐츠 반복 노출로 정치 양극화 가속</p>
        </div>
      </div>

      {/* 솔루션 */}
      <SectionLabel label="솔루션" color={accent} letter="S" id="nb-solution" />
      <p className="text-xl leading-relaxed text-gray-700 mb-5">
        유튜브 자막을 <span style={{ color: accent }} className="font-bold">KcBERT 기반 편향도 AI</span>로 분석하고,{" "}
        <span style={{ color: accent }} className="font-bold">균형잡힌 콘텐츠와 근거 기사를 자동 제공</span>하여{" "}
        사용자가 스스로 신뢰도를 판단할 수 있게 돕습니다.
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
        <Image src="/images/newsbalance/nb-system-archi.png" alt="시스템 아키텍처" width={1200} height={600} className="w-full h-auto" />
      </div>

      {/* 내가 한 것 */}
      <SectionLabel label="내가 한 것" color={accent} letter="R" id="nb-role" />
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "프로젝트 리딩", contrib: 90, items: ["기획 및 개발과정 주도", "논문 작성·투고 (제1저자)", "최종 발표"] },
          { label: "데이터 수집 · 모델 학습", contrib: 90, items: ["KcBERT 파인튜닝", "yt-dlp 자막 수집 구조", "GPT 1차 라벨링"] },
          { label: "시범 배포 주도", contrib: 70, items: ["배포 일정·사용자 모집", "AWS 기반 서비스 배포"] },
          { label: "문제 해결", contrib: 90, items: ["데이터 구축 속도 5배↑", "모델 정확도 기존 대비 +9%"] },
        ].map((r) => (
          <div key={r.label} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold text-gray-700">{r.label}</p>
              <span className="text-xs font-black" style={{ color: accent }}>{r.contrib}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full mb-2">
              <div className="h-full rounded-full" style={{ width: `${r.contrib}%`, background: accent }} />
            </div>
            <ul className="space-y-0.5">
              {r.items.map((i) => <li key={i} className="text-xs text-gray-500 flex gap-1"><span style={{ color: accent }}>·</span>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
          <Image src="/images/newsbalance/nb-kcbert-diagram.png" alt="KcBERT" width={600} height={200} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 mt-1">KcBERT 편향도 분류 모델</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
          <Image src="/images/newsbalance/nb-model-results.png" alt="모델 결과" width={600} height={200} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 mt-1">파인튜닝 결과 — F1 Macro 0.783</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/newsbalance/nb-team-working.png" alt="팀 작업" width={600} height={400} className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/newsbalance/nb-team-exhibition2.png" alt="캡스톤 전시" width={600} height={400} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 문제 해결 사례 */}
      <SectionLabel label="문제 해결 사례" color={accent} letter="💡" id="nb-case" />
      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mb-3">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">🔍 상황</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          편향도 5단계 분류 모델 개발 과정에서 <strong className="text-gray-700">20만 개 이상의 자막 데이터</strong>가 필요했지만,
          수작업 중심의 수집·라벨링으로 속도가 느리고 기준이 모호해 일관성 유지가 어려웠습니다.
        </p>
      </div>
      <div className="space-y-2 mb-3">
        {[
          "yt-dlp 기반 자동 수집 구조 도입 — 유튜브 자막 확보 과정 자동화",
          "GPT Assistant 기반 1차 라벨링 적용 — 검수 부담 대폭 감소 및 기준 일관성 확보",
        ].map((sol) => (
          <div key={sol} className="flex gap-3 text-sm">
            <span className="font-black flex-shrink-0 text-base" style={{ color: accent }}>→</span>
            <span className="text-gray-700">{sol}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-5">
        {["데이터 구축 속도 5배↑", "모델 정확도 기존 대비 +9%"].map((r) => (
          <span key={r} className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: accent }}>
            ✓ {r}
          </span>
        ))}
      </div>

      {/* 성과 */}
      <SectionLabel label="성과" color={accent} letter="🏆" id="nb-result" />
      {/* 상 이름 + 상장 사진 */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="p-3 rounded-xl border text-center bg-purple-50 border-purple-200 mb-2">
            <p className="text-xl font-black text-purple-600">금상</p>
            <p className="text-xs text-gray-500 mt-0.5">한국정보기술학회 우수논문상 (제1저자)</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/newsbalance/nb-award-kiit.png" alt="금상 상장" width={600} height={800} className="w-full h-auto" />
          </div>
        </div>
        <div>
          <div className="p-3 rounded-xl border text-center bg-purple-50 border-purple-200 mb-2">
            <p className="text-xl font-black text-purple-600">은상</p>
            <p className="text-xs text-gray-500 mt-0.5">경기대학교 심화캡스톤 디자인</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image src="/images/newsbalance/nb-award-capstonе.jpeg" alt="은상 상장" width={600} height={800} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="p-3 rounded-xl border text-center bg-purple-50 border-purple-200 mb-3">
        <p className="text-sm font-black text-purple-600">SW 저작권 등록</p>
        <p className="text-xs text-gray-500 mt-0.5">NewsBalance · 2025.07</p>
      </div>
      {/* 발표 사진 */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/newsbalance/nb-presentation1.png" alt="발표 현장" width={600} height={800} className="w-full h-auto" />
          <p className="text-xs text-center text-gray-400 py-1">논문 발표 현장</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image src="/images/newsbalance/nb-presentation2.png" alt="발표 현장 2" width={600} height={800} className="w-full h-auto" />
        </div>
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleProjectSelect = (id: string) => {
    setSelectedProject(id);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const container = scrollContainerRef.current;
    if (!el || !container) return;
    const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 16;
    container.scrollTo({ top, behavior: "smooth" });
  };;

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
      <section className="-mx-6 sm:-mx-10">
        <div className="px-6 sm:px-10 mb-4">
          <h3 className="text-2xl font-semibold text-white pb-3 border-b border-white/20">Key Projects</h3>
        </div>

        {/* 카드 — 흰 배경, 좌우 분할, 고정 높이 */}
        <div className="bg-white sm:rounded-2xl overflow-hidden shadow-2xl flex" style={{ height: "calc(100vh - 3rem)" }}>

          {/* LEFT: 프로젝트 목록 */}
          <div className="w-56 flex-shrink-0 border-r border-gray-100 bg-gray-50/80 flex flex-col">
            <div className="p-5 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects</p>
            </div>
            <nav className="flex-1 p-3 space-y-1">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProjectSelect(p.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 ${
                    selectedProject === p.id
                      ? "bg-white shadow-sm border border-gray-200"
                      : "hover:bg-white/70"
                  }`}
                >
                  <p className={`text-base font-black ${selectedProject === p.id ? "text-gray-900" : "text-gray-500"}`}
                     style={selectedProject === p.id ? { color: p.accent } : undefined}>
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">{p.subtitle}</p>
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT: 선택된 프로젝트 상세 */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            {/* 상단 헤더 (sticky) */}
            <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
              <div className="px-6 py-2 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: selected.accent }}>KEY PROJECT</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-black text-gray-900">{selected.name}</span>
                    <span className="text-xs text-gray-400 truncate hidden sm:block">{selected.subtitle}</span>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  {selected.awards.map((a) => (
                    <span key={a} className="text-[10px] px-2 py-0.5 rounded-full font-medium border"
                      style={{ color: selected.accent, borderColor: selected.accent + "44", background: selected.accent + "11" }}>
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              {/* 섹션 점프 버튼 */}
              <div className="px-6 pb-2 flex gap-1.5 overflow-x-auto">
                {selected.sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="flex-shrink-0 text-[11px] font-medium px-3 py-0.5 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors cursor-pointer"
                  >
                    {s.label}
                  </button>
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

      {/* ── Contact ── */}
      <section className="-mx-6 sm:-mx-10 mt-px">
        <div className="px-6 sm:px-10 py-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-2">Contact</h3>
          <p className="text-white/60 text-sm mb-8">함께 만들 수 있는 것이 있다면 편하게 연락주세요</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={generalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <span className="text-lg">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${generalInfo.email}`}
              className="flex items-center gap-2.5 px-8 py-3.5 border-2 border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>{generalInfo.email}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

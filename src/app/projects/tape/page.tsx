import Link from "next/link";

const ROLE_ITEMS = [
  {
    title: "앱 풀스택 개발",
    items: ["React Native 기반 앱 구현", "센서 연결 및 실시간 데이터 시각화", "서비스 아키텍처 설계", "UI/UX 흐름 개선"],
    contribution: 95,
  },
  {
    title: "AI 모델 파인튜닝",
    items: ["오픈 데이터를 활용한 사용자 보행 패턴 분류 모델 구축", "모델 성능 개선과 정확도 향상을 위한 파인튜닝", "AI Agent 기능 추가"],
    contribution: 70,
  },
  {
    title: "프로젝트 리딩",
    items: ["프로젝트 기획 및 방향 설정", "개발-AI-센서-운동학 간 역할 조율", "예선·결선 발표 담당"],
    contribution: 95,
  },
];

const RESULTS = [
  { label: "2025 경기대학교 SW 상상기업 대회", value: "우승 (대상)" },
  { label: "2025 경희대학교 SW 페스티벌", value: "최우수상 (앱 분야 1등)" },
  { label: "2026 CES 라스베이거스", value: "연수 참가" },
];

const TECH = ["React Native", "Arduino", "Firebase", "Android Studio", "Amazon S3", "Python", "AI/ML"];

export default function TapePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 고정 상단 네비 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
            <span>←</span>
            <span>돌아가기</span>
          </Link>
          <span className="text-xs text-gray-400 font-mono">PROJECT.1 / 3</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">PROJECT.1</p>
          <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-gray-900 mb-3">TAPE</h1>
          <p className="text-xl text-gray-500 font-light mb-8">센서 기반 AI 러닝 헬스케어 앱</p>
          <div className="flex flex-wrap gap-2.5">
            <Tag color="blue">2025.04 ~ 2025.11</Tag>
            <Tag color="gray">팀장 / 6인</Tag>
            <Tag color="green">SW 경진대회 대상</Tag>
            <Tag color="green">SW페스티벌 최우수상</Tag>
            <Tag color="blue">CES 2026</Tag>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {TECH.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{t}</span>
            ))}
          </div>

          {/* ── 앱 목업 이미지 ── */}
          <div className="mt-10">
            <ImagePlaceholder
              filename="/images/tape/tape-app-mockup.jpg"
              label="앱 목업 사진 — 스마트폰 TAPE UI 화면 + 아두이노 압력센서 인솔 (PDF p.3 왼쪽)"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-14">
        {/* Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">러너의 85%가 달리기 상해를 겪고 있습니다</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <StatCard number="1,000만+" label="국내 러닝 인구" color="blue" />
            <StatCard number="85%" label="달리기 상해 경험 비율" color="red" />
          </div>
          <div className="mt-6 p-6 bg-red-50 border border-red-100 rounded-2xl">
            <p className="text-gray-700 leading-relaxed">
              기존 러닝 앱들은 <strong>기록 측정 위주</strong>의 기능만 제공하고, 사용자의 관절을 관리하는 기능이 없습니다.
              관절부상 예방에 가장 좋은 방법 중 하나는 <strong>테이핑</strong>이지만,
              올바른 테이핑을 위해서는 사용자의 관절 상태와 운동 습관을 정확히 파악해야 합니다.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">인솔 센서 → AI 분석 → 맞춤형 테이핑 솔루션</h2>
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl mb-6">
            <p className="text-gray-700 leading-relaxed">
              압력센서가 부착된 인솔로 사용자의 러닝 데이터를 수집하고,
              AI 모델로 자세와 위험성을 분석해서 <strong>맞춤형 테이핑 솔루션</strong>을 제공합니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <FlowCard step="01" label="데이터 수집" desc="Arduino 압력 센서 → 시계열 러닝 데이터 전송" />
            <FlowCard step="02" label="AI 분석" desc="21가지 보행 패턴 분류 · 위험도 판별" />
            <FlowCard step="03" label="솔루션 제공" desc="맞춤형 테이핑 영상 자동 생성 · Amazon S3 제공" />
          </div>

          {/* ── 시스템 아키텍처 다이어그램 ── */}
          <div className="mt-6">
            <ImagePlaceholder
              filename="/images/tape/tape-architecture.jpg"
              label="시스템 아키텍처 다이어그램 — Arduino → Firebase → React Native(AI 분석) → Amazon S3 (PDF p.3 오른쪽)"
            />
          </div>
        </section>

        {/* Role */}
        <section>
          <SectionLabel>나의 역할</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">팀장으로서 기획부터 발표까지</h2>
          <div className="space-y-5">
            {ROLE_ITEMS.map((r) => (
              <div key={r.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{r.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${r.contribution}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{r.contribution}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── 역할 관련 사진 2장 ── */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <ImagePlaceholder
              filename="/images/tape/tape-app-analysis.jpg"
              label="앱 분석 화면 — 센서 히트맵 + AI 분석 결과 스크린샷 (PDF p.4 가운데)"
              className="min-h-48"
            />
            <ImagePlaceholder
              filename="/images/tape/tape-presentation.jpg"
              label="발표/전시 현장 사진 — 경진대회 발표 & 부스 전시 (PDF p.4 오른쪽)"
              className="min-h-48"
            />
          </div>

          <div className="mt-5 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>조기 풋살 모임</strong>에서 스포츠건강학과 친구에게 경험한 테이핑 경험을 서비스화하고 싶다는 생각에서 출발.
              스포츠건강학과, 전자공학부, 컴퓨터공학부, 경영학과 학생들을 모집해 팀을 구성했습니다.
            </p>
          </div>
        </section>

        {/* Results */}
        <section>
          <SectionLabel>성과</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">대내외 수상 2관왕 + CES 2026</h2>
          <div className="space-y-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 transition-colors">
                <p className="text-gray-700 font-medium">{r.label}</p>
                <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{r.value}</span>
              </div>
            ))}
          </div>

          {/* ── 수상 사진 3열 ── */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">교내 SW 대상</p>
              <ImagePlaceholder
                filename="/images/tape/tape-award-kgu.jpg"
                label="경기대 SW 상상기업 대상 상장 + 수상 단체사진 (PDF p.5 왼쪽)"
                className="min-h-52"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">교외 SW 페스티벌 최우수상</p>
              <ImagePlaceholder
                filename="/images/tape/tape-award-sw-festival.jpg"
                label="SW페스티벌 최우수상 상장 + 팀원 사진 (PDF p.5 가운데)"
                className="min-h-52"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">CES 2026 견학</p>
              <ImagePlaceholder
                filename="/images/tape/tape-ces2026.jpg"
                label="CES 2026 라스베이거스 컨벤션센터 + 실리콘밸리 견학 사진 (PDF p.5 오른쪽)"
                className="min-h-52"
              />
            </div>
          </div>
        </section>

        {/* 다음 프로젝트 */}
        <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← Resume</Link>
          <Link href="/projects/hai"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            다음 프로젝트: H.AI <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ImagePlaceholder({ filename, label, className = "" }: { filename: string; label: string; className?: string }) {
  return (
    <div className={`border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 w-full ${className}`}>
      <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <code className="text-xs text-blue-500 text-center break-all">{filename}</code>
      <p className="text-xs text-gray-400 text-center">{label}</p>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color: "blue" | "green" | "gray" | "red" }) {
  const styles = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-100 text-red-700",
  };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[color]}`}>{children}</span>;
}

function StatCard({ number, label, color }: { number: string; label: string; color: "blue" | "red" }) {
  const bg = color === "blue" ? "bg-blue-50 border-blue-100" : "bg-red-50 border-red-100";
  const text = color === "blue" ? "text-blue-700" : "text-red-700";
  return (
    <div className={`p-6 rounded-2xl border ${bg}`}>
      <p className={`text-4xl font-black ${text}`}>{number}</p>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}

function FlowCard({ step, label, desc }: { step: string; label: string; desc: string }) {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-2xl">
      <p className="text-xs font-mono text-gray-400 mb-2">{step}</p>
      <p className="font-bold text-gray-900 mb-1">{label}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">{children}</p>
  );
}

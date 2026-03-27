import Link from "next/link";

const ROLE_ITEMS = [
  {
    title: "프로젝트 리딩",
    items: ["프로젝트 기획 및 개발과정 주도", "논문 작성 및 투고 (제1저자)", "최종 발표"],
    contribution: 90,
  },
  {
    title: "데이터 수집 및 모델 학습",
    items: ["KcBERT 기반 편향도 분류 모델 파인튜닝", "데이터 수집·전처리 파이프라인 구축", "GPT Assistant 기반 1차 라벨링 구조 설계", "yt-dlp 기반 자동 수집 구조로 유튜브 자막 확보 자동화"],
    contribution: 90,
  },
  {
    title: "시범 배포 주도",
    items: ["시범 배포 일정과 사용자 모집", "AWS 기반 서비스 배포"],
    contribution: 70,
  },
];

const RESULTS = [
  { label: "경기대학교 심화캡스톤 디자인", value: "은상" },
  { label: "2025 한국정보기술학회 하계 논문경진대회", value: "금상 (제1저자)" },
  { label: "SW 저작권 등록", value: "NewsBalance, 2025.07" },
];

const TECH = ["Python", "Flask", "KcBERT", "PostgreSQL", "Elasticsearch", "Spring Boot", "React", "AWS", "GPT Assistant"];

export default function NewsbalancePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 고정 상단 네비 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
            <span>←</span>
            <span>돌아가기</span>
          </Link>
          <span className="text-xs text-gray-400 font-mono">PROJECT.3 / 3</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 bg-gradient-to-br from-purple-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-purple-600 text-xs font-bold tracking-widest uppercase mb-4">PROJECT.3</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900 mb-3">NEWSBALANCE</h1>
          <p className="text-xl text-gray-500 font-light mb-8">AI 기반 유튜브 정치 콘텐츠 편향도 분석 플랫폼</p>
          <div className="flex flex-wrap gap-2.5">
            <Tag color="purple">2025.03 ~ 2026.06</Tag>
            <Tag color="gray">팀장 / 7인</Tag>
            <Tag color="purple">학술대회 금상 (제1저자)</Tag>
            <Tag color="purple">SW 저작권 등록</Tag>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {TECH.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{t}</span>
            ))}
          </div>

          {/* ── 히어로 이미지 2장 ── */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <ImagePlaceholder
              filename="/images/newsbalance/newsbalance-illustration.jpg"
              label="뉴스 AI 로봇 일러스트 — 돋보기 든 로봇이 뉴스 분석하는 이미지 (PDF p.11 왼쪽)"
              className="min-h-64"
            />
            <ImagePlaceholder
              filename="/images/newsbalance/newsbalance-demo-laptop.jpg"
              label="서비스 데모 화면 — 랩탑에 표시된 NewsBalance 플랫폼 UI (PDF p.11 오른쪽)"
              className="min-h-64"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-14">
        {/* Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">유튜브가 정보 편향의 온상이 되고 있습니다</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <StatCard number="53%" label="국내 유튜브 뉴스 소비율 (2023)" color="purple" />
            <StatCard number="확증편향" label="알고리즘이 특화된 콘텐츠만 노출" color="red" />
            <StatCard number="신뢰 하락" label="근거없는 정보의 무분별한 확산" color="red" />
          </div>
          <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
            <p className="text-gray-700 leading-relaxed">
              유튜브 알고리즘의 특성상 소비자에게 <strong>특화된 콘텐츠만 노출</strong>되어 확증편향이 심화되고,
              1인 미디어를 통한 근거없는 정보의 무분별한 확산으로 <strong>유튜브 콘텐츠의 신뢰도가 하락</strong>하고 있습니다.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">AI가 편향을 분석하고 균형있는 정보를 제공합니다</h2>
          <div className="p-6 bg-purple-50 border border-purple-100 rounded-2xl mb-6">
            <p className="text-gray-700 leading-relaxed">
              유튜브 콘텐츠의 자막을 편향도 AI 모델로 분석하여 사용자에게 콘텐츠를 균형있게 전달하고,
              <strong>관련기사 자동 제공 기능</strong>을 추가하여 사용자의 신뢰도 판단을 돕습니다.
            </p>
          </div>

          {/* Architecture */}
          <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">시스템 아키텍처</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">Backend</p>
                <div className="space-y-2">
                  <ArchItem>Flask · KcBERT 파인튜닝 편향도 분석</ArchItem>
                  <ArchItem>Naver Open API 관련 기사 검색</ArchItem>
                  <ArchItem>Elasticsearch 자료 검색 시스템</ArchItem>
                  <ArchItem>PostgreSQL 데이터 저장</ArchItem>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2 text-xs uppercase tracking-wide">AI Pipeline</p>
                <div className="space-y-2">
                  <ArchItem>yt-dlp 자막 자동 수집</ArchItem>
                  <ArchItem>GPT Assistant 1차 라벨링</ArchItem>
                  <ArchItem>실시간 모델 자동 학습 시스템</ArchItem>
                  <ArchItem>CSV 저장 후 재학습 루프</ArchItem>
                </div>
              </div>
            </div>

            {/* ── 아키텍처 다이어그램 ── */}
            <div className="mt-5">
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-architecture.jpg"
                label="시스템 아키텍처 다이어그램 — Backend(Flask/KcBERT/Elasticsearch) + Frontend(React) 전체 흐름 (PDF p.12 오른쪽)"
              />
            </div>
          </div>

          {/* 문제 해결 사례 */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">핵심 문제 해결: 데이터 수집 병목 해소</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              편향도 5단계 분류모델 개발 과정에서 가장 큰 병목은 자막 데이터 수집과 라벨링 과정의 비효율이었습니다.
              20만 개 이상의 데이터가 필요했지만 수작업 중심이라 속도가 느렸고, 라벨링 기준이 모호해 일관성 유지가 어려웠습니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-xs font-bold text-purple-700 mb-1">해결 1</p>
                <p className="text-xs text-gray-600">yt-dlp 기반 자동 수집 구조 도입으로 유튜브 자막 확보 자동화</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-xs font-bold text-purple-700 mb-1">해결 2</p>
                <p className="text-xs text-gray-600">GPT Assistant 기반 1차 라벨링으로 검수 부담 대폭 절감</p>
              </div>
            </div>

            {/* ── KcBERT + 자동학습 다이어그램 ── */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-kcbert-diagram.jpg"
                label="KcBERT 모델 다이어그램 — 요약문장 → KcBERT 인코더 → softmax 5단계 분류 (PDF p.13 왼쪽)"
                className="min-h-40"
              />
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-autolearn-diagram.jpg"
                label="실시간 모델 자동 학습 시스템 — 자막추출 → GPT 라벨링 → CSV → 재학습 루프 (PDF p.13 오른쪽)"
                className="min-h-40"
              />
            </div>

            <div className="flex gap-6 pt-4 border-t border-gray-100">
              <div>
                <p className="text-2xl font-black text-purple-600">5×</p>
                <p className="text-xs text-gray-500">데이터 구축 속도 개선</p>
              </div>
              <div>
                <p className="text-2xl font-black text-purple-600">+9%</p>
                <p className="text-xs text-gray-500">모델 정확도 향상</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role */}
        <section>
          <SectionLabel>나의 역할</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">민감한 주제를 설득해서 시작한 프로젝트</h2>
          <div className="mb-5 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
            <p className="text-sm text-amber-900 leading-relaxed">
              서비스 기획 단계에서 민감한 주제라는 점과 실현 가능성에 대한 우려가 있었습니다.
              팀장으로서 <strong>편향도 판별 모델의 가능성과 기사 기반 팩트체크 기능 구조</strong>를 제시하며
              교수님의 동의를 얻어냈습니다.
            </p>
          </div>
          <div className="space-y-4">
            {ROLE_ITEMS.map((r) => (
              <div key={r.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{r.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${r.contribution}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{r.contribution}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-purple-400 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section>
          <SectionLabel>성과</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">논문 금상 · SW 저작권 등록까지</h2>
          <div className="space-y-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-purple-200 transition-colors">
                <p className="text-gray-700 font-medium">{r.label}</p>
                <span className="text-purple-700 font-bold text-sm bg-purple-50 px-3 py-1 rounded-full">{r.value}</span>
              </div>
            ))}
          </div>

          {/* ── 수상 사진 3열 ── */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">심화캡스톤 은상</p>
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-award-capstone.jpg"
                label="경기대학교 심화캡스톤 은상 상장 (PDF p.14 왼쪽)"
                className="min-h-52"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">한국정보기술학회 금상</p>
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-award-kiit.jpg"
                label="한국정보기술학회 우수논문상 금상 상장 (PDF p.14 가운데)"
                className="min-h-52"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">팀 사진</p>
              <ImagePlaceholder
                filename="/images/newsbalance/newsbalance-team.jpg"
                label="팀원 단체사진 + 발표/개발 현장 사진 (PDF p.14 오른쪽)"
                className="min-h-52"
              />
            </div>
          </div>
        </section>

        {/* 네비 */}
        <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link href="/projects/hai" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← H.AI</Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
            Resume로 돌아가기 <span>→</span>
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
      <code className="text-xs text-purple-500 text-center break-all">{filename}</code>
      <p className="text-xs text-gray-400 text-center">{label}</p>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color: "purple" | "gray" }) {
  const styles = { purple: "bg-purple-100 text-purple-800", gray: "bg-gray-100 text-gray-700" };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[color]}`}>{children}</span>;
}

function StatCard({ number, label, color }: { number: string; label: string; color: "purple" | "red" }) {
  const bg = color === "purple" ? "bg-purple-50 border-purple-100" : "bg-red-50 border-red-100";
  const text = color === "purple" ? "text-purple-700" : "text-red-700";
  return (
    <div className={`p-5 rounded-2xl border ${bg}`}>
      <p className={`text-2xl font-black ${text}`}>{number}</p>
      <p className="text-gray-600 text-xs mt-1 leading-relaxed">{label}</p>
    </div>
  );
}

function ArchItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 text-xs text-gray-600">
      <span className="text-purple-400">·</span>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-purple-600 text-xs font-bold tracking-widest uppercase mb-3">{children}</p>;
}

import Link from "next/link";

const ROLE_ITEMS = [
  {
    title: "프로젝트 리딩",
    items: ["교육 현장의 문제를 바탕으로 서비스 방향과 핵심 기능 정의", "GitHub Projects 기반 일정 관리", "최종 발표 및 프로젝트 주도"],
    contribution: 70,
  },
  {
    title: "RAG 구축 및 테스트",
    items: ["교과서·오픈데이터 기반 지식 검색 구조 설계", "Bedrock + OpenSearch 기반 RAG 환경 구성", "환각 감소와 답변 신뢰도 향상을 위한 검색 품질 테스트", "실제 질문 시나리오를 바탕으로 응답 정확도 검증"],
    contribution: 50,
  },
  {
    title: "AI Agent 구현",
    items: ["자연어 명령을 기능 실행으로 연결하는 Tool Calling 구조 설계", "사용자 요청에 따라 필요한 내부 API 호출 로직 구현", "대화형 UX에 맞는 Agent 동작 흐름 정의"],
    contribution: 60,
  },
  {
    title: "사용자 테스트 주도",
    items: ["초등학생 12명 대상 시범 사용 기획 및 진행", "사용자 반응 관찰을 통한 진입장벽과 불편 요소 파악", "테스트 결과를 바탕으로 서비스 우선순위 재조정"],
    contribution: 80,
  },
];

const SOLUTIONS = [
  { icon: "🗺", title: "지도 기반 시각화", desc: "시대에 따라 국경이 변하는 지도 위에서 캐릭터가 움직이며 역사를 체험", badge: "이해도 향상" },
  { icon: "💬", title: "AI 인물 대화", desc: "LLM 기반 역사 인물과 실시간 채팅. 교과서 내 AI Agent 호출", badge: "창의력 향상" },
  { icon: "🤝", title: "실시간 온라인 토론", desc: "AI 사회자가 진행하는 온라인 토론 + 결과 자동 요약", badge: "참여도 향상" },
];

const RESULTS = [
  { label: "LG CNS AM Inspire 3기 최종프로젝트", value: "대상 (1위)" },
  { label: "울산 호연초등학교 현장 테스트", value: "12명 완료" },
];

const TECH = ["AWS Bedrock", "Claude Sonnet 3.5", "RAG", "Tool Calling", "WebSocket", "STT/TTS", "React", "Django"];

export default function HaiPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 고정 상단 네비 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
            <span>←</span>
            <span>돌아가기</span>
          </Link>
          <span className="text-xs text-gray-400 font-mono">PROJECT.2 / 3</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 bg-gradient-to-br from-green-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-4">PROJECT.2</p>
          <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-gray-900 mb-3">H.AI</h1>
          <p className="text-xl text-gray-500 font-light mb-8">Gen AI 기반 디지털 역사 교과서</p>
          <div className="flex flex-wrap gap-2.5">
            <Tag color="green">2025.10 ~ 2026.01</Tag>
            <Tag color="gray">팀장 / 7인</Tag>
            <Tag color="green">LG CNS 부트캠프 대상</Tag>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {TECH.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-14">
        {/* Problem */}
        <section>
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">기존 역사 수업, 학생들이 흥미를 잃어가고 있습니다</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <ProblemCard number="01" label="텍스트 중심의 수업" />
            <ProblemCard number="02" label="정적인 시각자료" />
            <ProblemCard number="03" label="단방향 정보전달" />
          </div>
          <div className="p-6 bg-red-50 border border-red-100 rounded-2xl mb-4">
            <p className="text-gray-700 leading-relaxed">
              현행 역사 수업은 텍스트 암기 중심으로 학생들의 <strong>수업 흥미도가 지속 하락</strong>하고 있습니다.
              동시에 AI 디지털교과서 도입이 가속화되는 산업 흐름 속에서,
              학생이 <strong>주도적으로 참여</strong>할 수 있는 새로운 형태의 교육 콘텐츠가 필요합니다.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <SectionLabel>Solution</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">Gen AI로 역사를 체험하는 디지털 교과서</h2>
          <div className="p-6 bg-green-50 border border-green-100 rounded-2xl mb-6">
            <p className="text-gray-700 leading-relaxed">
              교과서 내용을 데이터화하여 화면 위에서 동적으로 보여주고,
              Gen AI를 사용하여 교과서 인물과 대화하며 배울 수 있게 하고,
              온라인 토론 방에서 자유롭게 토론하고 결과를 AI가 요약해줍니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="p-5 bg-white border border-gray-200 rounded-2xl">
                <p className="text-2xl mb-3">{s.icon}</p>
                <p className="font-bold text-gray-900 mb-1.5">{s.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">{s.badge}</span>
              </div>
            ))}
          </div>

          {/* Tool Calling 흐름 */}
          <div className="mt-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">AI Agent Tool Calling 구조</p>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <FlowPill>사용자 입력</FlowPill>
              <span className="text-gray-400">→</span>
              <FlowPill active>Tool Calling 명령 판별</FlowPill>
              <span className="text-gray-400">→</span>
              <div className="flex flex-col gap-1.5">
                <FlowPill>인물 호출 navigate_to_person()</FlowPill>
                <FlowPill>전쟁 이동 move_to_war()</FlowPill>
                <FlowPill>교과서 이동 move_to_page()</FlowPill>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-gray-400 text-xs">명령 아닐 시 →</span>
              <FlowPill>AWS Knowledge Base · RAG 기반 답변 생성</FlowPill>
            </div>
          </div>
        </section>

        {/* Role */}
        <section>
          <SectionLabel>나의 역할</SectionLabel>
          <h2 className="text-3xl font-bold mb-6">다양한 출신과 배경을 하나로 모은 팀장</h2>
          <div className="mb-5 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
            <p className="text-sm text-amber-900 leading-relaxed">
              다양한 출신과 배경을 가진 사람들이 모여서 진행한 프로젝트라 초반 의견 조율이 쉽지 않았지만,
              아이디어를 문서화하면서 2주 동안 매일 회의를 진행한 결과 팀원들의 의견을 하나로 모을 수 있었습니다.
            </p>
          </div>
          <div className="space-y-4">
            {ROLE_ITEMS.map((r) => (
              <div key={r.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{r.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${r.contribution}%` }} />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{r.contribution}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-green-400 mt-0.5">·</span>
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
          <h2 className="text-3xl font-bold mb-6">LG CNS 부트캠프 최종 대상</h2>
          <div className="space-y-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-green-200 transition-colors">
                <p className="text-gray-700 font-medium">{r.label}</p>
                <span className="text-green-700 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">{r.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 p-5 bg-green-50 border border-green-100 rounded-2xl">
            <p className="text-sm text-green-900 leading-relaxed">
              팀원들이 돈을 모아서 신발을 선물해줬습니다. 팀원들과 진심으로 소통하고 협력하며
              <strong> 평생 잊지 못 할 동료들을 얻었습니다.</strong>
            </p>
          </div>
        </section>

        {/* 네비 */}
        <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
          <Link href="/projects/tape" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← TAPE</Link>
          <Link href="/projects/newsbalance"
            className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-800 transition-colors">
            다음 프로젝트: NEWSBALANCE <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color: "green" | "gray" | "blue" }) {
  const styles = { green: "bg-green-100 text-green-800", gray: "bg-gray-100 text-gray-700", blue: "bg-blue-100 text-blue-800" };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[color]}`}>{children}</span>;
}

function ProblemCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
      <p className="text-xs font-mono text-red-400 mb-2">{number}</p>
      <p className="font-bold text-gray-900 text-sm">{label}</p>
    </div>
  );
}

function FlowPill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${active ? "bg-green-100 border-green-300 text-green-800" : "bg-white border-gray-200 text-gray-700"}`}>
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-green-600 text-xs font-bold tracking-widest uppercase mb-3">{children}</p>;
}

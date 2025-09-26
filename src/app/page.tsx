// app/page.tsx (Server Component)
import ResumeLauncher from "./resume-launcher";

type Project = {
  project_name: string;
  project_introduction: string;
  project_period: string;
  project_github: string;
};
type GeneralInfo = {
  name: string;
  introduction: string;
  email : string;
  github: string;
};

async function getGeneralInfo(): Promise<GeneralInfo> {
  const res = await fetch(
    "https://raw.githubusercontent.com/StarChoiMarine/first-deploy/refs/heads/main/src/service/resume_general_info_service.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch general info");
  return res.json();
}

async function getPortfolio(): Promise<Project[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/StarChoiMarine/first-deploy/refs/heads/main/src/service/resume_portfolio_service.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch portfolio info");
  return res.json();
}

export default async function Page() {
  const [generalInfo, portfolio] = await Promise.all([
    getGeneralInfo(),
    getPortfolio(),
  ]);

  return (
    <div
      className="relative min-h-screen w-full text-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/my-dream.jpeg)" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <main className="relative z-10 w-full max-w-4xl text-center px-6">
        {/* ✅ 히어로 애니메이션 복원 */}
        <div className="animate-heroText w-fit mx-auto sm:mx-0 text-left">
          <h1 className="font-extrabold leading-tight text-[24px] sm:text-[36px]">
            기술을 통해 사랑을 전하는 개발자가 되고 싶습니다.
          </h1>
          <p className="mt-2 font-extrabold leading-tight text-[20px] sm:text-[28px]">
            안녕하세요? 저는 최성입니다.
            <br className="hidden sm:block" />
            여러분께 많은 것을 배우고 싶습니다.
          </p>
        </div>

        {/* 중앙 라인 + 버튼 자리 */}
        <div className="relative mt-6 sm:mt-8">
          <div className="h-[1px] bg-white/80 mx-auto animate-growLine" />
          {/* 버튼은 클라이언트 컴포넌트가 렌더 */}
          <ResumeLauncher generalInfo={generalInfo} portfolio={portfolio} />
        </div>
      </main>

      <footer className="absolute bottom-4 w-full text-center text-xs text-white/80 text-[15px]">
        © {new Date().getFullYear()} LG CNS AM Inspire Camp 3th 최성
      </footer>
    </div>
  );
}

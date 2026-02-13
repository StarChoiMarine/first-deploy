// app/page.tsx (Server Component — data fetch only)
import PortfolioClient from "./portfolio-client";

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

  return <PortfolioClient generalInfo={generalInfo} portfolio={portfolio} />;
}

"use client";

import Image from "next/image";

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

export default function ResumeOverlay({
  onClose,
  generalInfo,
  portfolio,
}: {
  onClose: () => void;
  generalInfo: GeneralInfo;
  portfolio: Project[];
}) {
  return (
    <div className="relative w-[92%] max-w-4xl mx-auto py-10 sm:py-16 px-6 sm:px-10">
      {/* 돌아가기 버튼 */}
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
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          RESUME
        </h1>
        <div className="mt-4 h-[1px] w-24 bg-white/40 mx-auto" />
      </header>

      {/* 프로필 카드 */}
      <section className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-40 h-52 sm:w-48 sm:h-64 flex-shrink-0">
          <Image
            src={"/choi-seong.jpeg"}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {generalInfo.name}
          </h2>
          <p className="whitespace-pre-line text-white/80 mb-5 leading-relaxed">
            {generalInfo.introduction}
          </p>
          {generalInfo.email && (
            <p className="text-white/70 mb-2 text-sm">
              <strong className="text-white/90">Email</strong>{" "}
              <span className="ml-2 font-medium">{generalInfo.email}</span>
            </p>
          )}
          <p className="text-white/70 text-sm">
            <strong className="text-white/90">GitHub</strong>{" "}
            <a
              href={generalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 font-medium underline underline-offset-4 hover:text-white transition-colors"
            >
              {generalInfo.github}
            </a>
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6 pb-3 border-b border-white/20">
          Major Activities in 2025
        </h3>
        <div className="space-y-6">
          {portfolio.map((p, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-2">
                {p.project_name}
              </h4>
              <p className="whitespace-pre-line text-white/80 mb-2 leading-relaxed">
                {p.project_introduction}
              </p>
              <p className="text-white/60 text-sm mb-4">{p.project_period}</p>
              <a
                href={p.project_github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
              >
                <Image
                  src="/github-mark.png"
                  alt="GitHub Icon"
                  width={18}
                  height={18}
                  className="invert"
                />
                GitHub 바로가기
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

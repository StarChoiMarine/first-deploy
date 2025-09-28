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
  email : string;
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
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-10"
      onClick={onClose}
    >

      <div className="absolute inset-0 bg-black/10 backdrop-blur-lg" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[92%] max-w-4xl max-h-[85vh] overflow-y-auto
          bg-white text-black rounded-2xl shadow-2xl p-10
          animate-[paperIn_0.5s_ease-out_both]
        "
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-black text-xl"
          aria-label="오버레이 닫기"
        >
          ✕
        </button>

        {/* 헤더 */}
        <header className="text-center my-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            RESUME
          </h1>
        </header>

        {/* 프로필 */}
        <section className="mb-10 flex flex-col sm:flex-row items-center gap-8">
          <div className="relative rounded-full overflow-hidden shadow-md w-50 h-80">
            <Image
              src={"/choi-seong.jpeg"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {generalInfo.name}
            </h2>
            <p className="whitespace-pre-line text-gray-700 mb-4">{generalInfo.introduction}</p>
            {generalInfo.email && (
              <p className="text-gray-700 mb-1">
                <strong>Email</strong> :{" "}
                <span className="font-medium">{generalInfo.email}</span>
              </p>
            )}
            <p className="text-gray-700 mb-1">
              <strong>GitHub</strong> :{" "}
              <a
                href={generalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
              >
                {generalInfo.github}
              </a>
            </p>
          </div>
        </section>


        {/* Portfolio */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Major Activities in 2025
          </h3>
          <div className="space-y-6">
            {portfolio.map((p, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {p.project_name}
                </h4>
                <p className="whitespace-pre-line text-gray-700 mb-2">{p.project_introduction}</p>
                <p className="text-gray-700 mb-4">{p.project_period}</p>
                <a
                href={p.project_github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                {/* GitHub 아이콘 (public/github-mark-white.svg 같은 파일 준비) */}
                <Image
                  src="/github-mark.png"
                  alt="GitHub Icon"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
                GitHub 바로가기
              </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

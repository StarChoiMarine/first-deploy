import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
      <main className="w-full max-w-4xl text-center px-6">
        {/* 텍스트 블록 */}
        <div className="animate-heroText w-fit mx-auto sm:mx-0 text-left">
          <h1 className="font-extrabold leading-tight text-[24px] sm:text-[36px]">
            세상이 조금 더 행복해지면 어떨까요?
          </h1>
          <p className="mt-2 font-extrabold leading-tight text-[20px] sm:text-[28px]">
            당신과 최성은
            <br className="hidden sm:block" />
            같은 꿈을 꾸고 있습니다.
          </p>
        </div>

        {/* 라인 + click */}
        <div className="relative mt-6 sm:mt-8">
          <div className="h-[1px] bg-white/80 mx-auto animate-growLine" />
          <Link
            href="/resume"
            className="absolute -right-1 top-1/2 -translate-y-1/2 text-sm sm:text-base opacity-0 animate-showCta"
          >
            resume 보러가기 →
          </Link>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="absolute bottom-4 w-full text-center text-xs text-white/80 text-[15px]">
        © {new Date().getFullYear()} LG CNS AM Inspire Camp 3th 최성
      </footer>
    </div>
  );
}


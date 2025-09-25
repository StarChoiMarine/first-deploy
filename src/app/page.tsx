import Link from "next/link";

export default function Home() {
  return (







    
    <div
      className="relative min-h-screen w-full text-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/my-dream.jpeg)" }} // ← 여기서 적용!
    >
      {/* 오버레이로 글자 가독성 확보 */}
      <div className="absolute inset-0 bg-black/40" />
      <main className="w-full max-w-4xl text-center px-6">
        {/* 텍스트 블록 */}
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


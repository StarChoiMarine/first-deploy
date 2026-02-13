"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeOverlay from "./resume-overlay";

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

type Phase = "main" | "collapsing" | "resume" | "expanding";

export default function PortfolioClient({
    generalInfo,
    portfolio,
}: {
    generalInfo: GeneralInfo;
    portfolio: Project[];
}) {
    const [phase, setPhase] = useState<Phase>("main");

    const handleOpenResume = useCallback(() => {
        setPhase("collapsing");
        // 메인 요소 수렴 애니메이션 후 resume 전환
        setTimeout(() => setPhase("resume"), 600);
    }, []);

    const handleCloseResume = useCallback(() => {
        setPhase("expanding");
        // resume 퇴장 후 메인 복귀
        setTimeout(() => setPhase("main"), 600);
    }, []);

    const isMainVisible = phase === "main" || phase === "collapsing" || phase === "expanding";
    const isResumeVisible = phase === "resume" || phase === "expanding";

    return (
        <div
            className="relative min-h-screen w-full text-white flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url(/my-dream.jpeg)" }}
        >
            <div className="absolute inset-0 bg-black/40" />

            {/* ── 메인 콘텐츠 ── */}
            <motion.main
                className="relative z-10 w-full max-w-4xl text-center px-6"
                initial={false}
                animate={
                    phase === "collapsing"
                        ? { scale: 0.85, opacity: 0, y: 20 }
                        : phase === "expanding"
                            ? { scale: 0.85, opacity: 0, y: 20 }
                            : { scale: 1, opacity: 1, y: 0 }
                }
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                onAnimationComplete={() => {
                    // expanding이 끝나면 main으로 (이미 setTimeout에서 처리)
                }}
                style={{
                    pointerEvents: isMainVisible && phase !== "collapsing" ? "auto" : "none",
                }}
            >
                {/* 히어로 텍스트 */}
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

                {/* 라인 + 버튼 */}
                <div className="relative mt-6 sm:mt-8">
                    <div className="h-[1px] bg-white/80 mx-auto animate-growLine" />
                    {phase === "main" && (
                        <button
                            onClick={handleOpenResume}
                            className="absolute -right-1 top-1/2 -translate-y-1/2 text-sm sm:text-base opacity-0 animate-showCta hover:text-white/60 transition-colors cursor-pointer"
                        >
                            resume 보러가기 →
                        </button>
                    )}
                </div>
            </motion.main>

            {/* ── 푸터 ── */}
            <motion.footer
                className="absolute bottom-4 w-full text-center text-xs text-white/80 text-[15px] z-10"
                initial={false}
                animate={
                    phase === "collapsing" || phase === "expanding"
                        ? { opacity: 0, y: -30 }
                        : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.45, ease: "easeInOut" }}
            >
                Love your neighbor as yourself _ Matthew 22:39
            </motion.footer>

            {/* ── Resume 풀페이지 ── */}
            <AnimatePresence>
                {isResumeVisible && (
                    <motion.div
                        key="resume-page"
                        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
                        initial={{ y: "100%", opacity: 0.8 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0.5 }}
                        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* 배경 블러 */}
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-md" />

                        {/* Resume 콘텐츠 */}
                        <motion.div
                            className="relative w-full min-h-screen"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                        >
                            <ResumeOverlay
                                onClose={handleCloseResume}
                                generalInfo={generalInfo}
                                portfolio={portfolio}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

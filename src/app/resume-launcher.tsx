"use client";

import { useState } from "react";
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
  email : string;
  github: string;
};

export default function ResumeLauncher({
  generalInfo,
  portfolio,
}: {
  generalInfo: GeneralInfo;
  portfolio: Project[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="absolute -right-1 top-1/2 -translate-y-1/2 text-sm sm:text-base opacity-0 animate-showCta"
        >
          resume 보러가기 →
        </button>
      )}

      {open && (
        <ResumeOverlay
          onClose={() => setOpen(false)}
          generalInfo={generalInfo}
          portfolio={portfolio}
        />
      )}
    </>
  );
}

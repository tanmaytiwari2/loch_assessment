import { WHALE_WATCHING_CONSTANTS } from "../constants";

export const WhaleWatchingSection = () => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-center justify-between w-full bg-transparent mt-8 mb-12 gap-8 px-8 lg:px-16">
      <img
        className="w-80 h-80  object-cover flex-shrink-0"
        alt="Cohorts"
        src="/cohorts-1.png"
      />
      <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-md">
        <img className="w-8 h-8 mb-2 md:ml-auto" alt="Eye" src="/eye.svg" />
        <div className="text-[clamp(1.5rem,4vw,2rem)] font-heading-4 font-semibold text-background-f2f2f2 mb-2">
          {WHALE_WATCHING_CONSTANTS.HEADLINE}
        </div>
        <div className="opacity-70 text-base sm:text-lg font-body text-background-f2f2f2">
          {WHALE_WATCHING_CONSTANTS.DESCRIPTION}
        </div>
      </div>
    </div>
  );
};

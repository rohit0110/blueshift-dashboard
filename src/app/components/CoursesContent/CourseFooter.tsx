"use client";

import { ChallengeMetadata } from "@/app/utils/challenges";
import { CourseMetadata } from "@/app/utils/course";
import { Icon, Button, CrosshairCorners } from "@blueshift-gg/ui-components";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathContent } from "@/app/hooks/usePathContent";
import { getResearchForCourse, type CourseId } from "@/lib/cross-linking";
import { useCallback } from "react";

interface CourseFooterProps {
  nextLesson: boolean;
  courseMetadata: CourseMetadata;
  nextLessonSlug: string;
  challenge: ChallengeMetadata;
}

const COURSE_TOPICS: Record<string, string> = {
  "introduction-to-assembly": "sBPF assembly optimization and JIT compilation",
  "pinocchio-for-dummies": "low-level Solana optimization techniques",
  "introduction-to-blockchain-and-solana": "Solana development",
  "anchor-for-dummies": "Anchor framework internals",
  "program-security": "Solana security",
  "secp256r1-on-solana": "cryptography on Solana",
  "tokens-on-solana": "token development",
  "nfts-on-solana": "NFT development",
  "spl-token-with-web3js": "SPL token development",
  "spl-token-with-anchor": "SPL token development",
  "token-2022-program": "Token-2022 development",
  "token-2022-with-web3js": "Token-2022 development",
  "token-2022-with-anchor": "Token-2022 development",
  "instruction-introspection": "advanced Solana patterns",
  "testing-with-mollusk": "Solana testing",
  "solana-pay": "Solana payments",
  "create-your-sdk-with-codama": "SDK development",
  "winternitz-signatures-on-solana": "cryptography on Solana",
  "testing-with-litesvm": "Solana testing",
  "testing-with-surfpool": "Solana testing",
}

export default function CourseFooter({
  nextLesson,
  courseMetadata,
  nextLessonSlug,
  challenge,
}: CourseFooterProps) {
  const t = useTranslations();
  const { pathSlug } = usePathContent();

  const articles = getResearchForCourse(courseMetadata.slug as CourseId);
  const topic = COURSE_TOPICS[courseMetadata.slug] || "advanced Solana topics";

  const handleArticleClick = useCallback(
    (articleId: string) => {
      if (typeof window !== "undefined" && (window as any).analytics) {
        ;(window as any).analytics.track("research_link_clicked", {
          source: "course_conclusion",
          course: courseMetadata.slug,
          article: articleId,
        })
      }
    },
    [courseMetadata.slug]
  )

  const getLessonHref = (lessonSlug: string) =>
    pathSlug
      ? `/paths/${pathSlug}/courses/${courseMetadata.slug}/${lessonSlug}`
      : `/courses/${courseMetadata.slug}/${lessonSlug}`;

  const getChallengeHref = () =>
    pathSlug
      ? `/paths/${pathSlug}/challenges/${challenge.slug}`
      : `/challenges/${challenge.slug}`;

  return (
    <div className="w-full flex items-center flex-col gap-y-10">
      {nextLesson && (
        <>
          <Link
            href={getLessonHref(nextLessonSlug)}
            className="flex justify-between items-center w-full bg-card-solid border border-border-light group py-5 px-5"
          >
            <div className="flex items-center gap-x-2">
              <span className="text-mute text-sm font-mono text-shade-tertiary">
                Next Lesson
              </span>
              <span className="font-medium text-shade-primary">
                {t(`courses.${courseMetadata.slug}.lessons.${nextLessonSlug}`)}
              </span>
            </div>
            <Icon
              name="ArrowRight"
              className="text-mute text-sm group-hover:text-shade-primary group-hover:translate-x-1 transition"
            />
          </Link>
        </>
      )}

      {!nextLesson && challenge && (
        <div className="w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+48px)] gap-y-6 md:gap-y-0 flex flex-col md:flex-row justify-between items-center gap-x-12 group -mt-12 pt-24 pb-16 px-8 [background:linear-gradient(180deg,rgba(0,255,255,0)_0%,rgba(0,255,255,0.08)_50%,rgba(0,255,255,0)_100%)]">
          <span className="text-shade-primary w-auto flex-shrink-0 font-mono">
            {t("lessons.take_challenge_cta")}
          </span>
          <Link
            href={`${getChallengeHref()}?fromCourse=${courseMetadata.slug}`}
            className="w-max"
          >
            <Button
              variant="primary"
              size="lg"
              label={t("lessons.take_challenge")}
              icon={{ name: "Challenge" }}
              className="disabled:opacity-40 w-full disabled:cursor-default"
            ></Button>
          </Link>
        </div>
      )}

      {!nextLesson && !challenge && (
        <>
          {articles.length > 0 ? (
            <div className="w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+48px)] -mt-12 pt-24 pb-20 px-8 [background:linear-gradient(180deg,rgba(0,255,255,0)_0%,rgba(0,255,255,0.08)_50%,rgba(0,255,255,0)_100%)]">
              <div className="max-w-[800px] mx-auto">
                <div className="gap-y-6 md:gap-y-0 flex flex-col md:flex-row justify-between items-center gap-x-12 mb-12">
                  <span className="text-shade-primary w-auto flex-shrink-0 font-mono">
                    {t("lessons.lesson_completed")}
                  </span>
                  <Link href={`/courses`} className="w-max">
                    <Button
                      variant="primary"
                      size="lg"
                      label="Explore More Courses"
                      icon={{ name: "Lessons" }}
                    />
                  </Link>
                </div>

                <div className="mb-6">
                  <h2 className="text-shade-primary font-mono text-left">
                    Want More?
                  </h2>
                </div>

                <div className="space-y-3">
                  {articles.map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      onClick={() => handleArticleClick(article.id)}
                      className="group flex items-start gap-3 p-5 border border-border bg-card-solid/80 hover:border-brand-primary/50 transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-shade-primary font-medium group-hover:text-brand-primary transition-colors mb-1">
                          {article.title}
                        </h3>
                        <p className="text-sm text-shade-tertiary">
                          {article.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+48px)] gap-y-6 md:gap-y-0 flex flex-col md:flex-row justify-between items-center gap-x-12 group -mt-12 pt-24 pb-16 px-8 [background:linear-gradient(180deg,rgba(0,255,255,0)_0%,rgba(0,255,255,0.08)_50%,rgba(0,255,255,0)_100%)]">
              <span className="text-shade-primary w-auto flex-shrink-0 font-mono">
                {t("lessons.lesson_completed")}
              </span>
              <Link href={`/courses`} className="w-max">
                <Button
                  variant="primary"
                  size="lg"
                  label={t("lessons.view_other_courses")}
                  icon={{ name: "Lessons" }}
                  className="disabled:opacity-40 w-full disabled:cursor-default"
                />
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

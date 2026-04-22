'use client'

import { useMemo, useState } from 'react'

import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'
import { PRIVACY_CONTENT } from '@/lib/data/privacyContent'
import { useLang } from '@/lib/i18n/LanguageContext'

import styles from './privacy-policy.module.css'

function ParagraphGroup({ paragraphs }) {
  return paragraphs.map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
  ))
}

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState(null)
  const { lang } = useLang()
  const content = useMemo(() => PRIVACY_CONTENT[lang] || PRIVACY_CONTENT.en, [lang])

  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <p className={styles.kicker}>{content.kicker}</p>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.updated}>
              {content.updatedLabel} : {content.lastUpdated}
            </p>
            <div className={styles.tags}>
              {content.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.shell}>
            <div className={styles.introCard}>{content.intro}</div>

            <div className={styles.layout}>
              <aside className={styles.toc}>
                <p className={styles.tocLabel}>{content.tocLabel}</p>
                <div className={styles.tocLinks}>
                  {content.sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={styles.tocLink}>
                      <span>{section.num}</span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className={styles.sections}>
                {content.sections.map((section) => (
                  <section key={section.id} id={section.id} className={styles.sectionBlock}>
                    <button
                      type="button"
                      className={styles.sectionButton}
                      onClick={() => setActive(active === section.id ? null : section.id)}
                    >
                      <span className={styles.sectionNumber}>{section.num}</span>
                      <span className={styles.sectionHeading}>{section.title}</span>
                      <span className={active === section.id ? styles.chevronOpen : styles.chevron}>
                        v
                      </span>
                    </button>

                    {active === section.id ? (
                      <div className={styles.sectionContent}>
                        {section.subsections ? (
                          <div className={styles.subsections}>
                            {section.subsections.map((subsection) => (
                              <div key={subsection.title} className={styles.subsection}>
                                <h3>{subsection.title}</h3>
                                <ParagraphGroup paragraphs={subsection.paragraphs} />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ParagraphGroup paragraphs={section.paragraphs} />
                        )}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>

            <div className={styles.contactCard}>
              <div>
                <h2>{content.contactTitle}</h2>
                <p>{content.contactBody}</p>
              </div>
              <a href="mailto:info@datascalebusiness.io" className={styles.contactLink}>
                info@datascalebusiness.io
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

import { html } from 'lit';
import type { TemplateResult } from 'lit';

import initTranslateWidget from '../../search/initTranslateWidget';

export const Footer = (): TemplateResult => {
  initTranslateWidget();
  return html`
    <storybook-pharos-footer>
      <ul slot="links-group">
        <li>
          <storybook-pharos-link
            id="subject-link"
            on-background
            subtle
            href="/subjects"
            target="_blank"
            >By Subject</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="title-link"
            on-background
            subtle
            href="/action/showJournals?browseType=title"
            target="_blank"
            >By Title</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="collections-link"
            on-background
            subtle
            href="/site/collection-list"
            target="_blank"
            >By Collections</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="publisher-link"
            on-background
            subtle
            href="/publishers"
            target="_blank"
            >By Publisher</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="adv-search-link"
            on-background
            subtle
            href="/action/showAdvancedSearch"
            target="_blank"
            >Advanced Search</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link id="dfr-link" on-background subtle href="/dfr" target="_blank"
            >Data for Research</storybook-pharos-link
          >
        </li>
      </ul>
      <ul slot="links-group">
        <li>
          <storybook-pharos-link
            id="access-link"
            on-background
            subtle
            href="https://support.jstor.org/hc/en-us/articles/360000313328-Need-Help-Logging-in-To-JSTOR"
            target="_blank"
            >Get Access</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="support-link"
            on-background
            subtle
            href="https://support.jstor.org"
            target="_blank"
            >Support</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="libguides-link"
            on-background
            subtle
            href="https://guides.jstor.org"
            target="_blank"
            >LibGuides</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="research-link"
            on-background
            subtle
            href="https://guides.jstor.org/researchbasics"
            target="_blank"
            >Research Basics</storybook-pharos-link
          >
        </li>
      </ul>
      <ul slot="links-group">
        <li>
          <storybook-pharos-link
            id="about-link"
            on-background
            subtle
            href="https://about.jstor.org"
            target="_blank"
            >About JSTOR</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="mission-link"
            on-background
            subtle
            href="https://about.jstor.org/mission-history/"
            target="_blank"
            >Mission and History</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="in-jstor-link"
            on-background
            subtle
            href="https://about.jstor.org/whats-in-jstor/"
            target="_blank"
            >What's in JSTOR</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="get-jstor-link"
            on-background
            subtle
            href="https://about.jstor.org/get-jstor/"
            target="_blank"
            >Get JSTOR</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="news-link"
            on-background
            subtle
            href="https://about.jstor.org/news/"
            target="_blank"
            >News</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="webinars-link"
            on-background
            subtle
            href="https://about.jstor.org/webinars/"
            target="_blank"
            >Webinars</storybook-pharos-link
          >
        </li>
      </ul>
      <ul slot="links-group">
        <li>
          <storybook-pharos-link
            id="labs-link"
            on-background
            subtle
            href="https://labs.jstor.org/"
            target="_blank"
            >JSTOR Labs</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="daily-link"
            on-background
            subtle
            href="https://daily.jstor.org/"
            target="_blank"
            >JSTOR Daily</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="careers-link"
            on-background
            subtle
            href="https://www.ithaka.org/careers/"
            target="_blank"
            >Careers</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="contact-link"
            on-background
            subtle
            href="/contact-us/"
            target="_blank"
            >Contact Us</storybook-pharos-link
          >
        </li>
      </ul>
      <ul slot="button-links">
        <li>
          <storybook-pharos-button
            id="for-librarians-link"
            variant="secondary"
            on-background
            href="https://about.jstor.org/librarians/"
            target="_blank"
            >For Librarians</storybook-pharos-button
          >
        </li>
        <li>
          <storybook-pharos-button
            id="for-publishers-link"
            variant="secondary"
            on-background
            href="https://about.jstor.org/publishers/"
            target="_blank"
            >For Publishers</storybook-pharos-button
          >
        </li>
      </ul>
      <ul slot="social-links">
        <li>
          <storybook-pharos-link
            id="twitter-link"
            href="https://twitter.com/JSTOR"
            target="_blank"
            label="twitter - This link opens in a new window"
          >
            <storybook-pharos-icon name="twitter"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
        <li>
          <storybook-pharos-link
            id="facebook-link"
            href="https://www.facebook.com/JSTOR.org"
            target="_blank"
            label="facebook - This link opens in a new window"
          >
            <storybook-pharos-icon name="facebook"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
        <li>
          <storybook-pharos-link
            id="instagram-link"
            href="https://www.instagram.com/jstor_org"
            target="_blank"
            label="instagram - This link opens in a new window"
          >
            <storybook-pharos-icon name="instagram"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
        <li>
          <storybook-pharos-link
            id="youtube-link"
            href="https://www.youtube.com/channel/UCQM-7sUBV6Z-PVas0S4k0lw"
            target="_blank"
            label="youtube - This link opens in a new window"
          >
            <storybook-pharos-icon name="youtube"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
        <li>
          <storybook-pharos-link
            id="linkedin-link"
            href="https://www.linkedin.com/company/ithaka"
            target="_blank"
            label="linkedin - This link opens in a new window"
          >
            <storybook-pharos-icon name="linkedin"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
        <li>
          <storybook-pharos-link
            id="tumblr-link"
            href="https://jstor.tumblr.com"
            target="_blank"
            label="tumblr - This link opens in a new window"
          >
            <storybook-pharos-icon name="tumblr"></storybook-pharos-icon>
          </storybook-pharos-link>
        </li>
      </ul>
      <span id="misson-text" slot="mission-statement"
        >JSTOR is part of
        <storybook-pharos-link on-background href="https://www.ithaka.org"
          >ITHAKA</storybook-pharos-link
        >, a not-for-profit organization helping the academic community use digital technologies to
        preserve the scholarly record and to advance research and teaching in sustainable
        ways.</span
      >
      <span id="copyright-text" slot="copyright-statement"
        >&copy;2000-${new Date().getFullYear()} ITHAKA. All Rights Reserved. JSTOR&reg;, the JSTOR
        logo, JPASS&reg;, Artstor&reg;, Reveal Digital&trade; and ITHAKA&reg; are registered
        trademarks of ITHAKA.</span
      >
      <ul slot="legal-links">
        <li>
          <storybook-pharos-link
            id="terms-link"
            on-background
            subtle
            href="https://about.jstor.org/terms"
            target="_blank"
            >Terms & Conditions of Use</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="privacy-link"
            on-background
            subtle
            href="https://www.ithaka.org/privacypolicy"
            target="_blank"
            >Privacy Policy</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="cookie-link"
            on-background
            subtle
            href="https://www.ithaka.org/cookies"
            target="_blank"
            >Cookie Policy</storybook-pharos-link
          >
        </li>
        <li>
          <storybook-pharos-link
            id="accessibility-link"
            on-background
            subtle
            href="https://about.jstor.org/accessibility"
            target="_blank"
            >Accessibility</storybook-pharos-link
          >
        </li>
      </ul>
      <div slot="google-widget" id="google_translate_element" aria-hidden="true"></div>
    </storybook-pharos-footer>
  `;
};

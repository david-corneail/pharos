import { action } from '@storybook/addon-actions';
import { html } from 'lit';

import { configureDocsPage } from '@config/docsPageConfig';

export default {
  title: 'Components/Loading Spinner',
  component: 'pharos-loading-spinner',
  parameters: {
    docs: { page: configureDocsPage('loading-spinner') },
    options: { selectedPanel: 'addon-controls' },
    chromatic: { disable: true },
  },
};

export const Base = {
  render: () =>
    html`
      <storybook-pharos-loading-spinner></storybook-pharos-loading-spinner>
      <storybook-pharos-heading level="1" preset="5"
        >Loading spinner demonstration</storybook-pharos-heading
      >
      <storybook-pharos-button @click="${() => action('Click')('Clicked')}"
        >Can't press me!</storybook-pharos-button
      >
    `,
};

export const Scoped = {
  render: () =>
    html`
      <div style="height: 5rem; width: 5rem; border: 1px solid black; position: relative;">
        <storybook-pharos-loading-spinner></storybook-pharos-loading-spinner>
      </div>
    `,
};

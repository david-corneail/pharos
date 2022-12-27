import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import sinon from 'sinon';
import type { SinonSpy } from 'sinon';
import type { PharosCoachmark } from './pharos-coachmark';

describe('pharos-coachmark', () => {
  let component: PharosCoachmark, logSpy: SinonSpy;

  beforeEach(async () => {
    component = await fixture(html` <pharos-coachmark> Shell Coachmark </pharos-coachmark> `);
  });

  before(() => {
    logSpy = sinon.spy(console, 'error');
  });

  after(() => {
    logSpy.restore();
  });

  it('is accessible', async () => {
    await expect(component).to.be.accessible();
  });
});

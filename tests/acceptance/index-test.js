import { module, test } from 'qunit';
import { visit, click /* pauseTest */ } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupIntl, t } from 'ember-intl/test-support';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks);

  test('it changes language to en-us', async function (assert) {
    await visit('/');
    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-en-us]');

    assert
      .dom('[data-test=link-resume]')
      .hasText(t('pages.home.banners.about-me.line-4'));
  });

  test('it changes language to fr-fr', async function (assert) {
    await visit('/');
    await click('[data-test=language-picker-button]');
    await click('[data-test=language-picker-fr-fr]');

    assert
      .dom('[data-test=link-resume]')
      .hasText(t('pages.home.banners.about-me.line-4'));
  });
});

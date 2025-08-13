import { translate } from '@foo/i18n';

export const consec = translate({
  text: 'consec {FOO} teter',
  replacements: {
    'FOO': <span>foo</span>,
  },
});

import awaitAsyncQuery from './rules/await-async-query';
import awaitAsyncUtils from './rules/await-async-utils';
import awaitFireEvent from './rules/await-fire-event';
import consistentDataTestid from './rules/consistent-data-testid';
import noAwaitSyncQuery from './rules/no-await-sync-query';
import noDebug from './rules/no-debug';
import noDomImport from './rules/no-dom-import';
import noManualCleanup from './rules/no-manual-cleanup';
import noRenderInSetup from './rules/no-render-in-setup';
import noWaitForEmptyCallback from './rules/no-wait-for-empty-callback';
import noWaitForSnapshot from './rules/no-wait-for-snapshot';
import preferExplicitAssert from './rules/prefer-explicit-assert';
import preferPresenceQueries from './rules/prefer-presence-queries';
import preferScreenQueries from './rules/prefer-screen-queries';
import preferWaitFor from './rules/prefer-wait-for';
import preferFindBy from './rules/prefer-find-by';

const rules = {
  'await-async-query': awaitAsyncQuery,
  'await-async-utils': awaitAsyncUtils,
  'await-fire-event': awaitFireEvent,
  'consistent-data-testid': consistentDataTestid,
  'no-await-sync-query': noAwaitSyncQuery,
  'no-debug': noDebug,
  'no-dom-import': noDomImport,
  'no-manual-cleanup': noManualCleanup,
  'no-render-in-setup': noRenderInSetup,
  'no-wait-for-empty-callback': noWaitForEmptyCallback,
  'no-wait-for-snapshot': noWaitForSnapshot,
  'prefer-explicit-assert': preferExplicitAssert,
  'prefer-find-by': preferFindBy,
  'prefer-presence-queries': preferPresenceQueries,
  'prefer-screen-queries': preferScreenQueries,
  'prefer-wait-for': preferWaitFor,
};

const recommendedRules = {
  'testing-library/await-async-query': 'error',
  'testing-library/await-async-utils': 'error',
  'testing-library/no-await-sync-query': 'error',
  'testing-library/prefer-find-by': 'error',
};

export = {
  rules,
  configs: {
    recommended: {
      plugins: ['testing-library'],
      rules: recommendedRules,
    },
    angular: {
      plugins: ['testing-library'],
      rules: {
        ...recommendedRules,
        'testing-library/no-debug': 'warn',
        'testing-library/no-dom-import': ['error', 'angular'],
      },
    },
    react: {
      plugins: ['testing-library'],
      rules: {
        ...recommendedRules,
        'testing-library/no-debug': 'warn',
        'testing-library/no-dom-import': ['error', 'react'],
      },
    },
    vue: {
      plugins: ['testing-library'],
      rules: {
        ...recommendedRules,
        'testing-library/await-fire-event': 'error',
        'testing-library/no-debug': 'warn',
        'testing-library/no-dom-import': ['error', 'vue'],
      },
    },
  },
};

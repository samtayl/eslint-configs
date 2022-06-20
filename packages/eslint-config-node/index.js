module.exports = {
  rules: {
    'node/callback-return': 'warn',
    'node/exports-style': 'warn',
    'node/file-extension-in-import': 'warn',
    'node/global-require': 'warn',
    'node/handle-callback-err': 'warn',
    'node/no-callback-literal': 'warn',
    'node/no-deprecated-api': 'warn',

    // not allowing `exports` export style
    'node/no-exports-assign': 'off',
    'node/no-extraneous-import': 'warn',
    'node/no-extraneous-require': 'warn',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',

    // not allowing multiple variable declarations in a single statement
    'node/no-mixed-requires': 'off',
    'node/no-new-require': 'warn',
    'node/no-path-concat': 'warn',
    'node/no-process-env': 'off',
    'node/no-process-exit': 'warn',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',

    // superseded by 'node/prefer-promises'
    'node/no-sync': 'off',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/prefer-global/buffer': 'warn',
    'node/prefer-global/console': 'warn',
    'node/prefer-global/process': 'warn',
    'node/prefer-global/text-decoder': 'warn',
    'node/prefer-global/text-encoder': 'warn',
    'node/prefer-global/url': 'warn',
    'node/prefer-global/url-search-params': 'warn',
    'node/prefer-promises/dns': 'warn',
    'node/prefer-promises/fs': 'warn',

    // not allowing process.exit
    'node/process-exit-as-throw': 'off',
    'node/shebang': 'error',
  },
};

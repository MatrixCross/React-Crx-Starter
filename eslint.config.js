module.exports = {
  ignores: [
    'node_modules',
    'dist',
    'build',
    'your-other-folders-or-files-to-ignore'
  ],
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // 你的规则
  }
};

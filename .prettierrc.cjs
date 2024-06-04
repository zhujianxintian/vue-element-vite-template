// @ts-check
const prettier = require('prettier');

/**
 * @type {prettier.Config}
 */
const config = {
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    printWidth: 120,
    trailingComma: 'all',
    endOfLine: 'lf'
};

module.exports = config;

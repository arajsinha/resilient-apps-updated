module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    modulePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/gen/srv/package.json',
    ],
};
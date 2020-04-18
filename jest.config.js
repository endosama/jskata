module.exports = {
    preset: 'ts-jest',
    modulePathIgnorePatterns: [
        "/node_modules"
    ],
    testPathIgnorePatterns: [
        "/node_modules"
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.[j]sx?$': '<rootDir>/node_modules/babel-jest',
    },
    projects: ['<rootDir>/src']
}
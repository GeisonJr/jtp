import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
	coverageDirectory: 'coverage',
	collectCoverage: true,
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
}

export default config

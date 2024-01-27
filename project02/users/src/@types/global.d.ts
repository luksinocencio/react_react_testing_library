import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R, T = NonNullable<unknown>> {
      toContainRole(role: string, quantity?: number): R
    }
  }
}

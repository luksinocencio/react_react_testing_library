import '@testing-library/jest-dom'
import { within } from '@testing-library/react' // Importando para garantir que os matchers personalizados estejam disponíveis

interface ToContainRoleOptions {
  quantity?: number
  container: HTMLElement
  role: string
}

interface ToContainRoleResult {
  pass: boolean
  message?: () => string
}

expect.extend({
  toContainRole<T>(
    received: T,
    role: string,
    quantity = 1,
  ): { pass: boolean; message: () => string } {
    const elements = within(received as HTMLElement).queryAllByRole(
      role,
    ) as HTMLElement[]

    if (elements.length === quantity) {
      return {
        pass: true,
        message: () => `Expected ${elements.length} ${role}s, got ${quantity}`,
      }
    }

    return {
      pass: false,
      message: () => `Expected ${elements.length} ${role}s, got ${quantity}`,
    }
  },
})

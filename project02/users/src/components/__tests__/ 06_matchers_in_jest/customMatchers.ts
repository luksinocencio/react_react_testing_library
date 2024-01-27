import '@testing-library/jest-dom'
import { within } from '@testing-library/react' // Importando para garantir que os matchers personalizados estejam disponíveis

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toContainRole(role: string, quantity?: number): R
    }
  }
}

interface ToContainRoleOptions {
  quantity?: number
  container: HTMLElement
  role: string
}

interface ToContainRoleResult {
  pass: boolean
  message?: () => string
}

const toContainRole = (options: ToContainRoleOptions): ToContainRoleResult => {
  const { quantity = 1, container, role } = options
  const elements = within(container).queryAllByRole(role) as HTMLElement[]

  if (elements.length === quantity) {
    return {
      pass: true,
    }
  }

  return {
    pass: false,
    message: () => `Expected ${elements.length} ${role}s, got ${quantity}`,
  }
}

expect.extend({ toContainRole })

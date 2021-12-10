export function getEnvironmentVars(): void {
  if (!process.env.TBK_ENV) {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
      process.env.TBK_ENV = 'production';
    } else {
      process.env.TBK_ENV = 'integration';
    }
  } else if (['integration', 'production'].indexOf(process.env.TBK_ENV) === -1) {
    process.env.TBK_ENV = 'integracion';
  }
}

export function setEnvironment(env: string): void {
  if (!process.env.TBK_ENV || ['integration', 'production'].indexOf(process.env.TBK_ENV) === -1) {
    throw new Error('not valid environment');
  } else {
    process.env.TBK_ENV = env;
  }
}

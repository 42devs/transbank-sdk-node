import { getEnvironmentVars } from './environment';

const envurl = {
  integration: 'https://webpay3gint.transbank.cl',
  production: 'https://webpay3g.transbank.cl',
};

export function getBaseURL(): string {
  getEnvironmentVars();
  const tbkenv = process.env.TBK_ENV! as string;

  if (tbkenv === 'production') return envurl.production;
  return envurl.integration;
}

function toCase(s: string): string {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

function toCamel(s: string): string {
  return s.toLowerCase()
    .replace(/([-_][a-z])/, (g) => (g
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')));
}

export function toUnderScoreKeys(obj:any): any {
  const newObj: any = {};
  Object.keys(obj).forEach((v) => {
    if (typeof obj[v] === 'object') {
      newObj[toCase(v)] = toUnderScoreKeys(obj[v]);
    }
    if (Array.isArray(obj[v])) {
      newObj[toCase(v)] = toUnderScoreKeys(obj[v]);
    }
    newObj[toCase(v)] = obj[v];
  });
  return newObj;
}

export function toCamelCaseKeys(obj: any): any {
  const newObj: any = {};
  Object.keys(obj).forEach((v) => {
    if (typeof obj[v] === 'object') {
      newObj[toCamel(v)] = toCamelCaseKeys(obj[v]);
    }
    if (Array.isArray(obj[v])) {
      newObj[toCamel(v)] = toCamelCaseKeys(obj[v]);
    }
    newObj[toCamel(v)] = obj[v];
  });
  return newObj;
}

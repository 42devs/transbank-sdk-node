function toCase(s: string): string {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export function toUnderScoreKeys(obj:any): any {
  const newObj: any = {};
  Object.keys(obj).forEach((v) => {
    newObj[toCase(v)] = obj[v];
  });
  return newObj;
}

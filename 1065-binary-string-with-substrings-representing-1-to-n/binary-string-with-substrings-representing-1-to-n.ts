function queryString(s: string, n: number): boolean {
  for (let i = 1; i <= n; i++) if (!s.includes(i.toString(2))) return false;

  return true;
}
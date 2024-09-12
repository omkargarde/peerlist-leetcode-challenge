function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    const value = map.get(key);
    if (value) {
      value.push(str);
      map.set(key, value);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
}

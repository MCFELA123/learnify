export function require(path) {
  return new URL(path, import.meta.url).href;
}
export function getAssetSrc(name: string): string {
  const path = `/src/assets/${name}`;
  const modules = import.meta.glob('@/assets/**', { eager: true });
  const mod = modules[path] as { default: string };
  return mod.default;
}

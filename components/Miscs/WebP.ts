// change image src to .webp if possible
export default function WebP(src: string, browserCompatible: boolean): string {
  function changeFileExtension(file: string, newExt: string): string {
    const lastDotIndex: number = file.lastIndexOf(".");
    if (lastDotIndex < 0) {
      return file;
    }
    return file.slice(0, lastDotIndex) + newExt;
  }

  if (browserCompatible) {
    return changeFileExtension(src, ".webp");
  }
  return src;
}

// Scroll to an id
export function scrollTo(id: string): void {
  // Scroll to the location
  document.getElementById(id)?.scrollIntoView();
}

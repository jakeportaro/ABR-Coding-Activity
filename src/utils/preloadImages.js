// Preload an array of image URLs
export function preloadImages(urls) {
  urls.forEach((url) => {
    if (!url) return;
    const img = new window.Image();
    img.src = url;
  });
}

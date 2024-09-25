export const photos = Array.from({length: 202}, (_, index) => ({
  img: `./gallery/image${index + 1}.jpg`,
  alt: `Image${index + 1}`
}));

// Fisher-Yates Shuffle Function
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      // Swap elements
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle the photos array
const shuffledPhotos = shuffleArray(photos);
export default function importAllImages(r) {
    const images = {};
    r.keys().forEach((key) => {
        images[key] = r(key).default;
    });
    return images;
}
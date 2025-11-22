const formatLabel = (key) =>
  key
    .replace('./', '')
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b(\w)/g, (match) => match.toUpperCase());

const mapContext = (ctx) => ctx.keys().map((key) => ({
  src: ctx(key),
  label: formatLabel(key)
}));

export const universityGallery = mapContext(
  require.context('./uni_images', false, /\.(png|jpe?g|gif)$/)
);

export const schoolGallery = mapContext(
  require.context('./scl_images', false, /\.(png|jpe?g|gif)$/)
);

export const volunteerGallery = mapContext(
  require.context('./Volu_images', false, /\.(png|jpe?g|gif)$/)
);

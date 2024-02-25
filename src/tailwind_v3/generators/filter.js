export default function ({ prefix }) {
  return `    
  .${prefix}filter {
    --blur: ;
    --brightness: ;
    --contrast: ;
    --grayscale: ;
    --hue-rotate: ;
    --invert: ;
    --saturate: ;
    --sepia: ;
    --drop-shadow: ;
    filter: var(--blur) var(--brightness) var(--contrast) var(--grayscale) var(--hue-rotate) var(--invert) var(--saturate) var(--sepia) var(--drop-shadow);
  }
  .${prefix}filter-none {
    filter: none;
  }
`;
}

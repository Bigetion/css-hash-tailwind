export default function generator({ prefix }) {
  return `    
  .${prefix}filter-none {
    filter: none;
    backdrop-filter: none;
  }
`;
}

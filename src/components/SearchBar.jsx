export default function SearchBar({ value, onChange, placeholder }) {
  return <label className="search"><span aria-hidden="true">⌕</span><input type="search" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} aria-label="Buscar en la tabla"/></label>;
}

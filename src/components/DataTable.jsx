export default function DataTable({ columns, rows, emptyMessage = 'No se encontraron registros.', actions }) {
  return <div className="table-scroll"><table><thead><tr>{columns.map(c => <th key={c.key}>{c.label}</th>)}{actions && <th>Acciones</th>}</tr></thead>
    <tbody>{rows.length ? rows.map(row => <tr key={row.id}>{columns.map(c => <td key={c.key}>{c.render ? c.render(row[c.key], row) : row[c.key]}</td>)}{actions && <td>{actions(row)}</td>}</tr>) : <tr><td colSpan={columns.length + (actions ? 1 : 0)} className="empty">{emptyMessage}</td></tr>}</tbody></table></div>;
}

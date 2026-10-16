import { useEffect, useState } from 'react';
const blanco = { nombre: '', apellido: '', correo: '', puesto: '', salario: '' };
export default function EmployeeForm({ selected, onSave, onCancel, employees }) {
  const [form, setForm] = useState(blanco);
  const [error, setError] = useState('');
  useEffect(() => { setForm(selected ? { ...selected } : blanco); setError(''); }, [selected]);
  const change = e => setForm(f => ({...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    const nombre = form.nombre.trim(), apellido = form.apellido.trim(), correo = form.correo.trim().toLowerCase(), puesto = form.puesto.trim(), salario = Number(form.salario);
    if (!nombre || !apellido || !correo || !puesto || form.salario === '' || !Number.isFinite(salario) || salario <= 0) { setError('Completa todos los campos y coloca un salario mayor que cero.'); return; }
    if (employees.some(emp => emp.correo.toLowerCase() === correo && emp.id !== selected?.id)) { setError('El correo ya está registrado.'); return; }
    onSave({ ...form, nombre, apellido, correo, puesto, salario });
    setForm(blanco); setError('');
  };
  return <form className="employee-form" onSubmit={submit}>
    <div className="form-title"><h3>{selected ? 'Editar empleado' : 'Registrar empleado'}</h3><p>Completa los datos del colaborador.</p></div>
    <div className="field-grid">
      <label>Nombre<input name="nombre" value={form.nombre} onChange={change} maxLength="80" required /></label>
      <label>Apellido<input name="apellido" value={form.apellido} onChange={change} maxLength="80" required /></label>
      <label>Correo electrónico<input name="correo" type="email" value={form.correo} onChange={change} maxLength="150" required /></label>
      <label>Puesto<input name="puesto" value={form.puesto} onChange={change} maxLength="100" required /></label>
      <label>Salario (Q)<input name="salario" type="number" min="0.01" step="0.01" value={form.salario} onChange={change} required /></label>
    </div>{error && <p className="error" role="alert">{error}</p>}
    <div className="form-actions"><button className="primary" type="submit">{selected ? 'Guardar cambios' : '+ Registrar empleado'}</button>{selected && <button type="button" className="subtle" onClick={onCancel}>Cancelar</button>}</div>
  </form>;
}

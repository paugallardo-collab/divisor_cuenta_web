import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { PantallaDivisor } from '../src/presentation/PantallaDivisor.jsx'
import { dependencias } from './fixtures.js'

function cambiar(label, value) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } })
}
function calcular() { fireEvent.click(screen.getByRole('button', { name: 'Calcular' })) }

it('Estado inicial y coma decimal', () => {
  render(<PantallaDivisor {...dependencias()} />)
  expect(screen.getByLabelText('Monto total')).toHaveValue('')
  expect(screen.getByLabelText('Personas')).toHaveValue('2')
  expect(screen.getByLabelText('Propina (%)')).toHaveValue('0')
  expect(screen.getByLabelText('Redondeo')).toHaveValue('exacto')
  cambiar('Monto total', '10,50')
  calcular()
  expect(screen.getByRole('status')).toHaveTextContent('5.25')
})
it.each(['Monto total', 'Personas', 'Propina (%)', 'Redondeo'])('Editar %s borra resultado anterior', label => {
  render(<PantallaDivisor {...dependencias()} />)
  cambiar('Monto total', '10')
  calcular()
  expect(screen.getByRole('status')).toHaveTextContent('5.00')
  cambiar(label, label === 'Redondeo' ? 'arriba' : '3')
  expect(screen.queryByRole('status')).not.toBeInTheDocument()
})
it('Corrige error y recalcula', () => {
  render(<PantallaDivisor {...dependencias()} />)
  cambiar('Monto total', 'abc')
  calcular()
  expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
  cambiar('Monto total', '100')
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  calcular()
  expect(screen.getByRole('status')).toHaveTextContent('50.00')
})
it.each(['', '12abc', '1,000.00', 'Infinity'])('Rechaza monto textual %s completo', value => {
  render(<PantallaDivisor {...dependencias()} />)
  cambiar('Monto total', value)
  calcular()
  expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
})
it('Rechaza personas fraccionarias y propina vacía', () => {
  render(<PantallaDivisor {...dependencias()} />)
  cambiar('Monto total', '100')
  cambiar('Personas', '2.5')
  calcular()
  expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
  cambiar('Personas', '2')
  cambiar('Propina (%)', '')
  calcular()
  expect(screen.getByRole('alert')).toHaveTextContent('Propina inválida')
})
it('La UI funciona con una nueva estrategia inyectada y sin red', () => {
  const deps = dependencias()
  const fetchAnterior = globalThis.fetch
  const fetch = vi.fn(() => { throw new Error('Sin red') })
  globalThis.fetch = fetch
  try {
    render(<PantallaDivisor {...deps} opciones={[{ id: 'nuevo', etiqueta: 'Nueva regla', estrategia: { aplicar: () => 42 } }]} />)
    cambiar('Monto total', '10')
    calcular()
    expect(screen.getByRole('status')).toHaveTextContent('42.00')
    expect(fetch).not.toHaveBeenCalled()
  } finally { globalThis.fetch = fetchAnterior }
})

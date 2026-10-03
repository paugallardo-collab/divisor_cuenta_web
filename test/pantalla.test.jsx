import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { PantallaDivisor } from '../src/presentation/PantallaDivisor.jsx'
import { dependencias } from './fixtures.js'

function ingresar(monto, personas, propina = '0') {
  fireEvent.change(screen.getByLabelText('Monto total'), { target: { value: monto } })
  fireEvent.change(screen.getByLabelText('Personas'), { target: { value: personas } })
  fireEvent.change(screen.getByLabelText('Propina (%)'), { target: { value: propina } })
  fireEvent.click(screen.getByRole('button', { name: 'Calcular' }))
}

it('100, 4, 10: muestra 27.50', () => {
  render(<PantallaDivisor {...dependencias()} />)
  ingresar('100', '4', '10')
  expect(screen.getByRole('status')).toHaveTextContent('27.50')
})

it('50 y cero personas: error sin resultado ni llamada al cálculo', () => {
  const deps = dependencias()
  const calcular = vi.fn(deps.calcular)
  render(<PantallaDivisor {...deps} calcular={calcular} />)
  ingresar('50', '0')
  expect(screen.getByRole('alert')).toHaveTextContent('Debe haber al menos una persona')
  expect(screen.queryByRole('status')).not.toBeInTheDocument()
  expect(calcular).not.toHaveBeenCalled()
})

it('abc en monto: Monto inválido sin cálculo', () => {
  const deps = dependencias()
  const calcular = vi.fn(deps.calcular)
  render(<PantallaDivisor {...deps} calcular={calcular} />)
  ingresar('abc', '4')
  expect(screen.getByRole('alert')).toHaveTextContent('Monto inválido')
  expect(screen.queryByRole('status')).not.toBeInTheDocument()
  expect(calcular).not.toHaveBeenCalled()
})

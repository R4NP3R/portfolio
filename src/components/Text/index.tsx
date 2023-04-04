import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
}
const Text = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Text

import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundaria'
  fontSize?: number
}
const Text = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Text

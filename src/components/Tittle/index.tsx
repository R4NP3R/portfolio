import { Tittle as TituloEstilo } from './styles'

import { Props } from './styles'

const Tittle = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Tittle

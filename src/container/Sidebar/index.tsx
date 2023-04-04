import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Tittle from '../../components/Tittle'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Tittle fontSize={20}>R4NP3R</Tittle>
      <Text fontSize={16} tipo="secundaria">
        R4NP3R
      </Text>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor front-end júnior
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

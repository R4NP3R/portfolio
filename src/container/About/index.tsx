import Tittle from '../../components/Tittle'
import Text from '../../components/Text'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Tittle fontSize={16}>Sobre mim</Tittle>
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quos
      maiores qui ipsam a accusantium illo in, voluptatum ratione, tenetur,
      atque sed! Fugiat, totam debitis consequatur pariatur eligendi sequi
      magnam?
    </Text>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=R4NP3R&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=R4NP3R&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

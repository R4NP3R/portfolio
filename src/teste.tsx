import styled from 'styled-components'

type Botaoprops = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<Botaoprops>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

function Teste() {
  return (
    <>
      <Botao principal fontSize="18px">
        CLika
      </Botao>
      <Botao principal={false} fontSize="14px">
        NaUm CLikA
      </Botao>
    </>
  )
}

export default Teste

import { Header as Container } from './styles'

import logo from '../../assets/logo.png'

export function Header(){
  return(
    <Container>
      <div>
        <input type="text" placeholder="Pesquisar"/>
        <select name="Organizar">
          <option value="">Mais antigas</option>
          <option value="">Mais novas</option>
        </select>
      </div>
      <div id="logo">
        <img src={logo} alt='logo'/>
      </div>
      <div id="divisor">
        <div></div>
      </div>
    </Container>
  )
}
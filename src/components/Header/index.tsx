import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkStyle = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="logo da empresa Voll" />
      <Container>
        <img src={perfil} alt="imagem de perfil do usuário" />
        <LinkStyle href="#">Sair</LinkStyle>
      </Container>
    </HeaderStyle>
  );
}

export default Header;

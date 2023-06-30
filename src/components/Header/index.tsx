import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

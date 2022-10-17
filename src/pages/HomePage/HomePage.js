import { HomeContainer, Loader, TotalValue, Forms } from "./HomePageStyles";
import GlobalStateContext from "../../Global/GlobalContext"
import { useContext } from "react"

const HomePage = () => {

  const { data, productsShopper } = useContext(GlobalStateContext);

  return (
    <>
      <HomeContainer>
        {data ? productsShopper : <Loader></Loader>}
      </HomeContainer>
    </>
  );
}
export default HomePage;
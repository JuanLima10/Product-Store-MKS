import { Products } from "@/components/Products/Products";
import { HomeContainer } from "./Styles";

export default function Home() {
  return (
    <HomeContainer maxWidth="lg">
      <Products />
    </HomeContainer>
  )
}

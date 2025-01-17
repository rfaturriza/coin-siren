import { Footer } from "../templates/footer";
import { Header } from "../templates/header";
import { Main, MainProps } from "../templates/main";

export interface LandingProps {
  mainProps: MainProps;
}
const Landing = ({ mainProps }: LandingProps) => (
  <>
    <Header />
    <Main {...mainProps} />
    <Footer />
  </>
);

export default Landing;

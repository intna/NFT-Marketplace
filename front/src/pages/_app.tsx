import type { AppProps } from "next/app";

import { Navbar } from "../../conponents/ComponentsIndex";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
);

export default App;

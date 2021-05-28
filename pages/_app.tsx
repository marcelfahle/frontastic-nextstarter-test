import { FrontasticProvider } from "../frontastic/provider";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <FrontasticProvider locale="en-US">
      <Component {...pageProps} />
    </FrontasticProvider>
  );
}

export default App;

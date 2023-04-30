import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Roboto Slab', serif;
  ${
    '' /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 1.85;
  overflow-x: hidden;
  margin: 0 auto;
  transition: 1.5s;
}

main {
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${'' /* min-height: 100vh; */}
}

${
  '' /* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */
}

body::-webkit-scrollbar {
  appearance: none;
  background: #000;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}
${
  '' /* section {
  margin-top: 50px;
} */
}

img {
  display: block;
    ${'' /* width: 100%; */}
    object-fit: cover;
    object-position: center center;
}
ul {
  list-style: none;
}
`;

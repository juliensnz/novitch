import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Temoins } from "./page/temoins";
import { Information } from "./page/information";
import { Home } from "./page/home";
import styled from "styled-components";
import { useData } from "./data";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue";
  padding: 30px 120px;
  background-image: url("./images/background.jpg");
  background-size: cover;
  min-height: 100vh;

  @media (max-width: 910px) {
    padding: 30px 100px;
  }
  @media (max-width: 500px) {
    padding: 30px 30px;
  }
`;
const Header = styled.nav``;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: left;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-bottom: 50px;

  @media (max-width: 675px) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Item = styled.ul`
  margin: 0 40px 0 0;
  text-transform: uppercase;
  color: #555;
  padding: 0;
  flex-shrink: 0;
  font-size: 20px;

  a {
    color: #555;
    font-weight: 300;
    text-decoration: none;
  }
`;

export const baseUrl = "development" === process.env.NODE_ENV ? "" : "/novitch";

const App: React.FC = () => {
  const pages = useData("pages");

  return (
    <Router>
      <Page>
        <Header>
          <Menu>
            {(Object.values(pages) as any[]).map(
              (page: { menu: string; url: string }) => (
                <Item key={page.url}>
                  <Link to={`${baseUrl}/${page.url}`}>{page.menu}</Link>
                </Item>
              )
            )}
          </Menu>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={`${baseUrl}/temoins`}>
            <Temoins />
          </Route>
          <Route path={`${baseUrl}/information`}>
            <Information />
          </Route>
          <Route path={`${baseUrl}/`}>
            <Home />
          </Route>
        </Switch>
      </Page>
    </Router>
  );
};

export default App;

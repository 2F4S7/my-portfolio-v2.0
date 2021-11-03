import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { addBackToTop } from 'vanilla-back-to-top';

import { accentColor } from './assets/stylesVariables';

import AppBar from './components/AppBar';
import Container from './components/Container';
import LoaderComponent from './components/LoaderComponent';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

// const ProjectsView = lazy(() =>
//   import("./views/ProjectsView" /* webpackChunkName: "projects-view" */)
// );

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: accentColor,
    });
  }, []);
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;

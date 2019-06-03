import React, { Suspense, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import LayoutContainer from './layout/Layout';
import { AuthContext } from './auth/AuthProvider';
import { fullAccess, unAuthorized } from './services/Routes';

const app = props => {
  const authContext = useContext(AuthContext);
  const routes = authContext.isAuthenticated ? fullAccess : unAuthorized;
  const cssClass = ['isfullheight'];
  return (
    <LayoutContainer className={cssClass.join(' ')}>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </LayoutContainer>
  )
};

export default withRouter(app);

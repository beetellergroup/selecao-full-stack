import React from "react";
import "./views/styles/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/dashboard" exact />
            <Route component={Login} path="/" />
            <Route component={Register} path="/register" />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;


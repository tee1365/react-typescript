import React from "react";
import { AppBar, Toolbar, IconButton, Button, Fab } from "@material-ui/core";
import { Menu, Favorite } from "@material-ui/icons";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="row justify-content-md-center">
            <div className="col-1">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
            </div>
            <div className="text-center col">
              <Fab color="secondary" aria-label="like">
                <Favorite />
              </Fab>
            </div>
            <Button color="inherit" className="col-1">
              Search
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;

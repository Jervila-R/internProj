import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            React Material-UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;

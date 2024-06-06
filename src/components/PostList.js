import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';
import { List, ListItem, ListItemText, Typography, Container, TextField } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <TextField 
        label="Search" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id} divider>
            <ListItemText 
              primary={post.title} 
              secondary={post.body} 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;

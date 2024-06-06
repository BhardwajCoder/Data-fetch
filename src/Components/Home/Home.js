
import React,{useState,useEffect} from 'react';
import { Container, TextField, List, ListItem, ListItemText } from '@mui/material';
const Home = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((data) => {
            setItems(data);
            setFilteredItems(data);
          });
      }, []);
    
      useEffect(() => {
        const results = items.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
      }, [searchTerm, items]);
    
  return (
    <Container>
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <List>
      {filteredItems.map(item => (
        <ListItem key={item.id}>
          <ListItemText primary={item.title} secondary={item.body} />
        </ListItem>
      ))}
    </List>
  </Container>
  );
};

export default Home;

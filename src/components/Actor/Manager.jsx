import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TvIcon from '@mui/icons-material/Tv';
import DeleteIcon from '@mui/icons-material/Delete';
import './Manager.scss';
import SearchIcon from '@mui/icons-material/Search';



export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const items = [
    { text: 'Add Staff', icon: <AddIcon /> },
    { text: 'Update Staff Info', icon: <EditIcon /> },
    { text: 'Add product', icon: <MailIcon /> },
    { text: 'Delete Product', icon: <BarChartIcon /> },
    { text: 'Update Product', icon: <VisibilityIcon /> },
    { text: 'View Product List', icon: <VisibilityIcon /> },
    { text: 'View Product Info', icon: <VisibilityIcon /> },
    { text: 'View Counter Info', icon: <VisibilityIcon /> },
    { text: 'Display Gold Price Chart', icon: <TvIcon /> },
    { text: 'Update Counter', icon: <EditIcon /> },
    { text: 'Add Promotion', icon: <AddIcon /> },
    { text: 'Delete Promotion', icon: <DeleteIcon /> },
    { text: 'View Promotion List', icon: <VisibilityIcon /> },
    { text: 'View Promotion Request	', icon: <VisibilityIcon /> },
    { text: 'View Staff Info', icon: <VisibilityIcon /> },
    { text: 'Search Staff', icon: <SearchIcon /> },
    { text: 'Search Product	', icon: <SearchIcon /> }
  ];



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
  {items.map((item) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
       <Button> 
        <h3>home</h3>
        </Button>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon/>}></Button>
    

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className='manager'>
      <h1>welcome Manager </h1>

      </div>
    </div>
  );
}

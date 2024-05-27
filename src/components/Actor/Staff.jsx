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
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Staff.scss';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const items = [
    { text: 'Add Item', icon: <AddIcon /> },
    { text: 'Update Cart', icon: <AddShoppingCartIcon/> },
    { text: 'Delete Item', icon: <DeleteIcon /> },
    { text: 'Update Product', icon: <BrowserUpdatedIcon /> },
    { text: 'View Cart', icon: <ShoppingCartIcon /> },
    { text: 'Print Receipt', icon: <PrintIcon /> },
    { text: 'Print Warranty	', icon: <PrintIcon /> },
    { text: 'Check out', icon: <MonetizationOnIcon /> },
    { text: 'Refund', icon: <SwapHorizIcon /> },
    { text: 'View Product Info', icon: <VisibilityIcon /> },
    { text: 'View Order List', icon: <VisibilityIcon /> },
    { text: 'View Order Info', icon: <VisibilityIcon /> },
    { text: 'Update Order', icon: <EditIcon /> },
    { text: 'View Customer List	', icon: <VisibilityIcon /> },
    { text: 'Change Counter Status', icon: <VisibilityIcon /> },
    { text: 'View Staff Info', icon: <VisibilityIcon /> },
    { text: 'Search Customer', icon: <SearchIcon /> },
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
      <div className="staff">
      <h1>welcome staff ... </h1>

      </div>
    </div>
  );
}

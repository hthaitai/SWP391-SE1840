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
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const items = [
    { text: 'Add Manager', icon: <AddIcon /> },
    { text: 'Update Manager Info', icon: <EditIcon /> },
    { text: 'Change Manager Status', icon: <MailIcon /> },
    { text: 'View Dashboard', icon: <BarChartIcon /> },
    { text: 'View Manager List', icon: <VisibilityIcon /> },
    { text: 'View Manager Info', icon: <VisibilityIcon /> }
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
      <h1>welcome Admin</h1>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

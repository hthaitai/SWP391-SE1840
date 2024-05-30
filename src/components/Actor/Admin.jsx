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
import './Admin.scss';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const items = [
    { text: 'Add Manager', icon: <AddIcon />, path: '/add-manager' },
    { text: 'Update Manager Info', icon: <EditIcon />, path: '/update-manager' },
    { text: 'Change Manager Status', icon: <MailIcon />, path: '/change-manager-status' },
    { text: 'View Dashboard', icon: <BarChartIcon />, path:'/view-dashboard' },
    { text: 'View Manager List', icon: <VisibilityIcon/>, path: '/view-manager-list'},
    { text: 'View Manager Info', icon: <VisibilityIcon />,path:'/view-manager-info' },
    { text: 'Manage Manager', icon: <VisibilityIcon />,path:'/manage-manager' }
  ];



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
  {items.map((item) => (
    <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path || '#'}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon/>}></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className="admin">
      <h1>welcome Admin</h1>

      </div>
    </div>
  );
}

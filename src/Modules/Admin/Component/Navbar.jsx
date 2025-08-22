import React from 'react'
import { Link } from "react-router-dom";
import {Drawer, List, ListItem, ListItemText, Box, Divider, Toolbar, Typography} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KanbanIcon from "@mui/icons-material/ViewKanban";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { LibraryAdd  } from '@mui/icons-material';

export default function Navbar() {

    const menuItems = [
        { text: "Dashboard", icon: <DashboardIcon />, path: '/admin/dash-board'},
        { text: "Add Package", icon: <LibraryAdd />, path: '/admin/add-Package'},
        // { text: "Email", icon: <EmailIcon />, path: '/'},
        // { text: "Chat", icon: <ChatIcon />, path: '/'},
        { text: "BookingStatus", icon: <KanbanIcon />, path: '/admin/BookingStatus'},
        { text: "Admins", icon: <ContactMailIcon />, path: '/admin/home'},
        // { text: "Calendar", icon: <CalendarTodayIcon />, path: '/'},
        // { text: "Invoices", icon: <ReceiptIcon />, path: '/'},
        // { text: "Settings", icon: <SettingsIcon />, path: '/'},
      ];

    const drawerWidth = 280;


  return (
    <div>
      <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#f5f6fa" },
      }}
    >
      <Toolbar sx={{ justifyContent: "center", backgroundColor: "#6200ea", color: "#fff" }}>
        <Typography variant="h6">Kleon</Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: "auto", p: 2 }}>
        <List>
          {menuItems.map(({ text, icon, path }, index) => (
            <Link to={path} key={index} sx={{ textDecoration: 'none'}}>
            <ListItem button key={text} sx={{ borderRadius: 2, mb: 1, color: 'black', ":hover":{ color: 'grey'} }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                {icon}
                <ListItemText primary={text} primaryTypographyProps={{ fontSize: "1rem" }} />
              </Box>
            </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
    </div>
  )
}

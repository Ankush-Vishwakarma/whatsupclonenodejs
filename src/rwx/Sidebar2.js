


import { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Divider, Collapse, ListItemText } from "@mui/material";
import {
  CottageOutlined,
  BusinessCenterOutlined,
  RepeatOutlined,
  GroupOutlined,
  HelpOutlineOutlined,
  TranslateOutlined,
  AccessibilityOutlined,
  LogoutOutlined,
  ExpandMoreOutlined,
  ChevronRightOutlined,
  
} from "@mui/icons-material";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

const Sidebar2 = () => {
  const [selectedIndex, setSelectedIndex] = useState("dashboard");
  const [openRenewals, setOpenRenewals] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  const handleListItemClick = (path) => {
    setSelectedIndex(path);
  };

  const handleRenewalsClick = () => {
    setOpenRenewals(!openRenewals);
  };

  const toggleSidebarWidth = () => {
    setSidebarWidth(sidebarWidth === 143 ? 250 : 143);
  };

  const drawerWidth = 240;
const NARROW_WIDTH = 143;
  const renderListItem = (item) => (
    <ListItem
      key={item.text}
      button={!item.dropdown}
      disablePadding
      onClick={() => handleListItemClick(item.path)}
      selected={selectedIndex === item.path}
      sx={{
        background: selectedIndex === item.path ? "white" : "none",
        width: "90%",
        height: "40px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center"
      }}
    >
      <ListItemButton>
        <ListItemIcon
          sx={{
            width: "20px",
            height: "22.5px",
            color: selectedIndex === item.path ? "black" : "white"
          }}
        >
          {item.icon}
        </ListItemIcon>
        {sidebarWidth > 143 && (
          <ListItemText
            sx={{
              color: selectedIndex === item.path ? "black" : "white",
              marginLeft: "10px"
            }}
            primary={item.text}
          />
        )}
      </ListItemButton>
    </ListItem>
  );



  const renderDropdownBox = (item) => (
    <Box
      key={item.text}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #fff',
        borderRadius: '5px',
        backgroundColor: '#fff',
        margin:"10px",
      }}
    >
      <ListItem
        button
        disablePadding
        onClick={handleRenewalsClick}
        sx={{
          background: selectedIndex === item.path ? "white" : "none",
          width: "100%",
          display:'flex',
          justifyContent:'space-between'
        }}
      >
        <ListItemButton>
          <ListItemIcon
            sx={{
              width: "20px",
              height: "22.5px",
              color: selectedIndex === item.path ? "black" : "#327874"
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              position: "relative",
              right: "22px",
              color: selectedIndex === item.path ? "black" : "#327874",
            }}
            primaryTypographyProps={{
              fontSize: "12px",
              fontFamily: "Noto Sans, sans-serif"
            }}
            primary={item.text}
          />
          {item.dropdown && (
            <ListItemIcon
              sx={{
                width: "20px",
                height: "22.5px",
                color: selectedIndex === item.path ? "#327874" : "#327874",
                position: "relative",
                right: "0px"
              }}
            >
              {openRenewals ? <ExpandMoreOutlined /> : <ChevronRightOutlined />}
            </ListItemIcon>
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openRenewals}>
        <List disablePadding>
          {item.submenu.map((subItem) => (
            <ListItem
              button
              key={subItem.text}
              onClick={() => handleListItemClick(subItem.path)}
              selected={selectedIndex === subItem.path}
              sx={{
                background: selectedIndex === subItem.path ? "white" : "none",
                width: "100%",
              }}
            >
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#38A29D",
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemText
                  sx={{
                    position: "relative",
                    right: "22px",
                    color: "#327874",
                    paddingInline: "40px",
                  }}
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontFamily: "Noto Sans, sans-serif",
                  }}
                  primary={subItem.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );

  const homeList = [
    {
      text: "Home",
      path: "dashboard",
      icon: <CottageOutlined />,
    },
    {
      text: "My IP Portfolio",
      path: "my-portfolio",
      icon: <BusinessCenterOutlined />,
    },
    {
      text: "My Renewals",
      path: "my-renewals",
      dropdown: true,
      icon: <RepeatOutlined />,
      submenu: [
        {
          text: "Patent",
          path: "my-renewals-option-1",
        },
        {
          text: "Trademark",
          path: "my-renewals-option-2",
        }
      ]
    },
    {
      text: "Analytics & Reports",
      path: "analytics-reports",
      icon: <AnalyticsOutlinedIcon  />,
    },
  ];
  const groupList = [
    {
      text: "Group Management",
      path: "group-management",
      icon: <GroupOutlined />,
    },
    {
      text: "Group Portfolio",
      path: "group-portfolio",
      icon: <GroupOutlined />,
    }
  ];

  const helpList = [
    {
      text: "Help",
      path: "help",
      icon: <HelpOutlineOutlined />,
    },
    {
      text: "Language",
      path: "language",
      icon: <TranslateOutlined />,
    },
    {
      text: "Accessibility",
      path: "accessibility",
      icon: <AccessibilityOutlined />,
    },
    {
      text: "Logout",
      path: "logout",
      icon: <LogoutOutlined />,
    }
  ];

  return (
    <>
      <Box data-testid="sidebar" sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${sidebarWidth}px)`,
            ml: sidebarWidth
          }}
        >
          <Box
            style={{
              color: 'white',
              backgroundColor: '#327874',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50px',
              width: '50px'
            }}
            onClick={toggleSidebarWidth}
          >
            <ArrowBackIosNewRoundedIcon style={{ color: 'white', fontSize: '28px',top:"40px" }} />
          </Box>
        </AppBar>

        <Drawer
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: sidebarWidth,
              boxSizing: 'border-box',
              top: "64px",
              overflowX: "hidden",
            },
          }}
          variant="permanent"
          anchor="left"
        >
               <List sx={{ top: "18px" }}>
  {homeList.map((item) =>
    sidebarWidth <= NARROW_WIDTH ? (
      <ListItem
        key={item.text}
        button={!item.dropdown}
        disablePadding
        onClick={() => handleListItemClick(item.path)}
        selected={selectedIndex === item.path}
        sx={{
          background: selectedIndex === item.path ? "white" : "none",
          width: "90%",
          height: "40px",
          borderRadius: "5px"
        }}
      >
        <ListItemButton>
          <ListItemIcon
            sx={{
              width: "20px",
              height: "22.5px",
              color: selectedIndex === item.path ? "black" : "white"
            }}
          >
            {item.icon}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    ) : item.dropdown ? (
      <div key={item.text}>
        {renderDropdownBox(item)}
        <Collapse in={openRenewals}></Collapse>
      </div>
    ) : (
      renderListItem(item)
    )
  )}
</List>
          <Divider sx={{
            background: "white",
            top: "18px",
            position: "relative",
            width: "85%",
            left: "10px"
          }} />
             <List sx={{ top: "16px" }}>
  {groupList.map((item) =>
    sidebarWidth <= NARROW_WIDTH ? (
      <ListItem
        key={item.text}
        button={!item.dropdown}
        disablePadding
        onClick={() => handleListItemClick(item.path)}
        selected={selectedIndex === item.path}
        sx={{
          background: selectedIndex === item.path ? "white" : "none",
          width: "90%",
          height: "40px",
          borderRadius: "5px"
        }}
      >
        <ListItemButton>
          <ListItemIcon
            sx={{
              width: "20px",
              height: "22.5px",
              color: selectedIndex === item.path ? "black" : "white"
            }}
          >
            {item.icon}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    ) : item.dropdown ? (
      <div key={item.text}>
        {renderDropdownBox(item)}
        <Collapse in={openRenewals}></Collapse>
      </div>
    ) : (
      renderListItem(item)
    )
  )}
</List>
          <Divider sx={{
            background: "white",
            top: "104px",
            position: "relative",
            width: "85%",
            left: "10px"
          }} />
           <List sx={{ top: "92px" }}>
            {helpList.map((item) => (
              <div key={item.text}>
                {sidebarWidth > NARROW_WIDTH ? renderListItem(item) : (
                  <ListItem
                    key={item.text}
                    button={!item.dropdown}
                    disablePadding
                    onClick={() => handleListItemClick(item.path)}
                    selected={selectedIndex === item.path}
                    sx={{
                      background: selectedIndex === item.path ? "white" : "none",
                      width: "90%",
                      height: "40px",
                      borderRadius: "5px"
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          width: "20px",
                          height: "22.5px",
                          color: selectedIndex === item.path ? "black" : "white"
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                )}
              </div>
            ))}
          </List>
        </Drawer>
      </Box >
    </>
  );
}

export default Sidebar2;


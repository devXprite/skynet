import { Avatar, ListItemIcon, ListItemText } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { Link } from "react-router-dom";


const ProfileBtn = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        className="!w-8 !h-8 md:!w-10 md:!h-10 cursor-pointer"
        onClick={handleClick}

      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        className="mt-2"
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CgProfile />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MdLogout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
        <Link to="/contact" className="text-decoration-none text">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CiChat1 />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default ProfileBtn;
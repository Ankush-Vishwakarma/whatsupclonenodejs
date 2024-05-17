import { useState, useContext, useEffect } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { UserContext } from '../../../context/UserProvider';
import InfoDrawer from '../../drawer/Drawer';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

// Placeholder implementation of verifyToken function
const verifyToken = (token) => {
    // Implement token verification logic here
    // For demonstration, always return true
    return true;
};

// Placeholder implementation of extractUserFromToken function
const extractUserFromToken = (token) => {
    // Implement logic to extract user information from the token
    // For demonstration, return an object with dummy user data
    return {
        account: 'exampleAccount',
        person: 'examplePerson'
    };
};

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const { setAccount, setShowloginButton } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const isValidToken = verifyToken(token);
            if (isValidToken) {
                setShowloginButton(false);
                const { account, person } = extractUserFromToken(token);
                setAccount(account);
                setPerson(person);
            } else {
                setShowloginButton(true);
                localStorage.removeItem('accessToken');
            }
        } else {
            setShowloginButton(true);
        }
    }, [setShowloginButton, setAccount, setPerson]);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const toggleDrawer = () => {
        setOpenDrawer(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setShowloginButton(true);
        setAccount('');
        setPerson({});
    };

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuOption>
                {localStorage.getItem('accessToken') && (
                    <MenuOption onClick={handleLogout}>Logout</MenuOption>
                )}
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    );
};

export default HeaderMenu;

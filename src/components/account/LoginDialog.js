import { useContext, useState } from 'react';
import { Box, Dialog, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; 
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const StyledBox = styled(Box)`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled(Box)`
  padding: 50px 0 56px 56px;
`;

const QRCode = styled('img')({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 20px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  && > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

const {setAccount}  = useContext(AccountContext);

  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(null);

  const onLoginSuccess = async (res) => {
    try {
      const decoded = jwtDecode(res.credential); 
      setAccount(decoded);
      await addUser(decoded);
      console.log("Login success:", decoded);

    } catch (err) {
      console.error("JWT decoding error:", err);
      setError("Failed to decode JWT.");
    }
  };

  const onLoginError = (error) => {
    console.error("Login error:", error);
    setError("Login failed. Please try again.");
  };

  return (
    <Dialog  
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    >
      <StyledBox>
        <Container>
          <Title>To Use WhatsApp on your computer</Title>
        
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Setting and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone at this screen to capture the QR code</ListItem>
          </StyledList>
        </Container>
    
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt='WhatsApp Web QR Code' aria-label="WhatsApp Web QR Code" />
          <Box style={{ position: "absolute", top: "50%", transform: "translateX(25%)" }}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </StyledBox>
      {error && <Typography color="error">{error}</Typography>}
    </Dialog>
  );
};

export default LoginDialog;

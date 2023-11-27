import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



const LogOutAlert = ({isOpen, onClose, setIsAuthenticated, isAuthenticated}) => {
 
  const navigate = useNavigate();

  const handleAlertClose = () => {
    onClose();
  };

  const LogOutConfirm = () => {
    
    setIsAuthenticated(false);
    onClose();
    navigate("/");
    // Sätter auth till false, sedan stängs dialogrutan och man skickas till förstasidan.
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Du är påväg att logga ut, är du säker?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Medans du är utloggad kanske du missar viktiga inlägg från dina
          vänner.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={LogOutConfirm}>Logga ut</Button>
        {/* Loggar ut användaren */}
        <Button onClick={handleAlertClose}>Avbryt utloggning</Button>
        {/* Avbryter utloggning */}
      </DialogActions>
    </Dialog>
  );
};

export default LogOutAlert;

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LogOutAlert = ({
  isOpen,
  onClose,
  setIsAuthenticated,
  isAuthenticated,
}) => {
  const { t, i18n } = useTranslation();

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
      <DialogTitle id="alert-dialog-title">{t("MainPage.3")}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t("MainPage.4")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={LogOutConfirm}>{t("MainPage.3")}</Button>
        {/* Loggar ut användaren */}
        <Button onClick={handleAlertClose}>{t("MainPage.6")}</Button>
        {/* Avbryter utloggning */}
      </DialogActions>
    </Dialog>
  );
};

export default LogOutAlert;

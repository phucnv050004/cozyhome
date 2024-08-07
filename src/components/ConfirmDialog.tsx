import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonCancel, ButtonOk } from "./styled";

type ConfirmDialogProps = {
    confirm: boolean;
    onConfirm: (confirm: boolean) => void;
    onDelete: () => void;
};

export default function ConfirmDialog({
    confirm,
    onConfirm,
    onDelete,
}: ConfirmDialogProps) {
    const handleClose = () => {
        onConfirm(false);
    };

    const handleAgree = () => {
        onConfirm(false);
        onDelete();
    };

    return (
        <Dialog
            open={confirm}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ban co muon xoa san pham nay ko?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
                <ButtonOk onClick={handleAgree} autoFocus>
                    OK
                </ButtonOk>
            </DialogActions>
        </Dialog>
    );
}

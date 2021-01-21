import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttons:{
        background: " radial-gradient(circle, rgba(42,128,20,1) 2%, rgba(242,151,54,1) 100%)",
    }
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
export default function StronaFilmu(props) {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        props.dispatch({type: 'zmienTrue'})
        setOpen(false);
    };
    return (
        <div>
            <Button fullWidth className={classes.buttons} onClick={handleOpen}>
pokaż            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    {props.szukanie===false ?(props.film.title):null}
                    {props.szukanie===false ?( <img
                        src={props.film.poster}
                        alt="new"
                        style={{width: 200, height: 200, position: 'absolute', top: 20, left: 470}}
                    />):null}
                  <p> ocena: {props.szukanie===false ?(props.film.rating):null}</p>

                    <p>   {props.szukanie===false ?(props.film.length):null}</p>
                    <p>   {props.szukanie===false ?(props.film.plot):null}</p>
                </div>
            </Modal>
        </div>
    );

}
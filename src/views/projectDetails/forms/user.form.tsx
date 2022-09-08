import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, useMediaQuery} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {useForm, Controller} from "react-hook-form";


interface IUserForm {
    open: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
}


const UserForm = (props:IUserForm) => {
    const theme = useTheme();
    const {open, onClose, onSave} = props;
    const {register, handleSubmit, watch, control, formState: {errors}} = useForm({
        defaultValues: {
            first_name: '',
            last_name: ''
        }
    });
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleSave = (data: any) => {
        onSave(data)
    }


    return <div>

        <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
            <DialogTitle>New User</DialogTitle>
            <DialogContent>
                <Grid container={true} spacing={4} style={{marginTop: 25}}>
                    <Grid item={true} xs={12}>
                        <Controller
                            name="first_name"
                            control={control}
                            render={({field}) => <TextField {...field} label={'First Name'}/>}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Controller
                            name="last_name"
                            control={control}
                            render={({field}) => <TextField {...field} label={'Last Name'}
                                                           />}
                        />
                    </Grid>
                </Grid>


            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit(handleSave)}>Save</Button>
            </DialogActions>
        </Dialog>
    </div>
}

export {UserForm}

import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, useMediaQuery} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {useForm, Controller} from "react-hook-form";


interface IProjectForm {
    open: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
}

const ProjectForm = (props: IProjectForm) => {
    const theme = useTheme();
    const {open, onClose, onSave} = props;
    const {register, handleSubmit, watch, control, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            description: ''
        }
    });
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleSave = (data: any) => {
        onSave(data)
    }


    return <div>

        <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
            <DialogTitle>New Project</DialogTitle>
            <DialogContent>
                <Grid container={true} spacing={4} style={{marginTop: 25}}>
                    <Grid item={true} xs={12}>
                        <Controller
                            name="name"
                            control={control}
                            render={({field}) => <TextField {...field} label={'Name'}/>}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Controller
                            name="description"
                            control={control}
                            render={({field}) => <TextField {...field} label={'description'}
                                                            multiline
                                                            rows={4}/>}
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

export {ProjectForm}

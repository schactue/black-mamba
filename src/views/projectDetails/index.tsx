import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {gridSpacing} from "../../store/constant";
import {UserForm} from "./forms/user.form";
import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import {GetProjectQuery, Project} from "../../API";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {

    const params = useParams();
    const [userList, setUserList] = useState([{first_name: 'max', last_name: 'muster', id: '1'}]);
    const [openUserForm, setOpenUserForm] = useState(false);
    const [project, setProject] = useState<Project>(null)


    const saveUser = (formData: any) => {
        // console.log('formData: ', formData)
        setUserList([...userList, {...formData, id: Math.floor(Math.random() * 10)}])
        setOpenUserForm(false)
    }

    const handleClickOnRow = (event, row) => {
        console.log(row, event)
    }

    const fetchProject = () => {
        (
            API.graphql({query: queries.getProject,  variables: { id: params.id }}) as Promise<{ data: GetProjectQuery }>
        ).then((data: { data: GetProjectQuery  }) => {
            console.log(data)
             setProject(data.data.getProject)
        });
    }

    useEffect(() => {
        fetchProject()
    },[params])


    return <Grid container spacing={gridSpacing}>

        <Grid item xs={12}>
            <h1>Project: <span>{project && project.name?project.name:''}</span></h1>
        </Grid>


        <Grid item xs={6}>
           <span style={{fontSize:28}}>Users</span>
        </Grid>
        <Grid item xs={6} style={{textAlign:'right'}}>
            <Button variant="outlined" startIcon={<AddIcon/>} onClick={() => setOpenUserForm(true)}>
                Add
            </Button>
        </Grid>

        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                hover
                                onClick={(event) => handleClickOnRow(event, row)}
                            >
                                <TableCell component="th" scope="row">
                                    {row.first_name}
                                </TableCell>
                                <TableCell>{row.last_name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>
        <UserForm onSave={saveUser} onClose={() => setOpenUserForm(false)} open={openUserForm}/>
    </Grid>
}

export {ProjectDetails}

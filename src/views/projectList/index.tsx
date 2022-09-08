import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import {API} from 'aws-amplify';
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {gridSpacing} from "../../store/constant";
import {ProjectForm} from "./forms/project.form";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import {ListProjectsQuery} from "../../API";
import {useMountEffect} from "../../hooks/useOnMount.hook";
import {Observable} from 'zen-observable-ts';


const ProjectList = () => {

    const [projectList, setProjectList] = useState([]);
    const [openProjectForm, setOpenProjectForm] = useState(false);
    let navigate = useNavigate();


    const saveProject = async (formData: any) => {
        const newTodo = await API.graphql({query: mutations.createProject, variables: {input: formData}});
        console.log('newTodo: ', newTodo)
        setOpenProjectForm(false)
    }


    const handleClickOnRow = (event, row) => {
        console.log(row, event)
        navigate(`project/${row.id}`);
    }

    const fetchProjects = () => {
        (
            API.graphql({query: queries.listProjects,  variables:{sortDirection: 'DESC'}}) as Promise<{ data: ListProjectsQuery }>
        ).then((data: { data: ListProjectsQuery }) => {
            setProjectList(data.data.listProjects.items)
        });
    }

    useMountEffect(() => {

        fetchProjects()
    })


    useEffect(() => {

        const subscription = (API.graphql({
            query: subscriptions.onCreateProject,
        }) as Observable<any>).subscribe({
            next: (payload) => {
                console.log(payload)

                fetchProjects()

            },
            error: (error) => console.warn(error),
        });
        return () => subscription.unsubscribe();
    }, []);


    return <Grid container spacing={gridSpacing}>

        <Grid item xs={12}>
            <h2>Projects</h2>
        </Grid>
        <Grid item xs={12}>
            <Button variant="outlined" startIcon={<AddIcon/>} onClick={() => setOpenProjectForm(true)}>
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
                        {projectList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                hover
                                onClick={(event) => handleClickOnRow(event, row)}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>
        <ProjectForm onSave={saveProject} onClose={() => setOpenProjectForm(false)} open={openProjectForm}/>
    </Grid>
}


export default ProjectList;

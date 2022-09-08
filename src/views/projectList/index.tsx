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
import {useState} from "react";
import {ProjectForm} from "./components/project.form";

const ProjectList = () => {

    const [projectList, setProjectList] = useState([{name: 'project-1', description: 'lorem'}, {
        name: 'project-2',
        description: 'lorem'
    }]);
    const [openProjectForm, setOpenProjectForm] = useState(false);


    const saveProject = (formData: any) => {
       // console.log('formData: ', formData)
        setProjectList([...projectList, formData])
        setOpenProjectForm(false)
    }

    return <Grid container spacing={gridSpacing}>
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

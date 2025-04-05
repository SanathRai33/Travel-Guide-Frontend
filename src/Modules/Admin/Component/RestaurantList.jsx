import React from 'react'
import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function RestaurantList() {

    const [Deletedata, setDeletedata] = useState();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:7002/restaurant/get')
            .then((res) => {
                console.log(res, "Data...")
                setData(res.data);
            })
            .catch(() => {
                console.log("error")

            })
    }, [Deletedata])

    console.log(data)

    const HandleDelete = (id) => {
        axios.delete(`http://127.0.0.1:7002/restaurant/delete/${id}`)
            .then((res) => {
                alert("deleted Successfully");
                setDeletedata(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <Box sx={{ display: "flex", marginTop: "80px" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ textAlign: "center" }}>No</TableCell>
                            <TableCell sx={{ textAlign: "center" }}>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Cuisine</TableCell>
                            <TableCell>Timings</TableCell>
                            <TableCell>Facilities</TableCell>
                            <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data.map((res, i) => (
                            <TableRow>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell><img src={`http://localhost:7002/api/uploads/${res.image}`} width="100px" height="100px" alt={`restaurant${i + 1}`} /></TableCell>
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.price}</TableCell>
                                <TableCell>{res.location}</TableCell>
                                <TableCell>{res.cuisine}</TableCell>
                                <TableCell>{res.timings}</TableCell>
                                <TableCell>{res.facilities}</TableCell>
                                <TableCell sx={{ display: "flex", alignItems: "center", gap: "8px", height: "133px" }}>
                                    <Button variant="contained" color="error" onClick={() => HandleDelete(res._id)}>
                                        Delete
                                    </Button>
                                    <Link to={`/admin/RestaurantUpdate/${res._id}`}><Button variant="contained" color="success">
                                        Update
                                    </Button></Link>
                                    <Link to={`/admin/RestaurantView/${res._id}`}><Button variant="contained">SingleView</Button></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

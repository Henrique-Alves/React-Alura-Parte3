import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const Tabela = props => {
    // remove os dados;
    const CellDeleta = ({ removeDados, id}) => {
    
        return (
            <TableCell>
                <Button onClick={() => { removeDados(id) }}
                    variant="contained" color="primary">Remover</Button>
            </TableCell>
        )
    }
     
    const TituloDeleta = ({removeDados}) => {
        //se ocorrer um erro, retornará null caso não cria titulo Remove;
        if (!removeDados) {
            return null
        }
        return <TableCell>Remover</TableCell>
    }

    const { campos, dados, removeDados } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {/* cria os titulos da tabela; */}
                    {
                        campos.map(campo => (
                            <TableCell key={campo.id}>{campo.titulo}</TableCell>
                        ))
                    }
                    <TituloDeleta removeDados={removeDados} />
                </TableRow>
            </TableHead>
            <TableHead />

            <TableBody>
                {/* cria o corpo da tabela; */}
                {dados.map(dados => (
                    <TableRow key={dados.id}>
                        {
                            campos.map(campo => (
                                <TableCell>{dados[campo.dado]}</TableCell>
                            ))
                        } 
                        {/* remove dados;*/}
                        <CellDeleta id={dados.id} removeDados={removeDados}/>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Tabela;
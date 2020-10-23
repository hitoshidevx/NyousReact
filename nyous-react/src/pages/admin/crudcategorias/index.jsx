import React from 'react';
import {Container} from 'react-bootstrap';

import Rodape from '../../../components/rodape';
import Menu from '../../../components/menu';
import Titulo from '../../../components/titulo';

const CrudCategorias = () =>{

    return (

        <div>
            <Menu />
            <Container>
                <Titulo titulo="Categorias" chamada="Gerencia as suas categorias" />
            </Container>
            <Rodape />
        </div>

    )


}

export default CrudCategorias;
import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useEstilos = makeStyles({
    titulo: {
        textAlign: "center",
        color: "#000066"
    }
})

const Sobre = () => {
    const classes = useEstilos()
    return (
        <Fragment>
            <Header />
            <Container maxWidth='sm'>
                <Typography className={classes.titulo} variant='h1' component="h2">
                    Sobre
                </Typography>
                
                <Typography variant='body1' component='p'>
                    <Box textAlign="justify" m={1}> Você certamente já comprou um livro pela capa. No mínimo, foi influenciado pelo título e pela diagramação para adquiri-lo, ainda que não tenha se dado conta disso.

                    Mas mesmo achando que você foi vítima de uma enganação, não fique triste. Você não foi o primeiro e nem será o último. A tipologia e as cores de qualquer peça ativam nosso sistema neural e rapidamente associam preferências visuais. Daí, surge o desejo e consequentemente a aquisição. Existem pessoas sendo pagas para fazer isso acontecer.

                    Esse impulso pode até parecer um vilão, mas ele é natural e até mesmo necessário. São as referências estéticas de consumo que compõem a nossa personalidade. E portanto, é normal que esses detalhes, como a capa ou o prefácio de um livro, tornem-se o argumento irracional que determina a decisão final de comprar aquele monte de papel amarrado.

                    Após ser levado pelo impulso de pegar o livro na mão e folheá-lo já caminhando para a fila do caixa, surge um elemento ainda mais poderoso que pode fazer você não apenas se apaixonar pelo livro, como garantir a necessidade de terminá-lo o mais rápido possível: o parágrafo perfeito.

                    Ele é o que marca a obra e, em alguns casos, rende até citação e, para os mais modernos, até foto no Instagram. Esse tal parágrafo pode nem ser o mais relevante para o enredo da obra, mas ele te marca de um modo que o livro torna-se inesquecível só por conta daquela sequência de palavras. De repente, você se vê indo procurá-lo na prateleira só para relembrar a construção daquelas frases marcantes.

                   Não precisa ser o primeiro, nem o último. Bastar merecer sua lembrança. Aqui, inspirados pelo teste recente do Nexo, listamos 20 desses parágrafos que achamos fodas e te convidamos a acrescentar os seus na nossa caixa de comentários.</Box></Typography>

            </Container>
        </Fragment>
    );
}
export default Sobre;
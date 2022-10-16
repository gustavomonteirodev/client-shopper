import React from "react";
import { CardContainer } from "./ProductCardStyles";
import { Button } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();

  return (

    <CardContainer>
      <p>{props.product.name}</p>
      <h4>R${props.product.price}</h4>
      <Button
        onClick={() => props.addToCart(props.product)}
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      > Adicionar</Button>
    </CardContainer>
  );
}

export default ProductCard;
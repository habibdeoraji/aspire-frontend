import React from 'react'
import { ReactComponent as AspireLogo } from "./../assets/icons/aspire-logo.svg";
import { Typography, Box } from '@mui/material';
import BalanceInfo from '../components/Cards/BalanceInfo';
import CardsTabs from '../components/Cards/CardsTabs';


const Cards = () => {
  return (
    <Box>
      <BalanceInfo />
      <CardsTabs/>
    </Box>
  )
}

export default Cards
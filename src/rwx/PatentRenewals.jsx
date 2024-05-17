import { Box, Button, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import ButtonComponent from '../rwx/assets/ButtonComponent.svg'
import ButtonComponent1 from '../rwx/assets/ButtonComponent(1).svg'
import SwitcherIcons1 from '../rwx/assets/SwitcherIcons1.svg'
import SwitcherIcons2 from '../rwx/assets/SwitcherIcons2.svg'
import SwitcherIcons3 from '../rwx/assets/SwitcherIcons3.svg'
import Vector from '../rwx/assets/Vector.svg'
import FilterCTA from '../rwx/assets/FilterCTA.svg'
import ReactVirtualizedTable from './Table2'


const PatentRenewals = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
 
            <Box  >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', }}>
                <Typography sx={{fontWeight: 'bold', fontSize: '24px'}}>Patent Renewals</Typography>
                <Box sx={{display: 'flex', gap: '2px'}}>
                    <img src={ButtonComponent} alt=''/>
                    <img src={ButtonComponent1} alt=''/>
                </Box>
            </Box>
            <Divider sx={{ borderBottom: 2, borderColor: "divider", marginTop: '10px' }}/>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
            <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#0F625D",
                borderBottom: 2,
              },
              "& .Mui-selected": {
                color: "#0F625D !important",
              },
              "& .MuiTab-textColorInherit": {
                color: "#000",
              },
            }}
          >
            <Tab
              value="one"
              label="Renewal Instruction"
              sx={{ textTransform: "none" }}
            />
            <Tab value="two" label="Renewal History" sx={{ textTransform: "none" }} />
            <Tab
              value="three"
              label="Renewal Receipts"
              sx={{ textTransform: "none" }}
            />
            <Tab
              value="four"
              label="Renewal Documents"
              sx={{ textTransform: "none" }}
            />
            <Tab
              value="five"
              label="Discrepancies"
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </Box>
        <Box sx={{border: '1px solid gray', display: 'flex', gap: '2px'}}>
        <img src={SwitcherIcons1} alt=''/><Typography sx={{color: '#D9D9D9'}}>|</Typography>
         <img src={SwitcherIcons2} alt=''/><Typography sx={{color: '#D9D9D9'}}>|</Typography>
         <img src={SwitcherIcons3} alt=''/>
        </Box>
       </Box>
       <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', marginBottom:"10px"}}>
        <Button sx={{ display: 'flex', gap: '5px', backgroundColor: '#EAFDFC', border: '2px solid #0F625D'}}>
          <img src={Vector} alt=''/>
          <Typography sx={{color: '#0F625D'}}>Filter Options</Typography>
        </Button>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
          <img src={FilterCTA} alt=''/>
          <Button sx={{backgroundColor: '#00A89F', color: '#FFFFFF'}}>ADD NEW IP</Button>
        </Box>
       </Box>
            </Box>
            <ReactVirtualizedTable/>
        
    </>
  )
}

export default PatentRenewals
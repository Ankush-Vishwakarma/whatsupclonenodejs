import React from "react";
import { Box, Typography, styled } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
// import ShortTextRoundedIcon from "@mui/icons-material/ShortTextRounded";
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReactVirtualizedTable from "./Table";

const data = [
  { 
    label: 'Client reference #', 
    value: 'CS20009J' },
  { 
    label: 'Filing date', 
    value: '10 Oct 2010' },
  { label: 'Application Number', value: 'US1988397A' },
  { label: 'Publication Date', value: '10 Oct 2010' },
  { label: 'Publication Number', value: '' },
  { label: 'Grant Date', value: '10 Oct 2011' },
  { label: 'Grant Number', value: '10 Oct 2011' },
  { label: 'IP Type', value: '10 Oct 2011' },
];

const CreateUIewx = () => {




  const Textcontainer = styled(Typography)`
    && {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
  `;
  const StyledTypography = styled(Typography)`
    && {
      // font-family: "Noto Sans";
      font-weight: 500;
      font-size: 16px;
      line-height: 21.79px;
      letter-spacing: 2%;
      color: #777777;
    }
  `;
 
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "482px",
          height  : "674px",

          border: "4px solid #00A89F",
          margin: "10px",
          backgroundColor: "#EAFDFC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "10px",
            gap: "10px",
          }}
        >
          <InfoRoundedIcon
            sx={{
              fontSize: "22px",
              height: "22px",
              color: "#49454F",
              position: "relative",
              top: "1px",
              left: "1px",
            }}
          />
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "21.79px",
              letterSpacing: "2%",
            }}
          >
            INFORMATION
          </Box>
        </Box>


        <Box
          sx={{
            margin: "10px",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000000",
            }}
          >
            Title
          </Typography>
          <Typography
            sx={{
              
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "21.79px",
              // letterSpacing: "2%",
              color: "#777777",
            }}
          >
           Lorem Ipsum Dolor Sit Amet, Consectur...
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "70px",

            margin: "10px",
    
          }}
        >
          <Box>
            <Textcontainer>Patent</Textcontainer>
            <StyledTypography>#13579AB</StyledTypography>
          </Box>
          <Box>
            <Textcontainer>Country</Textcontainer>
            <StyledTypography>US</StyledTypography>
          </Box>
          <Box>
            <Textcontainer>Applicant</Textcontainer>
            <StyledTypography>Steve B, Jane G, Neeta A</StyledTypography>
          </Box>
        </Box>
        <div style={{  }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          margin: "10px",
          padding: "10px",
          height: '200px',
          overflowY: 'auto'
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: "70px",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              margin: "10px",
            }}
          >
            <Typography
              sx={{
                // fontFamily: "Noto Sans",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#000000",
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "19.07px",
                letterSpacing: "2%",
                color: "#777777",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>

        <Box
          sx={{
            display: "flex",
            margin: "10px",
            gap: "10px",
          }}
        >
          <ArticleRoundedIcon
            sx={{
              fontSize: "22px",
              height: "22px",
              color: "#49454F",
              position: "relative",
              top: "1px",
              left: "1px",
            }}
          />
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "21.79px",
              letterSpacing: "2%",
            }}
          >
           RELATED DOCUMENTS
          </Box>
        </Box>



 
 <Box>
    <ReactVirtualizedTable/>
 </Box>

<Box
          sx={{
            display: "flex",
            margin: "10px",
            gap: "10px",
          }}
        >
          <LocalOfferIcon
            sx={{
              fontSize: "22px",
              height: "22px",
              color: "#49454F",
              position: "relative",
              top: "1px",
              left: "1px",
            }}
          />
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "21.79px",
              letterSpacing: "2%",
            }}
          >
      TAGS
          </Box>
         
        </Box>
            <Box           sx={{
            display: "flex",
            margin: "10px",
            gap: "10px",
          }}>
        <Box 
  component="section" 
  sx={{ 
    p: '5px 20px', 
    border: '1px dashed #0F625D',

    height: '32px',
    width: '82px', 
    borderRadius: '4px', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '10px',
    backgroundColor: '#D3ECEA', 
    color: '#0F625D', 
    fontFamily: 'Noto Sans', 
    fontWeight: 600, 
    fontSize: '14px',
    lineHeight: '20px', 
  }}
>
  Tag 1
</Box> <Box 
  component="section" 
  sx={{ 
    p: '5px 20px', 
    border: '1px dashed #0F625D',

    height: '32px',
    width: '82px', 
    borderRadius: '4px', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '10px',
    backgroundColor: '#D3ECEA', 
    color: '#0F625D', 
    fontFamily: 'Noto Sans', 
    fontWeight: 600, 
    fontSize: '14px',
    lineHeight: '20px', 
  }}
>
  Tag 2
</Box>
            </Box>
      </Box>
    </div>
  );
};

export default CreateUIewx;

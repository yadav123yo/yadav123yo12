import React from "react";
import {

  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Card from "./projectCard";


const Projects = () => {
  return (
    <Container maxW={"7xl"} p="12" id="Projects">
     
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={"2"}
      >
        <GridItem>
          <Card
            img={"https://i.postimg.cc/v82gzYm2/Screenshot-2022-10-18-181611.png"}
            tag={["Collaborative" , "E-Service"]}
          
            heading={"Urban Clap"}
            content={
              "This is a clone of Urban Clap Website..."
            }
            features={`Features:
            Sign-in/Sign-up, Reusable Navbar, User authentication, Cart Functionality
            `}
            deploy={"https://celebrated-begonia-b260fc.netlify.app/"}
            git={"https://github.com/Madhusudan0906/descriptive-neck-7504"}
            tsTags={["HTML", "CSS", "JavaScript", "ES-6", "LocalStorage"]}
          />
        </GridItem>
        <GridItem>
          <Card
            img={
              "https://i.postimg.cc/yN3ssjPH/Screenshot-2022-10-18-181525.png"
            }
            tag={["Solo" ]}
            tsTags={[
              "HTML", "CSS", "JavaScript", 
            ]}
            heading={"You-Tube clone"}
            content={
              "A clone of You-Tube.."  
            }
            features={` Features:

            Search bar working perfectly. 
            Youtube API call.
            Embedded iframe for playing video.`}
            
            deploy={"https://youtube-cyan-mu.vercel.app/"}
            git={"https://github.com/yadav123yo/You-tube"}
          />
        </GridItem>

        <GridItem>
          <Card
            img={
              "https://i.postimg.cc/8C508q4s/Screenshot-2022-11-10-091912.png"
            }
            tag={["Collaborative" , "E-Service"]}
            tsTags={[
              "React", "React-Redux", "Node js","Mongo DB", 
            ]}
            heading={"ShopoHolic web.. "}
            content={
              "A Clone of Shephora E-commerce website... "  
            }
            features={` Features:

            Sign-in/Sign-up, Reusable Navbar, User authentication, Cart Functionality
            `}
            
            deploy={"https://cun-week.vercel.app/"}
            git={"https://github.com/yadav123yo/cun_week"}
          />
        </GridItem>

        <GridItem>
          <Card
            img={
              "https://i.postimg.cc/yN3ssjPH/Screenshot-2022-10-18-181525.png"
            }
            tag={["Solo" ]}
            tsTags={[
              "HTML", "CSS", "JavaScript", 
            ]}
            heading={"You-Tube clone"}
            content={
              "A clone of You-Tube.."  
            }
            features={` Features:

            Search bar working perfectly. 
            Youtube API call.
            Embedded iframe for playing video.`}
            
            deploy={"https://youtube-cyan-mu.vercel.app/"}
            git={"https://github.com/yadav123yo/You-tube"}
          />
        </GridItem>
      
      </Grid>
    </Container>
  );
};

export default Projects;

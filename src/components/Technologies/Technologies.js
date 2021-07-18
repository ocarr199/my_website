import React from 'react';
import { DiFirebase, DiNodejs, DiPostgresql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I have experience with working with the full stack in building web applications. This gives me the ability to 
     work with front end, back end and databases.
   </SectionText>
   <List>
     <ListItem>
       
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <DiReact size="3rem"/>
         <ListParagraph>
          Experience with React.js
         </ListParagraph>
         <ListParagraph>
          Experience with jQuery
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       
       <ListContainer>
         <ListTitle>Server</ListTitle>
         <DiNodejs size="3rem"/>
         <ListParagraph>
          Experience with Node.js
         </ListParagraph>
         <ListParagraph>
          Experience with C#
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       
       <ListContainer>
         <ListTitle>Database</ListTitle>
         <DiPostgresql size="3rem"/>
         <ListParagraph>
          Experience with PostgreSQL
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>

 </Section>
);

export default Technologies;

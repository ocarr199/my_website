import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
     Hello, I'm<br/>
      Owen Carruth
     </SectionTitle>
     <SectionText>
       I am a software developer who is super excited about all of the amazing things I can do with technology.
     </SectionText>
     {/* <Button onClick={() => window.location = ""}>Learn More</Button> */}
   </LeftSection>
 </Section>
);

export default Hero;
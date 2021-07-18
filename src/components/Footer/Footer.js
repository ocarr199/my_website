import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:651-447-3399">651-447-3399</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:ocarr199@gmail.com">ocarr199@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;

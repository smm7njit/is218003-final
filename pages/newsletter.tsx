import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { Table } from "@nextui-org/react";
import Link from 'next/link';
import {Textarea} from "@nextui-org/react";
import NewsletterForm from '../components/NewsletterForm'
import backgroundImage from '..public/img9.png'

const Newsletter = () => {
const homeLink = '/index';
  return (
    <Container>
        <Navbar isCompact variant={"static"} css={{"backgroundImage": "url(https://cdn.discordapp.com/attachments/1171889168062894171/1186201476503191642/AdobeStock_127177796_1_1.png?ex=65926336&is=657fee36&hm=ede66971e31eb64f50cd4448c244ca4800a18fa56448a7addd07f0edb2fe2f56&)"}}>
        <Navbar.Brand>
          <Text b color="inherit">
            Velvet.
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Brand> Established in 1970</Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <br>
      </br>
      <br>
      </br>
    <div className={styles.center}>
    <h2>Sign up for newsletters and our rewards program here:</h2>
    <NewsletterForm />
    </div>
    </Container>
  );
};

export default Newsletter;
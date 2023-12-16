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
import CookieConsent from 'react-cookie-consent';
import Header from '../components/Header';





const Home: NextPage = () => {
  <CookieConsent>
      We use cookies to improve your experience. By your continued use of this site you accept such use.
      </CookieConsent>

      <Header />
      
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Our Soda Brand
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar> Established in 1970</Navbar>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/newsletter">More</Navbar.Link>
        </Navbar.Content>
      </Navbar>
} 

export default Home

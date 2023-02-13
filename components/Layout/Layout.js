import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Layout({ children }) {
  
  return (
    <>
      <Header />
       <main>{children}</main>
      <Footer />
    </>
  )
}
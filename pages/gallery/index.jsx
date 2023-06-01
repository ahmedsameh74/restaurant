import Head from 'next/head';
import React from 'react'
import PageHead from '../../components/PageHead/PageHead';

const index = () => {
  return (
    <>
      <Head>
        <title>Chef | Restaurant</title>
        <meta name="description" content="restaurant chef page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={'Gallery'} />
      </div>
    </>
  );
}

export default index
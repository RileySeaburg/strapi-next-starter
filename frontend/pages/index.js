import Container from '@/components/container'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

export default function Index({  preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  )
}


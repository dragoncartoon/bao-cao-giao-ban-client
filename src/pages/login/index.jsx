import Head from 'next/head'
import Loginform from '@/components/loginform'
import Layout from '../../components/layout';

export default function Login() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Trung tâm Cấp cứu 115 TP. HCM | Login</title>
          <meta name='description' content='Login to continue'/>
          <link rel="icon" href="" />
        </Head>
        <Loginform/>
      </div>
    </Layout>
  )
}
import React from 'react'
import Layout from '@/components/Layouts/Layout'
import withAuth from '@/components/Layouts/withAuth'
type Props = {}

const AboutUs = ({}: Props) => {
  return (
    <Layout>
      <div>AboutUs</div>
    </Layout>
  )
}

export default withAuth(AboutUs)

import React from 'react'
import Layout from '@/components/Layouts/Layout'
import withAuth from '@/components/Layouts/withAuth'
type Props = {}

const Report = ({}: Props) => {
  return (
    <Layout>
      <div>Report</div>
    </Layout>
  )
}

export default withAuth(Report)
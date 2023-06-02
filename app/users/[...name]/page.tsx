'use client'
import React from 'react'

interface pageProps {
    params: { name: string },
    searchParams: any
}

const page = ({ params, searchParams } : pageProps) => {
  console.log(params);
  return (
    <div>{params.name}</div>
  )
}

export default page
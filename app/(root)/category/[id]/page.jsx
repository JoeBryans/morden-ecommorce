import React from 'react'

const page = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/category/${id}`)
    const data = await res.json()
    console.log(data)

    return (
        <div>page</div>
    )
}

export default page
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
try {
    const {name} =await params;
    console.log("category id :", name);
    const productByCategory = await prisma.product.findMany({
        where: {
            category:{
                name:{
                    contains:{name,model:""}
                }
            }
        }
    })
    return NextResponse.json(productByCategory);

    
    
} catch (error) {
    console.log(error);
    return NextResponse.json({message: "Internal server error"}, {status: 500} );   
    
}
}
import prisma from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json({ data: users });
}

export async function POST(){
    
}

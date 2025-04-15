import prisma from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json({ data: users });
}

export async function POST(request) {
  const data = await request.json();
  const { email, name, age, country } = data;
  const response = await prisma.user.create({
    data: { email, name, age, country },
  });
  return Response.json({ data: response });
}

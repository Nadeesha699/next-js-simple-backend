import prisma from "@/app/lib/prisma";

export async function PUT(request, { params }) {
  const data = await request.json();
  const id = parseInt(params.id);
  const response = await prisma.user.update({
    where: { id },
    data,
  });

  return Response.json({ data: response });
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  await prisma.user.delete({ where: { id } });
  return Response.json({ message: "delete success" });
}

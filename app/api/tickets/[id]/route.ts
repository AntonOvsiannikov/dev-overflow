import tickets from "@/app/database";
import { NextResponse } from "next/server";

// Get a single ticket by id
interface Params {
  params: Promise<{
    id: string;
  }>;
}
export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));
  return NextResponse.json(ticket);
}

// Update a ticket by id
export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const { name, status, type } = await request.json();

  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  if (name) ticket.name = name;
  if (status) ticket.status = status;
  if (type) ticket.type = type;

  return NextResponse.json(tickets);
}

// Delete a ticket by id
export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params;
  const ticketIndex = tickets.findIndex((ticket) => ticket.id === parseInt(id));

  if (ticketIndex === -1) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  tickets.splice(ticketIndex, 1);
  return NextResponse.json(tickets);
}

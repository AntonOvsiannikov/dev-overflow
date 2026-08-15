import tickets from "@/app/database";
import { NextResponse } from "next/server";

// Get all tickets
export async function GET() {
  return NextResponse.json(tickets);
}

// Create a new ticket
export async function POST(request: Request) {
  const { name, status, type } = await request.json();

  const newTicket = { id: tickets.length + 1, name, status, type };
  tickets.push(newTicket);

  return NextResponse.json(tickets);
}

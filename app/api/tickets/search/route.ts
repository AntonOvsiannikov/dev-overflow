import tickets from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

// Search for tickets by name
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) return NextResponse.json(tickets);

  const filteredTickets = tickets.filter((ticket) => {
    const ticketName = ticket.name.toLowerCase();
    const queryLower = query.toLowerCase();
    return ticketName.includes(queryLower);
  });

  return NextResponse.json(filteredTickets);
}

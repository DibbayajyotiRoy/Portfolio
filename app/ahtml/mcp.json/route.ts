// MCP tool manifest generated from the same snapshots. Claude Desktop, Cursor,
// ChatGPT, and Copilot can load this to read the site as tools.
import { createMcpRoute } from "@ahtmljs/next/mcp";
import { getAllSnapshots } from "@/lib/ahtml";

export const { GET } = createMcpRoute(getAllSnapshots);

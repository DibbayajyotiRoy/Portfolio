// OpenAPI 3.1 spec generated from the same snapshots, for REST clients and
// codegen.
import { createOpenApiRoute } from "@ahtmljs/next/openapi";
import { getAllSnapshots } from "@/lib/ahtml";

export const { GET } = createOpenApiRoute(getAllSnapshots);

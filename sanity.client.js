import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "f4r3itbk", 
  dataset: "produksjon",
  apiVersion: "2023-10-01",
  useCdn: true,
});

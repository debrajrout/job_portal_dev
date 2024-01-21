import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

export const metadata: Metadata = {
  title: "Create a new job",
  description: "Create and post a new job",
};
export default function page() {
  return <NewJobForm />;
}

import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/jobResults";
import { Metadata } from "next";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";
interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function generateTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} Internships`
    : type
      ? `${type} Internships`
      : remote
        ? "Remote Internships"
        : "All Internships";

  const titleSuffix = location ? ` in ${location}` : "";
  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${generateTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Dev Intern`,
  };
}

export default async function Home({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{generateTitle(filterValues)}</H1>

        <p className=" text-muted-foreground">Find your next internship</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  );
}

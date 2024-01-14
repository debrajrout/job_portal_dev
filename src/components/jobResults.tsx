import { jobFilterValues } from "@/lib/validation";
import JobListItem from "./JobListItem";
import prisma from "@/lib/prisma";

interface JobResultProps {
  filterValues: jobFilterValues;
}
export default async function jobResults({
  filterValues: { q, type, location, remote },
}: JobResultProps) {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </div>
  );
}

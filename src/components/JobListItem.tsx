import { Job } from "@prisma/client";
import Image from "next/image";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";

interface JobListItemProps {
  job: Job;
}
export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/40">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={80}
        height={80}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div></div>
      </div>
    </article>
  );
}

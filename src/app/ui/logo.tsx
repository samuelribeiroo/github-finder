import Image from "next/image";
import GitHubLogo from "../../assets/github-logo.svg";
import GitHub from "../../assets/github-heading.svg";

export default function ApplicationLogo() {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-3.5">
        <Image
          src={GitHubLogo}
          alt="GitHub Application Logo"
          width={68}
          height={68}
          fetchPriority="high"
        />
        <h1 className="text-6xl font-semibold">
          Perfil
        </h1>
        <Image
          src={GitHub}
          alt="GitHub Application Heading"
          width={158}
          height={158}
          fetchPriority="high"
        />
      </div>
    </>
  );
}

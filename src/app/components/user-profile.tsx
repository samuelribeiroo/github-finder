import Image from "next/image";
import { GitHubUser } from "../@types/index";

type GitHubProps = {
  user: GitHubUser 
}

export default function UserProfile({ user }: GitHubProps) {
  return (
    <>
      <section className="general-container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative size-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-[#005CFF] md:h-48 md:w-48">
            <Image
              src={user.avatar_url}
              alt={`Foto de perfil do usuário ${user.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 220px, 220px"
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col mt-10 text-center md:text-left gap-4 max-w-2xl">
            <h1 className="text-[#005CFF] text-xl font-bold">{user.name}</h1>

            <p className="text-black font-light text-base leading-relaxed">
            {user.bio}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

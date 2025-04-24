'use client'

import { LoaderIcon } from "lucide-react";
import Button from "../ui/button";
import Input from "../ui/input";
import useGithubSearch from "@/hooks/useGithubSearch";
import UserProfile from "./user-profile";
import NotFound from "./not-found";

export default function SearchForm() {
  const { searchTerm, setsearchTerm, user, isLoading, error } =
    useGithubSearch();

  return (
    <>
      <form
        className="w-full max-w-[503px]"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex overflow-hidden rounded-lg">
          <Input
            type="text"
            value={searchTerm}
            onChange={(event: any) => setsearchTerm(event.target.value)}
          />
          <Button />
        </div>
      </form>

      {
      <section className="">
        <div className="">
          {isLoading && (
            <div className="flex justify-center mt-8">
              <LoaderIcon />
            </div>
          )}

          {error && <NotFound /> }

          {!isLoading && !error && user && <UserProfile user={user} />}

          {!isLoading && !error && !user && searchTerm && (
           <NotFound />
          )}
        </div>
      </section>
      }
    </>
  );
}

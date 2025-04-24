'use client'

import { GitHubUser } from "@/app/@types";
import { useState, useEffect } from "react";

export default function useGithubSearch() {
  const [searchTerm, setsearchTerm] = useState<string>("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getGitHubUser() {
      if (!searchTerm.trim()) {
        setUser(null);
        setError(null);
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(
            searchTerm.trim()
          )}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok)
          throw new Error(`Usuário ${searchTerm} não encontrado.`);

        const data: GitHubUser = await response.json();
        setUser(data);
        setError(null);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao buscar o usuário."
        );
      } finally {
        setIsLoading(false);
      }
    }
    const debounceTimer = setTimeout(getGitHubUser, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  return {
    searchTerm,
    setsearchTerm,
    user,
    error,
    isLoading,
  };
}

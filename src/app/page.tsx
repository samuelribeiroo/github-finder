import SearchForm from "./components/search-form";
import ApplicationLogo from "./ui/logo";

export default function Home() {
  return (
    <>
      <main className="main-container-style">
        <ApplicationLogo />
        <SearchForm />
      </main>
    </>
  );
}

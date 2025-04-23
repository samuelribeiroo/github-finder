import Button from "../ui/button";
import Input from "../ui/input";

export default function SearchForm() {
  return (
    <>
      <form className="w-full max-w-[503px]">
        <div className="flex overflow-hidden rounded-lg">
          <Input />
          <Button />
        </div>
      </form>
    </>
  );
}

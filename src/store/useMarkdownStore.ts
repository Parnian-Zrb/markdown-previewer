import {create} from "zustand";

interface MarkdownStore{
    markdown: string;
    setMarkdown(markdown:string): void;

}
export const useMarkdownStore = create<MarkdownStore>((set:any) => ({
  markdown:"h",
  setMarkdown:(markdown:string )=>
      set({markdown}),
  }));



// const useMarkdownStore = () => {
//   return (
//     <div>useMarkdownStore</div>
//   )
// }

// export default useMarkdownStore
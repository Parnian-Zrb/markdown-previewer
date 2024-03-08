import {create} from "zustand";

interface toggleGuideStore{
    isOpen:boolean,
    setIsOpen:(isOpen:boolean)=>void;
}
export const useToggleGuide = create<toggleGuideStore>(set => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen})
}))
// }
// const useToggleGuideStore = () => {
//   return (
//     <div>useToggleGuideStore</div>
//   )
// }

// export default useToggleGuideStore
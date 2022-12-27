import { useAppSelector } from "../Store/hooks/GlobalHooks";

export const authState = () => {return useAppSelector((state)=>state.reducer.auth)}
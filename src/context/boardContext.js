import { createContext } from "react";

const BoardContext = createContext({ title: "", changeBoardTitle: title => {} });

export default BoardContext;

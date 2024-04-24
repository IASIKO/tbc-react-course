import chain from "./middlewares/chain";
import { Authorization } from "./middlewares/Authorization";
import { Internationalization } from "./middlewares/Internazionalization";


const middlewares = [Authorization, Internationalization];
export default chain(middlewares);

export const config = {
  matcher: ["/((?!_next).*)"],
};

/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Request } from "express";
import { Response } from "express";

interface Icity {
    name : string,
    state: string
}

export const create = async (
    req: Request<{}, {}, Icity>,
    res: Response) => {

    res.send("Ok");
}

export { Icity }

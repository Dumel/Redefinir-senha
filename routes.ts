import { from } from "nodemailer/lib/mime-node/le-windows";
import { Router, Request, Response, request} from 'express'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Hello Melqui'})
})

export default routes
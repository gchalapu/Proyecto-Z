import {Request, Response} from 'express';

class IndexController {
    public index (req:Request,res:Response) {
        res.json ({text: 'API IS /api/clientes'})
        res.json ({text: 'API IS /api/actividades'})
        
    }
}
export const indexController = new IndexController();
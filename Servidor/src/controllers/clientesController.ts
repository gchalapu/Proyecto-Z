import {Request, Response} from 'express';
import pool from '../database';

class ClientesController {
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM tbl_usuarios', function(err, clientes, fields) {
            if (err) throw err;
            res.json(clientes);
        });
    }
    public async obteneruno (req: Request, res: Response): Promise<any> {
        const { id }  = req.params;
        await pool.query('SELECT * FROM tbl_usuarios WHERE id_usu = ?', [id],  function(err, result, fields) {
            console.log(result.length);  
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ text: "Usuario no encontrado " });  

        });
    }

    public async create (req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO tbl_usuarios set ?',[req.body]);
        res.json({message: 'Cliente creado'});


    }

    public update (req:Request, res:Response){
        res.json({text: 'Cliente actualizado '+req.params.id});

    }
    public async delete(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM tbl_usuarios WHERE id_usu = ?', [id]);
        res.json({ message: "Cliente eliminado" });
        
        // res.json({text:'Cliente borrado '+req.params.id});

    }

}
const clientesController = new ClientesController();
export default clientesController;
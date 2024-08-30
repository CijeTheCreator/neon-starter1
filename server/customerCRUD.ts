import { Router, Request, Response } from 'express';


const router = Router();
router.get('/', (req: Request, res: Response) => {
    res.status(201).json();
});

router.post('/', (req: Request, res: Response) => {
    res.status(201).json();
});

router.put('/:id', (req: Request, res: Response) => {

});

router.delete('/:id', (req: Request, res: Response) => {

});


export default router;

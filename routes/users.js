import express from 'express';

import {patchInfo,getInfo,createInfo,postInfo,deleteInfo} from "../controllers/users.js"
const router=express.Router();


router.get('/',getInfo)

router.post('/',postInfo)

router.get('/:id',createInfo)

router.delete('/:id',deleteInfo)

router.patch('/:id',patchInfo)

export default router;
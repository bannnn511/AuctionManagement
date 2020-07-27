import { Router } from 'express';
import { buyersRouter } from './Buyers/buyers.router';
import { authRouter } from './Auth/auth.router';
import { productsRouter } from './Products/product.router';
import { auctionRouter } from './AuctionManagement/auction.router';
import { categoryRouter } from './Categories/category.router';

const apiRouter = Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/buyers', buyersRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/auctions', auctionRouter);
apiRouter.use('/categories', categoryRouter);

export { apiRouter };

declare module 'cors' {
    import { Request, Response, NextFunction } from 'express';
  
    interface CorsOptions {
      origin?: boolean | string | RegExp | (string | RegExp)[];
      methods?: string | string[];
      allowedHeaders?: string | string[];
      exposedHeaders?: string | string[];
      credentials?: boolean;
      maxAge?: number;
      preflightContinue?: boolean;
      optionsSuccessStatus?: number;
    }
  
    type CorsRequestHandler = (
      req: Request,
      res: Response,
      next: NextFunction
    ) => void;
  
    function cors(options?: CorsOptions): CorsRequestHandler;
  
    export = cors;
  }
  
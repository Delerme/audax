import { NextFunction, Request, Response, Router } from 'express'
import * as path from 'path';

export default class BaseRoutes {
  private static options = {
    root: path.resolve(__dirname, '../public')
  }

  public static create(router: Router) {
    router.get('/dist/build.js', BaseRoutes.js);

    router.get('/dist/build.js.map', BaseRoutes.jsMap);

    router.get('/', BaseRoutes.index);

    router.get('/*', BaseRoutes.notFound);
  }

  public static index(req: Request, res: Response, next: NextFunction) {
    res.sendFile('index.html', BaseRoutes.options); 
  }

  public static js(req: Request, res: Response, next: NextFunction) {
    res.sendFile('build.js', BaseRoutes.options);
  }

  public static jsMap(req: Request, res: Response, next: NextFunction) {
    res.sendFile('build.js.map', BaseRoutes.options);
  }

  public static notFound(req: Request, res: Response, next: NextFunction) {
    res.redirect('/');
  }
}
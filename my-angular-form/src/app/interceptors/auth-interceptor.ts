import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  console.log(`Request to: ${req.url}`);
  const authToken = localStorage.getItem('token');
  if (authToken) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(clonedReq);
  }

  return next(req);
};

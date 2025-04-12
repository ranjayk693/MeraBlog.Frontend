import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    if(localStorage.getItem("BLGTKN"))
      return true;

    // else it will redrect to home page
    router.navigate(['']);
    return false;
};

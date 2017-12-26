import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[datevalid]',
  providers: [{provide: NG_VALIDATORS, useExisting: datevalid, multi: true}]
})
export class datevalid implements Validator {

  validate(c: FormControl): ValidationErrors {
    const input = new Date(c.value);
    const curr = new Date();
    const isValid = (input > curr);
    console.log(isValid); 
    const message = {
      'years': {
        'message': 'The year must be a valid number between '
      }
    };
    return isValid ? null : message;
  }
}

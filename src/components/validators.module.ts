import {
  EmptyStringValidatorDirective,
  IsInRangeValidatorDirective,
  IsNumberValidatorDirective,
  MaxValidatorDirective,
  MinValidatorDirective,
  WhiteSpaceValidatorDirective
} from "./universal/universal.directive";
import { NgModule } from "@angular/core";

import { CreditCardValidatorDirective } from "./creditcard/creditcard.directive";
import {
  EmailValidatorDirective,
  EmailSuggestValidatorDirective
} from "./email/email.directive";
import { PasswordValidatorDirective } from "./password/password.directive";
import { EqualToDirective } from "./equal-to/equal-to.directive";

@NgModule({
  declarations: [
    CreditCardValidatorDirective,
    EmailValidatorDirective,
    EmailSuggestValidatorDirective,
    PasswordValidatorDirective,
    IsInRangeValidatorDirective,
    IsNumberValidatorDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    WhiteSpaceValidatorDirective,
    EmptyStringValidatorDirective,
    EqualToDirective
  ],
  exports: [
    CreditCardValidatorDirective,
    EmailValidatorDirective,
    EmailSuggestValidatorDirective,
    PasswordValidatorDirective,
    IsInRangeValidatorDirective,
    IsNumberValidatorDirective,
    MaxValidatorDirective,
    MinValidatorDirective,
    WhiteSpaceValidatorDirective,
    EmptyStringValidatorDirective,
    EqualToDirective
  ]
})
export class ValidatorsModule {}

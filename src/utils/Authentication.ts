import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";

export enum ValidationErrorTypes {
  SHORT,
  CONSECUTIVE,
  SEQUENTIAL,
  WEAK,
  LOWERCASE,
  UPPERCASE,
  NUMBER,
  SYMBOL,
}

export interface ValidationRes {
  valid: boolean;
  error?: {
    type: ValidationErrorTypes;
    message: string;
  };
}

export const PIN_LENGTH = 6;
export const PASSWORD_MIN_LENGTH = 8;

// TODO: Move to utils and make it configurable through constructor config file
export class AuthenticationHelper {
  public static validatePin(input: string): ValidationRes {
    // Check for repeated numbers like '111111'
    if (/^(\d)\1+$/.test(input)) {
      return {
        valid: false,
        error: {
          type: ValidationErrorTypes.SEQUENTIAL,
          message: "PIN cannot be a repeated sequence of the same number"
        }
      };
    }

    // Check for consecutive numbers like '123456' or '654321'
    if ("0123456789012".includes(input) || "0987654321098".includes(input)) {
      return {
        valid: false,
        error: {
          type: ValidationErrorTypes.CONSECUTIVE,
          message: "PIN cannot be a consecutive sequence of numbers"
        }
      };
    }

    // Check for PIN length
    if (input.length < PIN_LENGTH) {
      return {
        valid: false,
        error: {
          type: ValidationErrorTypes.SHORT,
          message: "PIN must be at least 6 digits long"
        }
      };
    }

    return {
      valid: true
    };
  }

  public static validatePassword(input: string): ValidationRes {
    // Check through regex for minimum requirements
    const minLengthRegex = /.{8,}/; // Minimum 8 characters
    const lowercaseRegex = /[a-z]/; // At least one lowercase letter
    const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    const numberRegex = /[0-9]/; // At least one number
    const symbolRegex = /[^a-zA-Z0-9]/; // At least one symbol

    const checks = [
      { regex: minLengthRegex, type: ValidationErrorTypes.SHORT, message: "Password must be at least 8 characters long" },
      { regex: lowercaseRegex, type: ValidationErrorTypes.LOWERCASE, message: "Password must contain at least one lowercase letter" },
      { regex: uppercaseRegex, type: ValidationErrorTypes.UPPERCASE, message: "Password must contain at least one uppercase letter" },
      { regex: numberRegex, type: ValidationErrorTypes.NUMBER, message: "Password must contain at least one number" },
      { regex: symbolRegex, type: ValidationErrorTypes.SYMBOL, message: "Password must contain at least one symbol" }
    ];

    for (const check of checks) {
      if (!check.regex.test(input)) {
        return { valid: false, error: { type: check.type, message: check.message } };
      }
    }

    // Check zxcvbn score
    const myForbiddenWords = [ "blade", "wallet" ];
    const options = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        myForbiddenDictionary: myForbiddenWords
      },
      graphs: zxcvbnCommonPackage.adjacencyGraphs
    };
    zxcvbnOptions.setOptions(options);

    const result = zxcvbn(input);
    // 0: Too guessable: risky password. (less than an hour to crack)
    // 1: Very guessable: protection from throttled online attacks. (less than a day to crack)
    // 2: Somewhat guessable: protection from unthrottled online attacks. (less than a month to crack)
    // 3: Safely unguessable: moderate protection from offline slow-hash scenario. (less than a year to crack)
    // 4: Very unguessable: strong protection from offline slow-hash scenario. (centuries to crack)
    if (result.score < 3) {
      return {
        valid: false,
        error: {
          type: ValidationErrorTypes.WEAK,
          message: "Password strength is too weak"
        }
      };
    }

    return {
      valid: true
    };
  }
}

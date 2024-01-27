import { DataIndex } from "@gb-adviser/common";

export type FormErrorItem =
  | [DataIndex, string, Record<string, unknown>]
  | [DataIndex, string];

export type FormErrorResponse = {
  error: FormErrorItem;
  errors?: Array<FormErrorItem>;
};

export type FormResponse<Response, Error = unknown> =
  | {
      data: Response;
    }
  | {
      error: FormErrorResponse | Error;
    };

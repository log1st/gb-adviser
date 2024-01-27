import {
  FieldValues,
  useForm,
  DefaultValues,
  FormProvider,
  Path,
} from "react-hook-form";
import {
  ChangeEvent,
  createContext,
  FormHTMLAttributes,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { arrayFrom } from "@gb-adviser/common";
import { FormErrorResponse, FormResponse } from "./types";

export type RichFormProps<
  Payload extends FieldValues = FieldValues,
  Response = unknown,
  Error = unknown,
> = PropsWithChildren<
  {
    defaultValues: DefaultValues<Payload>;
    mutate?(
      values: Payload,
    ): Promise<FormResponse<Response, Error> | void> | void;
    onSuccess?(response: Response): void;
    onError?(response: FormErrorResponse): void;
    namespace?: string;
    keyPrefix?: string;
    watchDefaultValues?: boolean;
    submitOnChange?: boolean;
    disabled?: boolean;
  } & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "onError">
>;

const isApiResponseError = (error: unknown): error is FormErrorResponse =>
  typeof error === "object" && error !== null && "error" in error;

const RichFormContext = createContext<{
  namespace?: string;
  keyPrefix?: string;
  disabled?: boolean;
}>({});

export const useRichForm = () => useContext(RichFormContext);

export function RichForm<
  Payload extends FieldValues = FieldValues,
  Response = unknown,
  Error = unknown,
>({
  defaultValues,
  mutate,
  children,
  onSuccess,
  onError,
  namespace,
  keyPrefix,
  watchDefaultValues = false,
  submitOnChange,
  disabled = false,
  ...props
}: RichFormProps<Payload, Response, Error>) {
  const form = useForm<Payload>({
    defaultValues,
  });

  useEffect(() => {
    if (!watchDefaultValues) {
      return;
    }
    form.reset(defaultValues);
  }, [watchDefaultValues, defaultValues, form]);

  const onSubmit = useCallback(
    async (values: Payload) => {
      if (disabled) {
        return;
      }
      if (!mutate) {
        return;
      }
      const response = await mutate(values);

      if (!response) {
        return;
      }

      if ("data" in response) {
        onSuccess?.(response.data);

        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError?.(response.error as any);

      if (!isApiResponseError(response.error)) {
        return;
      }

      response.error.errors?.forEach(([path, type, values]) => {
        form.setError(arrayFrom(path).join(".") as Path<Payload>, {
          message: JSON.stringify([
            `field.${arrayFrom(path).join(".")}.validation.${(values?.message as string)?.includes(" ") ? type : values?.message}`,
            values,
          ]),
        });
      });
    },
    [form, mutate, onError, onSuccess, disabled],
  );

  useEffect(() => {
    if (!submitOnChange) {
      return () => {};
    }
    const subscription = form.watch((e) => {
      return form.handleSubmit(onSubmit)(e as unknown as ChangeEvent);
    });

    return () => subscription.unsubscribe();
  }, [onSubmit, form, submitOnChange]);

  const context = useMemo(
    () => ({ namespace, keyPrefix, disabled }),
    [namespace, keyPrefix, disabled],
  );

  return (
    <FormProvider {...form}>
      <RichFormContext.Provider value={context}>
        <form {...props} onSubmit={form.handleSubmit(onSubmit)}>
          {children}
        </form>
      </RichFormContext.Provider>
    </FormProvider>
  );
}

export type KeyedKey = string | number;

export type Keyed<Entity extends Record<string, unknown>> = Entity & {
  key: KeyedKey;
};

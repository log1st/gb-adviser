export type ArrayFrom<Entity> = Entity | Array<Entity>;

export const arrayFrom = <S>(items: S | Array<S>): Array<S> =>
  Array.isArray(items) ? items : [items];

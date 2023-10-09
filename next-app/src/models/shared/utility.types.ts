export type Mutable<T> = {
    -readonly [k in keyof T]: T[k];
};

export interface Identified<IDType = string> {
    readonly _id: IDType;
}

export type WithID<T, IDType> = T & Identified<IDType>;

export type Nullable<T> = T | null;

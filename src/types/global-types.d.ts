type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Unknown<T> = T | unknown;
type TKeyOf<T> = keyof T;

type TFetchTypes = 'get' | 'post' | 'put' | 'delete';

// type PermissionTypes = keyof typeof import('src/enums').PermissionTypesEnum;

type Event = MouseEvent | TouchEvent;

type Authentication = Nullable<{ token: string; refreshToken: string }>;

interface IKeyValueObject {
  [key: string]: string;
}

// type?: import('src/enums').ModalTypesEnums;

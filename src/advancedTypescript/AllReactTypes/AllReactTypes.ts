import {  } from 'react'

`
export type ReactElement = {
    $$typeof: any,
    type: any,
    key: any,
    ref: any,
    props: any,
    // ReactFiber
    _owner: any,
  
    // __DEV__
    _store: {validated: boolean},
    _self: ReactElement<any>,
    _shadowChildren: any,
    _source: Source,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }; 

interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
  
type ReactChild = ReactElement | ReactText;

type ReactFragment = {} | Iterable<ReactNode>;

interface ReactPortal extends ReactElement {
  key: Key | null;
  children: ReactNode;
}

type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;


///////////////////////////////////////////////////////////////////////////////////////
  import type { ReactNode } from "react";

  const Item = ({ children }: { children: ReactNode }) => <li>{children}</li>;
///////////////////////////////////////////////////////////////////////////////////////

import type { FC } from "react";

const Item: FC = ({ children }) => <li>{children}</li>;

///////////////////////////////////////////////////////////////////////////////////////////
import type { FC } from "react";

const Item: FC<JSX.IntrinsicElements["li"]> = props => <li {...props} />;

///////////////////////////////////////////////////////////////////////////////////////////

import type { VFC } from "react";

const Input: VFC<JSX.IntrinsicElements["input"]> = props => (
    <input {...props} />
);

  `
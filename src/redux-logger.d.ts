declare module 'redux-logger' {
    import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

    export interface LoggerOptions {
        level?: 'log' | 'console' | 'warn' | 'error' | 'info' | 'debug' | 'trace' | ((action: Action, state: any) => string);
        duration?: boolean;
        timestamp?: boolean;
        colors?: ColorsObject | false;
        titleFormatter?: (action: Action, time: string, took: number) => string;
        stateTransformer?: (state: any) => any;
        actionTransformer?: (action: Action) => any;
        errorTransformer?: (error: any) => any;
        predicate?: (getState: () => any, action: Action) => boolean;
        diff?: boolean;
        diffPredicate?: (getState: () => any, action: Action) => boolean;
        collapsed?: boolean | ((getState: () => any, action: Action, logEntry: any) => boolean);
        logErrors?: boolean;
        logger?: any;
    }

    export interface ColorsObject {
        title?: ActionToString | boolean;
        prevState?: ActionToString | boolean;
        action?: ActionToString | boolean;
        nextState?: ActionToString | boolean;
        error?: ActionToString | boolean;
    }

    export interface ActionToString {
        (action: Action): string;
    }

    const createLogger: (options?: LoggerOptions) => Middleware<{}, any, Dispatch<AnyAction>>;

    export default createLogger;
}

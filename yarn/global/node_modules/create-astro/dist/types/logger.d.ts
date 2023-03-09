/// <reference types="node" />
import { Writable } from 'stream';
export declare const defaultLogDestination: Writable;
interface LogWritable<T> extends Writable {
    write: (chunk: T) => boolean;
}
export declare type LoggerLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent';
export declare type LoggerEvent = 'debug' | 'info' | 'warn' | 'error';
export declare let defaultLogLevel: LoggerLevel;
export interface LogOptions {
    dest?: LogWritable<LogMessage>;
    level?: LoggerLevel;
}
export declare const defaultLogOptions: Required<LogOptions>;
export interface LogMessage {
    type: string | null;
    level: LoggerLevel;
    message: string;
    args: Array<any>;
}
export declare const levels: Record<LoggerLevel, number>;
/** Full logging API */
export declare function log(opts: LogOptions | undefined, level: LoggerLevel, type: string | null, ...args: Array<any>): void;
/** Emit a message only shown in debug mode */
export declare function debug(opts: LogOptions, type: string | null, ...messages: Array<any>): void;
/** Emit a general info message (be careful using this too much!) */
export declare function info(opts: LogOptions, type: string | null, ...messages: Array<any>): void;
/** Emit a warning a user should be aware of */
export declare function warn(opts: LogOptions, type: string | null, ...messages: Array<any>): void;
/** Emit a fatal error message the user should address. */
export declare function error(opts: LogOptions, type: string | null, ...messages: Array<any>): void;
export declare const logger: {
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
};
export {};

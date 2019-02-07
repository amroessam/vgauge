import { SFCCompiler, StyleOptions, TemplateOptions, ScriptOptions } from './compiler';
export declare const createCompiler: ({ script, style, template }: {
    script: ScriptOptions;
    style: StyleOptions;
    template: TemplateOptions;
}) => SFCCompiler;
export declare const createDefaultCompiler: (options?: {
    script?: ScriptOptions | undefined;
    style?: StyleOptions | undefined;
    template?: TemplateOptions | undefined;
}) => SFCCompiler;
export * from './compiler';
export * from './assembler';

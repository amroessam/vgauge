import { SFCCompiler, DescriptorCompileResult } from './compiler';
export interface AssembleSource {
    filename: string;
    script?: {
        source: string;
        map?: any;
    };
    template?: {
        source: string;
        functional?: boolean;
    };
    styles: Array<{
        source: string;
        scoped?: boolean;
        media?: string;
        map?: any;
        moduleName?: string;
        module?: any;
    }>;
    scopeId: string;
}
export interface AssembleResults {
    code: string;
    map?: any;
}
export interface AssembleOptions {
    normalizer?: string;
    styleInjector?: string;
    styleInjectorSSR?: string;
}
export declare function assemble(compiler: SFCCompiler, filename: string, result: DescriptorCompileResult, options?: AssembleOptions): AssembleResults;
export declare function assembleFromSource(compiler: SFCCompiler, options: AssembleOptions, {filename, script, template, styles, scopeId}: AssembleSource): AssembleResults;

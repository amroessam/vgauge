export interface CompiledTemplate {
    render: Function;
    staticRenderFns: Function[];
}
export default function normalizeComponent(template: CompiledTemplate | undefined, style: ((context: any) => void) | undefined, script: any, scopeId: string | undefined, isFunctionalTemplate: boolean, moduleIdentifier: string | undefined, shadowMode: boolean, createInjector: any, createInjectorSSR: any, createInjectorShadow: any): any;

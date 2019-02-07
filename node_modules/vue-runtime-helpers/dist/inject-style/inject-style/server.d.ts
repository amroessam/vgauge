export interface StyleSource {
    source: string;
    media?: string;
    moduleName?: string;
    module?: {
        [key: string]: string;
    };
    map?: any;
}
export default function createInjectorSSR(context: any): (id: string, style: StyleSource) => void;

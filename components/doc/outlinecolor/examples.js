import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="m-3 flex gap-5">
    <button class="outline-4 outline outline-offset-4 outline-primary-500 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-1</button>
    <button class="outline-4 outline outline-offset-4 outline-blue-500 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-2</button>
    <button class="outline-4 outline outline-offset-4 outline-pink-300/40 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-3</button>
    <button class="outline-4 outline outline-offset-4 outline-white-alpha-40 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-4</button>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="m-3 flex gap-5">
                    <button className="outline-4 outline outline-offset-4 outline-primary-500 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-1</button>
                    <button className="outline-4 outline outline-offset-4 outline-blue-500 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-2</button>
                    <button className="outline-4 outline outline-offset-4 outline-pink-300/40 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-3</button>
                    <button className="outline-4 outline outline-offset-4 outline-white-alpha-40 h-2rem font-bold bg-primary-500 text-gray-900 border-none border-round">outline-4</button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
